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
        JobID: '2401994294202',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        branch: 'HQ',
        atype: 'Home',
        created: '23/04/2561',
        screated: '28/04/2561',
        Taskstype: 'งานแอร์',
        servicecat: 'ล้างแอร์',
        status: 'Inspection',
        phone: '098765555',
        address:'Bangkok',
        email: 'acc@gmail.com'
    },
    {
        no: 2,
        JobID: '146210513924920',
        client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
        branch: 'N/A',
        atype: 'Condo',
        created: '23/04/2561',
        screated: '28/04/2561',
        Taskstype: 'งานแอร์',
        status: 'Inspection',
        phone: '098765555',
        address:'Bangkok Bangkok Bangkok Bangkok',
        email: 'acc@gmail.com'
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
        JobID: '146210513924920',
        client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
        status: 'Inspection',
        phone: '098765555',
        email: 'aaa@gmail.com'
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
        title: 'JobID',
        dataIndex: 'JobID',
        key: 'JobID',
    },
    {
        title: 'Taskstype',
        dataIndex: 'Taskstype',
        key: 'Taskstype',
    },
    {
        title: 'client',
        dataIndex: 'client',
        key: 'client',
    },
    {
        title: 'branch',
        dataIndex: 'branch',
        key: 'branch',
    },
    {
        title: 'created',
        dataIndex: 'created',
        key: 'created',
    },
    {
        title: 'servicedate',
        dataIndex: 'screated',
        key: 'screated',
    },
    {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
    },
];

const { RangePicker } = DatePicker;

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
                setTasks(data2)
                break;
            case 1:
                setTasks(data1)
                break;
        }
    }, [pageSate])


    return (
        <div className='tasks-page'>
            <Row className="search-container" gutter={20}>
                <Col>
                    <RangePicker />
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