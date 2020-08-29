export interface IClients {
  _id: string;
  surname: string;
  name: string;
  patronymic?: string;
  passportNumber?: string;
  mobilePhone?: string;
  homePhone?: string;
  workPhone?: string;
  email?: string;
  discount?: number;
  numberInDocument?: string;
  typeOrReception?: string;
  howToFindClinic?: string;
  unsubscribe: boolean;
  clientInBlackList: boolean;
  typeCity: string;
  cityName: string;
  typeStreet: string;
  streetName: string;
  numberHouse: string;
  zipCode?: string;
  clientDescription?: string;
}
