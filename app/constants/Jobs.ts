import { Job, JobTitlePrimary, JobTitleSecondary, JobType } from "../interfaces/Job";

const Qualifications: string[] = [
    "Pursuing a Bachelor's degree in Computer Science or related field",
    "Experience with web development",
    "Experience with software development",
    "Experience with data analysis",
    "Experience with machine learning",
    "Experience with front-end development",
    "Experience with back-end development",
    "Experience with mobile development",
    "Experience with game development",
    "Experience with UI/UX design",
    "Experience with AI",
    "Experience with QA testing",
    "Strong communication skills",
    "Experience with Python",
    "Experience with Java",
    "Experience with C++",
    "Experience with C#",
]

const DesiredQualifications: string[] = [
    "Experience developing OpenAI products",
    "Experience with Quantum Edge Computing",
    "Developed or contributed to NASA's next space shuttle",
    "Able to find a needle in a haystack",
    "Min-maxing the joy out of life",
    "Able to quit Vim",
    "Sort lists in O(1) time",
    "Touch Grass",
    "Able to write code without StackOverflow or Chat-GPT",
    "Able to write code without a keyboard",
    "Perform a real-life TLShandshake",
    "Create a new programming language as a hobby",
    "Train AI models without data",
    "Create Chat-GPT from scratch",
    "Write a new OS in Assembly",
    "Untangle spaghetti code",
    "Perform multi-threading with a single thread",
]

const EnumMap: { [key: number]: typeof JobTitlePrimary | typeof JobTitleSecondary | typeof JobType } = {
    1: JobTitlePrimary,
    2: JobTitleSecondary,
    3: JobType,
}

const GetRandomEnumValue = (enumerationID: number): string => {
    const enumeration = EnumMap[enumerationID];
    const values = Object.values(enumeration);
    return values[Math.floor(Math.random() * values.length)];
}

const GetPrimaryJobTitle = (): string => {
    const value = GetRandomEnumValue(1);
    return value;
}

const GetSecondaryJobTitle = (): string => {
    const value = GetRandomEnumValue(2);
    return value;
}

const GetJobType = (): string => {
    const value = GetRandomEnumValue(3);
    return value;
}

const GetCompanyName = (): string => {
    const unicorns: string[] = ['Gaagle', 'BasedBooks', 'Zeta', 'Amazoom', 'Aaaaahple', 'Minecrosoft', 'Uuuuuube', 'Y', 'Besla'];
    const prob: number = Math.random();

    if (prob <= 0.1) {
        return unicorns[Math.floor(Math.random() * unicorns.length)];
    }

    return 'Company' + Math.floor(Math.random() * 1000).toString();
}

const GetLocation = (): string => {
    return "somewhere, over the rainbow...";
}

const GetPosted = (): string => {
    const prob: number = Math.random();

    if (prob <= 0.1) {
        return "2 Hours Ago";
    } else if (prob <= 0.2) {
        return "1 Day Ago";
    } else if (prob <= 0.3) {
        return "2 Days Ago";
    } else if (prob <= 0.4) {
        return "1 Week Ago";
    } else if (prob <= 0.5) {
        return "2 Weeks Ago";
    }

    return "You're too late bud"
}

const GetApplicants = (): number => {
    // there's always at least 50 applicants...
    return Math.max(Math.floor(Math.random() * 100) + 50, 100);
}

const GetSalary = (): [number, number] => {
    const min: number = Math.max(Math.floor(Math.random() * 10000) - 9000, 0);
    const max: number = min + Math.min(Math.floor(Math.random() * 10000), 200);
    return [min, max];
}

const GetDescription = (): string => {
    return `We are seeking a motivated and enthusiastic Intern to join our team. 
    This internship provides an excellent opportunity for students or recent graduates to gain hands-on experience
    in software development, work with experienced professionals, and contribute to real-world projects. 
    Interested candidates are encouraged to submit their resume and a brief cover letter explaining their interest 
    in the internship and relevant skills. We welcome applicants from all backgrounds and experiences!`;
}

const GetQualifications = (qualificationList: string[]): string[] => {
    const numQualifications: number = Math.max(2, Math.floor(Math.random() * 5) + 1);
    const qualifications: string[] = [];

    for (let i = 0; i < numQualifications; i++) {
        qualifications.push(qualificationList[Math.floor(Math.random() * qualificationList.length)]);
    }

    return qualifications;
}


export const CreateJob = (): Job => {
    const salaries: [number, number] = GetSalary();
    return {
        title: GetPrimaryJobTitle() + " " + GetSecondaryJobTitle(),
        jobType: GetJobType(),
        company: GetCompanyName(),
        location: GetLocation(),
        posted: GetPosted(),
        applicants: GetApplicants(),
        minSalary: salaries[0],
        maxSalary: salaries[1],
        description: GetDescription(),
        qualifications: GetQualifications(Qualifications),
        desiredQualifications: GetQualifications(DesiredQualifications),
    }
}
