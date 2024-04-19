import style from "./Calsiuttons.module.css"
function Calsiuttons({listOfButtons,SetTheValue}){
    return<>
        {
        listOfButtons.map((a) => (
        <button className={style.button} onClick={SetTheValue}>{a}</button>
    ))}
    </>
}

export default Calsiuttons;