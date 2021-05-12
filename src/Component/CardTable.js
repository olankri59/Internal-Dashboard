import { Layout, Row, Card, Button } from 'antd';
import React from 'react'
import { RightOutlined, LogoutOutlined } from '@ant-design/icons';
import QuotationDetail from '../Page/BUCR/QuotationDetail'
import { Link } from 'react-router-dom';


const { Content } = Layout;

class CardTable extends React.Component {

    render() {
        return (
            <Card>
                <h1>{this.props.title}</h1>
                <div className={(this.props.isDashboard) ? 'table-container-dashboard' : 'table-container'}>
                    {
                        this.props.data.map((t) => {
                            return (
                                <Card style={{ marginTop: '10px' }}>
                                    <Row justify='space-between'>
                                        <div className="title-card">{`${this.props.title} ${t.no}#`}</div>
                                        <a href='QuotationDetail'><RightOutlined style={{ color: 'black' }} /></a>
                                    </Row>
                                </Card>
                            )
                        })
                    }
                </div>
                {
                (this.props.isDashboard) ?
                <Row style={{justifyContent: 'flex-end'}} >
                    <Button href={this.props.path} type="primary" shape="round" icon={<LogoutOutlined />} size={'small'}>More</Button>
                </Row>
                : null
                }
            </Card>
        );
    }
}
export default CardTable