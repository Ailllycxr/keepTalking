import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, } from 'react-bootstrap';
import SignUp from './Signup';
import Login from './Login';
import Auth from '../utils/auth';

const AppNavbar = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Navbar layout */}
      <Navbar className={'navBarStyleOverwrite'}>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Keep Reacting and No One Gets Sued
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to='/scores'>Scores</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            {Auth.loggedIn() ? (
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar >

      {/* Modal Layout */}
      < Modal show={showModal} onHide={() => setShowModal(false)}>
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            {/* Choose between Login and Signup Form */}
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUp handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal >

    </>
  )
}

export default AppNavbar;