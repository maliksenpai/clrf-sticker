import { StickerItem } from "./data_utils.types";
import { atomWithStorage } from "jotai/utils";

export const itemsAtom = atomWithStorage<StickerItem[]>("notes", []);