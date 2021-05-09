import React, { useState } from 'react';
import {
    Form,
    Input,
    Radio,
    Layout,
    Button
} from 'antd';
import { CheckCircleOutlined,CloseCircleOutlined } from '@ant-design/icons';


const Register = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <Form
            style={{paddingTop: '200px'}}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Email">
                    <Input />
                </Form.Item>
                <Form.Item label="Password">
                    <Input />
                </Form.Item>
                <Form.Item style={{alignItems:'center',justifyContent:'center'}}>
                    <Button type="primary" htmlType="submit" shape="round" icon={<CheckCircleOutlined />}>
                        Submit
                    </Button>
                    <Button type="primary" htmlType="cancel" shape="round" style={{marginLeft: '20px'}} href="/" icon={<CloseCircleOutlined />}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default Register