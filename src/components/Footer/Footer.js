import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import './footer.scss';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import FormInput from '../formInput/form-input';
import SocialLinks from './socialLinks';
import { switchSubscribed } from '../../redux/ui/uiActions';
import useFormer from '../useForm/useForm';

const Footer = () => {
  const { handleChange } = useFormer();
  const [state, handleSubmit] = useForm('xjvjwerr');
  const subscribed = useSelector((state) => state.uiReducer.subscribed);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.succeeded) {
      dispatch(switchSubscribed());
    }
  }, [state.succeeded]);

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
                <h4 className="eyebrow mb-2">{subscribed ? 'Subscribed' : 'Subscribe'}</h4>
                <form
                  className="input-group"
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xjvjwerr"
                  method="POST"
                >
                  {subscribed ? <p className="text-upperase">Thank you for your subscription!</p>
                    : (
                      <>
                        <FormInput
                          inputClass="form-control form-control-lg"
                          groupClass="w-75 d-flex"
                          placeholder="Subscribe Email"
                          id="Subscribe"
                          aria-label="Subscribe"
                          type="Subscribe"
                          name="_replyto"
                          handleChange={handleChange}
                        />
                        <div className="input-group-append">
                          <Button className="btn btn-white border" type="submit">Subscribe</Button>
                        </div>
                      </>
                    )}

                </form>
              </Col>
            </Row>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
