import { ProduitWhereInput } from "./ProduitWhereInput";
import { ProduitOrderByInput } from "./ProduitOrderByInput";

export type ProduitFindManyArgs = {
  where?: ProduitWhereInput;
  orderBy?: ProduitOrderByInput;
  skip?: number;
  take?: number;
};
