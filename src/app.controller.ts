import { Controller, Get, OnApplicationShutdown } from '@nestjs/common';
import {Logger} from '@nestjs/common';

@Controller()
export class AppController implements OnApplicationShutdown {

  private isLoading: Promise<any>;

  onApplicationShutdown(signal?: string): any {
    Logger.debug(`Started at ${new Date()}`, 'OnApplicationShutdown');
    if (this.isLoading) {
      return this.isLoading.then(() => {
        Logger.debug(`Completed at ${new Date()}`, 'OnApplicationShutdown');
      });
    } else {
      Logger.debug(`Completed at ${new Date()}`, 'OnApplicationShutdown');
    }

  }

  @Get()
  async getHello() {
    this.isLoading = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 10 * 1000);
    });
    await this.isLoading;
    return 'Hello world';
  }
}
