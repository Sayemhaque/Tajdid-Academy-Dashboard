// eslint-disable-next-line react/prop-types
const Button = ({styles,content,onClick}) => {
    return <button className={styles} onClick={onClick}>{content}</button>
};

export default Button;