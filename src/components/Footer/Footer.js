import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './footer.module.css'
// import PropTypes from 'prop-types';

const Footer = () => (
  <footer className={`${style.bgdark} text-white py-0`}>
    <Container>
      <Row className="overflow-hidden">
        <Col lg={6} className="py-10">
          <Row>
            <Col md={8}>
              <p>Thanks to
                <a target="_blank" href="https://vitaliemelnic.tech" className="underline">vmwhoami</a>
                for the images used in this demo theme. Head over to
                <a href="https://vitaliemelnic.tech" className="underline">their website</a>
                to get these products.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Footer.propTypes = {

// };

export default Footer;




  // <div class="col-lg-6 py-10">
  //   <div class="row">
  //     <div class="col-md-8">
  //       <p>Thanks to <a href="https://www.opumo.com" class="underline">Opumo</a> for the images used in this demo theme. Head over to <a href="https://www.opumo.com" class="underline">their store</a> to get these products.</p>
  //     </div>
  //   </div>
  //   <div class="row">
  //     <div class="col-md-10">
  //       <h4 class="eyebrow mb-2">Quick Links</h4>
  //       <ul class="list-group list-group-columns">
  //         <li class="list-group-item"><a href="about.html">About</a></li>
  //         <li class="list-group-item"><a href="contact.html">Contact Us</a></li>
  //         <li class="list-group-item"><a href="faq.html">FAQ</a></li>
  //         <li class="list-group-item"><a href="blog.html">Blog</a></li>
  //         <li class="list-group-item"><a href="text.html">Terms of Use</a></li>
  //       </ul>
  //     </div>
  //   </div>
  // </div>
  // <div class="col-lg-6 py-10">
  //   <div class="row justify-content-end">
  //     <div class="col-lg-10">
  //       <h4 class="eyebrow mb-2">Subscribe</h4>
  //       <div class="input-group">
  //         <input type="text" class="form-control form-control-lg" placeholder="Email" aria-label="Subscribe" aria-describedby="button-addon2">
  //           <div class="input-group-append">
  //             <button class="btn btn-white" type="button" id="button-addon2">Subscribe</button>
  //           </div>
  //               </div>
  //       </div>
  //     </div>
  //     <div class="row justify-content-end">
  //       <div class="col-lg-10">
  //         <h4 class="eyebrow mb-2">Follow us</h4>
  //         <nav class="nav nav-icons">
  //           <a class="nav-link" href="#!"><i class="icon-facebook-o"></i></a>
  //           <a class="nav-link" href="#!"><i class="icon-twitter-o"></i></a>
  //           <a class="nav-link" href="#!"><i class="icon-youtube-o"></i></a>
  //         </nav>
  //       </div>
  //     </div>
  //   </div>

