import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
    const banners = useSelector((state) => state.home.banners);
    return (
        <div>
            <div>Home page</div>
            <div>
                {banners.map((imagen) => {
                    return <div>{imagen}</div>;
                })}
            </div>
        </div>
    );
}

export default HomePage;
