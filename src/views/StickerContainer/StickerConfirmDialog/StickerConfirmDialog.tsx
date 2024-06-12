import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import labels from "../../../assets/labels.json";

export type StickerConfirmDialogProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const StickerConfirmDialog = ({
  onClose,
  onConfirm,
}: StickerConfirmDialogProps) => {
  return (
    <Dialog open>
      <DialogTitle>{labels.confirmDialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{labels.confirmDialog.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{labels.confirmDialog.cancel}</Button>
        <Button onClick={onConfirm} autoFocus>
          {labels.confirmDialog.confirm}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StickerConfirmDialog;
