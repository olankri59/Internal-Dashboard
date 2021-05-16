import { Card, Row, DatePicker, Select, Col, Pagination } from "antd";
import React from "react";
import './Clients.css';
import CardTable from '../../Component/CardTable'

const { Option } = Select;
// const { Panel } = Collapse
const renderTask = () => {
    const count = 10
    for (let index = 0; index < count; index++) {

    }
}

const data2 = [
    {
        no: 1,
        JobID: 'CS10001',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        totalwork: '1',
        created:'23/03/2561',
        cphone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 2,
        JobID: 'CS10002',
        client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
        status: 'Inspection',
        cphone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 3,
        JobID: '346210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        cphone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 4,
        JobID: '446210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 5,
        JobID: '546210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 6,
        JobID: '646210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 7,
        JobID: '246210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 8,
        JobID: '846210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 9,
        JobID: '946210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 10,
        JobID: '046210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    }
]

const { RangePicker } = DatePicker;

const Clients = () => {
    return (
        <div className='Clients-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <RangePicker />
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Clients'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">บริษัท พฤกษา เรียลเอสเตท จํากัด</Option>
                        <Option key="service_2" value="2">ประวิตร วงษ์สุวรรณ</Option>
                        <Option key="service_3" value="3">นาย ประยุทธ์ จันทร์โอชา</Option>
                    </Select>
                </Col>
            </Row>
            <CardTable title='Clients' data={data2} />
            <Row style={{ justifyContent: 'flex-end', padding: '20px' }}>
                <Pagination defaultCurrent={1} total={50} />
            </Row>
        </div>
    )
}

export default Clients