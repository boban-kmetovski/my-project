import { Injectable } from "@angular/core";
import { Borower, Company } from "../data/borower";
import { Data } from "../data/data";

@Injectable({
    providedIn: "root"
})

export class DataService {

    constructor(private data: Data){}

    borowerList: Borower[] = this.data.getBorowers();
    companyList: Company[] = this.data.getCompanies();
    
      
    getBorowerName(embg: string): string {
        let x: number = 0;
        let len: number = this.borowerList.length;
        let name: string="not found";

        while(x<len){
            if(this.borowerList[x].embg==embg) {
                name = this.borowerList[x].name;
                break;
            }
            x++;
        }
        return name;
    }

    getCompaniesList(borower: string): any[] {
        let x: number = 0,
            i: number =0,
            len: number = this.companyList.length,
            res: any[]=[];
        
        while(x<len){
            if(this.companyList[x].borower==borower){
                res[i]=this.companyList[x].name;
                i++;
            }
            x++;
        }
        return res;
    }

}