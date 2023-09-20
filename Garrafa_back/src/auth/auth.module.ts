import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';

@Module({
  controllers: [AuthController],
  providers: [JwtService, PrismaService, AuthService],
})
export class AuthModule {}
