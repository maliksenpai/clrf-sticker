import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  Container,
} from "@mui/material";
import labels from "../../assets/labels.json";
import { useAtom } from "jotai";
import "./IntroduceModal.scss";
import { introducedUser } from "../../data/data_utils";

const IntroduceModal = () => {
  const [, setIntroducedUser] = useAtom<boolean>(introducedUser);

  const handleCloseClick = () => {
    setIntroducedUser(true);
  };

  return (
    <Modal open className="introduceModal">
      <Container className="container">
        <DialogTitle>{labels.introduceModal.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{labels.introduceModal.content}</DialogContentText>
          <List>
            {labels.introduceModal.listItems.map((item) => (
              <ListItem key={item.title}>
                <ListItemText primary={item.title} secondary={item.content} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClick}>
            {labels.introduceModal.closeButton}
          </Button>
        </DialogActions>
      </Container>
    </Modal>
  );
};

export default IntroduceModal;
