import { IUser } from "./IUser";

export interface IEmployer {
    employerID: number;
    user: IUser;
    bN_number: string;
    companyName: string;
    description: string;
    businessfield: string;
}