import React, {useMemo, useState} from 'react';
import {Input} from 'antd'

interface Data {
    id: number,
    name: string
}

const TestReactHooks2 = (): React.ReactElement => {
    const [text, setText] = useState('');

    const initData = [
        {id: 1, name: 'test1111'},
        {id: 2, name: 'test222'},
        {id: 3, name: 'test334'},
        {id: 4, name: 'test444'},
    ]

    const handleChange = (e: any) => {
        setText(e.target.value)
    }
    const changeData = useMemo(() => {
        return initData.filter(item => item.name.includes(text))
    }, [text])


    return (
        <div style={{marginTop: 20}}>
            <Input type="text" onChange={(e) => handleChange(e)} value={text}/>
            {
                changeData.map(e => <div key={e.id}>{e.name}</div>)
            }

        </div>
    )

}

export default TestReactHooks2
