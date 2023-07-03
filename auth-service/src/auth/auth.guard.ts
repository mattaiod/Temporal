import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import {ConfigService} from "@nestjs/config";
import {AccessTokenDto} from "../access-tokens/access-token.dto";

@Injectable()
export class AuthGuard {
    constructor(private jwtService: JwtService, private readonly configService: ConfigService) {
    }

    async verifyToken(accessToken: string) {
        await this.jwtService.verifyAsync(
            accessToken,
            {
                secret: this.configService.get<string>('ACCESS_TOKEN_AUTH_SERVICE_SECRET')
            }
        );
    }
}