import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Role } from "./role.enum";

@Entity({ name: 'user' })
export class User extends BaseEntity {

    @Column({ type: "varchar", unique: true })
    username: string;
    @Column({ type: "varchar", unique: true })
    email: string;
    @Column({ type: "varchar" })
    password: string;
    @Column({
        type: "enum",
        enum: Role,
        default: Role.CLIENT
    })
    userType: Role
}