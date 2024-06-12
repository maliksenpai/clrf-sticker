export type StickerItem = {
    id: number;
    title?: string;
    content?: string;
    location: StickerLocation;
    color: string;
}

export type StickerLocation = { x: number; y: number; width: number; height: number }