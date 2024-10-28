import { MarkerData } from "./MarkerData";

export const floorsData: Record<string, MarkerData[]> = {
  firstFloor: [
    {
      position: [40.748817, -73.985428],
      type: "restaurant",
      name: "Restaurant 1",
      src: "pwu-background.jpeg",
    },
    {
      position: [40.73061, -73.935242],
      type: "park",
      name: "Park 1",
      src: "map.png",
    },
    {
      position: [40.73071, -73.935242],
      type: "canteen",
      name: "Canteen 1",
      src: "map.png",
    },
  ],
  secondFloor: [
    {
      position: [40.73061, -73.935242],
      type: "park",
      name: "Park 2",
      src: "campus-map.jpg",
    },
    {
      position: [40.758, -73.9855],
      type: "school",
      name: "School 1",
      src: "pwu-background.jpeg",
    },
  ],
};

export const floorImagesData: Record<string, string> = {
  firstFloor: "map.png",
  secondFloor: "campus-map.jpg",
};

export const floorLinksData = ["firstFloor", "secondFloor"];
