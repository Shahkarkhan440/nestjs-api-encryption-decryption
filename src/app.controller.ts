import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiDto, QueryParamsDto } from './core/dtos/ApiDto';
import { SkipInterceptor } from './core/interceptors/request.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/decrypt-post-request')
  // @SkipInterceptor() //if you want to skip decryption for an api which send normal data without encryption then use this decorator
  decryptPostRequest(
    @Body() payload: ApiDto
  ): Promise<any> {
    try {
      return this.appService.decryptPayloadBody(payload)
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  @Get('/decrypt-get-request')
  // @SkipInterceptor() //if you want to skip decryption for an api which send normal data without encryption then use this decorator
  decryptGetRequest(
    @Query() params: QueryParamsDto
  ): Promise<any> {
    try {
      return this.appService.decryptGetRequest(params)
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}