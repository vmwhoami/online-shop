import React from 'react';
import { TiSocialFacebook, AiOutlineTwitter, GrYoutube } from 'react-icons/all';
import { Row, Col, Nav } from 'react-bootstrap';

const SocialLinks = () => (
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
);

export default SocialLinks;
