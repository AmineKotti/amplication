import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProduitWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
