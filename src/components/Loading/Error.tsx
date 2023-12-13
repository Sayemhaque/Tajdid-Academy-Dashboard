import { ErrorProps } from "../../Model/types";

const Error = ({ message }: ErrorProps) => (
  <p className="text-center text-xl font-bold text-red-600">{message}</p>
);

export default Error;
