import React from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const Wrapper = ({ children }) => {
    return (

        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px'  }}>
                <div className="site-layout-content" style={{ display:'flex', justifyContent:'center', alignItems:'center',  width:'100%', height: '77vh' }}>{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}> ©2020 Buil with <span>♥</span> by &lt;y &gt;eim&lt;/y&gt;</Footer>
        </Layout>
    )
}

export default Wrapper