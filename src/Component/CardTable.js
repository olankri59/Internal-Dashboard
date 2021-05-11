import { Layout, Row, Card } from 'antd';
import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import QuotationDetail from '../Page/BUCR/QuotationDetail'


const { Content } = Layout;

class CardTable extends React.Component {

    render() {
        return (
            <Card>
                <h1>{this.props.title}</h1>
                <div className={(this.props.isDashboard)? 'table-container-dashboard': 'table-container'}>
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
            </Card>
        );
    }
}
export default CardTable