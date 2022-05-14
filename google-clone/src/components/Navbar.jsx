import "../assets/CSS/google.css"
import appGrid from "../assets/img/grid_icon.svg"

const MenuItem = (prop) => {

    return (
        <a href="">
            <div className="menu-item">{prop.content}</div>
        </a>
    )
}

const RenderMenuItems = () => {
    const menu = [
        {content: "Gmail"},
        {content: "Images"},
        {content: (
                <img classname='icon'src={appGrid} alt='icon' />
            ),
        },
        // {content: (
        //     <img classname='avatar'src={avatarImage} alt='icon' />
        // ),
        {content: "Avatar"},
    
    ]

    return menu.map(m => <MenuItem content={m.content} />)
}
 
// ES6
const Navbar = () => { // => Arrow Function
    return (
        <div className="navbar-comp">
            <RenderMenuItems />
        </div>
    )
}

export default Navbar;
