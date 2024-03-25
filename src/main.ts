import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestInterceptor } from './core/interceptors/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.useGlobalInterceptors(new RequestInterceptor()) //register request interceptor globally
  await app.listen(3000);

}
bootstrap();