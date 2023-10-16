import { Column, Entity, BeforeInsert } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './role.enum';
import * as bcrypt from 'bcryptjs';
@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  username: string;
  @Column({ type: 'varchar', unique: true })
  email: string;
  @Column({ type: 'varchar' })
  password: string;
  @Column({
    type: 'varchar',
    enum: Role,
    default: Role.CLIENT,
  })
  userType: Role;
  //
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<Boolean> {
    return bcrypt.compare(password, this.password);
  }
}
