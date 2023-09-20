import { IsJWT, IsString } from 'class-validator';

export class AuthenticationResetDTO {
  @IsString()
  password: string;
  @IsJWT()
  token: string;
}
