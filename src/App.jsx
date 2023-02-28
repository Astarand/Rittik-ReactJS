import {useState} from 'react'
import './App.css'
import {Button, Card, Nav, Container, Navbar, NavDropdown, Stack} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from "typed.js";
import {useEffect, useRef} from "react";
import tab from "bootstrap/js/src/tab.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Simplified", "Automated", "Optimized"],
            startDelay: 600,
            typeSpeed: 300,
            backDelay: 300,
            backSpeed: 300,
            smartBackspace: true,
            showCursor: true,
            loop: true,
        })
    })


    const [count, setCount] = useState(0)

    return (
        <Container>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="src/assets/Images/icon-new.png" alt="Logo" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <NavDropdown className="navbar-link" title="NEO" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" className="drop-item">NEO >> Features</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="navbar-link" title="FAQ" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" className="drop-item">What is Netting?</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row>
                <Col xs={12} md={8}>
                    <h4 className="hero-head">Blockchain based</h4>
                    <h2 className="hero-con">FX Netting</h2>
                    <h2 className="hero-slide"><span ref={el}></span></h2>
                    <p className="hero-det">for the new generation treasury.</p>
                    <Button>Book a Demo</Button>
                </Col>
                <Col xs={12} md={4} className="globe">
                    <img src="src/assets/Images/Landing-1-981x1024.png" className="landing"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className="sec-2">
                    <h1 className="slogan">Introducing NEO: Netting Efficiency Optimizer</h1>
                    <h4 className="sec-2-con"><img src="src/assets/Images/bulb.png" className="bulb"/>NEO enables
                        multilateral businesses optimize intercompany cross border payment transactions . </h4>
                </Col>
            </Row>
            <Row className="sec-3">
                <Col xs={12} md={4}>
                    <div className="icon-holder"></div>
                    <h4 className="content-head">Fast & Easy Onboarding</h4>
                    <p className="content">Netting cycle start right when you sign up</p>
                </Col>
                <Col xs={12} md={4}>
                    <div className="icon-holder"></div>
                    <h4 className="content-head">Netting Efficiency Optimization</h4>
                    <p>Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling.
                        Preference he he at travelling.</p>
                </Col>
                <Col xs={12} md={4}>
                    <div className="icon-holder"></div>
                    <h4 className="content-head">Regulatory Compliance</h4>
                    <p className="content">Netting regulations from all countries to be supported</p>
                </Col>
                <Col xs={12} md={4}>
                    <div className="icon-holder"></div>
                    <h4 className="content-head">Unparalleled User Experience</h4>
                    <p className="content">Human centric solution to make netting a seamless immersed process.</p>
                </Col>
                <Col xs={12} md={4}>
                    <div className="icon-holder"></div>
                    <h4 className="content-head">Blockchain transaction ledger</h4>
                    <p className="content">Blockchain based solution for utmost transparency and trust</p>
                </Col>
                <Col xs={12} md={4}>
                    <div className="icon-holder"></div>
                    <h4 className="content-head">Automated Reconciliation</h4>
                    <p className="content">Automatic and intelligent netting, settlement and dispute resolution</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <h1 className="slogan1">Who We Are</h1>
                </Col>
                <Col xs={12} md={3}>
                    <img src="src/assets/Images/Asset-1-1024x984.png" className="sec4-img"/>
                </Col>
                <Col xs={12} md={4}>
                    <h2 className="slogan2">A Fintech leveraging technology to simplify global commerce!</h2>
                </Col>
                <Col xs={12} md={5}>
                    <p className="sec4-txt">We are a fintech company with aspirations to change the world of global
                        commerce. We plan to bring the best of technology innovations to create unparalleled user
                        experience for our customers.</p>
                </Col>
            </Row>
            <Row className="sec-5">
                <Col xs={6} md={3}>
                    <h1>100%</h1>
                    <h3>Regulatory Compliance Goal</h3>
                </Col>
                <Col xs={6} md={3}>
                    <h1>2+</h1>
                    <h3>Patent Applications Pending</h3>
                </Col>
                <Col xs={6} md={3}>
                    <h1>60+</h1>
                    <h3>Countries Covered</h3>
                </Col>
                <Col xs={6} md={3}>
                    <h1>35+</h1>
                    <h3>Years Professional Experience</h3>
                </Col>
            </Row>
            <Row className="sec-6">
                <Col xs={12} md={12}>
                    <h4>Why us</h4>
                </Col>
                <Col xs={12} md={6}>
                    <h2>We know business banking</h2>
                    <p>Our founding team has spent years helping businesses navigate and optimize global banking. <br/>
                        <br/>
                        With over a decade at big banks helping build out the future of Corporate Treasury creating the
                        algorithms and platform that drove cross-border liquidity management at largest corporates that
                        include FANG and other global businesses, we are on a mission to help streamline global
                        commerce.</p>
                    <Button>Explore More</Button>
                </Col>
                <Col xs={12} md={6}>
                    <img src="src/assets/Images/white-bg-1024x709.png" className="sec-6-img"/>
                </Col>
            </Row>
            <Row className="sec-7">
                <Col xs={12} md={12}>
                    <h1 className="slogan1">Our Main Goals</h1>
                </Col>
                <Col xs={12} md={6}>
                    <img src="src/assets/Images/goals.png"/>
                </Col>
                <Col xs={6} md={6}>
                    <Stack gap={4}>
                        <div>
                            <h3>Quick and easy onboarding</h3>
                            <p>Getting started with NEO is a cakewalk with no changes required to your existing systems
                                and processes. NEO supports plug and play integration with all major ERPs and banking
                                systems</p>
                        </div>
                        <div>
                            <h3>Optimized efficient netting solution</h3>
                            <p>Shotest netting cycles. 3x value over existing netting solutions, based on the customer's
                                history and expected future cash flows - allows netting cycles to be most optimal (v/s
                                monthly cycles). Aided by Machine learning algorithms and appropriate human checks</p>
                        </div>
                        <div>
                            <h3>Secure and transparent settlement</h3>
                            <p>NEO comes with a dashboard to help you monitor netting settlements with utmost
                                transparency. Our systems keep pace with changing currency conversion rates and country
                                specific regulations, to get you error-free netting solution.</p>
                        </div>
                        <div>
                            <h3>Regulatory Complaint</h3>
                            <p>Easily customize every aspect of your list from widget styles but also you can give
                                custom colors to each item as well.</p>
                        </div>
                    </Stack>
                </Col>
            </Row>
            <Row className="sec-8">
                <Col xs={12} md={12}>
                    <h1>Our Future clients will say :</h1>
                </Col>
                <Col xs={12} md={7}>
                    <Stack direction="horizontal" gap={3}>
                        <div className="review-box">
                            <p>"Blockchain keeps the data secure and transactions transparent."</p>
                        </div>
                        <div className="review-box">
                            <p>"NEO has been a boon to our treasury, with fast implementation and us up and running NEO
                                has saved us 100s of hours, worries of regulations, compliance planning and last but not
                                the least Tolls we used to pay to big bank of the order of 10s of thousands of
                                dollars."</p>
                        </div>
                    </Stack>
                </Col>
                <Col xs={12} md={5}>
                </Col>
            </Row>
            <Row className="sec-9">
                <Col xs={12} md={12}>
                    <h1>Our Partners</h1>
                </Col>
                <Col xs={6} md={2}>
                    <img src="src/assets/Images/msft.png" className="ic-1"/>
                </Col>
                <Col xs={6} md={2}>
                    <img src="src/assets/Images/sap-partner.jpg" className="ic-2"/>
                </Col>
                <Col xs={12} md={6}>
                    <img src="src/assets/Images/download.png" className="ic-3"/>
                    <img src="src/assets/Images/y-combi.png" className="ic-4"/>
                </Col>
                <Col xs={12} md={2}>
                    <img src="src/assets/Images/download-1.png" className="ic-5"/>
                </Col>
            </Row>
            <Row className="sec-10">
                <Col xs={12} md={8}>
                    <h3>Come Join Our Community</h3>
                    <p>Please join our <b>anonymous, private and secured community,</b> to discuss regulations, web3,
                        future of our product, and more.</p>
                    <div className="icon-holder1"></div>
                </Col>
                <Col xs={12} md={4}>
                    <img src="src/assets/Images/Pooja-1.png"/>
                </Col>
            </Row>
            <div className="end-line"></div>
            <Row className="footer">
                <Col xs={12} md={12}>
                    <FontAwesomeIcon icon="fa-brands fa-twitter"/>
                </Col>
                <Col xs={6} md={12}>
                    <p><strong>New York | Mumbai | Bengaluru | London (coming soon )</strong></p>
                </Col>
                <Col xs={12} md={12}>
                    <p>© 2022 Credain</p>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
