import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import logo from './assets/logo.jpg';
const Header = () => {
    const navigate = useNavigate();
    const goToCart = () => {
        navigate('/cart');
    }

    return (
        <header className="sticky-header">
            {/* <img src="https://laxmipati.com/cdn/shop/files/09_1.png?v=1753728997&width=240" /> */}

            {/* <Link to={'/ContactUs'}>
                <button>
                    Contact Us
                </button>
            </Link>
            <Link to={'/AboutUs'}>
                <button>
                    About Us
                </button>
            </Link> */}

            {/* <Container> */}
            <Row>
                <Col md={3}>
                    {/* <span>Srivani Saree</span> */}
                    <img src="/logo_white.jpg" alt="Logo" className="logo" />
                    {/* <img src="/srivani_logo.png" alt="Logo" className="logo"/> */}
                    {/* <img src="https://laxmipati.com/cdn/shop/files/09_1.png?v=1753728997&width=240" /> */}
                </Col>
                <Col md={7} className="header-category-texts">
                    <span className="header-category">New Arrivals</span>
                    <span className="header-category">Soft Slik Saree</span>
                    <span className="header-category">Banarasi Slik Saree</span>
                    <span className="header-category">Cotton Slik Saree</span>
                    <span className="header-category">Printed Slik Saree</span>
                </Col>
                <Col>
                    <FavoriteBorderIcon className="header-icons" />
                    <SearchIcon className="header-icons" />
                    <ShoppingCartOutlinedIcon className="header-icons" onClick={() => { goToCart() }} />
                    {/* <i class="fa fa-heart-o" aria-hidden="true"></i> */}
                </Col>
            </Row>
        </header >
    )
}

export default Header;