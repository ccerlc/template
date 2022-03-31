import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import App from './App';
import About from './About';
import {
  BrowserRouter,
  Routes,
  Route, } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider> Sider </Sider>
        <Content> 
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>  
        </Content>
      </Layout>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
