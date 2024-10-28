import MapaNotes from "../assets/mapa-notes.png";
import { directoryData } from "../data/directoryData";

interface Props {
  isSideBarActive: boolean;
  onSetSrc: (src: string) => void;
}

const SideBar = ({ isSideBarActive, onSetSrc }: Props) => {
  return (
    <div
      className={`sidebar flex flex--column justify--between align--center ${
        isSideBarActive && "active"
      }`}
    >
      <div>
        <img src={MapaNotes} alt="" className="sidebar__logo" />
        <h2 className="sidebar__heading">Directory</h2>
        <ul className="flex flex--column align--center sidebar__lists">
          {directoryData.map((data, index) => (
            <li
              key={index}
              className="sidebar__list"
              onClick={() => onSetSrc(data.src)}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </div>
      <p className="sidebar__copyright">
        Copyright &copy; 2024. Powered by the 12 - Integrity PWU ICT.{" "}
      </p>
    </div>
  );
};

export default SideBar;
