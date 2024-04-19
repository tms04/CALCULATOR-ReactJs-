import style from "./OutBox.module.css";
function OutBox({CalsiValue}){
    return <input type="text" className={style.inputBox} value={CalsiValue} readOnly/>
}

export default OutBox;