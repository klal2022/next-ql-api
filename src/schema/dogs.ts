import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class DogAttribute {
     @Field(() => ID)
     key: string;

     @Field(() => String)
     value: string;
}

@ObjectType()
export class Dog {
    @Field(() => ID)
    name: string;

    @Field(() => [DogAttribute])
    attributes: DogAttribute[];

    @Field(() => String)
    sex: string;

    @Field(() => Number)
    Age: number;
}