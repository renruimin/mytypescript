import {Checkbox} from 'antd';
import React, {useState} from "react";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const MyCheckbox = () => {
    const [checked, setChecked] = useState(true);

    const onChange = (e: CheckboxChangeEvent) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };

    return (
        <Checkbox checked={checked}  onChange={onChange}>
            checkbox
        </Checkbox>
    )
}

export default MyCheckbox
