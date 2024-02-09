import { DocumentType } from "./documentType.model";
import { Group } from "./group.model";

export class User{
	id?: number;
    namesUser?: string;
    lastnameP?: string;
    lastnameM?: string;;
    registrationDate?: Date;
    address?: string;
    cellphone?: string;
    email?: string;
    userLogin?: string;
    passwordLogin?: string;
    dateBirth?: Date | null;
    numberDoc?: string;
    idDocType?: DocumentType;
    updateDate?: Date;
    idGroup?: Group;
    role?: String;
}