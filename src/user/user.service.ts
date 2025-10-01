import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { CreateUserInput } from './create-user-input.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    createUser(createUserInput: CreateUserInput) {
        const { name, email, role } = createUserInput
        const user = this.userRepository.create({
            name, email, role
        })
        console.log("holiiii", user)
        return this.userRepository.save(user)
    }
}
