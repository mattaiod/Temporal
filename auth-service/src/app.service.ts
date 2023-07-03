import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import * as process from "process";
import {AccessTokenDto, TokenStatus} from "./access-tokens/access-token.dto";

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService, private readonly configService: ConfigService) {
  }

  async verifyToken(accessToken: AccessTokenDto) {
      try {
        const response = await this.jwtService.verifyAsync(
            accessToken.accessToken,
            {
                secret: this.configService.get('ACCESS_TOKEN_AUTH_SERVICE_SECRET'),
            }
        );

        if (accessToken.clientIp !== response.deviceIp) {
            return {status: TokenStatus.INTERNAL, userUuid: response.userId};
        }

        return {status: TokenStatus.OK, userUuid: response.userId};

      } catch (e) {
        return { status: TokenStatus.EXPIRED, userUuid: undefined };
      }
  }
}
