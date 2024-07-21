
// return type of the slot machine
export type SlotReturn = [string, string, string];

// default icons for the slot machine
const DefaultIcons = [
    "🍺",
    "📃",
    "🔥",
    "🍀",
    "😰",
    "😭",
    "🙏",
    "🧳",
    "🧨",
];


// get random icons for the slot machine
export const GetIcons = (): SlotReturn =>  {
    const randomIcon = (icons: string[]): string => {
        return icons[Math.floor(Math.random() * icons.length)];
    }

    return [randomIcon(DefaultIcons), randomIcon(DefaultIcons), randomIcon(DefaultIcons)];
}
