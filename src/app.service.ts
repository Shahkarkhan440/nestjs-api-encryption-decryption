import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async decryptPayloadBody(payload): Promise<any>{
    //simply return the decrypted payload. decryption done at interceptor level
    return payload
  }

  async decryptGetRequest(params): Promise<any>{
     //simply return the decrypted params. decryption done at interceptor level
     return params
  }
    

}
