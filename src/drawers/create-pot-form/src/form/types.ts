import { UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface CreatePot {
  title: string;
  description: string;
  collection: string;
  currency: string;
  amount: number;
  amountPerInterval: number;
}

export type FormProps = {
  register: UseFormRegister<CreatePot>;
  setValue?: UseFormSetValue<CreatePot>;
};
