import "./header.css";

export default function Header() {
    return (
        <div className="Header">
            <div className="headerTitles">
                <span className="headerTitleSm">Discover stories, views and opinions from life adventures</span>
                <span className="headerTitleLg">Pillow</span>
            </div>
            <img className="headerImg"
                src="https://img.freepik.com/free-photo/abstract-blue-extruded-voronoi-blocks-background-minimal-light-clean-corporate-wall-3d-geometric-surface-illustration-polygonal-elements-displacement_1217-2510.jpg?w=826&t=st=1672650541~exp=1672651141~hmac=1f24237a6c7e383bdab1c6b8e676f4fdd58ae3cedf53e57c54298071faa85a58"
                alt=""
            />
        </div>
    )
}