import React from 'react'
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { DownloadOutlined,RocketFilled,LoginOutlined } from '@ant-design/icons';
import './index.css'
import FormItem from 'antd/lib/form/FormItem';


const { Header } = Layout;


const layout = {
    labelCol: {
        span: 9,
    },
    wrapperCol: {
        span: 6,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 9,
        span: 9,
    },
};

const index = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <h2 style={{ color: 'White' }}>Internal Dashboard</h2>
            </Header> */}
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" shape="round" href="/Dashboard" icon={<LoginOutlined />}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
                <h2 style={{ textAlign: 'center' }}>OR</h2>
                <FormItem style={{alignItems:'center',justifyContent:'center'}}>                
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={'mid'} href="/Register">
                    Register
                </Button>
                    <Button type="primary" shape="round" icon={<RocketFilled />} size={'mid'} href="/Dashboard">
                    Dashboard
                </Button>
                </FormItem>

        </>
    );
};
export default index