import { Heading1 } from "../../common/typography/typography.component";

interface HomePageTitleProps {
    title: string;
    url: string;
}

const HomePageTitle: React.FC<HomePageTitleProps> = ({ title, url }) => {
    return (
        <div className="grid justify-between mx-3 md:mx-20 mt-5 border-b border-solid border-gray-400 bg-slate-100 p-3">
            <Heading1>{title}</Heading1>
            <a href={url} className="text-teal-800 text-sm font-bold py-5 hover:cursor-pointer">
                View All &rarr;
            </a>
        </div>
    );
}

export default HomePageTitle;
