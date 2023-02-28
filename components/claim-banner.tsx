type Props = {
    title: string;
    paragraph: string;
    color: "blue" | "green" | "gold";
};

const ClaimBanner = ({ title, paragraph, color }: Props) => {
    return (
        <section className="md:justify-between mt-16 md:mt-0 lg:mt-0 sm:mb-16 md:pb-24 md:mb-12 flex">
            {color == "green" && <div className="bg-green-500 w-4 mr-6"></div> }
            {color == "blue" && <div className="bg-blue-500 w-4 mr-6"></div>}
            {color == "gold" && <div className="bg-yellow-500 w-4 mr-6"></div>}
            <div>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-gray-900">
                    {title}
                </h2>
                <h4 className="text-2xl md:text-4xl md:pr-8 text-gray-900">
                    {paragraph}
                </h4>
            </div>
        </section>
    );
};

export default ClaimBanner;
