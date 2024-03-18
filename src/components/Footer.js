import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <ul className="fList">
                            <li className="fListItem">Khách sạn </li>
                            <li className="fListItem">Home stay </li>
                            <li className="fListItem">Resorts </li>
                            <li className="fListItem">Villas</li>
                            <li className="fListItem">Camping</li>
                        </ul></Col>
                    <Col>
                        <ul className="fList">
                            <li className="fListItem">Tất cả các điểm đến </li>
                            <li className="fListItem">Tìm chuyến bay</li>
                            <li className="fListItem">Thuê xe </li>
                            <li className="fListItem">Đặt nhà hàng </li>
                            <li className="fListItem">Ưu đãi </li>
                        </ul>
                    </Col>
                    <Col>
                    <ul className="fList">
                        <li className="fListItem">Về chúng tôi</li>
                        <li className="fListItem">Tuyển dụng</li>
                        <li className="fListItem">Dịch vụ khách hàng</li>
                        <li className="fListItem">Trợ giúp đối tác</li>
                    </ul></Col>

                    <div className="fText">Copyright © 2024 VNTravel.</div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;