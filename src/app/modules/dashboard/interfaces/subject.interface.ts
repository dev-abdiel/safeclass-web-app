
export interface Subjects {
    subjects: Subject[];
}

export interface Subject {
    name: string;
    teacherName: string;
    semester: number;
    initTime: Date;
    endTime: Date;
}