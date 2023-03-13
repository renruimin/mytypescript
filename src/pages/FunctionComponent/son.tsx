import React, {useEffect, useState} from "react";
import {Input} from "antd";

interface SonProps {
    // name: {
    //     text: string
    // },
    changeFunc: (value:string) => void
}

const Son = (props: SonProps): React.ReactElement => {
    const {
        // name,
        changeFunc} = props

    const [value, setValue] = useState('')
    console.log('子组件执行了')

    useEffect(() => {
        changeFunc('11111')
    }, [])

    return (
        <>
            我是子组件
            {/*{name.text}*/}
            <Input type="text" onChange={(e) => {
                setValue(e.target.value)
            }} value={value}/>
        </>
    )
}
//
// const func = (prevProps: SonProps, nextProps: SonProps) => {
//     if (prevProps.name.text === nextProps.name.text) {
//         console.log('true', '相等不渲染子组件')
//         return true
//     } else {
//         console.log('false', '不相等渲染子组件')
//         return false
//     }
// }

// export default React.memo(Son, func)
export default React.memo(Son)
