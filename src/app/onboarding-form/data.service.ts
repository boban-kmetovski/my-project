import { Injectable } from "@angular/core";
import { Borower } from "../data/borower";

@Injectable({
    providedIn: "root"
})

export class DataService {
  
    borowerList: Borower[] = [
        {
            name: "Boban Kmetovski",
            phone: "",
            email: "",
            embg: "0103987450014",
            bankId: "1111" 
        },
        {
            name: "Marija Kmetovska",
            phone: "",
            email: "",
            embg: "1111987435003",
            bankId: "2222"
        }
    ]

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

}