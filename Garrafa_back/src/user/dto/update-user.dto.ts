import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAngelUserDTO, CreateBeneficiaryUserDTO } from './create-user.dto';

export class UpdateAngelUserDto extends PartialType(CreateAngelUserDTO) {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string
}

export class UpdateBeneficiaryUserDto extends PartialType(CreateBeneficiaryUserDTO) {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string
}
