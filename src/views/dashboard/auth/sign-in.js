import React from 'react'
import {Row,Col,Image,Form,Button,ListGroup,} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import Card from '../../../components/Card'

// img
import logoPrev from     '../../../assets/images/auth/logo-prev-nobg.png'
import videoBack from     '../../../assets/images/auth/videoback.mp4'

const SignIn = () => {
   let history =useHistory()
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">            
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
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
                              <h2 className="mb-2 text-center">Acesso</h2>
                              <p className="text-center">Bem vindo ao portal PrevLife</p>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="username" className="">Usuário</Form.Label>
                                          <Form.Control type="username" className="" id="email" aria-describedby="username" placeholder=" "/>
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Senha</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password" placeholder=" "/>
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-3">
                                          <Form.Check.Input type="checkbox"  id="customCheck1"/>
                                          <Form.Check.Label htmlFor="customCheck1">Lembrar</Form.Check.Label>
                                       </Form.Check>
                                       <Link to="/auth/recoverpw">Esqueci a senha</Link>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button  onClick={() => history.push('/dashboard')} type="button" variant="btn btn-primary">Entrar</Button>
                                 </div>
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

export default SignIn
