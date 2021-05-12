import React from "react";
import {
    Row, Col, Card, DatePicker, Select,Button
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
                    { primary: 1, secondary: 1 },
                    { primary: 2, secondary: 10 },
                    { primary: 3, secondary: 7 },
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
                    { primary: 1, secondary: 15 },
                    { primary: 2, secondary: 30 },
                    { primary: 3, secondary: 18 },
                ],
            },
        ],
        []
    )
    const data2 = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [
                    { primary: 1, secondary: 3 },
                    { primary: 2, secondary: 5 },
                    { primary: 3, secondary: 7 },
                ],
            },
            {
                label: 'Series 2',
                data: [
                    { primary: 1, secondary: 9 },
                    { primary: 2, secondary: 12 },
                    { primary: 3, secondary: 14 },
                ],
            },
            {
                label: 'Series 3',
                data: [
                    { primary: 1, secondary: 12 },
                    { primary: 2, secondary: 15 },
                    { primary: 3, secondary: 15 },
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

    const TaskData = [
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
                        <Option key="service_7" value="7">Dispute</Option>
                    </Select>
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
                <Col>
                    <Select
                        style={{ width: '150px' }}
                        placeholder='Service Category'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">งานแอร์</Option>
                        <Option key="service_2" value="2">งานประปา/ห้องน้ำ</Option>
                        <Option key="service_3" value="3">งานไฟฟ้า</Option>
                    </Select>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '40px' }}>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}>Total Number of Clients Per Month</div>
                        <div className="graph">
                            <Chart data={data} axes={axes} series={series} />
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}>Total Service</div>
                        <div className="graph">
                            <Chart data={data2} axes={axes2} />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '40px' }}>
                <Col className="task-table">
                    <CardTable title='Tasks' data={TaskData} isDashboard={true} path='/BUCR/Tasks'/>
                </Col>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}>Value of PO</div>
                        <div className="graph">
                            <Chart data={data} axes={axes2}  />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard