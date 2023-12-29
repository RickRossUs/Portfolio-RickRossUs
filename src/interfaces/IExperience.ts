import ICategory from "./ICategory";

interface IExperience {
    id: number,
    job: string;
    company: string;
    date: string;
    description: string;
    category: ICategory;
}

export default IExperience