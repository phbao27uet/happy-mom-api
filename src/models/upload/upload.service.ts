import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UploadDto } from './dto';

@Injectable()
export class UploadService {
  private readonly s3Client = new S3Client({
    endpoint: `https://${this.configService.getOrThrow('R2_CLIENT_ID')}.r2.cloudflarestorage.com`,
    region: this.configService.getOrThrow('R2_REGION'),
    credentials: {
      accessKeyId: this.configService.getOrThrow('R2_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.getOrThrow('R2_SECRET_ACCESS_KEY'),
    },
  });

  private readonly bucketName =
    this.configService.getOrThrow<string>('R2_BUCKET_NAME');

  constructor(private readonly configService: ConfigService) {}

  async upload(uploadDto: UploadDto) {
    try {
      const randomName = Math.random().toString(36).substring(7);

      const key = `${randomName}-${uploadDto.fileName}`;
      const body = uploadDto.file;

      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: this.bucketName,
          Key: key,
          Body: body,
        }),
      );

      return this.getUrl(key);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async uploadMultiple(files: UploadDto[]) {
    try {
      const res = await Promise.all(files.map((file) => this.upload(file)));
      return res;
    } catch (error) {
      console.error('Error uploading files:', error);
      throw new BadRequestException(error);
    }
  }

  async getUrl(key: string) {
    const r2PublicUrl = this.configService.get('R2_PUBLIC_URL');

    return `${r2PublicUrl}/${key}`;
  }

  async deleteObject(key: string) {
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      }),
    );
  }

  async deleteObjects(keys: string[]) {
    try {
      await Promise.all(
        keys.map((key) =>
          this.s3Client.send(
            new PutObjectCommand({
              Bucket: this.bucketName,
              Key: key,
            }),
          ),
        ),
      );
    } catch (error) {
      console.error('Error deleting objects:', error);
      throw new BadRequestException(error);
    }
  }

  async getObject(key: string) {
    const bucketName = this.configService.getOrThrow<string>('R2_BUCKET_NAME');
    const res = await this.s3Client.send(
      new HeadObjectCommand({
        Bucket: bucketName,
        Key: key,
      }),
    );

    return res;
  }
}
