import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import "./Dashboard.css";
const Dashboard = () => {
    const notify = () => toast("Welcome.  :)");
    const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
  return (
    <div className='dashboard' onLoad={notify} data-theme={theme}>
        <ToastContainer position={'top-center'}/>
      <Sidebar />
      <NavbarMenu />
      <Container className='right-report-container'>
            <div>
            <Link to="/Dashbaord"><Button variant="secondary" className='mt-3 ml-2'>Today</Button></Link>
            <Link to="/Dashbaord/thisweek"><Button variant="outline-secondary" className='mt-3 mx-3'>This Week</Button></Link>
            <Link to="/Dashbaord/thismonth"><Button variant="outline-secondary" className='mt-3 mx-3'>This Month</Button></Link>
            <Link to="/Dashbaord/lastmonth"><Button variant="outline-secondary" className='mt-3 mx-3'>Last Month</Button></Link>
            <Link to="/Dashbaord/lastquarter"><Button variant="outline-secondary" className='mt-3 mx-3'>Last Quarter</Button></Link>
            <Link to="/Dashbaord/lastyear"><Button variant="outline-secondary" className='mt-3 mx-3'>Last Year</Button></Link>
            </div>
            <Row className='mt-3'>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of mobile numbers/emails viewed /downloaded (if used our portal)</Card.Title>
                            <br></br>
                            <h2>100</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JDs locked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JDs at interview stage</Card.Title>
                            <br></br>
                            <h2>133</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of successful closures</Card.Title>
                            <br></br>
                            <h2>50</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JD delivered/submitted but feedback pending from client</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of pending delivery submissions by user after locking the JDs</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JD rework</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>My user rating</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>My total payouts/incentives</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col> 
            </Row>
        </Container>
    </div>
  )
}

export default Dashboard