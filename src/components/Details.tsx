import { RxCross1 } from "react-icons/rx";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdLabel } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MarkerData } from "../data/MarkerData";

interface Props {
  locatedFloor: string;
  details: MarkerData | null | undefined;
  isDetailsActive: boolean;
  onDetailsActive: () => void;
  onZoomActive: () => void;
  onSetSrc: (src: string) => void;
}

const Details = ({
  details,
  locatedFloor,
  isDetailsActive,
  onDetailsActive,
  onZoomActive,
  onSetSrc,
}: Props) => {
  let floor;
  switch (locatedFloor) {
    case "secondFloor":
      floor = "2nd Floor";
      break;
    default:
      floor = "1st Floor";
      break;
  }

  const handleImage = (src: string) => {
    onZoomActive();
    onSetSrc(src);
  };

  return (
    <div className={`flex--column map__details ${isDetailsActive && "active"}`}>
      {details ? (
        <>
          <img
            className="img details__image"
            src={`/${details.src}`}
            alt=""
            onClick={() => handleImage(details.src)}
          />
          <RxCross1
            className="icon icon--close details__close flex justify--center align--center"
            color={"#000"}
            onClick={onDetailsActive}
          />
          <div className="details__description">
            <h1>Details</h1>
            <p className="flex justify--between align--center details__content">
              <span>
                <span className="details__category">Destination: </span>
                {details.name}
              </span>
              <MdLabel
                className="icon--details"
                color={"var(--color-primary)"}
              />
            </p>
            <p className="flex justify--between align--center details__content">
              <span>
                <span className="details__category">Located at: </span>
                {floor}
              </span>
              <SiLevelsdotfyi
                className="icon--details"
                color={"var(--color-primary)"}
              />
            </p>
            <p className="flex justify--between align--center details__content">
              <span>
                <span className="details__category">Type: </span>
                {details.type}
              </span>
              <MdCategory
                className="icon--details"
                color={"var(--color-primary)"}
              />
            </p>
          </div>
        </>
      ) : (
        <div>No details available</div>
      )}
    </div>
  );
};

export default Details;
