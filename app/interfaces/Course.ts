import { Assignment } from "./Assignment";

export default interface Course {
    name: string;
    passingGrade: number;
    assignments: Assignment[];
}
