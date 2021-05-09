import React from "react";
import {
    Row, Col, Card
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

    return (
        <div className="dashboard-page">
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
                        <div style={{ marginBottom: '10px' }}>Total Number of Clients Per Month</div>
                        <div className="graph">
                            <Chart data={data} axes={axes} series={series} />
                        </div>
                    </Card>
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
                <Col className="task-table">
                    <CardTable title='Tasks' data={TaskData} isDashboard={true} />
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard