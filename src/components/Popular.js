import { Container, Row, Col } from "react-bootstrap";
import "./popular.css"
const PopularLocations = () => {
    const locationList = [
        {
            name: "Hà Nội",
            picture: "https://vcdn1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ",
            activities: 123
        },
        {
            name: "Đà Nẵng",
            picture: "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg",
            activities: 123
        },
        {
            name: "Tp Hồ Chí Minh",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DJI_0550-HDR-Pano.jpg/1200px-DJI_0550-HDR-Pano.jpg",
            activities: 123
        },
        {
            name: "Hội An",
            picture: "https://vitracotour.com/wp-content/uploads/2022/03/hoi-an-quang-nam-vntrip-1.jpg",
            activities: 123
        },
        {
            name: "Ninh Bình",
            picture: "https://ik.imagekit.io/tvlk/blog/2022/12/du-lich-ninh-binh-1.jpg?tr=dpr-2,w-675",
            activities: 123
        },
        {
            name: "Hạ Long",
            picture: "https://image.nhandan.vn/w800/Uploaded/2024/igpcvcvjntc8510/2023_12_07/halongbay-3501.jpg.webp",
            activities: 123
        },

    ];
    return (
        <div>
            <h2>Địa điểm nổi bật</h2>
            <div className="location">
                <Container>
                    <Row>
                        {locationList.map((location) => {
                            return (
                                <Col md={4}>
                                    <div className="featuredItem">
                                        <img
                                            src={location.picture}
                                            alt=""
                                            className="locationdImg"
                                        />
                                        <div className="locationTitle">
                                            <h2>{location.name}</h2>
                                            <h5>{location.activities} hoạt động</h5>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default PopularLocations;