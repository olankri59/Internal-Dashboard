import { Row, Select, DatePicker, Col, Card } from 'antd'
import React from 'react'
import './QuotationDetail.css'



const { RangePicker } = DatePicker;

const QuotationDetail = () => {
    return (
        <div className='Quodetail'>
            <Row className='detail'>
                <Card className='card-container'>
                    <Row>
                        <h1>Details</h1>
                    </Row>
                    <Row justify='space-between' >
                        <Col >

                            <div style={{paddingRight: '50px'}}>Created At</div>

                        </Col>
                        <Col >

                            <div style={{paddingRight: '50px'}}>Client</div>

                        </Col>
                        <Col >
                            <div style={{paddingRight: '50px'}}>Phone</div>

                        </Col>
                    </Row>
                </Card>
            </Row>
        </div>
    )
}
export default QuotationDetail