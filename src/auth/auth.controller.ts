import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { SigninEvent } from './signin.event';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @EventPattern('signin_request')
    handleUserCreated(data: SigninEvent){
        this.authService.handleSignin(data);
    }
}
