import {Button, Space} from 'antd';
import {useNavigate} from 'react-router-dom'

const Default = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div>
            <Space>
                <Button onClick={() => navigate('/moment')} type={'primary'}>First</Button>
                <Button onClick={() => navigate('/validator')} type={'primary'}>Validator</Button>
                <Button onClick={() => navigate('/3d')} type={'primary'}>3d</Button>
                <Button onClick={() => navigate('/blurCanvas')} type={'primary'}>离开焦点触发事件在canvas上不生效</Button>
            </Space>
        </div>
    )
}

export default Default;
