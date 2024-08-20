import { StickerItem } from "./data_utils.types";
import { atomWithStorage } from "jotai/utils";

export const itemsAtom = atomWithStorage<StickerItem[]>("notes", []);
export const introducedUser = atomWithStorage<boolean>("introcudedUser", false, undefined, { getOnInit: true });