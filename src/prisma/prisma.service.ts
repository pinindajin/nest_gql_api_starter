import { Prisma } from './prisma.binding';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      // TODO: Env variable endpoint.
      endpoint: 'http://localhost/4466',
      debug: false,
    });
  }
}
