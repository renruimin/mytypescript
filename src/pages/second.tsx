import {Button, Form, InputNumber, Select} from 'antd';

interface ConditionType {
    id: number,
    text: string
}

interface FormValue {
    condition: number,
    value: number
}

const ValidatorForm = (): JSX.Element => {

    const [form] = Form.useForm();
    const {Option} = Select;
    const conditionList: ConditionType[] = [
        {id: 0, text: '条件1'},
        {id: 1, text: '条件2'},
        {id: 2, text: '条件3'},
    ]

    const onFinish = (value: FormValue) => {
        console.log('0', value);
        console.log('1', form.getFieldsValue());
    }

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item label={'条件'} name={'condition'} rules={[(form: any) => ({
                validator(_, value) {
                    console.log('value', value);
                    if (typeof value !== 'undefined') {
                        if (typeof value !== "undefined") {
                            form.validateFields(['value'])
                        }
                    } else {
                        form.resetFields(['value'])
                    }

                }
            })]}>
                <Select style={{width: 200}} allowClear>
                    {
                        conditionList.map((e: ConditionType) => (
                            <Option key={e.id} value={e.id}>{e.text}</Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item label={'值'} name={'value'} rules={[{required: true, message: '请输入'}]}>
                <InputNumber style={{width: 200}}></InputNumber>
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'}>提交</Button>
            </Form.Item>
        </Form>
    )
}

export default ValidatorForm;
