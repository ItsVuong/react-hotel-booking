import "./header.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { faBed, faCalendar, faCalendarDay, faLocation, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from '../imgs/180921-2-2000-roo-LTHA.jpg.thumb.1920.1920.jpg';
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { Calendar, DateRange, DateRangePicker } from 'react-date-range';
import { format } from "date-fns";
import { useEffect, useState } from "react";

const Header = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [searchInput, setSearchInput] = useState();
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    const handleOption = (type, operator) => {
        setOption(prev => {
            return { ...prev, [type]: operator === "i" ? option[type] + 1 : option[type] - 1 }
        })
    }

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    }

    useEffect(() => {
        console.log(searchInput);
    }, [searchInput]);

    return (
        <div className="header">
            <div className="headerContainer">
                <div>
                    <Image src={img1} className="frontImage" fluid />
                </div>
                <div className="headerSearchContainer">
                    <div className="headerSearch">
                        <Container>
                            <Row>
                                <Col md={12} lg={3}>
                                    <div className="headerSearchItem">
                                        <FontAwesomeIcon icon={faLocation} className="headerIcon" />
                                        <input onChange={handleSearchInput} className="headerSearchInput" type="text" placeholder="Địa điểm" />
                                    </div>
                                </Col>
                                <Col md={12} lg={4}>
                                    <div className="headerSearchItem">
                                        <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                                        <span onClick={() => setOpenCalendar(!openCalendar)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")}  đến ngày  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                        {openCalendar && <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className="date"
                                        />}
                                    </div>
                                </Col>
                                <Col md={12} lg={4}>
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                    <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${option.adult} Người lớn - ${option.children} Trẻ em - ${option.room} Phòng`}</span>
                                    {openOption && <div className="optionBox">
                                        <div className="optionItem">
                                            <span className="optionText">Người lớn</span>
                                            <div>
                                                <button className="optionButton" onClick={() => handleOption("adult", "d")} disabled={option.adult <= 1}>-</button>
                                                <span className="optionNumber">{option.adult}</span>
                                                <button className="optionButton" onClick={() => handleOption("adult", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Trẻ em</span>
                                            <div>
                                                <button className="optionButton" onClick={() => handleOption("children", "d")} disabled={option.children <= 0}>-</button>
                                                <span className="optionNumber">{option.children}</span>
                                                <button className="optionButton" onClick={() => handleOption("children", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Phòng</span>
                                            <div>
                                                <button className="optionButton" onClick={() => handleOption("room", "d")} disabled={option.room <= 1}>-</button>
                                                <span className="optionNumber">{option.room}</span>
                                                <button className="optionButton" onClick={() => handleOption("room", "i")}>+</button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                </Col>
                                <Col lg={1} md={12}>
                                <div className="">
                                    <Button variant="primary" style={{width: "100%", height: "45px"}}><FontAwesomeIcon icon={faSearch}/></Button>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;