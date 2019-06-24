import { Resolver, Args, Info, Query, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../../prisma/generated/prisma.binding';
import { BatchPayload } from '../../graphql/generated/graphql.schema';

@Resolver()
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('users')
  async getUsers(@Args() args, @Info() info): Promise<User> {
    return this.prisma.query.users(args, info);
  }

  @Query('user')
  async getUser(@Args() args, @Info() info): Promise<User> {
    return this.prisma.query.user(args, info);
  }

  @Mutation('createUser')
  async createUser(@Args() args, @Info() info): Promise<User> {
    return this.prisma.mutation.createUser(args, info);
  }

  @Mutation('updateUser')
  async updateUser(@Args() args, @Info() info): Promise<User> {
    return this.prisma.mutation.updateUser(args, info);
  }

  @Mutation('updateManyUsers')
  async updateManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return this.prisma.mutation.updateManyUsers(args, info);
  }

  @Mutation('deleteUser')
  async deleteUser(@Args() args, @Info() info): Promise<User> {
    return this.prisma.mutation.deleteUser(args, info);
  }

  @Mutation('deleteManyUsers')
  async deleteManyUsers(@Args() args, @Info() info): Promise<BatchPayload> {
    return this.prisma.mutation.deleteManyUsers(args, info);
  }

  @Subscription('user')
  onUserMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.user(args, info);
  }
}
