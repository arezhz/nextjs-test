import { IUserAddress } from "./i-user-address";
import { IUserCompany } from "./i-user-company";

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}
