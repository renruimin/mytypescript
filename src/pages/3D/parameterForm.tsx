import {Checkbox, Form, Select, Row, Col, Slider, InputNumber, Button} from "antd";
import React, {useState} from "react";
import {HexColorPicker} from "react-colorful";

const ParameterForm = () => {
    const {Option} = Select;
    const [form] = Form.useForm();
    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        }
    }
    const bgList = [
        {key: 0, text: '天空盒'},
        {key: 1, text: '颜色'},
    ]
    const styleList = [
        {key: 0, text: '白天'},
        {key: 1, text: '黑夜'},
    ]

    //0显示天空盒样式，1显示颜色
    const [showItem, setShowItem] = useState<number>(0);

    //雾化效果atomizationEffect
    const [atomizationEffect, setAtomizationEffect] = useState<boolean>(false);
    const [shadow, setShadow] = useState<boolean>(true);

    //平行光颜色color,环境光颜色colorAmbient,颜色1color1，颜色2color2
    const [color, setColor] = useState("#ffffff");
    const [colorAmbient, setColorAmbient] = useState("#ffffff");
    const [color1, setColor1] = useState("#87A0B9");
    const [color2, setColor2] = useState("#41566A");

    //显示颜色选择器：showColor平行光，showColorAmbient环境光
    const [showColor, setShowColor] = useState<boolean>(false);
    const [showColorAmbient, setShowColorAmbient] = useState<boolean>(false);
    const [showColor1, setShowColor1] = useState<boolean>(false);
    const [showColor2, setShowColor2] = useState<boolean>(false);

    // 平行光强度inputValue，环境光强度inputValueAmbient
    const [inputValue, setInputValue] = useState(1);
    const [inputValueAmbient, setInputValueAmbient] = useState(1);

    const onChange = (value: number) => {
        if (isNaN(value)) {
            return;
        }
        console.log(value);
        setInputValue(value);
    };

    const onChangeAmbient = (value: number) => {
        if (isNaN(value)) {
            return;
        }
        console.log(value);
        setInputValueAmbient(value);
    };

    //非受控参数
    const initialValues = {
        background: 0,
        skyBoxStyle: 0,
    }

    return (
        <div>
            <Form form={form} {...layout} labelAlign={'left'} initialValues={initialValues}>
                <Form.Item name={'background'} label={'背景'}>
                    <Select onChange={(value: number) => {
                        console.log(value);
                        setShowItem(value)
                    }}>
                        {
                            bgList.map(e => <Option key={e.key} value={e.key}>{e.text}</Option>)
                        }
                    </Select>
                </Form.Item>
                {
                    showItem ? (
                        <>
                            <Form.Item label={'颜色1'}>
                                <Button onClick={() => setShowColor1((value) => !value)} type="text"
                                        style={{
                                            width: '100%',
                                            background: color1,
                                            borderColor: color1
                                        }}>{color1}</Button>
                                {showColor1 && <HexColorPicker color={color1} onChange={(value) => {
                                    console.log(value);
                                    setColor1(value)
                                }}/>}
                            </Form.Item>
                            <Form.Item label={'颜色2'}>
                                <Button onClick={() => setShowColor2((value) => !value)} type="text"
                                        style={{
                                            width: '100%',
                                            background: color2,
                                            borderColor: color2
                                        }}>{color2}</Button>
                                {showColor2 && <HexColorPicker color={color2} onChange={(value) => {
                                    console.log(value);
                                    setColor2(value)
                                }}/>}
                            </Form.Item>
                        </>
                    ) : (
                        <Form.Item name={'skyBoxStyle'} label={'天空盒样式'}>
                            <Select onChange={(value) => {
                                console.log(value);
                            }}>
                                {
                                    styleList.map(e => <Option key={e.key} value={e.key}>{e.text}</Option>)
                                }
                            </Select>
                        </Form.Item>
                    )
                }
                <Form.Item label={'平行光颜色'}>
                    <Button onClick={() => setShowColor((value) => !value)} type="text"
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                color: '#ffffff',
                                background: '#3F4143'
                            }}>{color}</Button>
                    {showColor && <HexColorPicker color={color} onChange={(value) => {
                        console.log(value);
                        setColor(value)
                    }}/>}
                </Form.Item>
                <Form.Item label={'平行光强度'}>
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
                        <Col span={10} style={{textAlign: "right"}}>
                            <InputNumber
                                controls={false}
                                min={0}
                                max={1}
                                style={{width: '42px', background: '#3F4143 !important'}}
                                step={0.01}
                                value={inputValue}
                                onChange={(value)=>onChange}
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label={'环境光颜色'}>
                    <Button onClick={() => setShowColorAmbient((value) => !value)} type="text"
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                color: '#ffffff',
                                background: '#3F4143'
                            }}>{colorAmbient}</Button>
                    {showColorAmbient && <HexColorPicker color={colorAmbient} onChange={(value) => {
                        console.log(value);
                        setColorAmbient(value)
                    }}/>}
                </Form.Item>
                <Form.Item label={'环境光强度'}>
                    <Row justify="space-between">
                        <Col span={14}>
                            <Slider
                                min={0}
                                max={1}
                                onChange={onChangeAmbient}
                                value={inputValueAmbient}
                                step={0.01}
                            />
                        </Col>
                        <Col span={10} style={{textAlign: "right"}}>
                            <InputNumber
                                controls={false}
                                min={0}
                                max={1}
                                style={{width: '42px', background: '#3F4143 !important'}}
                                step={0.01}
                                value={inputValueAmbient}
                                onChange={(value)=>onChangeAmbient}
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label={'雾化效果'} valuePropName='checked'>
                    <Checkbox indeterminate={atomizationEffect} onChange={(value) => {
                        console.log(value.target.checked);
                        setAtomizationEffect(value.target.checked)
                    }}/>
                </Form.Item>
                <Form.Item label={'阴影'} valuePropName="checked">
                    <Checkbox indeterminate={shadow} onChange={(value) => {
                        console.log(value.target.checked);
                        setShadow(value.target.checked)
                    }} checked={shadow}/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ParameterForm
