import React, {useMemo, useState} from 'react';
import {Input} from 'antd'

/**
 * useMemo的使用方法，监听某一个state的值改变另一个state的值
 * @constructor
 */
const TestUseMemo = (): React.ReactElement => {

    const [text, setText] = useState('')
    const data = [
        {id: 1, name: 'test1111'},
        {id: 2, name: 'test222'},
        {id: 3, name: 'test334'},
        {id: 4, name: 'test444'},
    ]

    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    const getList = useMemo(() => {
        return data.filter(item => {
            if (item.name.includes(text)) {
                return item
            }
        });
    }, [text]);

    return (
        <div style={{marginTop: 20}}>
            <Input type="text" onChange={(e) => handleChange(e)} value={text}/>
            {
                getList.map(item => <div key={item.id}>{item.name}</div>)
            }
        </div>
    )

}

export default TestUseMemo
