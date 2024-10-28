interface Props {
  isSideBarActive: boolean;
  isSearchActive: boolean;
  onSideBarActive: () => void;
}

const HamburgerMenu = ({
  isSideBarActive,
  isSearchActive,
  onSideBarActive,
}: Props) => {
  return (
    <div
      className={`flex justify--center align--center flex--column hamburger ${
        isSideBarActive && "active"
      } ${isSearchActive && "hidden"}`}
      onClick={onSideBarActive}
    >
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
};

export default HamburgerMenu;
