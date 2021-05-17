import { Col, Row } from 'antd';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Breadcrumb from './Component/Breadcrumb';

import Header from './Component/HeaderMenu';
import Menubar from './Component/Menubar';
import index from './Page/index';
import Register from './Page/Register';

import BDashboard from './Page/BUCR/Dashboard';
import BTasks from './Page/BUCR/Tasks';
import BQuotation from './Page/BUCR/Quotation';
import BQuotationDetail from './Page/BUCR/QuotationDetail';
import BPurchaseOrder from './Page/BUCR/PurchaseOrder';
import ODashboard from './Page/OP/Dashboard';
import OTasks from './Page/OP/Tasks';
import OTasksDetail from './Page/OP/TasksDetail';
import OQuotation from './Page/OP/Quotation';
import OClients from './Page/OP/Clients';
import OClientsdetail from './Page/OP/Clientsdetail';
import OQuotationdetail from './Page/OP/Quotationdetail';
// import OAgent from './Page/OP/Agent';



function App() {
  // const [isLogin, setLogin] = useState(false)
  return (
    <>
      <Header />
      <Row>
        <Col flex='200px'>
          <Menubar />
        </Col>
        <Col flex='auto'>
          <div style={{ paddingTop: '64px' }}>
            <Switch>
              <Route exact path='/' component={index} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/BUCR/Dashboard' component={BDashboard} />
              <Route exact path='/BUCR/Tasks' component={BTasks} />
              <Route exact path='/BUCR/Quotation' component={BQuotation} />
              <Route exact path='/BUCR/QuotationDetail' component={BQuotationDetail} />
              <Route exact path='/BUCR/PurchaseOrder' component={BPurchaseOrder} />
              <Route exact path='/OP/Dashboard' component={ODashboard} />
              <Route exact path='/OP/Tasks' component={OTasks} />
              <Route exact path='/OP/TasksDetail' component={OTasksDetail} />
              <Route exact path='/OP/Quotation' component={OQuotation} />
              <Route exact path='/OP/Clients' component={OClients} />
              <Route exact path='/OP/Clientsdetail' component={OClientsdetail} />
              <Route exact path='/OP/Quotationdetail' component={OQuotationdetail} />
              {/* <Route exact path='/OP/Agent' component={OAgent} /> */}
            </Switch>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
