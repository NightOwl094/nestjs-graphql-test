import { Injectable } from '@nestjs/common';
import { CreateMemberInput, Member, UpdateMemberInput } from 'src/graphql';

@Injectable()
export class MemberService {
  create(createMemberInput: CreateMemberInput): Member {
    console.log(createMemberInput);

    return {
      id: 1,
      email: createMemberInput.email,
      password: createMemberInput.password,
      name: createMemberInput.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    };
  }

  findAll(): Member[] {
    console.log('findAll');

    return [
      {
        id: 1,
        email: '1',
        password: '1',
        name: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        email: '2',
        password: '2',
        name: '2',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  findOne(id: number): Member {
    console.log('findOne');

    return {
      id: id,
      email: '1',
      password: '1',
      name: '1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  update(updateMemberInput: UpdateMemberInput): Member {
    console.log(updateMemberInput);

    return {
      id: updateMemberInput.id,
      email: updateMemberInput.email,
      password: updateMemberInput.password,
      name: updateMemberInput.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    };
  }

  remove(id: number): Member {
    console.log(id);

    return {
      id: id,
      email: '',
      password: '',
      name: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: new Date().toISOString(),
    };
  }
}
