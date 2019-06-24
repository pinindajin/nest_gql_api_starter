import { Injectable } from '@nestjs/common';
import { Prisma } from './generated/prisma.binding';

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
