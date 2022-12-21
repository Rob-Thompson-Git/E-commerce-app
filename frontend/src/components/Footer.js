import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
    <footer>
        <Container fluid>
            <Row className="mt-5">
                <Col className="bg-dark text-white text-center py-5"> Qwiks | Copyright &copy; 2022 | Qwik, and Easy!</Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer;