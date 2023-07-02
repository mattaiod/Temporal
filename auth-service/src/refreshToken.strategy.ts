import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UserJwtPayload} from "./app.proto.types";
import {UsersService} from "./users/users.service";
@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super(
            {
                secretOrKey: 'ACCESS_TOKEN_AUTH_SERVICE_SECRET',
                jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
                passReqToCallback: true,
            }
        );
    }
    validate(payload: UserJwtPayload, reqIp: UserJwtPayload["deviceIp"]) {
        const user = this.usersService.findUserById({id: payload.userId});
        user.subscribe((user) => {
            if (payload.deviceIp !== reqIp) {
                throw new UnauthorizedException('Invalid token');
            }
            if (payload.blacklisted) {
                throw new UnauthorizedException('Invalid token');
            }
            if (!user) {
                throw new UnauthorizedException('Invalid token');
            }
            return {
                userId: payload.userId,
                deviceIp: payload.deviceIp,
                ...user
            };
        });
    }
}