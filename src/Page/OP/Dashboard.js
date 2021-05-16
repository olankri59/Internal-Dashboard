import React from "react";
import {
    Row, Col, Card, DatePicker, Select, Button
} from 'antd';
import './Dashboard.css'
import { Chart } from "react-charts";
import CardTable from '../../Component/CardTable'

const Dashboard = () => {
    //   useLagRadar();

    const data = React.useMemo(
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

    const data2 = [
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
            status: 'Inspection',
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
        },
        {
            no: 6,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Inspection',
            phone: '098765555',
            email: 'acc@gmail.com'
        },
        {
            no: 7,
            JobID: '246210513924920',
            client: 'บริษัท พฤกษา เรียลเอสเตท จํากัด',
            status: 'Dispute',
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
                        <Option key="service_7" value="7" style={{color:'red'}}>Dispute</Option>
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
                <Col style={{paddingRight: '10px'}}>
                    <Button>Total Tasks: 12,032</Button>
                </Col>
                <Col style={{paddingRight: '10px'}}>
                    <Button>Total Revenue: 122,323</Button>
                </Col>
                <Col style={{paddingRight: '10px'}}>
                    <Button>Total New Clients: 120</Button>
                </Col>
                <Col style={{paddingRight: '10px'}}>
                    <Button>Total Quotation: 120</Button>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px',textAlign:'center' }}>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}><h2>Amount of success rate tasks</h2></div>
                        <div className="graph">
                            <Chart data={data} axes={axes} series={series} />
                        </div>
                    </Card>
                </Col>
                <Col className="op-task-table">
                    <CardTable title='Task' data={data2} isDashboard={true} path='/OP/Tasks' />
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px',textAlign:'center' }}>
                <Col className="op-task-table">
                    <CardTable title='Clients' data={data2} isDashboard={true} path='/OP/Clients' />
                </Col>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}><h2>Revenue of each agents</h2></div>
                        <div className="graph">
                            <Chart data={data} axes={axes2} />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px',textAlign:'center' }}>
                <Col className="op-task-table">
                    <CardTable title='Job Pending' isPending={true} data={data2} isDashboard={true} path='/OP/Client' />
                </Col>
                <Col className="op-task-table">
                    <CardTable title='Closed Job' data={data2} isDashboard={true} path='/OP/Client' />
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '20px',textAlign:'center' }}>
                <Col className="op-task-table">
                    <CardTable title='Fixing Job'  data={data2} isDashboard={true} path='/OP/Client' />
                </Col>
                <Col className="op-task-table">
                    <CardTable title='Dispute Job'  data={data2} isDashboard={true} path='/OP/Client' />
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard