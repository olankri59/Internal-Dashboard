import { Card, Row, DatePicker, Select, Col, Pagination } from "antd";
import React from "react";
import './Tasks.css';
import CardTable from '../../Component/CardTable'

const { Option } = Select;
// const { Panel } = Collapse
const renderTask = () => {
    const count = 10
    for (let index = 0; index < count; index++) {

    }
}

const data = [
    {
        no: 1,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 2,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 3,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 4,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 5,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 6,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 7,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 8,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 9,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 10,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 11,
        client: 'AA',
        phone: '098765555',
        email: 'acc@gmail.com'
    }
]

const Tasks = () => {
    return (
        <div className='tasks-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <DatePicker />
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Service'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">ล้างแอร์ติดผนัง</Option>
                        <Option key="service_2" value="2">บริการแก้ไขท่อตัน</Option>
                        <Option key="service_3" value="3">เปลี่ยนหลอดไฟ</Option>
                    </Select>
                </Col>
            </Row>
            <CardTable title='Tasks' data={data} />
            <Row style={{ justifyContent: 'flex-end', padding: '20px' }}>
                <Pagination
                    total={20}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={10}
                    defaultCurrent={1}
                />
            </Row>
        </div>
    )
}

export default Tasks