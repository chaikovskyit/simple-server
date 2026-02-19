import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: "1", description: "Uniq id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "user_mail@gmail.com", description: "email" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare value: string;

  @ApiProperty({ example: "12!_sA", description: "Strong Pass" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;
}
