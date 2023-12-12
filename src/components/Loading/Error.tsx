import React from "react";
interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <p className="text-center text-xl font-bold text-red-600">{message}</p>
);

export default Error;
