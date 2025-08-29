
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import './Layout.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import ExploreSaree from "../ExploreSaree/ExploreSaree";
import DemandedList from "../DemandedList/DemandedList";
import Category from "../Category/Category";
import { useState } from "react";

const Layout = () => {
    const [title, setTitle] = useState("From Parent");
    const navigate = useNavigate();
    const viewAll = () => {
        navigate('/demandedList');
    }


    const handleChildData = (data) => {
        setTitle(data);
    };




    return (
        <div className="mt-45">
            <ImageCarousel />
            <div className="sections-title">
                <h5 className="font-bold">EXPLORE SRIVANI</h5>
            </div>
            <ExploreSaree />
            <div className="sections-title">
                <h5 className="font-bold">IN DEMANDED == {title}</h5>
            </div>
            <DemandedList filtered={"true"} parentData={title} setTitleCallBack={(data) => {
                setTitle(data);
            }} />
            <div className="text-center">
                <Button variant="contained" onClick={() => viewAll()} className="viewall-btn">View All</Button>
            </div>
            <div className="sections-title mt-30">
                <h5 className="font-bold">SHOP BY CATEGORY</h5>
            </div>
            <Category />
            <div className="sections-title mt-30">
                <h5>Our Saree Video Collection</h5>
            </div>
            <div className="mb-15">
                <YouTubeEmbed />
            </div>
            <div className="text-center mb-4">
                <Button variant="contained" className="viewall-btn">View More</Button>
            </div>
        </div>
    )
}

export default Layout;