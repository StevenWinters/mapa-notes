import { useEffect } from "react";
import { useMap } from "react-leaflet";
import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const ZoomButtons = () => {
  const map = useMap();

  useEffect(() => {
    map.zoomControl.remove();
  }, [map]);

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  return (
    <div className="flex flex--column zoom">
      <Button onClick={handleZoomIn} className="zoom__btn">
        <FaPlus size={15} />
      </Button>
      <Button onClick={handleZoomOut} className="zoom__btn">
        <FaMinus size={15} />
      </Button>
    </div>
  );
};

export default ZoomButtons;
