import { Col, Row } from 'antd';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Breadcrumb from './Component/Breadcrumb';
import Header from './Component/HeaderMenu';
import Menubar from './Component/Menubar';
import index from './Page/index';
import Register from './Page/Register';
import Dashboard from './Page/Dashboard';



function App() {
  // const [isLogin, setLogin] = useState(false)
  return (
    <>
    <Header />
    <div style={{paddingTop: '64px'}}>
      <Switch>
        <Route exact path='/' component={index} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Dashboard' component={Dashboard} />
      </Switch>
      </div>
      {/* <Header />
      <Row>
        <Col flex='200px' style={{ paddingTop: '64px' }}>
          <Menubar />
        </Col>
        <Col flex='auto' style={{ paddingTop: '64px' }}>
          <Breadcrumb />
        </Col>
      </Row> */}
    </>
  );
}

export default App;
