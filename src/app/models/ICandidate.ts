import { IUser } from "./IUser";

export interface ICandidate {
    candidateID: number;
    user: IUser;
    experience: number;
    education: string;
    interests: string;
    resume: string;
    mobility: boolean;
    linkedIn: string;
}