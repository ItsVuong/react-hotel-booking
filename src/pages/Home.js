import MyNavbar from "../components/Navbar";
import "./home.css"
import img1 from '../imgs/180921-2-2000-roo-LTHA.jpg.thumb.1920.1920.jpg';
import Header from "../components/Header";
import PopularLocation from "../components/Popular";
import PropertyList from "../components/Property";
import Footer from "../components/Footer";
import Email from "../components/Email";
export default function Home() {
    return (
        <div>
            <div className="banner-area" style={{ backgroundImage: img1 }}>
                <MyNavbar />
                <Header />
                <div className="homeContainer">
                    <PopularLocation />
                    <PropertyList />
                    <Email/>
                    <Footer/>
                </div>
            </div>
            
        </div>

    )
}