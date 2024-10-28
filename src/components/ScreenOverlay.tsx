import { RxCross1 } from "react-icons/rx";

interface Props {
  src: string;
  isZoomActive: boolean;
  onZoomActive: () => void;
}

const ScreenOverlay = ({ src, isZoomActive, onZoomActive }: Props) => {
  return (
    <div className={`overlay ${isZoomActive && "active"}`}>
      <img className="img overlay__img" src={`/src/assets/${src}`} alt="" />
      <RxCross1
        className="icon icon--close overlay__close flex justify--center align--center"
        size={30}
        color={"#fff"}
        onClick={onZoomActive}
      />
    </div>
  );
};

export default ScreenOverlay;
