import {Select} from 'antd';
import {useEffect} from "react";
import * as THREE from "three"

const BlurCanvas = () => {
    const {Option} = Select;

    useEffect(() => {
        //创建three元素
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        console.log(renderer.domElement);
        renderer.domElement.addEventListener('click', (e) => {
            console.log(e);
            e.preventDefault()
        })

        document.body.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
    }, [])

    return (
        <div>
            {/*<canvas style={{background: 'pink', width: '100vw', height: '100vh'}}></canvas>*/}
            <Select placeholder={'请选择'} style={{width: 200, position: 'absolute', top: 0, left: 0}}>
                <Option key={0}>选项一</Option>
                <Option key={1}>选项二</Option>
            </Select>
        </div>
    )
}

export default BlurCanvas;
