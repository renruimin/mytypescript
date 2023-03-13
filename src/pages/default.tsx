import {Button, Space} from 'antd';
import {Route, useNavigate} from 'react-router-dom'
import React from "react";

const Default = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div>
            <Space>
                <Button onClick={() => navigate('/moment')} type={'primary'}>Moment</Button>
                <Button onClick={() => navigate('/validator')} type={'primary'}>Validator</Button>
                <Button onClick={() => navigate('/3d')} type={'primary'}>3d</Button>
                <Button onClick={() => navigate('/blurCanvas')} type={'primary'}>离开焦点触发事件在canvas上不生效</Button>
                <Button onClick={() => navigate('/testUseMemo')} type={'primary'}>使用useMemo优化函数组件</Button>
                <Button onClick={() => navigate('/testReactHooks2')} type={'primary'}>不使用useMemo优化函数组件</Button>
                <Button onClick={() => navigate('/parent')} type={'primary'}>React父组件</Button>
                <Button onClick={() => navigate('/myScale')} type={'primary'}>自适应Scale</Button>
                <Button onClick={() => navigate('/qrcode')} type={'primary'}>qrcode</Button>
                <Button onClick={() => navigate('/myCheckbox')} type={'primary'}>myCheckbox</Button>
                <Button onClick={() => navigate('/editTable')} type={'primary'}>EditTable</Button>
                <Button onClick={() => navigate('/DragTable')} type={'primary'}>DragTable</Button>
            </Space>
        </div>
    )
}

export default Default;
