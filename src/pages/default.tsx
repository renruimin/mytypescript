import {Button, Space} from 'antd';
import {useNavigate} from 'react-router-dom'

const Default = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div>
            <Space>
                <Button onClick={() => navigate('/first')} type={'primary'}>First</Button>
                <Button onClick={() => navigate('/validator')} type={'primary'}>Validator</Button>
            </Space>
        </div>
    )
}

export default Default;
