import { Member } from './member.model';

describe('Member', () => {
  it('should be defined', () => {
    expect(new Member()).toBeDefined();
  });
});
