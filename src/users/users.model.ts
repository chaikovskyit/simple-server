import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-role.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Uniq id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "user_mail@gmail.com", description: "email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @ApiProperty({ example: "12!_sA", description: "Strong Pass" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @ApiProperty({ example: "true", description: "Banned or not" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare banned: boolean;

  @ApiProperty({ example: "Booling", description: "Why bann" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
