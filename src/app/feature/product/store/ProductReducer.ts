import { createReducer,on} from "@ngrx/store";
import { ProductState } from "./ProductState";
import { loadProductsFailureAction, loadProductsSuccessfullAction } from "./ProductActions";

export const initialProductState:ProductState={
    products:[],
    loading:false,
    error:null
}

export const productReducer= createReducer(initialProductState,on(loadProductsSuccessfullAction,(state,action)=>{
    return{
        ...state,
        products:action.products,
        loading:false,
        error:null
    }
}),on(loadProductsFailureAction,(state,action)=>{
    return{
        ...state,
        loading:false,
        error:action.error
    }
}))