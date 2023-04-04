import React from 'react'
import {Row,Col,Image,Form,Button} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import Card from '../../../components/Card'



// img
import auth2 from '../../../assets/images/auth/02.png'
import logoPrev from "../../../assets/images/auth/logo-prev-nobg.png";
import videoBack from "../../../assets/images/auth/videoback.mp4";
const Recoverpw = () => {
   let history =useHistory()
   return (
      <>
         <section className="recoverpw-content">
            <Row className="m-0 align-items-center bg-white vh-100">
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                           <Card.Body>
                              <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                                 <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                                 </svg>
                                 <h4 className="logo-title ms-3">PrevLife</h4>
                              </Link>
                              <h2 className="mb-2">Esqueci Senha</h2>
                              <p>Digite seu e-mail e nós enviaremos as instruções de como resetar sua senha.</p>
                              <Form>
                                 <Row>
                                    <Col lg="12" className="col-lg-12">
                                       <Form.Group  className="floating-label">
                                          <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
                                          <Form.Control type="email" className="form-control" id="email" aria-describedby="email" placeholder=" "/>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <Button onClick={() => history.push('/auth/sign-in')} className="mt-3" type="button" variant="primary">Enviar</Button>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <div className="sign-bg">
                     <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                           <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF"/>
                           <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF"/>
                           <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF"/>
                           <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF"/>
                        </g>
                     </svg>
                  </div>
               </Col>
               <Col md="6" className="d-md-block d-none p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={logoPrev} className="imageLogo"/>
                  <video className='background-video' autoPlay loop muted>
                     <source src={videoBack} type='video/mp4' />
                  </video>
               </Col>
            </Row>
         </section>
      </>
   )
}

export default Recoverpw
