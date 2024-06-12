import { Fab } from "@mui/material";
import "./StickerFab.scss";
import { FaPlus } from "react-icons/fa";
import { useAtom } from "jotai";
import { itemsAtom } from "../../data/data_utils";
import { generateSticker } from "../../utils/generator";
import { StickerItem } from "../../data/data_utils.types";

const StickerFab = () => {
  const [, setStickerItems] = useAtom<StickerItem[]>(itemsAtom);

  const handleClick = () => {
    setStickerItems((stickerItems) => [...stickerItems, generateSticker()]);
  };

  return (
    <Fab
      color="primary"
      className={"stickerFab"}
      variant="circular"
      onClick={handleClick}
    >
      <FaPlus className="stickerFabIcon" />
    </Fab>
  );
};

export default StickerFab;
