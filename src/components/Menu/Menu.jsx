import MenuItem from "../MenuItem/MenuItem";
import "./Menu.scss";

const Menu = ({ open, closeMenu }) => {
  const menuItems = [
    {
      href: "#intro",
      name: "Home",
    },
    {
      href: "#portfolio",
      name: "Porfolio",
    },
    {
      href: "#works",
      name: "Works",
    },
    {
      href: "#testimonials",
      name: "Testimonials",
    },
    {
      href: "#contact",
      name: "Contact",
    },
  ];
  return (
    <div className={`menu ${open && "active"}`}>
      <ul>
        {menuItems.map((item, i) => {
          return (
            <MenuItem
              href={item.href}
              name={item.name}
              closeMenu={closeMenu}
              key={i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
