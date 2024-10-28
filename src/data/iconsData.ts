import L from "leaflet";

const baseIconOptions = {
  iconSize: L.point(50, 50),
  iconAnchor: L.point(25, 50),
  popupAnchor: L.point(0, -40),
};

export const icons = {
  restaurant: new L.Icon({
    ...baseIconOptions,
    iconUrl: "/src/assets/restaurant.png",
  }),
  park: new L.Icon({
    ...baseIconOptions,
    iconUrl: "/src/assets/park.png",
  }),
  school: new L.Icon({
    ...baseIconOptions,
    iconUrl: "/src/assets/school.png",
  }),
  canteen: new L.Icon({
    ...baseIconOptions,
    iconUrl: "/src/assets/school.png",
  }),
};
