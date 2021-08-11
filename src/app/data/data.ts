import { Injectable } from "@angular/core";
import { Borower, Company } from "./borower";

@Injectable({
    providedIn: "root"
})

export class Data {
    borowers: Borower[] = [
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

    companies: Company []=[
        {
            name: "A1",
            borower: "Boban Kmetovski"
        },
        {
            name: "PolarCape",
            borower: "Marija Kmetovska"
        },
        {
            name: "company2",
            borower: "Boban Kmetovski"
        },
        {
            name: "company3",
            borower: "Boban Kmetovski"
        },
        {
            name: "company4",
            borower: "Boban Kmetovski"
        },
        {
            name: "company5",
            borower: "Boban Kmetovski"
        },
        {
            name: "company6",
            borower: "Boban Kmetovski"
        },
        {
            name: "company7",
            borower: "Marija Kmetovska"
        },
        {
            name: "company8",
            borower: "Marija Kmetovska"
        },
        {
            name: "company9",
            borower: "Marija Kmetovska"
        },
        {
            name: "company10",
            borower: "Marija Kmetovska"
        },
        {
            name: "company11",
            borower: "Nikola Kmetovski"
        }
    ]

    getBorowers(): Borower[]{
        return this.borowers;
    }

    getCompanies(): Company[]{
        return this.companies;
    }
}