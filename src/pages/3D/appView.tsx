import React, { useState} from 'react';
import {Collapse} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import ParameterForm from './parameterForm'
import './index.css'

const AppView = () => {

    const {Panel} = Collapse;
    //定义面板折叠状态，false折叠，true未折叠
    const [status, setStatus] = useState(false);
    const showIcon = () => {
        if (status) {
            return <UpOutlined/>
        } else {
            return <DownOutlined/>
        }
    }

    return (
        <div className={'parameterRegulator'}>
            <Collapse expandIcon={showIcon} expandIconPosition={'end'} onChange={() => {
                setStatus((status) => !status)
            }}>
                <Panel header={<span className={'marginLeft8'}>环境参数调节器</span>} key="1">
                    <ParameterForm/>
                </Panel>
            </Collapse>
        </div>
    )
}

export default AppView;
