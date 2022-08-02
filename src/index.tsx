import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// import 'antd/dist/antd.dark.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.compact.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
