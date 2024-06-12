import { FaFile, FaRegWindowClose } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "./StickerHeader.scss";
import { StickerItem } from "../../../data/data_utils.types";
import { useAtom } from "jotai";
import { itemsAtom } from "../../../data/data_utils";
import { debounceFunc } from "../../../utils/useDebounceCallback";
import StickerConfirmDialog from "../StickerConfirmDialog/StickerConfirmDialog";

export type StickerHeaderProps = {
  stickerItem?: StickerItem;
};

const StickerHeader = ({ stickerItem }: StickerHeaderProps) => {
  const [title, setTitle] = useState<string>(stickerItem?.title || "");
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [, setStickerItems] = useAtom(itemsAtom);

  useEffect(() => {
    debounceFunc(() => {
      setStickerItems((stickerItems) =>
        stickerItems.map((item) =>
          item.id === stickerItem?.id ? { ...item, title: title } : item
        )
      );
    });
  }, [setStickerItems, stickerItem?.id, title]);

  const handleCloseButton = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDialog = () => {
    setStickerItems((stickerItems) =>
      stickerItems.filter((item) => item.id !== stickerItem?.id)
    );
    setOpenDialog(false);
  };

  return (
    <div
      className={"stickerHeader"}
      style={{ backgroundColor: stickerItem?.color }}
    >
      <div className={"stickerHeaderContent"}>
        <FaFile className={"headerIcon"} />
        <TextField
          className={"headerInput"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
          inputProps={{ style: { padding: "0.25rem" } }}
        />
      </div>
      <div>
        <FaRegWindowClose
          className={"headerClose"}
          onClick={handleCloseButton}
        />
      </div>
      {openDialog && (
        <StickerConfirmDialog
          onClose={handleCloseDialog}
          onConfirm={handleConfirmDialog}
        />
      )}
    </div>
  );
};

export default StickerHeader;
