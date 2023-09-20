import styles from "./Button.module.css"

const Button = (props) => {
  const {isOutline , icon , text , ...rest}=props; 
  return (
    <div>
       <button {...rest} className={isOutline ? styles.outline_btn:styles.primary_btn}>
        {icon}
        {text}
       </button>
    </div>
  )
}

export default Button



{/* {props.icon}
    {props.text} */}
    {/* <MdMessage style={{fontSize:"15px" , color:"red"}} /> */}
    {/* Button */}