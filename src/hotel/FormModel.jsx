import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
const FormModel=({open,close,pay,payClose})=>{
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    number:"",
    address:"",
    terms:false
  });
const handleChange=(e)=>{
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
}
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (!form.checkValidity() === false) {
      //on Submit send The Data to Server 
      // with formData
      
      console.log(formData)
      close()
      
    }

    setValidated(true);
  };
  return (<>
      <Modal
        show={open}
        onHide={close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>fill Your Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid"> Name is Required</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="mail@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Invalid Email</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Phone No.</Form.Label>
            <Form.Control
              type="number"
              name="number"
              placeholder="xxxxxxxxxxxx"
              aria-describedby="inputGroupPrepend"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Number
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
       <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Address is required</Form.Control.Feedback>
        </Form.Group>


      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          name="terms"
          value={formData.terms}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" disabled={!formData.terms}>Proceed To Pay <i className="fa-arrow-right fa-solid"></i></Button>
    </Form>
   </Modal.Body>
 </Modal>
       <Modal
        show={pay}
        onHide={payClose}
        backdrop="static"
        keyboard={false}
      >
            <Modal.Header closeButton>
              <Modal.Title>Pay</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <div className="d-center flex-column p-2">
            <i className="display-1 fa-solid text-success fa-circle-check fa-2xl fa-beat"></i>
            Payment Done Thanks For Purchasing
          </div>
        </Modal.Body>
       </Modal>
    </>)
}
export default FormModel;