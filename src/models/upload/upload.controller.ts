import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        // validators: [
        //   new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 }), // Max 10MB
        //   new FileTypeValidator({ fileType: 'image/jpeg' }), // Accept only image
        // ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.uploadService.upload({
      fileName: file.originalname,
      file: file.buffer,
    });
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    const formattedFiles = files.map((file) => ({
      fileName: file.originalname,
      file: file.buffer,
    }));

    return this.uploadService.uploadMultiple(formattedFiles);
  }
}
