import { Injectable } from '@nestjs/common';
import { NomoUserAuthInterface } from 'src/models/NomoUserAuthInterface';

@Injectable()
export class AuthService {
  async login(nomoUser: NomoUserAuthInterface): Promise<any> {
    const user = await this.validateUser(nomoUser);
    return user.success;
  }

  // Your validation logic goes here
  async validateUser(nomoUser: NomoUserAuthInterface): Promise<{success: boolean}> {
    if (nomoUser.nomo_auth_addr)
    {
        return { success: true }
    }

    return {success: false}
  }
}
