import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateAngelUserDto, UpdateBeneficiaryUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}
  createBeneficiary(data: Prisma.BeneficiarioCreateInput) {
    return this.prismaService.beneficiario.create({data});
  }

    createAngel(data: Prisma.DoadorCreateInput) {
    return this.prismaService.doador.create({data});
  }

  findAllAngels() {
    return this.prismaService.doador.findMany();
  }

  findAllBeneficiaries() {
    return this.prismaService.beneficiario.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  updateAngel(id: number, updateUserDto: UpdateAngelUserDto) {
    return `This action updates a #${id} user`;
  }

  updateBeneficiary(id: number, updateUserDto: UpdateBeneficiaryUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
