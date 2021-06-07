import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './footer.scss';
import {
  Container, Row, Col, Button, Nav,
} from 'react-bootstrap';
import { TiSocialFacebook, AiOutlineTwitter, GrYoutube } from 'react-icons/all';

const Footer = () => {
  const [state, handleSubmit] = useForm('xjvjwerr');
  return (
    <footer className="bgdark text-white py-0">
      <Container>
        <Row className="overflow-hidden">
          <Col lg={6} className="py-10">
            <Row>
              <Col md={8}>
                <p>
                  Thanks to
                  {' '}
                  <a target="_blank" href="https://vitaliemelnic.tech" className="underline" rel="noreferrer">vmwhoami</a>
                  {' '}
                  {' '}
                  for the images used in this demo theme. Head over to
                  {' '}
                  {' '}
                  <a href="https://vitaliemelnic.tech" className="underline">their website</a>
                  {' '}
                  {' '}
                  to get these products.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="py-10">
            <Row className="justify-content-end">
              <Col lg={10}>
                <h4 className="eyebrow mb-2">Subscribe</h4>

                <form
                  className="input-group"
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xjvjwerr"
                  method="POST"
                >
                  <input
                    className="form-control form-control-lg"
                    placeholder="Email"
                    id="email"
                    aria-label="Subscribe"
                    type="email"
                    name="_replyto"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <div className="input-group-append">
                    <Button className="btn btn-white border" type="submit">Subscribe</Button>
                  </div>
                </form>
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col className="col-lg-10">
                <h4 className="eyebrow mt-4">Follow us</h4>
                <Nav className="nav-icons">
                  <a className="nav-link h4 text-white pl-0 " target="_blank" href="https://www.facebook.com/vmwhoami" rel="noreferrer"><TiSocialFacebook>f</TiSocialFacebook></a>
                  <a className="nav-link h4 text-white  pl-0 " target="_blank" href="https://twitter.com/vmwhoami" rel="noreferrer"><AiOutlineTwitter>t</AiOutlineTwitter></a>
                  <a className="nav-link h4 text-white  pl-0 " target="_blank" href="https://www.youtube.com/user/vmwhoiam/videos" rel="noreferrer"><GrYoutube>y</GrYoutube></a>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
