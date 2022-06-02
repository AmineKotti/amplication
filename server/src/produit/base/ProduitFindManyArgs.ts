/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProduitWhereInput } from "./ProduitWhereInput";
import { Type } from "class-transformer";
import { ProduitOrderByInput } from "./ProduitOrderByInput";

@ArgsType()
class ProduitFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProduitWhereInput,
  })
  @Field(() => ProduitWhereInput, { nullable: true })
  @Type(() => ProduitWhereInput)
  where?: ProduitWhereInput;

  @ApiProperty({
    required: false,
    type: ProduitOrderByInput,
  })
  @Field(() => ProduitOrderByInput, { nullable: true })
  @Type(() => ProduitOrderByInput)
  orderBy?: ProduitOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProduitFindManyArgs };