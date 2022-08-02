import {Checkbox, Form, Input, Select,Row, Col, Slider,InputNumber} from "antd";
import React,{useState} from "react";

const ParameterForm = () => {
    const {Option} = Select;
    const [form] = Form.useForm();
    const layout = {
        labelCol:{
            span:8
        },
        wrapperCol:{
            span:16
        }
    }
    const bgList = [
        {key:0,text:'天空盒'},
        {key:1,text:'颜色'},
    ]
    const styleList = [
        {key:0,text:'白天'},
        {key:1,text:'黑夜'},
    ]

    const [inputValue, setInputValue] = useState(0);

    const onChange = (value: number) => {
        if (isNaN(value)) {
            return;
        }

        setInputValue(value);
    };


    return (
        <div>
            <Form form={form} {...layout} labelAlign={'left'}>
                <Form.Item name={'background'} label={'背景'} initialValue={0}>
                    <Select>
                        {
                            bgList.map(e=><Option key={e.key} value={e.key}>{e.text}</Option>)
                        }
                    </Select>
                </Form.Item>
                {
                    form.getFieldValue('background') === 0 &&
                    <Form.Item name={'skyBoxStyle'} label={'天空盒样式'}>
                        <Select>
                            {
                                styleList.map(e=><Option key={e.key} value={e.key}>{e.text}</Option>)
                            }
                        </Select>
                    </Form.Item>
                }

                <Form.Item name={'directionalLightColor'} label={'平行光颜色'}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name={'directionalLightIntensity'} label={'平行光强度'}>
                    <Row justify="space-between">
                        <Col span={14}>
                            <Slider
                                min={0}
                                max={1}
                                onChange={onChange}
                                value={inputValue}
                                step={0.01}
                            />
                        </Col>
                        <Col span={10}>
                            <InputNumber
                                min={0}
                                max={1}
                                style={{ width:'60px',background:'#3F4143 !important' }}
                                step={0.01}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item name={'ambientColor'} label={'环境光颜色'}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name={'ambientIntensity'} label={'环境光强度'}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name={'atomizationEffect'} label={'雾化效果'}>
                    <Checkbox/>
                </Form.Item>
                <Form.Item name={'shadow'} label={'阴影'} initialValue={true}>
                    <Checkbox/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ParameterForm
