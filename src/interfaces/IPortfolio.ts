import ICategory from "./ICategory";

interface IPortfolio {
    id: number,
    name: string;
    img: string;
    category: ICategory;
    link: string;
    description: string;
}

export default IPortfolio