import { Layout, Row, Card, Button, Col, Table } from 'antd';
import React from 'react'
import { RightOutlined, LogoutOutlined } from '@ant-design/icons';
import QuotationDetail from '../Page/BUCR/QuotationDetail'
import { Link } from 'react-router-dom';


const { Content } = Layout;

// const dataSource = [
//     {
//         key: '1',
//         name: 'Mike',
//         age: 32,
//         address: '10 Downing Street',
//     },
//     {
//         key: '2',
//         name: 'John',
//         age: 42,
//         address: '10 Downing Street',
//     },
// ];

const columns = [
    {
        title: 'no',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Jobid',
        dataIndex: 'Jobid',
        key: 'Jobid',
    },
    {
        title: 'client',
        dataIndex: 'client',
        key: 'client',
    },
    {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
];

class CardTable extends React.Component {

    render() {
        return (
            <Card>
                <h1>{this.props.title}</h1>
                <Table dataSource={this.props.data} columns={this.props.columns} rowClassName="row-container" />
                {
                    (this.props.isDashboard) ?
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href={this.props.path} type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                        : null
                }
            </Card>
        );
    }
}
export default CardTable