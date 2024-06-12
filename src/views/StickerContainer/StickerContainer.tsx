import { DraggableData, Rnd } from "react-rnd";
import StickerHeader from "./StickerHeader/StickerHeader";
import "./StickerContainer.scss";
import StickerContent from "./StickerContent/StickerContent";
import { StickerItem, StickerLocation } from "../../data/data_utils.types";
import { useEffect, useState } from "react";
import { debounceFunc } from "../../utils/useDebounceCallback";
import { useAtom } from "jotai";
import { itemsAtom } from "../../data/data_utils";

export type StickerContainerProps = {
  stickerItem: StickerItem;
};

const MIN_WIDTH = 200;
const MIN_HEIGHT = 200;

const StickerContainer = ({ stickerItem }: StickerContainerProps) => {
  const [location, setLocation] = useState<StickerLocation>(
    stickerItem.location
  );
  const [, setStickerItems] = useAtom(itemsAtom);

  const handleResize = (
    _e: MouseEvent | TouchEvent,
    _direction: unknown,
    ref: HTMLElement
  ) => {
    setLocation((state) => ({
      ...state,
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    }));
  };

  const handleDrag = (_e: unknown, data: DraggableData) => {
    setLocation((state) => ({
      ...state,
      x: data.x,
      y: data.y,
    }));
  };

  useEffect(() => {
    debounceFunc(() => {
      setStickerItems((stickerItems) =>
        stickerItems.map((item) =>
          item.id === stickerItem?.id ? { ...item, location: location } : item
        )
      );
    });
  }, [location, setStickerItems, stickerItem?.id]);

  return (
    <Rnd
      enableResizing
      dragAxis="both"
      className={"stickerContainer"}
      default={stickerItem?.location}
      minWidth={MIN_WIDTH}
      minHeight={MIN_HEIGHT}
      onResize={handleResize}
      onDrag={handleDrag}
    >
      <div className="stickerInnerContainer">
        <StickerHeader stickerItem={stickerItem} />
        <StickerContent stickerItem={stickerItem} />
      </div>
    </Rnd>
  );
};

export default StickerContainer;
