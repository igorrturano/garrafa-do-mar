import { Controller,  Post, Body, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { getNomoHeaderData } from 'nomo-auth';
import { NomoUserAuthInterface } from 'src/models/NomoUserAuthInterface';
import { UserBadgeService } from './badge.service';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserBadgeController {
  constructor(private readonly angelBadgeService: UserBadgeService) {}

  @Post('create-user-badge')
  createAngelBadge(@Body() createUserDto: any, @Headers() headers: any) {
    const nomoUserData: NomoUserAuthInterface = getNomoHeaderData(headers)

    return this.angelBadgeService.mintAngelBadgeNFT(nomoUserData.nomo_auth_addr);
  }
}
