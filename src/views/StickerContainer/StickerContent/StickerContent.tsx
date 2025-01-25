import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./StickerContent.scss";
import { useAtom } from "jotai";
import { itemsAtom } from "../../../data/data_utils";
import { StickerItem } from "../../../data/data_utils.types";
import { debounceFunc } from "../../../utils/useDebounceCallback";
import { CLICKABLE_CLASS } from "../StickerContainer";

export type StickerContainerProps = {
  stickerItem?: StickerItem;
  height: number;
};

const StickerContainer = ({ stickerItem, height }: StickerContainerProps) => {
  const [content, setContent] = useState<string>(stickerItem?.content || "");
  const [, setStickerItems] = useAtom(itemsAtom);

  useEffect(() => {
    debounceFunc(() => {
      setStickerItems((stickerItems) =>
        stickerItems.map((item) =>
          item.id === stickerItem?.id ? { ...item, content: content } : item
        )
      );
    });
  }, [content, setStickerItems, stickerItem?.id]);

  return (
    <div
      className="stickerContent"
      style={{
        backgroundColor: `${stickerItem?.color}30`,
      }}
    >
      <TextField
        className={`stickerContentInput ${CLICKABLE_CLASS}`}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        variant="outlined"
        fullWidth
        multiline
        inputProps={{ style: { height: height - 32 } }}
      />
    </div>
  );
};

export default StickerContainer;
