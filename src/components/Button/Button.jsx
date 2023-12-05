// eslint-disable-next-line react/prop-types
const Button = ({styles,content,onClick,type}) => {
    return <button className={styles} type={type} onClick={onClick}>{content}</button>
};

export default Button;