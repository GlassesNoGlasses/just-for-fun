import { SlotReturn } from "@/app/constants/SlotManager";

export default interface SlotsProps {
    title: string;
    playable?: boolean;
    subtitle?: string;
    resultsCallback: (result: SlotReturn) => void;
    exitCallback: () => void;
}
