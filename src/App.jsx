import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(1)


  return (
    <>
    <Row>
      <Col>
      <Card price="1800" title="product"  text="New Product Avilable For Sale" src="https://i.pinimg.com/736x/ac/a8/d6/aca8d6d0bec30ef6cfe41ddf35c92d17.jpg " />
      </Col >
      <Col>
      <Card price="1700" title="product 2"   text="New Product Avilable For Sale" src="https://cdn1.ozone.ru/s3/multimedia-t/6107619545.jpg" />
      </Col>
      <Col>
      <Card price="1600" title="product 3"   text="New Product Avilable For Sale" src="https://i.pinimg.com/736x/ac/a8/d6/aca8d6d0bec30ef6cfe41ddf35c92d17.jpg " />
      </Col>
      
    </Row>
      
    </>
  )
}

export default App
