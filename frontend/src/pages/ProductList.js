import SortOptions from "../components/SortOptions";
import ListedProduct from "../components/ListedProduct"
import PaginComponent from "../components/PaginComponent";
import AttributesFilter from "../components/queryResults/AttributesFilter";
import CategoryFilter from "../components/queryResults/CategoryFilter"
import PriceFilter from "../components/queryResults/PriceFilter";
import RatingFilter from "../components/queryResults/RatingFilter";
import { Col, Row, ListGroup, Container, Button} from "react-bootstrap";

const ProductList = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <SortOptions />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <PriceFilter />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <RatingFilter />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <CategoryFilter />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <AttributesFilter />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">Primary</Button>
                            <Button variant="danger">Danger</Button>
                        </ListGroup.Item>
                       
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <ListedProduct />
                    <PaginComponent />

                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;