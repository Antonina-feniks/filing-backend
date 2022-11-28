import { UserEntity } from '../../src/auth/user.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new UserEntity()).toBeDefined();
  });
});
