import { Address } from "./address";

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;

  address: Address;
}

export class User implements IUser {
  id: number;
  name: string;
  email: string;
  phone: string;

  address: Address;

  constructor() {
    this.address = new Address();
  }
};
