# keepTalking

## Technology Used

| Technology Used  |                                           Resource URL                                            |
| ---------------- | :-----------------------------------------------------------------------------------------------: |
| Git              |                           [https://git-scm.com/](https://git-scm.com/)                            |
| Tabulator Tables | [https://www.npmjs.com/package/tabulator-tables/](https://www.npmjs.com/package/tabulator-tables) |
| Sequelize        |           [https://www.npmjs.com/package/mysql2/](https://www.npmjs.com/package/mysql2)           |
| MySQL2           |                           [https://git-scm.com/](https://git-scm.com/)                            |
| Faker            | [https://www.npmjs.com/package/@faker-js/faker/](https://www.npmjs.com/package/@faker-js/faker/)  |

## Description

This is an interactive game built with React. Deployed link: https://evening-chamber-43103-8afc86137a8c.herokuapp.com

## Code Refactor Example

```Javascript (nav bar)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab,} from 'react-bootstrap';
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
            {Auth.loggedIn() ? (
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Modal Layout */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
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
      </Modal>

    </>
  )
}

export default AppNavbar;

```

```Javascript (Components)
const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, {loading }] = useMutation(LOGIN_USER);

  //Update value of input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  //Subit Form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData }
      });
      //Check if data was retrieved
      if (!data) {
        throw new Error('something went wrong!');
      }

      Auth.login(data.login.token);
      console.log(data)
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Login Error
        </Alert>

        {/* Email Input */}
        <Form.Group>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required />
          <Form.Control.Feedback type='invalid'>email required</Form.Control.Feedback>
        </Form.Group>

        {/* Password Input */}
        <Form.Group>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>password required</Form.Control.Feedback>
        </Form.Group>
        {/* Only clickable when fields have content */}
        <Button
          disabled={!(userFormData.email && userFormData.password) || loading}
          type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

```

## Usage

## Learning Points

1. react
2. components

## Author Info

### Xiaoran Cai

- [Github](https://github.com/Aillycxr)

### Timothy Su

- [Github](https://github.com/timothysu1)

### Derek Stanley-Howarth

- [Github](https://github.com/DSHowarth)

## Credits

- W3school| [https://www.w3schools.com](https://www.w3schools.com)

## License

Copyright (c). All rights reserved.
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
