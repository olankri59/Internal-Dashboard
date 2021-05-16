import { Layout, Row, Card, Button,Col } from 'antd';
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
        title: 'JobID',
        dataIndex: 'JobID',
        key: 'JobID',
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
                <div className={(this.props.isDashboard) ? 'table-container-dashboard' : 'table-container'}>
                    
                        <Card style={{
                            marginTop: '5px',
                            marginBottom: '-6px',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            backgroundColor: 'black',
                            color: 'white'
                        }}>
                            <Row justify='space-between'>
                                <Col>เลขงาน</Col>
                                <Col>ประเภทงาน</Col>
                                <Col>ชื่อลูกค้า</Col>
                                <Col>สาขา</Col>
                                <Col>วันที่สร้าง</Col>
                                <Col>วันที่บริการ</Col>
                                <Col>สถานะ</Col>
                            </Row>
                        </Card>
                    {
                        this.props.data.map((t, index) => { 
                            return (
                                // index < 10 ?
                                <Card style={{ marginTop: '5px' }}>
                                    <Row justify='space-between' style={{ textAlign: 'left'}}>
                                        <div className="title-card" >
                                            {`${t.JobID ? t.JobID : ''} ${t.Taskstype ? t.Taskstype : ''} ${t.client ? t.client : ''} ${t.Atype ? t.Atype : ''} ${t.created ? t.created : ''} ${t.screated ? t.screated : ''} ${t.price ? t.price : ''} ${t.status ? t.status : ''} ${t.cphone ? t.cphone : ''}  ${this.props.isPrending ? t.status2 : ''}`}
                                            </div>
                                        <a href='QuotationDetail'><RightOutlined style={{ color: 'black' }} /></a>
                                    </Row>
                                </Card>
                                // : null
                            )
                        })
                    }
                </div>
                {
                (this.props.isDashboard) ?
                <Row style={{justifyContent: 'flex-end', paddingTop:'20px'}} >
                    <Button href={this.props.path} type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                </Row>
                : null
                }
            </Card>
        );
    }
}
export default CardTable