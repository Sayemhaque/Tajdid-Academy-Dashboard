/* eslint-disable react/prop-types */

const Label = ({ htmlFor, content }) => {
  return <label className="text-base font-medium" htmlFor={htmlFor}>{content}</label>;
};

export default Label;
