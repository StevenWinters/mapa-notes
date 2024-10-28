import { LatLngBounds } from "leaflet";
import { useEffect, useState } from "react";
import { ImageOverlay, MapContainer, Marker, Popup } from "react-leaflet";
import { floorImagesData, floorsData } from "../data/floorsData";
import { icons } from "../data/iconsData";
import FloorLinks from "./FloorLinks";
import SearchBar from "./SearchBar";
import ZoomButtons from "./ZoomButtons";
import MapLogo from "./PWULogo";
import Details from "./Details";
import ScreenOverlay from "./ScreenOverlay";
import "leaflet/dist/leaflet.css";
import { MarkerData } from "../data/MarkerData";
import HamburgerMenu from "./HamburgerMenu";
import SideBar from "./SideBar";

const Maps = () => {
  const [currentFloor, setCurrentFloor] =
    useState<keyof typeof floorsData>("firstFloor");
  const [markers, setMarkers] = useState<MarkerData[]>(
    floorsData[currentFloor]
  );
  const [locationDetails, setLocationDetails] = useState<MarkerData>();
  const [floorImage, setFloorImage] = useState(floorImagesData[currentFloor]);
  const [isDetailsActive, setDetailsActive] = useState(false);
  const [isZoomActive, setZoomActive] = useState(false);
  const [isSideBarActive, setSideBarActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [detailSrc, setDetailSrc] = useState("");

  useEffect(() => {
    setMarkers(floorsData[currentFloor]);
    setFloorImage(floorImagesData[currentFloor]);
  }, [currentFloor]);

  const handleMarkerClick = (marker: MarkerData) => {
    setDetailsActive(true);
    setLocationDetails(marker);
  };

  const handleFloorChange = (floor: keyof typeof floorsData) => {
    setCurrentFloor(floor);
    setMarkers(floorsData[floor]);
    setFloorImage(floorImagesData[currentFloor]);
  };

  const handleDirectory = (src: string) => {
    setZoomActive(true);
    setDetailSrc(src);
  };

  const allMarkers = Object.values(floorsData).flat();

  const bounds = new LatLngBounds([40.6, -74.4], [40.9, -73.8]);

  return (
    <>
      <HamburgerMenu
        isSearchActive={isSearchActive}
        isSideBarActive={isSideBarActive}
        onSideBarActive={() => setSideBarActive(!isSideBarActive)}
      />
      <SideBar
        isSideBarActive={isSideBarActive}
        onSetSrc={(src) => handleDirectory(src)}
      />
      <MapContainer
        center={[40.743, -74.176]}
        zoom={13}
        maxZoom={14}
        minZoom={11.4}
        maxBounds={bounds}
        maxBoundsViscosity={0.5}
        className="map__container"
      >
        <ImageOverlay url={`/src/assets/${floorImage}`} bounds={bounds} />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={icons[marker.type]}
            eventHandlers={{ click: () => handleMarkerClick(marker) }}
          >
            <Popup className="map__marker">{marker.name}</Popup>
          </Marker>
        ))}
        <ZoomButtons />
        <FloorLinks
          currentFloor={currentFloor}
          onFloorChange={(link) => handleFloorChange(link)}
        />
        <SearchBar
          markers={allMarkers}
          onFloorChange={handleFloorChange}
          isSearchActive={isSearchActive}
          onSearchActive={(status) => setSearchActive(status)}
          onSideBarActive={() => setSideBarActive(false)}
        />
        <MapLogo className="img--logo" />
      </MapContainer>
      <Details
        isDetailsActive={isDetailsActive}
        onDetailsActive={() => setDetailsActive(false)}
        onZoomActive={() => setZoomActive(true)}
        onSetSrc={(src) => setDetailSrc(src)}
        details={locationDetails}
        locatedFloor={currentFloor}
      />
      <ScreenOverlay
        src={detailSrc}
        isZoomActive={isZoomActive}
        onZoomActive={() => setZoomActive(false)}
      />
    </>
  );
};

export default Maps;
