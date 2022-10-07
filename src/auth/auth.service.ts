import { Injectable } from '@nestjs/common';
import { SigninEvent } from './signin.event';

@Injectable()
export class AuthService {

    handleSignin(data: SigninEvent){
        console.log('AUTENTICA');
        console.log(data);
    }
}
