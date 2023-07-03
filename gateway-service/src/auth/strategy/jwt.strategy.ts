import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";

@Injectable()
export class JwtTestStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt"),
      ignoreExpiration: false,
      secretOrKey: "ACCESS_TOKEN_AUTH_SERVICE_SECRET",
    });
  }

  async validate(payload: any) {
    console.log(this.jwtFromRequest);
    return payload;
  }
}
