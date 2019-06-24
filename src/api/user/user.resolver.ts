import { Resolver, Args, Info, Query } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';

import { User } from '../../graphql.schema';

@Resolver()
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('users')
  async getUsers(@Args() args, @Info() info): Promise<User> {
    return this.prisma.query.users(args, info);
  }
}
