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
import ODashboard from './Page/OP/Dashboard';
import OTasks from './Page/OP/Tasks';



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
            <Route exact path='/OP/Dashboard' component={ODashboard} />
            <Route exact path='/OP/Tasks' component={OTasks} />
          </Switch>
        </div>
      </Col>
      </Row>
    </>
  );
}

export default App;
