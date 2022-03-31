import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  getHello() {
    return { message: 'Halo Dunia!' };
  }
}
