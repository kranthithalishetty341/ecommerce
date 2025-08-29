import { Col, Row } from "react-bootstrap";
import exploreList from '../../data/explore_list.json';
import './ExploreSaree.css'

const ExploreSaree = () => {
    return (
        <Row className="explore-section" >
            {
                exploreList.map((ele, key) => (
                    <Col md={2} key={key}>
                        <div className="image-gallery">
                            <img src={ele.img} />
                            <p className="category-name">{ele.name}</p>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}

export default ExploreSaree;