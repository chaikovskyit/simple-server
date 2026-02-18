import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Swagger description
  @ApiOperation({ summary: "Create new User" })
  @ApiResponse({ status: 200, type: User })
  //---------------------
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  // Swagger description
  @ApiOperation({ summary: "Get All Users" })
  @ApiResponse({ status: 200, type: [User] })
  //---------------------
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
