import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../../../shared/models/ProductModel";

export const loadProductsAction=createAction('[Product] Load Products');

export const loadProductsSuccessfullAction=createAction('[Product] Load Products Successfull',props<{products:ProductModel[]}>());

export const loadProductsFailureAction=createAction('[Product] Load Products Failure',props<{error:any}>());