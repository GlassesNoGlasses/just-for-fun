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
    const min: number = Math.floor(Math.random() * 100000);
    const max: number = min + Math.floor(Math.random() * 100000);
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
    const numQualifications: number = Math.max(3, Math.floor(Math.random() * 5) + 1);
    const qualifications: string[] = [];

    for (let i = 0; i < numQualifications; i++) {
        qualifications.push(qualificationList[Math.floor(Math.random() * qualificationList.length)]);
    }

    return qualifications;
}


const GetJob = (): Job => {
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
