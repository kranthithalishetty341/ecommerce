import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-details'>
                <Row>
                    <Col md={4}>
                        <h3>OUR COLLECTION</h3>
                        <p>New Arrivals</p>
                        <p>Soft Slik Saree</p>
                        <p>Banarasi Slik Saree</p>
                        <p>Cotton Slik Saree</p>
                        <p>Printed Slik Saree</p>
                    </Col>
                    <Col md={4}>
                        <h3>
                            INFORMATION
                        </h3>
                        <p>Terms and Policy</p>
                        <p>Return and Exchange Policy</p>
                        <p>About Us</p>
                        <p>Shipping Policy</p>
                        <p>Contact Us</p>
                    </Col>

                    <Col md={4}>
                        <h3>
                            EVERYTHING STORE
                        </h3>
                        <p>
                            <LocationOnOutlinedIcon className='mr-15' />
                            <span>20/3, Punjan Plaza, Nr. Zone Office, Model Town, Surat, 394210.</span>
                        </p>
                        <p>
                            <span>Monday - Saturday: 10:00AM to 8PM, IST </span>
                        </p>
                        <p>
                            <CallOutlinedIcon className='mr-15' />
                            <span>+91 2872873298</span>
                        </p>
                        <p>
                            <MailOutlinedIcon className='mr-15' />
                            <span>support@srivanisaree.com</span>
                        </p>
                        <div>
                            <FacebookOutlinedIcon className='mr-15' />
                            <InstagramIcon className='mr-15' />
                            <YouTubeIcon />
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className='footer-company'>
                <Col md={12}>
                    © 2025 SrivaniSarees
                </Col>
            </Row>
        </footer>

    )
}

export default Footer;