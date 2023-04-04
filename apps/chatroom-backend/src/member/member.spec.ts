import { MemberModel } from './member.model';

describe('Member', () => {
  it('should be defined', () => {
    expect(new MemberModel()).toBeDefined();
  });
});
