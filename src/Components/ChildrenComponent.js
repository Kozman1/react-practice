


const ChildrenComponent =  ({ state, id, children, onChangeValue }) => {
    return(
        <li className="list-item-wrapper">
            <label className="input-label">
                <span>Current {state.name}: {state.value}</span> 
                <input 
                    id={id}
                    {...state}
                    onChange={onChangeValue.bind(this)}
                />    
            </label>
            {children}
        </li>
    );
}

export default ChildrenComponent;