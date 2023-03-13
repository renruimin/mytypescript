import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Collapse} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import ParameterForm from './parameterForm'
import './index.less'
import * as THREE from "three";

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

    useEffect(() => {
        console.log('useEffect执行了')
        //创建three元素
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        console.log(renderer.domElement);

        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        renderer.render(scene, camera);
    }, [])

    useLayoutEffect(()=>{
        console.log('useLayoutEffect执行了')
    },[])



    return (
        <div>
            <div className={'parameterRegulator'}>
                <Collapse expandIcon={showIcon} expandIconPosition={'end'} onChange={() => {
                    setStatus((status) => !status)
                }}>
                    <Panel header={<span className={'marginLeft8'}>环境参数调节器</span>} key="1">
                        <ParameterForm/>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default AppView;
