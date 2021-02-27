import { useState } from 'react';
import ChildrenComponent from './ChildrenComponent';



const CoreComponent = () => {

    let [inputs, setChildrenComponent] = useState([
        { type: 'email', name: 'email', value: 'defaultValue' }, 
        { type: 'password', name: 'password', value: 'defaultValue' },
        { type: 'text', name: 'username', value: 'defaultValue' },
        { type: 'date', name: 'birthday', value: 'defaultValue' },
        { type: 'text', name: 'address', value: 'defaultValue' },
        { type: 'text', name: 'bio', value: 'defaultValue' },
    ]);

    const onChangeValue = (e) => {
        console.log(e.target.id);
        setChildrenComponent(
            inputs.map((state, index) => {
                if (index === e.target.id) {
                    state.value = e.target.value;
                    return state;
                }
            })
        );
    }

    return (
        <div>
            <ul>
                {inputs.map((state, index) => {
                        return (
                        <ChildrenComponent 
                            value={state.value} 
                            onChangeValue={onChangeValue}
                            key={index}
                        > 
                            <input id={index} {...state}  ></input>
                        </ChildrenComponent>
                    ) 
                })}
            </ul>
        </div>
    );
}

export default CoreComponent;