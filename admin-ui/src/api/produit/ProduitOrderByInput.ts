import { SortOrder } from "../../util/SortOrder";

export type ProduitOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
};
