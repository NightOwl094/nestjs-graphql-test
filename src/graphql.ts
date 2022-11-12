
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateMemberInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
}

export class UpdateMemberInput {
    id: number;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
}

export class Member {
    id?: Nullable<number>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
}

export abstract class IQuery {
    abstract members(): Nullable<Nullable<Member>[]> | Promise<Nullable<Nullable<Member>[]>>;

    abstract member(id: number): Nullable<Member> | Promise<Nullable<Member>>;
}

export abstract class IMutation {
    abstract createMember(createMemberInput: CreateMemberInput): Member | Promise<Member>;

    abstract updateMember(updateMemberInput: UpdateMemberInput): Member | Promise<Member>;

    abstract removeMember(id: number): Nullable<Member> | Promise<Nullable<Member>>;
}

type Nullable<T> = T | null;
