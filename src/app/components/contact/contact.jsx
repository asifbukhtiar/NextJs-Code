"use client"

import './contact.css'
import contact from "../../assets/contact.jpg";
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contact() {
    return(
        <>
            <div className="contactWrapper" id="contact">
                <div className="parentContact">
                    <div className="childContact1">

                        <Form className="contactForm">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '150px' }}
                                />
                            </Form.Group>

                            <br/>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="childContact2">
                        <p className="text-center contactImgWrapper">
                            <Image className="contactImg" src={contact} alt="contact"/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}