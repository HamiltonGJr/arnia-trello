import { ChangeEvent } from "react";

export type FormButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.FormEvent<HTMLFormElement>) => void;
  type: string;
};

export type FormInputProps = {
  nameInput: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
  error: boolean;
  helperText?: string;
};
