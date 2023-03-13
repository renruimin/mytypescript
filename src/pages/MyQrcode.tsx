import QRCode from 'qrcode.react';

const MyQrcode = () => {
    return <div>
        <QRCode
            id="qrCode"
            value="http://baidu.com"
            size={200}
            fgColor="#000000"
            style={{margin: 'auto'}}
        />
        <div style={{display:'flex',width:100}}>
            {/*设置了宽度还是被挤压，使用min-width*/}
            <div style={{width:50,minWidth:50}}>备注</div>
            <div>你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层你好，我是我汽车式起重机，位于二号楼五层</div>

        </div>
    </div>
}
export default MyQrcode;
