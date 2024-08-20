import React, { useRef, useState } from "react";
import "./Homepage.scss";
import StickerContainer from "../StickerContainer/StickerContainer";
import StickerFab from "../StickerFab/StickerFab";
import { useAtom } from "jotai";
import { introducedUser, itemsAtom } from "../../data/data_utils";
import IntroduceModal from "../IntroduceModal/IntroduceModal";

const Homepage: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const diagramContainerRef = useRef<HTMLDivElement>(null);
  const [stickerItems] = useAtom(itemsAtom);
  const [introducedUserState] = useAtom<boolean>(introducedUser);

  const handleMouseDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.target !== diagramContainerRef.current) {
      return;
    }
    const startX = e.clientX;
    const startY = e.clientY;

    const mouseMove = (e: PointerEvent) => {
      setTranslate({
        x: e.clientX - startX + translate.x,
        y: e.clientY - startY + translate.y,
      });
    };

    const mouseUp = () => {
      window.removeEventListener("pointermove", mouseMove);
      window.removeEventListener("pointerup", mouseUp);
    };

    window.addEventListener("pointermove", mouseMove);
    window.addEventListener("pointerup", mouseUp);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.target.className === diagramContainerRef.current?.className) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
      if (e.deltaY > 0) {
        setScale((scale) => scale * 0.9);
      } else {
        setScale((scale) => scale * 1.1);
      }
    }
  };

  return (
    <>
      {!introducedUserState && <IntroduceModal />}
      <div
        className="diagramContainer"
        onPointerDown={handleMouseDown}
        onWheel={handleWheel}
        ref={diagramContainerRef}
        style={{
          transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
        }}
      >
        {stickerItems.map((item) => (
          <StickerContainer stickerItem={item} key={item.id} />
        ))}
      </div>
      <StickerFab />
    </>
  );
};

export default Homepage;
