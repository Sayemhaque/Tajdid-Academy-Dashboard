import { ReactEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

export type Inputs = {
  title: string;
  price: number;
  description: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductProps = {
  product: Product;
};

export type PorductId = number | undefined;

export type Register = {
  register: UseFormRegister<Inputs>;
};
export type InputFieldProps = {
  type: "text" | "number" | "submit" | "file";
  placeholder: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
};

export type ButtonProps = {
  styles?: string;
  content: string;
  handleClick?: (event: React.MouseEvent) => void;
  type?: "submit" | "button" | "reset";
};

export type LabelProps = {
  htmlFor?: string;
  content: string;
};

export type ErrorProps = {
  message: string;
};

export type ModelProps = {
  open: boolean;
  handleOnClose: () => void;
  handleDelete: () => void;
  isPending: boolean;
};

export type SidebarLinksProps = {
  active: string;
  icon: string;
  text: string;
  ChevronDownIcon?: React.ReactNode;
  to: string;
};

export type CreateProductHeaderProps = {
  onSubmit: ReactEventHandler;
  isPending: boolean;
};

export type PaginationProps = {
  currentPage: Number;
  totalPages: Number;
  onPageChange: Number;
};
