
export interface Assignment {
    id?: number;
    title: string;
    userGrade: number;
    maxGrade: number;
    weight: number;
    releasedDate: Date;
    dueDate: Date;
}
