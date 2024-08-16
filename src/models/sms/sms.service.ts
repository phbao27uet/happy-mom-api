import { Injectable } from '@nestjs/common';
import { SendSmsDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SmsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async sendSms({ content, to }: SendSmsDto) {
    try {
      const token = this.configService.get<string>('SPEEDSMS_ACCESS_TOKEN');
      const sender = this.configService.get<string>('SPEEDSMS_SENDER');

      const url = `https://api.speedsms.vn/index.php/sms/send?access-token=${token}`;
      const res = await this.httpService.axiosRef.post(url, {
        content,
        to,
        type: 5,
        sender,
      });

      console.log('sendSms', res.data);
    } catch (e) {
      console.log('sendMessage Error', e);
    }
  }
}
