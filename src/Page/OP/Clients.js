import { Card, Row, DatePicker, Select, Col, Pagination, Table} from "antd";
import './Clients.css';
import CardTable from '../../Component/CardTable'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'


const { Option } = Select;
// const { Panel } = Collapse

const data1 = [
    {
        no: 1,
        JobID: 'CR00001',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        Atype: 'HQ',
        atype: 'Home',
        tax: '10000002',
        postalcode: '10210',
        created: '23/04/2561',
        screated: '28/04/2561',
        Taskstype: 'งานแอร์',
        status: 'Inspection',
        totalwork: '2',
        address:'Bangkok',
        phone: '09222222',
        email: 'acc@gmail.com',
        work: [
            {
                no: 1,
                service: 'AA',
                description: 'B',
                quatity: 2,
                total: '1,600'
            },
            {
                no: 2,
                service: 'AB',
                description: 'B',
                quatity: 2,
                total: '1,600'
            }
        ]
    },
    {
        no: 2,
        JobID: '146210513924920',
        client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
        Atype: 'N/A',
        created: '23/04/2561',
        screated: '28/04/2561',
        Taskstype: 'งานแอร์',
        status: 'Inspection',
        totalwork: '1',
        phone: '09823323223',
        email: 'acc@gmail.com',
        work: [
            {
                no: 1,
                service: 'AA',
                description: 'B',
                quatity: 2,
                total: '1,600'
            }
        ]
    },
    {
        no: 3,
        JobID: '346210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
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
const data2 = [
    {
        no: 11,
        JobID: 'CR0009',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'aaa@gmail.com',
        Atype: 'Home'
    },
    {
        no: 12,
        JobID: '246210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Pending',
        phone: '098765432',
        email: 'bbb@gmail.com'
    },
    {
        no: 13,
        JobID: '346210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'ccc@gmail.com'
    },
    {
        no: 14,
        JobID: '446210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098234555',
        email: 'ddd@gmail.com'
    },
    {
        no: 15,
        JobID: '546210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098154555',
        email: 'eee@gmail.com'
    },
    {
        no: 16,
        JobID: '646210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098723455',
        email: 'fff@gmail.com'
    },
    {
        no: 17,
        JobID: '746210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765444',
        email: 'ggg@gmail.com'
    },
    {
        no: 18,
        JobID: '846210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098432555',
        email: 'eee@gmail.com'
    },
    {
        no: 19,
        JobID: '946210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 20,
        JobID: '1046210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098432555',
        email: 'acc@gmail.com'
    }
]

const tasksColumns = [
    {
        title: 'ID',
        dataIndex: 'JobID',
        key: 'JobID',
    },
    {
        title: 'Address Type',
        dataIndex: 'Atype',
        key: 'Atype',
    },
    {
        title: 'client',
        dataIndex: 'client',
        key: 'client',
    },
    {
        title: 'Total Work',
        dataIndex: 'totalwork',
        key: 'totalwork',
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

const Clients = () => {

    const history = useHistory()

    const [pageSate, setPageState] = useState({
        page: 1,
        size: 10
    })
    const [tasks, setTasks] = useState(data1)

    useEffect(() => {
        // const result = task.getTask({page: pageSate.page, size: pageSate.size})

        switch (pageSate.page % 2) {
            case 0:
                setTasks(data2)
                break;
            case 1:
                setTasks(data1)
                break;
        }
    }, [pageSate])


    return (
        <div className='Clients-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <RangePicker />
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Customer'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="customer_1" value="1">บริษัท พฤกษา เรียลเอสเตท จํากัด</Option>
                        <Option key="customer_2" value="2">ประวิตร วงษ์สุวรรณ</Option>
                        <Option key="customer_3" value="3">นาย ประยุทธ์ จันทร์โอชา</Option>
                    </Select>
                </Col>
            </Row>
            <Table
                dataSource={tasks}
                columns={tasksColumns}
                pagination={false}
                onRow={(record, index) => {
                    return {
                        onClick: (e) => {
                            history.push(`/OP/ClientsDetail`, {
                                detail: record
                            })
                        }
                    }
                }

                }
            />
            <Row style={{ justifyContent: 'flex-end', padding: '20px' }}>
                <Pagination
                    total={53}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    onChange={(value, size) => {
                        setPageState({
                            page: value,
                            size: size
                        })
                    }}
                />
            </Row>
        </div>
    )
}

export default Clients