import {ApiProperty} from "@nestjs/swagger"
import {MinLength, MaxLength, Matches} from 'class-validator'
export class AuthDto {
    @ApiProperty()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    
    @ApiProperty()
    @MinLength(4)
    @MaxLength(20)    
    password: string;

}