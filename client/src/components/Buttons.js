//* Componente que gera todos os butões.
import '../style/css/Buttons.css'

const Buttons = (props) => {
    const name =props.name;
    const className = props.title;
    const type = props.type;  

    return (
        <div className="buttons">
            <button className={className} type={type}>{name}</button>
        </div>
     );
}

export default Buttons;