import {
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { AuthGuard } from '@models/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: '.(png|jpeg|jpg)',
        })
        .addMaxSizeValidator({
          maxSize: 1024 * 1024 * 10,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
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
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: '.(png|jpeg|jpg)',
        })
        .addMaxSizeValidator({
          maxSize: 1024 * 1024 * 10,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
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
