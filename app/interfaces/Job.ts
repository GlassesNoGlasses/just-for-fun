
export enum JobType {
    SOFTWARE_DEVELOPER = "Software Developer",
    AI_DEVELOPER = "AI Developer",
    DEVELOPER = "Developer",
    SOFTWARE_ENGINEER = "Software Engineer",
    MACHINE_LEARNING_ENGINEER = "Machine Learning Engineer",
    QA = "QA Engineer",
    ENGINEER = "Engineer",
    DATA_SCIENTIST = "Data Scientist",
    DATA_ANALYST = "Data Analyst",
    FRONTEND_DEVELOPER = "Frontend Developer",
    BACKEND_DEVELOPER = "Backend Developer",
    FULL_STACK_DEVELOPER = "Full Stack Developer",
    WEB_DEVELOPER = "Web Developer",
    MOBILE_DEVELOPER = "Mobile Developer",
    GAME_DEVELOPER = "Game Developer",
    UX_DESIGNER = "UX Designer",
    UI_DESIGNER = "UI Designer",
    DESIGNER = "Designer",
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
