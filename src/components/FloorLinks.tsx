import { floorLinksData } from "../data/floorsData";

interface Props {
  currentFloor: string;
  onFloorChange: (link: string) => void;
}

const FloorLinks = ({ currentFloor, onFloorChange }: Props) => {
  return (
    <ul className="flex link__floors">
      {floorLinksData.map((link, index) => (
        <li
          key={index}
          className={`flex justify--center align--center gap--sm link__floor ${
            currentFloor === link && "active"
          }`}
          onClick={() => onFloorChange(link)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default FloorLinks;
