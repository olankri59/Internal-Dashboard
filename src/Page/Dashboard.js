import React from "react";
import ReactDOM from "react-dom";
import {
    Row, Col, Card
} from 'antd';
import { Chart } from "react-charts";

// import useDemoConfig from "./useDemoConfig";
// import useLagRadar from "./useLagRadar";
// import ResizableBox from "./ResizableBox";
import "./styles.css";
import Menubar from "../Component/Menubar";

export default function App() {
    //   useLagRadar();

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [
                    { primary: 1, secondary: 1 },
                    { primary: 2, secondary: 10 },
                    { primary: 3, secondary: 7 },
            //     ],
            // },
            // {
            //     label: 'Series 2',
            //     data: [
            //         { primary: 1, secondary: 9 },
            //         { primary: 2, secondary: 15 },
            //         { primary: 3, secondary: 20 },
            //     ],
            // },
            // {
            //     label: 'Series 3',
            //     data: [
            //         { primary: 1, secondary: 10 },
            //         { primary: 2, secondary: 15 },
            //         { primary: 3, secondary: 18 },
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

    return (
        <Row>
            <Col flex='200px'>
                <Menubar />
            </Col>
            <Col flex='auto' style={{ backgroundColor: '#F5F5F5', padding: '10px 10px 10px 10px'}}>
                <Card style={{width: 'fit-content'}}>
                    
                <div
                    style={{
                        width: '400px',
                        height: '300px',
                        backgroundColor: 'white'
                    }}
                    >
                    <Chart data={data} axes={axes} series={series} />
                </div>
                    </Card>
            </Col>
        </Row>
        
    );
}