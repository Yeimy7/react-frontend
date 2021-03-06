import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Form, Space, notification } from 'antd';
import { LockOutlined, UserOutlined, SmileOutlined } from '@ant-design/icons';


import { actionUpdateEmail, actionUpdatePass } from '../../redux/actions/index'

const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const { login } = useSelector(store => store);
    console.log(login);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setUser(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const router = useRouter();
    const goRegister = () => {
        router.push('/register')
    }

    useEffect(() => {
        notification.open({
            message: 'Welcome!',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    }, []);

    const userLogin = () => {
        dispatch(actionUpdateEmail(user));
        dispatch(actionUpdatePass(pass));
        notification['success']({
            message: 'Hi!',
            description:
                `${user} you clicked the button.`,
        });
    }
    return (
        <div >
            <Space direction="vertical" style={{ width: 300 }}>
                <h2 style={{ fontSize: 35, fontWeight: 'lighter', color: '#757575', textAlign: 'center' }}>Sign In</h2>

                <Form name="normal_login" className="login-form" >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={user} onChange={handleInput} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={handlePass}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Space direction="vertical" style={{ width: 300 }}>
                            <Button type="primary" htmlType="submit" className="login-form-button" block onClick={userLogin}>
                                LOGIN
                        </Button>

                            <Button type="default" htmlType="submit" className="register-form-button" block onClick={goRegister}>
                                REGISTER
                        </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Space>
        </div >
    )
}



export default Login;