import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAngelUserDTO, CreateBeneficiaryUserDTO } from './dto/create-user.dto';
import { UpdateAngelUserDto, UpdateBeneficiaryUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { getNomoHeaderData } from 'nomo-auth';
import { CreateAngelUserInterface, CreateBeneficiaryUserInterface } from 'src/models/User';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-beneficiary')
  createBeneficiary(@Body() createUserDto: CreateBeneficiaryUserDTO, @Headers() headers: any) {
    const nomoUserData = getNomoHeaderData(headers)
    const {
        age,
        email,
        gender,
        name,
        tags,
        uf,
        whoareyou,
} = createUserDto
 
    const user: CreateBeneficiaryUserInterface = {
        id: null,
        age,
        email,
        gender,
        name,
        tags,
        uf,
        whoareyou,
        nomo_id: nomoUserData.nomo_auth_addr
    }
    return this.userService.createBeneficiary(user);
  }

  @Post('create-angel')
  createAngel(@Body() createAngelUserDto: CreateAngelUserDTO, @Headers() headers: any) {
    const nomoUserData = getNomoHeaderData(headers)
    const { anonymous, email, tags, whoareyou } = createAngelUserDto
 
    const user: CreateAngelUserInterface = {
        anonymous,
        email,
        id: null,
        nomo_id: nomoUserData.nomo_auth_addr,
        tags,
        whoareyou
    }

    return this.userService.createAngel(user);
  }

  @Get('angels')
  findAllAngels(@Request() request: any) {
    const nomoUserData = getNomoHeaderData(request)
    console.log(nomoUserData);

    return { 
       nomoHeaders: nomoUserData,
       users: this.userService.findAllAngels()
    }
  }

  @Get('beneficiaries')  
  findAllBeneficiaries(@Request() request: any) {
    const nomoUserData = getNomoHeaderData(request)

    return { 
       nomoHeaders: nomoUserData,
       users: this.userService.findAllBeneficiaries()
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  updateAngel(@Param('id') id: string, @Body() updateUserDto: UpdateAngelUserDto) {
    return this.userService.updateAngel(+id, updateUserDto);
  }

  @Patch(':id')
  updateBeneficiary(@Param('id') id: string, @Body() updateUserDto: UpdateBeneficiaryUserDto) {
    return this.userService.updateBeneficiary(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
