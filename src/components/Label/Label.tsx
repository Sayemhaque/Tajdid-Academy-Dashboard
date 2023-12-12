/* eslint-disable react/prop-types */

interface LabelProps {
  htmlFor?:string,
  content:string
}

const Label:React.FC<LabelProps> = ({ htmlFor, content }) => {
  return <label className="text-base font-medium" htmlFor={htmlFor}>{content}</label>;
};

export default Label;
