import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";
import {
  AccessTokenResponse,
} from "../auth.proto.typs";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  @Inject(AuthService) private readonly authService: AuthService;
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"];
    const clientIp = req.ip;

    if (token !== undefined) {
      const response: Observable<AccessTokenResponse> =
        this.authService.verifyAccessToken({
          accessToken: token.split(" ")[1],
          clientIp: clientIp,
        });

      response.subscribe((authResponse: AccessTokenResponse) => {
        req.body.status = authResponse.status;
        req.body.userUuid = authResponse.userUuid;

        next();
      });
    }
  }
}
