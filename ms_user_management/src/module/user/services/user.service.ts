import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    return await this.userRepository.save({
      username: createUserDto.username,
      email: createUserDto.email,
      password: hash,
      userType: createUserDto.userType,
      createdAt: new Date(),
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id: id });
  }
  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOneBy({ username: username });
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(
      { id: id },
      {
        username: updateUserDto.username,
        email: updateUserDto.email,
        password: updateUserDto.password,
        lastChangedAt: new Date(),
      },
    );
  }

  async delete(id: string) {
    return await this.userRepository.delete({ id: id });
  }
}
