import { StickerItem, StickerLocation } from "../data/data_utils.types";

export const DEFAULT_LOCATION: StickerLocation = {
  x: 0,
  y: 0,
  height: 200,
  width: 200,
};
const randomColors = [
  "#D84B20",
  "#734222",
  "#8B8C7A",
  "#BEBD7F",
  "#ED760E",
  "#E4A010",
  "#E55137",
  "#CF3476",
  "#734222",
  "#7FB5B5",
  "#922B3E",
  "#5D9B9B",
  "#9B111E",
  "#A03472",
  "#C93C20",
  "#102C54",
  "#89AC76",
  "#1F3438",
  "#231A24",
  "#F8F32B",
  "#8673A1",
  "#00BB2D",
  "#2271B3",
  "#EFA94A",
  "#8673A1",
];

export const generateSticker = (): StickerItem => {
  const id = new Date().getTime();
  return {
    id: id,
    content: "",
    title: `${id.toString().slice(-4)}_title`,
    location: DEFAULT_LOCATION,
    color: randomColors[Math.floor(Math.random() * randomColors.length)],
  };
};
