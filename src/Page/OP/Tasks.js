import { Card, Row, DatePicker, Select, Col, Pagination, Table } from "antd";
import './Tasks.css';
import CardTable from '../../Component/CardTable'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'


const { Option } = Select;
// const { Panel } = Collapse

const data1 = [
    {
        no: 1,
        Jobid: '146210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        Atype: 'HQ',
        created: '23/04/2561',
        screated: '28/04/2561',
        Taskstype: 'งานแอร์',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 2,
        Jobid: '146210513924920',
        client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
        Atype: 'N/A',
        created: '23/04/2561',
        screated: '28/04/2561',
        Taskstype: 'งานแอร์',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 3,
        Jobid: '346210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 4,
        Jobid: '446210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 5,
        Jobid: '546210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 6,
        Jobid: '646210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 7,
        Jobid: '246210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 8,
        Jobid: '846210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 9,
        Jobid: '946210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 10,
        Jobid: '046210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    }
]
const data2 = [
    {
        no: 11,
        Jobid: '146210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'aaa@gmail.com'
    },
    {
        no: 12,
        Jobid: '246210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Pending',
        phone: '098765432',
        email: 'bbb@gmail.com'
    },
    {
        no: 13,
        Jobid: '346210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'ccc@gmail.com'
    },
    {
        no: 14,
        Jobid: '446210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098234555',
        email: 'ddd@gmail.com'
    },
    {
        no: 15,
        Jobid: '546210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098154555',
        email: 'eee@gmail.com'
    },
    {
        no: 16,
        Jobid: '646210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098723455',
        email: 'fff@gmail.com'
    },
    {
        no: 17,
        Jobid: '746210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765444',
        email: 'ggg@gmail.com'
    },
    {
        no: 18,
        Jobid: '846210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098432555',
        email: 'eee@gmail.com'
    },
    {
        no: 19,
        Jobid: '946210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'acc@gmail.com'
    },
    {
        no: 20,
        Jobid: '1046210513924920',
        client: 'บริษัท เมเจอร์ ดีเวลลอปเม้นท์ จำกัด (มหาชน)',
        status: 'Inspection',
        phone: '098432555',
        email: 'acc@gmail.com'
    }
]

const tasksColumns = [
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

const Tasks = () => {

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
                setTasks(data1)
                break;
            case 1:
                setTasks(data2)
                break;
        }
    }, [pageSate])


    return (
        <div className='tasks-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <DatePicker />
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Tasks Status'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">Pending</Option>
                        <Option key="service_2" value="2">Inspection</Option>
                        <Option key="service_3" value="3">Confirm Quotation</Option>
                        <Option key="service_4" value="4">Work Confirm</Option>
                        <Option key="service_5" value="5">In Progress</Option>
                        <Option key="service_6" value="6">Complete</Option>
                        <Option key="service_7" value="7" style={{ color: 'red' }}>Dispute</Option>
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
                            history.push(`/OP/TasksDetail`, {
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

export default Tasks