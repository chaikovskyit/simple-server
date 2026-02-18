import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user_mail@gmail.com", description: "email" })
  readonly email: string;
  @ApiProperty({ example: "12!_sA", description: "Strong Pass" })
  readonly password: string;
}
