import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateMemberInput, UpdateMemberInput } from 'src/graphql';
import { MemberService } from './member.service';

@Resolver('Member')
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation('createMember')
  create(@Args('createMemberInput') createMemberInput: CreateMemberInput) {
    return this.memberService.create(createMemberInput);
  }

  @Query('members')
  findAll() {
    return this.memberService.findAll();
  }

  @Query('member')
  findOne(@Args('id') id: number) {
    return this.memberService.findOne(id);
  }

  @Mutation('updateMember')
  update(@Args('updateMemberInput') updateMemberInput: UpdateMemberInput) {
    return this.memberService.update(updateMemberInput);
  }

  @Mutation('removeMember')
  remove(@Args('id') id: number) {
    return this.memberService.remove(id);
  }
}
