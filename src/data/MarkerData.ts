import { icons } from "./iconsData";

export interface MarkerData {
  position: [number, number];
  type: keyof typeof icons;
  name: string;
  src: string;
}
