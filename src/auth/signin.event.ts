import { AuthDto } from "./dto/auth.dto";

export class SigninEvent{
    constructor(public readonly auth: AuthDto){}
}