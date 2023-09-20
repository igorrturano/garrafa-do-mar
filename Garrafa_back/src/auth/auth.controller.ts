import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { getNomoHeaderData } from 'nomo-auth';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Request() req) {
    const nomoUserData = getNomoHeaderData(req)
    const isNomoUser = await this.authService.login(nomoUserData);
    return { isNomoUser };
  }
}
