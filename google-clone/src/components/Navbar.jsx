import "../assets/CSS/google.css";
import appsGrid from "../assets/img/grid_icon.svg";

const MenuItem = (props) => {
  return (
    <a href="/">
      <div className="menu-item">{props.content}</div>
    </a>
  );
};

const RenderMenuItems = () => {
  const menu = [
    { content: "Gmail" },
    { content: "Images" },
    {
      content: <img className="icon" src={appsGrid} alt="icon" />,
    },
    {content: "Avatar"},
  ];

  return menu.map((m, idx) => <MenuItem key={idx} content={m.content} />);
};

// ES6 - Arrow function
const Navbar = () => {
  return (
    <div className="navbar-comp">
      <RenderMenuItems />
    </div>
  );
};

export default Navbar;