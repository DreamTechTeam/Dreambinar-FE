import { Link } from "react-router-dom";

const NavbarButton = ({ title, variant }) => {
  const modifyColor = (color, textColor = "white") => `
  text-${textColor} bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  md:order-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800
  `;

  const className =
    variant === "primary" ? modifyColor("green") : modifyColor("red");

  return (
    <Link to="/login" className={className}>
      {title}
    </Link>
  );
};

export default NavbarButton;
