import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./ProductState";

export const prodGlobalStateSelect= createFeatureSelector<ProductState>("productStateGlobal");

export const selectProducts=createSelector(prodGlobalStateSelect, state=>state.products);