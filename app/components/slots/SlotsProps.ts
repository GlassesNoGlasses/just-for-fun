import { SlotReturn } from "@/app/constants/SlotManager";

export default interface SlotsProps {
    title: string;
    subtitle?: string;
    callback: (result: SlotReturn) => void;
}
