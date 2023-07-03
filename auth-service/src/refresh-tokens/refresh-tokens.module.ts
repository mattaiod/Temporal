import { Module } from '@nestjs/common';
import { RefreshTokensService } from './refresh-tokens.service';
import {PrismaClient} from "@prisma/client";
import {JwtService} from "@nestjs/jwt";
@Module({

  providers: [RefreshTokensService, PrismaClient, JwtService],
  exports: [RefreshTokensService]
})
export class RefreshTokensModule {}
