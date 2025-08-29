import { Col, Row } from "react-bootstrap";
import './Category.css';

const Category = () => {
    const catergoryList = [
        { name: 'Gifting', image: "/category/1.png" },
        { name: 'Daily Wear', image: "/category/2.png" },
        { name: 'Festive', image: "/category/3.png" },
        { name: 'Party Wear', image: "/category/4.png" }
    ]

    return (
        <Row className="shop-category-section">
            {catergoryList.map((ele, key) => (
                <Col md={3} key={key}>
                    <div className="category-card catergory-image">
                        <img src={ele.image} className="category-saree" alt={ele.name} />
                        <div className="overlay-effect"></div>
                        <p className="category-name">{ele.name}</p>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default Category;