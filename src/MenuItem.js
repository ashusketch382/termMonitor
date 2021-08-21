import './MenuItem.css';

function MenuItem(props){
    return(
        <div className="menu-item">
            <div className="svg-logo">{props.svg}</div>
            <p className="item">{props.text}</p>
        </div>
    );
}

export default MenuItem;