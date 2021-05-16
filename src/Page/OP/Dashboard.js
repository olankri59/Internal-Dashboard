import React from "react";
import {
    Row, Col, Card, DatePicker, Select, Button, Table
} from 'antd';
import './Dashboard.css'
import { Chart } from "react-charts";
import CardTable from '../../Component/CardTable'
import { LogoutOutlined } from '@ant-design/icons';


const Dashboard = () => {
    //   useLagRadar();

    const graphData = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [
                    { primary: 1, secondary: 10 },
                    { primary: 2, secondary: 15 },
                    { primary: 3, secondary: 2 },
                ],
            },
            {
                label: 'Series 2',
                data: [
                    { primary: 1, secondary: 9 },
                    { primary: 2, secondary: 15 },
                    { primary: 3, secondary: 20 },
                ],
            },
            {
                label: 'Series 3',
                data: [
                    { primary: 1, secondary: 10 },
                    { primary: 2, secondary: 15 },
                    { primary: 3, secondary: 18 },
                ],
            },
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )
    const axes2 = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    const series = React.useMemo(
        () => ({
            type: "bar"
        }),
        []
    );
    const series2 = React.useMemo(
        () => ({
            type: "line"
        }),
        []
    );

    const tasksColumns = [
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
        }
    ];

    const clientColumns = [
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
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        }
    ];

    const statusColumns = [
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
        }
    ];

    const data = [
        {
            no: 1,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Inspection',
            phone: '098765555',
            email: 'acc@gmail.com'
        },
        {
            no: 2,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
            status: 'Pending',
            phone: '098765555',
            email: 'acc@gmail.com'
        },
        {
            no: 3,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา3 เรียลเอสเตท จํากัด',
            status: 'New',
            phone: '098765555',
            email: 'acc@gmail.com'
        },
        {
            no: 4,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Success',
            phone: '098765555',
            email: 'acc@gmail.com'
        },
        {
            no: 5,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Fixing',
            phone: '098765555',
            email: 'acc@gmail.com'
        }
    ]

    const pendingData = [
        {
            no: 1,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Pending'
        },
        {
            no: 2,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
            status: 'Pending'
        },
        {
            no: 3,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Pending'
        },
        {
            no: 4,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Pending'
        },
        {
            no: 5,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Pending'
        }
    ]

    const closeData = [
        {
            no: 1,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
            status: 'Close Job'
        },
        {
            no: 2,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
            status: 'Close Job'
        },
        {
            no: 3,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา3 เรียลเอสเตท จํากัด',
            status: 'Close Job'
        },
        {
            no: 4,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Close Job'
        },
        {
            no: 5,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Close Job'
        }
    ]

    const fixData = [
        {
            no: 1,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Fixing Job'
        },
        {
            no: 2,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
            status: 'Fixing Job'
        },
        {
            no: 3,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา3 เรียลเอสเตท จํากัด',
            status: 'Fixing Job'
        },
        {
            no: 4,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Fixing Job'
        },
        {
            no: 5,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Fixing Job'
        }
    ]

    const disputeData = [
        {
            no: 1,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Dispute'
        },
        {
            no: 2,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา2 เรียลเอสเตท จํากัด',
            status: 'Dispute'
        },
        {
            no: 3,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา3 เรียลเอสเตท จํากัด',
            status: 'Dispute'
        },
        {
            no: 4,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Dispute'
        },
        {
            no: 5,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Dispute'
        }
    ]

    const { RangePicker } = DatePicker;
    const { Option } = Select;

    return (
        <div className="dashboard-page">
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
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Agents'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">Ag001</Option>
                        <Option key="service_2" value="2">Ag002</Option>
                        <Option key="service_3" value="3">Ag003</Option>
                        <Option key="service_3" value="3">Ag004</Option>
                        <Option key="service_3" value="3">Ag005</Option>
                    </Select>
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Ticket'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">งานแอร์</Option>
                        <Option key="service_2" value="2">งานประปา/ห้องน้ำ</Option>
                        <Option key="service_3" value="3">งานไฟฟ้า</Option>
                    </Select>
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Quotation'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">Draft</Option>
                        <Option key="service_2" value="2">Pending</Option>
                        <Option key="service_3" value="3">Paid</Option>
                    </Select>
                </Col>
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Customer'
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
            <Row>
                <Col style={{ paddingRight: '10px' }}>
                    <Button>Total Tasks: 12,032</Button>
                </Col>
                <Col style={{ paddingRight: '10px' }}>
                    <Button>Total Revenue: 122,323</Button>
                </Col>
                <Col style={{ paddingRight: '10px' }}>
                    <Button>Total New Clients: 120</Button>
                </Col>
                <Col style={{ paddingRight: '10px' }}>
                    <Button>Total Quotation: 120</Button>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px', textAlign: 'center' }}>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}><h2>Amount of success rate tasks</h2></div>
                        <div className="graph">
                            <Chart data={graphData} axes={axes} series={series} />
                        </div>
                    </Card>
                </Col>
                <Col className="op-task-table">
                    <Card>
                        <h1>Tasks</h1>
                        <Table dataSource={data} columns={tasksColumns} pagination={false} showHeader={false} />
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href='' type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px', textAlign: 'center' }}>
                <Col className="op-task-table">
                    <Card>
                        <h1>Clients</h1>
                        <Table dataSource={data} columns={clientColumns} pagination={false} showHeader={false} />
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href='' type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}><h2>Revenue of each agents</h2></div>
                        <div className="graph">
                            <Chart data={graphData} axes={axes2} />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px', textAlign: 'center' }}>
                <Col className="op-task-table">
                    <Card>
                        <h1>Job Pending</h1>
                        <Table dataSource={pendingData} columns={statusColumns} pagination={false} showHeader={false} />
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href='' type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                    </Card>
                </Col>
                <Col className="op-task-table">
                    <Card>
                        <h1>Close job</h1>
                        <Table dataSource={closeData} columns={statusColumns} pagination={false} showHeader={false} />
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href='' type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px', textAlign: 'center' }}>
                <Col className="op-task-table">
                    <Card>
                        <h1>Fixing job</h1>
                        <Table dataSource={fixData} columns={statusColumns} pagination={false} showHeader={false} />
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href='' type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                    </Card>                </Col>
                <Col className="op-task-table">
                    <Card>
                        <h1>Dispute Job</h1>
                        <Table dataSource={disputeData} columns={statusColumns} pagination={false} showHeader={false} />
                        <Row style={{ justifyContent: 'flex-end' }} >
                            <Button href='' type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard