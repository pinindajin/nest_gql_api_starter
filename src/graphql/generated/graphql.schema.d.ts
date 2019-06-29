
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum GameOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    isAdmin_ASC = "isAdmin_ASC",
    isAdmin_DESC = "isAdmin_DESC"
}

export class GameCreateInput {
    id?: string;
    name: string;
    description: string;
}

export class GameSubscriptionWhereInput {
    AND?: GameSubscriptionWhereInput[];
    OR?: GameSubscriptionWhereInput[];
    NOT?: GameSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: GameWhereInput;
}

export class GameUpdateInput {
    name?: string;
    description?: string;
}

export class GameUpdateManyMutationInput {
    name?: string;
    description?: string;
}

export class GameWhereInput {
    AND?: GameWhereInput[];
    OR?: GameWhereInput[];
    NOT?: GameWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
}

export class GameWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    id?: string;
    name: string;
    isAdmin: boolean;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    name?: string;
    isAdmin?: boolean;
}

export class UserUpdateManyMutationInput {
    name?: string;
    isAdmin?: boolean;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    isAdmin?: boolean;
    isAdmin_not?: boolean;
}

export class UserWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateGame {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Game implements Node {
    id: string;
    name: string;
    description: string;
}

export class GameConnection {
    pageInfo: PageInfo;
    edges: GameEdge[];
    aggregate: AggregateGame;
}

export class GameEdge {
    node: Game;
    cursor: string;
}

export class GamePreviousValues {
    id: string;
    name: string;
    description: string;
}

export class GameSubscriptionPayload {
    mutation: MutationType;
    node?: Game;
    updatedFields?: string[];
    previousValues?: GamePreviousValues;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract createGame(data: GameCreateInput): Game | Promise<Game>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract updateGame(data: GameUpdateInput, where: GameWhereUniqueInput): Game | Promise<Game>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteGame(where: GameWhereUniqueInput): Game | Promise<Game>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract upsertGame(where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput): Game | Promise<Game>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyGames(data: GameUpdateManyMutationInput, where?: GameWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyGames(where?: GameWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract games(where?: GameWhereInput, orderBy?: GameOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Game[] | Promise<Game[]>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract game(where: GameWhereUniqueInput): Game | Promise<Game>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract gamesConnection(where?: GameWhereInput, orderBy?: GameOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): GameConnection | Promise<GameConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
    abstract game(where?: GameSubscriptionWhereInput): GameSubscriptionPayload | Promise<GameSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
    isAdmin: boolean;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    name: string;
    isAdmin: boolean;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type Long = any;
