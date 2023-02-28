import Link from "next/link";

type Props = {
    title: string;
    image: string;
    cta?: string;
    text?: string;
};

const HeroBanner = ({ title, image, cta, text }: Props) => {
    return (
        <div className="max-w-full relative pt-6">
            <img
                src={image}
                className="object-cover absolute -z-10 md:h-3/4 h-full w-full max-w-full"
            />
            <div className="max-w-2xl py-32 sm:py-48 lg:py-48 ml-auto">
                <div className="bg-white p-6 opacity-70">
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter text-gray-900 sm:text-6xl ">
                        {title}
                    </h1>
                    {text && <h4>{text}</h4>}
                    {cta && (
                        <Link href={cta}>
                            <button>read more</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
