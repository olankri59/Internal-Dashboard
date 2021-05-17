import { Row, Col, Card } from 'antd'
import React from 'react'
// import './QuotationDetail.css'
import { useHistory } from 'react-router-dom'


const Clientdetail = () => {
    const history = useHistory()
    const data = history.location.state.detail

    return (
        <>
            <div className='Clientdetail' style={{ padding: '10px 40px', backgroundColor: 'whitesmoke' }}>
                <Row className='detail'>
                    <Card className='card-container' style={{ width: '100%' }}>
                        <Row  style={{paddingBottom: '30px' }}>
                            <h1>{data.JobID}</h1>
                        </Row>
                        <Row style={{ paddingBottom: '50px' }}>
                            <h1>Client Profile</h1>
                        </Row>
                        <Row justify='space-between' style={{ fontWeight: 'bold' }}>
                            <Col span={4}>
                                <div >ID</div>
                            </Col>
                            <Col span={9}>
                                <div >Client</div>
                            </Col>
                            <Col span={1}>
                                <div >Branch</div>
                            </Col>
                            <Col span={10}>
                                <div >Address</div>
                            </Col>
                        </Row>
                        <Row justify='space-between' style={{ paddingBottom: '50px' }}>
                            <Col span={4}>
                                <div >{data.created}</div>
                            </Col>
                            <Col span={9}>
                                <div >{data.client}</div>
                            </Col>
                            <Col span={1}>
                                <div >{data.Atype}</div>
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
                                <div >Postal Code</div>
                            </Col>
                            <Col span={5}>
                                <div >Tax ID</div>
                            </Col>
                            <Col span={5}>
                                <div >Email</div>
                            </Col>
                            <Col span={5}>
                                <div >Telephone</div>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={4}>
                                <div >{data.atype}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.postalcode}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.tax}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.email}</div>
                            </Col>
                            <Col span={5}>
                                <div >{data.phone}</div>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </div>
            <div className='Clientdetail' style={{ padding: '10px 40px', backgroundColor: 'whitesmoke' }}>
                <Row className='detail'>
                    <Card className='card-container' style={{ width: '100%' }}>
                        <Row >
                            <h1>Work List</h1>
                        </Row>
                        <Row justify='space-between' style={{ fontWeight: 'bold',marginBottom:'20px' }}>
                            <Col span={4}>
                                <div >No.</div>
                            </Col>
                            <Col span={5}>
                                <div >Service</div>
                            </Col>
                            <Col span={5}>
                                <div >Description</div>
                            </Col>
                            <Col span={5}>
                                <div >Quatity</div>
                            </Col>
                            <Col span={5}>
                                <div >Total</div>
                            </Col>
                        </Row>
                        {
                            data.work.map((s) => {
                                return (
                                    <Row justify='space-between' style={{ paddingBottom: '20px' }}>
                                        <Col span={4}>
                                            <div >{s.no}</div>
                                        </Col>
                                        <Col span={5}>
                                            <div >{s.service}</div>
                                        </Col>
                                        <Col span={5}>
                                            <div >{s.description}</div>
                                        </Col>
                                        <Col span={5}>
                                            <div >{s.quatity}</div>
                                        </Col>
                                        <Col span={5}>
                                            <div >{s.total}</div>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Card>
                </Row>
            </div>
        </>
    )
}
export default Clientdetail