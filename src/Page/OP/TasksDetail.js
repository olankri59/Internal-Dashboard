import { Row, Col, Card } from 'antd'
import React from 'react'
import './TasksDetail.css'
// import './QuotationDetail.css'
import { useHistory } from 'react-router-dom'


const Quotationdetail = () => {
    const history = useHistory()
    const data = history.location.state.detail

    return (
        <>
            <div className='Clientdetail' style={{ padding: '10px 40px', backgroundColor: 'whitesmoke' }}>
                <Row className='detail'>
                    <Card className='card-container' style={{ width: '100%' }}>
                        <Row style={{paddingBottom: '30px' }}>
                            <h1>{data.JobID}</h1>
                        </Row>
                        <Row style={{ paddingBottom: '50px' }}>
                            <h1>Details</h1>
                        </Row>
                        <Row justify='space-between' style={{ fontWeight: 'bold' }}>
                            <Col span={4}>
                                <div >Created At</div>
                            </Col>
                            <Col span={7}>
                                <div >Client</div>
                            </Col>
                            <Col span={3}>
                                <div >Phone</div>
                            </Col>
                            <Col span={10}>
                                <div >Address</div>
                            </Col>
                        </Row>
                        <Row justify='space-between' style={{ paddingBottom: '50px' }}>
                            <Col span={4}>
                                <div >{data.created}</div>
                            </Col>
                            <Col span={7}>
                                <div >{data.client}</div>
                            </Col>
                            <Col span={3}>
                                <div >{data.phone}</div>
                            </Col>
                            <Col span={10}>
                                <div >{data.address}</div>
                            </Col>
                        </Row>
                        <Row style={{ fontWeight: 'bold' }}>
                            <Col span={4}>
                                <div >Address Type</div>
                            </Col>
                            <Col span={5}>
                                <div >Email</div>
                            </Col>
                            <Col span={5}>
                                <div >Service</div>
                            </Col>
                            <Col span={5}>
                                <div >Service Category</div>
                            </Col>
                            <Col span={5}>
                                <div >Status</div>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={4}>
                                <div >{data.atype}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.email}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.Taskstype}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.servicecat}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.status}</div>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </div>
            <div className='Clientdetail' style={{ padding: '10px 40px', backgroundColor: 'whitesmoke' }}>
                <Row className='detail'>
                    <Card className='card-container' style={{ width: '100%' }}>
                        <Row >
                            <h1>Picture</h1>
                        </Row>

                        <Row >
                            <img className='img' src='https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt=''></img>
                        </Row>
                    </Card>
                </Row>
            </div>
        </>
    )
}
export default Quotationdetail