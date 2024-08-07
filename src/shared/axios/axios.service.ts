import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosService extends HttpService {
  static retryData: Record<string, number> = {};

  constructor() {
    const axiosInstance = axios.create();
    super(axiosInstance);
  }

  onModuleInit() {
    this.axiosRef.interceptors.response.use(
      (value) => {
        if (value.config.url) delete AxiosService.retryData[value.config.url];
        return value;
      },
      async (error) => {
        console.log('AxiosService ~ error:', error.response?.data);
        if (AxiosService.retryData[error.config.url] === undefined) {
          AxiosService.retryData[error.config.url] = 1;
        } else {
          const newRetryCount = ++AxiosService.retryData[error.config.url];
          if (newRetryCount > 0) {
            delete AxiosService.retryData[error.config.url];
            throw error;
          }
        }

        await new Promise((resolve) => setTimeout(resolve, 2000));
        return this.axiosRef.request(error.config);
      },
    );
  }
}
