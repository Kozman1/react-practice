import { useState } from 'react';
import ChildrenComponent from './ChildrenComponent';



const CoreComponent = () => {
    let [inputs, setChildrenComponent] = useState([
        { type: 'email', name: 'email', value: 'default@email.com' }, 
        { type: 'password', name: 'password', value: 'defaultValue' },
        { type: 'text', name: 'username', value: 'defaultValue' },
        { type: 'date', name: 'birthday', value: '2020-10-10' },
        { type: 'text', name: 'address', value: 'defaultValue' },
        { type: 'text', name: 'bio', value: 'defaultValue' },
    ]);

    const onChangeValue = (e) => {
        setChildrenComponent(
            inputs.map((state, index) => {
                if (index.toString() === e.target.id) {
                    state.value = e.target.value;
                }
                return state;
            })
        );
    }

    return (
        <div className="content-block">
            <ul className="list">
                {inputs.map((state, index) => {
                        return (
                        <ChildrenComponent 
                            state={state}
                            id={index}
                            onChangeValue={onChangeValue} 
                            key={index}
                        > 
                            <div>This is a children component #{++index}</div>
                        </ChildrenComponent>
                    ) 
                })}
            </ul>
        </div>
    );
}

export default CoreComponent;