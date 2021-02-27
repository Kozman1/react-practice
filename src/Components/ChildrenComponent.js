import { Children } from "react";


const ChildrenComponent =  ({ children, value, onChangeValue}) => {
    return(
        <li>
            <label onChange={onChangeValue.bind(this)}>
                <span>Current Value: {value}</span> 
                {children}
            </label>
        </li>
    );
}

export default ChildrenComponent;