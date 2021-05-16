import { Card, Row, DatePicker, Select, Col,Pagination, Table } from "antd";
import React from "react";
import './Quotation.css';
import CardTable from '../../Component/CardTable'

const { Option } = Select;
// const { Panel } = Collapse
const renderTask = () => {
    const count = 10
    for (let index = 0; index < count; index++) {

    }
}

const data1 = [
    {
        no: 1,
        JobID: 'QT21050000267',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Draft',
        price: '1,800',
        created: '23/02/2541',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 2,
        JobID: 'QT210500002678',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Pending',
        price: '20,000',
        created: '23/02/2541',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 3,
        JobID: 'QT210500002679',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Paid',
        price: '1,600',
        created: '23/02/2541',
        phone: '098765555',
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

const quotaionColumns = [
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

const { RangePicker } = DatePicker;

const Quotation = () => {
    return (
        <div className='Quotation-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <RangePicker />
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Status'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">Draft</Option>
                        <Option key="service_2" value="2">Pending</Option>
                        <Option key="service_3" value="3">Paid</Option>
                    </Select>
                </Col>
            </Row>
            <Table dataSource={data1} columns={quotaionColumns} pagination={false}/>
            <Row style={{ justifyContent: 'flex-end', padding: '20px' }}>
                <Pagination defaultCurrent={1} total={50} />
            </Row>
        </div>
    )
}

export default Quotation