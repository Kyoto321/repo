import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => 
        {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage"
                    src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5405355.jpg"
                    alt="" />
                <p className="sidebarparagaph"> Sam Banks is a tech savy, a writer, motivational speaker and team player. Started his career as IT support at National Space and Research Agency, currently run a small business as an entreprenuer.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="siderbarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
} 