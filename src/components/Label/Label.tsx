import { LabelProps } from "../../Model/types";

const Label = ({ htmlFor, content }: LabelProps) => {
  return (
    <label className="text-base font-medium" htmlFor={htmlFor}>
      {content}
    </label>
  );
};

export default Label;
