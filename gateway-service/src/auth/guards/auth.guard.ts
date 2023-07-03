import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AccessTokenResponseStatus } from "../auth.proto.typs";

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    switch (request.body.status) {
      case AccessTokenResponseStatus.OK:
        return true;

      default:
        return false;
    }
  }
}
