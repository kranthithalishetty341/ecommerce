import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Col, Row, Table } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

import './Cart.css';

const Cart = () => {
    const getCartDetails = JSON.parse(localStorage.getItem("Cart"));
    
    const getTotalAmount = () => {
        const totalPrice = getCartDetails.reduce((acc, curr)=>{
            return acc + curr.price * curr.count;
        }, 0)
        return totalPrice;
    }


    return (
        <div className="mt-45">
            <div className="breadcum">
                <Link to={'/'} className="breadcum-title">Home</Link> <ArrowForwardIosIcon className="f-12" />
                <span className="breadcum-title">Cart</span>
            </div>

            <Row className="p-5">
                <Col md={8}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getCartDetails.map(res => (
                                    <tr key={res.id}>
                                        <td>
                                            <div className="display-flex">
                                                <img src={`${process.env.PUBLIC_URL}/${res.image}`} className="cart-img" />
                                                <span>
                                                    {res.name}
                                                </span>
                                            </div>

                                        </td>
                                        <td>
                                            {res.price}
                                        </td>
                                        <td>
                                        <RemoveCircleOutlineOutlinedIcon disabled={res.count == 1}/> {res.count}  <AddCircleOutlineOutlinedIcon 
                                        onClick={()=>
                                            (
                                                console.log("addition qty here")
                                            )
                                        }/>
                                        </td>
                                        <td>{res.price * res.count}</td>
                                        <td>
                                            <DeleteIcon />
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    Total Amount:  {getTotalAmount()}
                </Col>
            </Row>

            <div>
            </div>
        </div>
    )
}

export default Cart;