import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SigninDTO{
    @ApiProperty({ type: 'string' })
    @IsNotEmpty({ message: 'Please enter a user name' })
    @IsString({ message: 'username must be a string' })
    username:string;
    @ApiProperty({ type: 'string' })
    @IsNotEmpty({ message: 'Please enter a password' })
    @IsString({ message: 'password must be a string' })
    password:string;
}