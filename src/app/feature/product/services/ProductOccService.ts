import { HttpClient, HttpParams } from "@angular/common/http";
import { ProductModel } from "../../../shared/models/ProductModel";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductOccService {
    readonly baseUrl="http://localhost:5001/products";
    constructor(private httpClient:HttpClient) {
  
    }
    getAllProduct():Observable<ProductModel[]> {
      console.log("ProductService")
      return this.httpClient.get<ProductModel[]>("http://localhost:5001/products");
     
    }
    loadProductWebService(filter?:{
      parentCatId?:number,
      childCatId?:number,
      keyword?:string
    }):Observable<ProductModel[]>{
      
      let params = new HttpParams();  //we use the variable name as params only
  
      if(filter?.parentCatId!=null) {
        params=params.set("parentCatId",filter.parentCatId.toString());
      }
      if(filter?.childCatId!=null) {
        params=params.set("childCatId",filter.childCatId.toString());
      }
      if(filter?.keyword!=null) {
        params=params.set("keyword",filter.keyword.toString());
      }
      return this.httpClient.get<ProductModel[]>(this.baseUrl,{ params });
    }
  
    getProductDetails(productId:number):Observable<ProductModel> {
      
      return this.httpClient.get<ProductModel>(this.baseUrl+"/"+productId)
      
    }
}