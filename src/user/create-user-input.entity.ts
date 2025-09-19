import { Field, InputType } from "@nestjs/graphql";
import { MinLength } from "class-validator";

@InputType()
export class CreateUserInput {
    @MinLength(1)
    @Field()
    name: string;

    @MinLength(1)
    @Field()
    email: string;

    @MinLength(1)
    @Field()
    role: string;

}