import LinkItem from "./NavbarLinkItem";

const NavbarLinkList = ({ data }) => {
  return (
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      {data.map((link, i) => (
        <LinkItem key={i} {...link} />
      ))}
    </ul>
  );
};

export default NavbarLinkList;
