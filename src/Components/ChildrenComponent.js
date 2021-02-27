import { Children } from "react";


const ChildrenComponent =  ({ state, index, children, onChangeValue }) => {
    return(
        <li className="list-item-wrapper">
            <label className="input-label">
                <span>Current Value: {state.value}</span> 
                <input 
                    id={index}
                    {...state}
                    onChange={onChangeValue.bind(this)}
                />    
            </label>
            {children}
        </li>
    );
}

export default ChildrenComponent;