import { ApiProperty } from "@nestjs/swagger"

export class CreateBeneficiaryUserDTO { 
  @ApiProperty()
  name: string
 
  @ApiProperty()
  age: number
  
  @ApiProperty()
  gender: string
  
  @ApiProperty()
  uf: string
  
  @ApiProperty()
  email: string
  
  @ApiProperty()
  whoareyou: string
  
  @ApiProperty()
  tags: string[]

  @ApiProperty()
  nomo_id: string
}


export class CreateAngelUserDTO {
  @ApiProperty()
  email: string

  @ApiProperty()
  whoareyou: string

  @ApiProperty()
  tags: string[]

  @ApiProperty()
  anonymous: boolean
}
