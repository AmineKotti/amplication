import { Produit as TProduit } from "../api/produit/Produit";

export const PRODUIT_TITLE_FIELD = "name";

export const ProduitTitle = (record: TProduit): string => {
  return record.name || record.id;
};
