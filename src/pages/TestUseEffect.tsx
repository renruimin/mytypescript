import {useEffect, useState} from "react";

const TestUseEffect = () => {
    const [visable, setVisible] = useState(false);
    useEffect(() => {
        console.log('什么情况下执行')
    }, [setVisible])

    if (!visable) {
        return null
    }

    return (
        <div>本组件内容</div>
    )
}

export default TestUseEffect;
