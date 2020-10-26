import React from 'react'
import { Form, Input, Button, notification, InputNumber } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            email: '',
            submit: '',
        };
        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFirst(event) {
        this.setState({
            firstName: event.target.value
        });
    }
    handleLast(event) {
        this.setState({
            lastName: event.target.value
        });
    }
    handleAge(event) {
        const ages = event.target.value > 0 ? event.target.value : 0;
        this.setState({
            age: ages
        });

    }
    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleSubmit(event) {
        this.setState({
            submit: event.preventDefault()
        })
        this.userLogin();

    };
    userLogin = () => {
        notification['success']({
            message: 'Successfull!',
            description:
                `Welcome ${this.state.firstName} ${this.state.lastName} with ${this.state.age} years old`
        });
    }
    render() {
        return (
            <Form {...layout} name="nest-messages" validateMessages={validateMessages} onSubmitCapture={this.handleSubmit}>
                <h2 style={{ fontSize: 35, fontWeight: 'lighter', color: '#757575', textAlign: 'center' }}>Register</h2>

                <Form.Item
                    name='firstName'
                    label="First name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={this.state.firstName} onChange={this.handleFirst} />
                </Form.Item>
                <Form.Item
                    name='lastName'
                    label="Last name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={this.state.lastName} onChange={this.handleLast} />
                </Form.Item>

                <Form.Item
                    name='age'
                    label="Age"
                >
                    <Input value={this.state.age} onChange={this.handleAge} />
                </Form.Item>
                <Form.Item
                    name='email'
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input value={this.state.email} onChange={this.handleEmail} />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit"  >
                        REGISTER
                    </Button>
                </Form.Item>
            </Form>
        );
    }
};





export default Register;
