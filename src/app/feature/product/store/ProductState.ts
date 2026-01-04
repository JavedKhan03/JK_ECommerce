import { ProductModel } from "../../../shared/models/ProductModel";

export interface ProductState{
    products:ProductModel[],
    loading:boolean,
    error:string | null
}