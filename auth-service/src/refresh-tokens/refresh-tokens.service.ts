import { Injectable } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
import {CreateRefreshTokenDto, UpdateRefreshTokenDto} from "./refresh-tokens.dto";
import {JwtService} from "@nestjs/jwt";
@Injectable()
export class RefreshTokensService {
    constructor(
        private readonly prisma: PrismaClient,
        private readonly jwtService: JwtService) {
    }
    async createRefreshToken(dto: CreateRefreshTokenDto) {
        const refreshTokenJWT = this.jwtService.sign(
            {userId: dto.userId},
            {secret: process.env.REFRESH_TOKEN_AUTH_SERVICE_SECRET,
                expiresIn: process.env.REFRESH_TOKEN_AUTH_SERVICE_EXPIRES_IN});
        const refreshToken = await this.prisma.refreshToken.create({
               data: {
                   refreshToken: refreshTokenJWT,
                   ...dto
               }
        });
        console.log("in RefreshTokensService: ", refreshTokenJWT);
        return refreshTokenJWT;
    }
    async updateRefreshToken(dto: UpdateRefreshTokenDto) {
        return this.prisma.refreshToken.update({
            where: {
                refreshToken: dto.refreshToken
            },
            data: {
                ...dto,
                createdAt: new Date()
            }
        });
    }
}
