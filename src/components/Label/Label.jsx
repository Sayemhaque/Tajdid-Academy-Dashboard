/* eslint-disable react/prop-types */

const Label = ({ htmlFor, content }) => {
  return <label htmlFor={htmlFor}>{content}</label>;
};

export default Label;
