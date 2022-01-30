const MyButton = ({ value, text, cssClass, onClick }) => {  
    
    const val = {value}
    return (
    <button className={cssClass} onClick={() => onClick(val)}>
        {text}
    </button>
    )
}

export default MyButton
