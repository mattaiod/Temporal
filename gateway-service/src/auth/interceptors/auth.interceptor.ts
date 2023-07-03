import {
  CallHandler,
  ExecutionContext,
  Global,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { AccessTokenResponse } from "../auth.proto.typs";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  private authResponseStatus: any;
  private userUuid: any;
  constructor(private readonly authService: AuthService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const token: string = context.switchToHttp().getRequest().headers[
      "authorization"
    ];

    const clientIp = context.switchToHttp().getRequest().ip;

    const response = this.authService.verifyAccessToken({
      accessToken: token.split(" ")[1],
      clientIp: clientIp,
    });

    response.subscribe((authResponse: AccessTokenResponse) => {
      this.authResponseStatus = authResponse.status;
      this.userUuid = authResponse.userUuid;
    });

    context.switchToHttp().getRequest().body.authResponse = {
      status: this.authResponseStatus,
      userUuid: this.userUuid,
    };

    return next.handle();
  }
}
