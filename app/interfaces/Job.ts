
export enum JobTitlePrimary {
    MACHINE_LEARNING = "Machine Learning",
    FULL_STACK = "Full Stack",
    SOFTWARE = "Software",
    FRONTEND = "Frontend",
    BACKEND = "Backend",
    MOBILE = "Mobile",
    DATA = "Data",
    GAME = "Game",
    WEB = "Web",
    UX = "UX",
    UI = "UI",
    AI = "AI",
    QA = "QA",
}

export enum JobTitleSecondary {
    DESIGNER = "Designer",
    DEVELOPER = "Developer",
    ENGINEER = "Engineer",
    SCIENTIST = "Scientist",
    ANALYST = "Analyst",
}

export enum JobType {
    INTERN = "Intern",
    FULL_TIME = "Full-Time",
    PART_TIME = "Part-Time",
    CONTRACT = "Contract",
    TEMPORARY = "Temporary",
    REMOTE = "Remote",
}

export interface Job {
    title: string;
    jobType: string; // internship, full-time, part-time, etc.
    company: string;
    location: string
    posted: string;
    applicants: number;
    minSalary: number;
    maxSalary: number;
    description: string;
    qualifications: string[];
    desiredQualifications: string[];
};
