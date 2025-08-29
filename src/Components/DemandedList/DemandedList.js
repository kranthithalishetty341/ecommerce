import { Col, Row } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";
import demandedList from '../../data/demanded_sarees.json';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import './DemandedList.css';

const DemandedList = ({filtered, parentData, setTitleCallBack}) => {
    // const { filtered } = props;
    const filteredList = filtered ? demandedList.splice(0, 8) : demandedList;

    console.log(parentData);

    const addToCart = (saree) =>{
        if(localStorage.getItem("Cart")){
            const cartDetails = JSON.parse(localStorage.getItem("Cart"));
            const index = cartDetails.findIndex(x=>x.id == saree.id);
            if(index > -1){
                cartDetails[index].count++;
            }else{
                saree.count = 1;
                cartDetails.push(saree)
            }
            localStorage.setItem("Cart" , JSON.stringify(cartDetails));
        }else{
            saree.count = 1
            const initialCart = [saree];
            localStorage.setItem("Cart" , JSON.stringify(initialCart));
        }
    }

    const GetTrigger = ()=>{
        console.log("firest");
        setTitleCallBack("Test got changed")
    }

    return (
        <div className="mt-45">
            {
                !filtered && (
                    <div className="breadcum">
                        <Link to={'/'} className="breadcum-title">Home</Link> <ArrowForwardIosIcon className="f-12" />
                        <span className="breadcum-title">Demanded Saree List</span>
                    </div>
                )
            }

            <div>
            <h2><Button onClick={GetTrigger}>Get Trigger</Button> == {parentData}</h2>
            </div>

            <Row className="demanded-section">
                {
                    filteredList.map(saree => (
                        <Col md={3} key={saree.id}>
                            <div className="cart-img-box">
                                <span className="discount">
                                    {saree.discount}
                                </span>
                                <img src={`${process.env.PUBLIC_URL}/${saree.image}`} className="demanded-saree" />
                                <div className="overlay_heart">
                                    <FavoriteBorderIcon className="favorite-icon" />
                                </div>
                                <div className="overlay">
                                    <Button variant="contained" className="add-to-cart-btn" onClick={()=>addToCart(saree)}>Add to Cart</Button>
                                </div>
                                <Row>
                                    <Col md={8}>
                                        <p className="saree-name">
                                            {saree.name}
                                        </p>
                                    </Col>
                                    <Col md={4} className="text-center">
                                        <p className="before-discount">Rs.{saree.before_discount}.00</p>
                                        <p className="color-red">Rs.{saree.price}.00</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default DemandedList;