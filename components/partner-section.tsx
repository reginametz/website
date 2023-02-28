import SupporterType from "../interfaces/supporter";

type Props = {
    supporters: SupporterType[];
};

const PartnerSection = ({ supporters }: Props) => {
    return (
        <section className="md:justify-between mt-16 mb-16 md:mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {supporters.map((supporter, i) => (
                    <div key={i} className="m-auto">
                        <a href={supporter.link}>
                            <img
                                className="w-1/2 md:w-full m-auto"
                                src={
                                    "assets/images/partners/" + supporter.image
                                }
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnerSection;
