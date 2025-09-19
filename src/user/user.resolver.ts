import { User } from "./user.entity";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UserType } from "./user.type";
import { UserService } from "./user.service";
import { CreateUserInput } from "./create-user-input.entity";

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService
    ){}

    @Query(returns => UserType)
    async users() {
        return {
            id: 'id',
            name: 'santy',
            email: "santy@email.com",
            role: 'role'
        }
    }

    @Mutation(returns => UserType)
    async createUser(
        @Args('createUserInput') createUserInput: CreateUserInput
    ) {
        console.log(createUserInput)
        return await this.userService.createUser(createUserInput)
    }

}