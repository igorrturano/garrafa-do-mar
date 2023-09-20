import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { getNomoHeaderData } from 'nomo-auth';
import { UserService } from 'src/user/user.service';

@Controller('courses')
@ApiTags('courses')
@ApiBearerAuth()
export class CoursesController {
  constructor(private readonly userService: UserService) {}

  @Get('course')
  findAllAngels(@Request() request: any) {
    const nomoUserData = getNomoHeaderData(request)
    console.log(nomoUserData);

    return { 
       nomoHeaders: nomoUserData,
       users: this.userService.findAllAngels()
    }
  }
}
