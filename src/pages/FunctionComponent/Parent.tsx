import React, {useCallback, useState} from "react";
import Son from "./son";
import {Input, Button} from "antd";

const Parent = (): React.ReactElement => {
    console.log('父组件执行了')
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [name, setName] = useState({
        text: 'Son'
    })
    const changeFunc = (value:string) => {
        console.log(value)
    }
    return (
        <>
            <div>我是父组件</div>
            <Input type="text" onChange={(e) => {
                setValue(e.target.value)
            }} value={value}/>
            <Input type="text" onChange={(e) => {
                setValue2(e.target.value)
            }} value={value2}/>
            <Son changeFunc={useCallback((value) => {
                changeFunc(value)
            }, [])}></Son>
            <Button type={'primary'} onClick={() => {
                setName({text: 'Son+'})
            }}>改变子组件名字</Button>
        </>
    )
}

export default Parent
