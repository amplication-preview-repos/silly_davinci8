/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Follow } from "./Follow";
import { FollowCountArgs } from "./FollowCountArgs";
import { FollowFindManyArgs } from "./FollowFindManyArgs";
import { FollowFindUniqueArgs } from "./FollowFindUniqueArgs";
import { CreateFollowArgs } from "./CreateFollowArgs";
import { UpdateFollowArgs } from "./UpdateFollowArgs";
import { DeleteFollowArgs } from "./DeleteFollowArgs";
import { FollowService } from "../follow.service";
@graphql.Resolver(() => Follow)
export class FollowResolverBase {
  constructor(protected readonly service: FollowService) {}

  async _followsMeta(
    @graphql.Args() args: FollowCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Follow])
  async follows(@graphql.Args() args: FollowFindManyArgs): Promise<Follow[]> {
    return this.service.follows(args);
  }

  @graphql.Query(() => Follow, { nullable: true })
  async follow(
    @graphql.Args() args: FollowFindUniqueArgs
  ): Promise<Follow | null> {
    const result = await this.service.follow(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Follow)
  async createFollow(@graphql.Args() args: CreateFollowArgs): Promise<Follow> {
    return await this.service.createFollow({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Follow)
  async updateFollow(
    @graphql.Args() args: UpdateFollowArgs
  ): Promise<Follow | null> {
    try {
      return await this.service.updateFollow({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Follow)
  async deleteFollow(
    @graphql.Args() args: DeleteFollowArgs
  ): Promise<Follow | null> {
    try {
      return await this.service.deleteFollow(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
