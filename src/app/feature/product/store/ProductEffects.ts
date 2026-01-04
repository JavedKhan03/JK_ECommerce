import { Injectable } from "@angular/core";
import { ProductOccService } from "../services/ProductOccService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, of } from "rxjs";
import { loadProductsFailureAction, loadProductsSuccessfullAction } from "./ProductActions";

@Injectable()
export class ProductEffects {

    loadProducts$;

    constructor(private action$:Actions,private productOccService:ProductOccService) {

        this.loadProducts$=createEffect(()=>this.action$.pipe(ofType('[Product] Load Products'),mergeMap(()=>this.productOccService.getAllProduct().pipe(map(products =>loadProductsSuccessfullAction({products:products})),catchError(error => of(loadProductsFailureAction({ error })))))));
    }
}