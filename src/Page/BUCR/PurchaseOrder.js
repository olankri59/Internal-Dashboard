import { Card, Row, DatePicker, Select, Col, Pagination } from "antd";
import React from "react";
import './PurchaseOrder.css';
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
]

const { RangePicker } = DatePicker;

const Purchase = () => {
    return (
        <div className='Purchase-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <RangePicker />
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
            <CardTable title='Purchase Order' data={data} />
            <Pagination defaultCurrent={1} total={50} style={{}}/>
        </div>
    )
}

export default Purchase