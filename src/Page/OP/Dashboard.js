import React from "react";
import {
    Row, Col, Card,DatePicker,Select
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

    const cilentData = [
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
                        placeholder='Agents'
                        filterOption={(input, option) =>
                            option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key="service_1" value="1">ID#1</Option>
                        <Option key="service_2" value="2">ID#2</Option>
                        <Option key="service_3" value="3">ID#3</Option>
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
                <Col className="op-task-table">
                    <CardTable title='Task' data={cilentData} isDashboard={true} path='/OP/Tasks'/>
                </Col>
            </Row>
            <Row justify='space-around' style={{ padding: '40px' }}>
                <Col className="op-task-table">
                    <CardTable title='Clients' data={cilentData} isDashboard={true}  path='/OP/Client'/>
                </Col>
                <Col>
                    <Card className="card-container">
                        <div style={{ marginBottom: '10px' }}>Total Number of Clients Per Month</div>
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