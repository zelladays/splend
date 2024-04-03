import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface CreatePot {
  title: string | null;
  description: string | null;
  collection: string | null;
  currency: string | null;
  amount: number | null;
  amountPerInterval: number | null;
}

export type FormProps = {
  register: UseFormRegister<CreatePot>;
  setValue?: UseFormSetValue<CreatePot>;
  errors?: FieldErrors<CreatePot>;
};
