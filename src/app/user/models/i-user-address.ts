import { IUserGeo } from "./i-user-geo";

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserGeo
}