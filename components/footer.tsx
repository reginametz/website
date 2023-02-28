import Container from "./container";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-400 border-t border-neutral-200 md:mt-32 mt-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-12 md:justify-between mt-16 md:pb-32 text-slate-50">
                    <div className="w-50 h-auto">
                        <Link href="/case-studies">
                            <p className="text-xl">Case Studies</p>
                        </Link>
                    </div>
                    <div className="w-50 h-auto">
                        <p className="text-xl">Community</p>
                        <p className="text-xl">Documentation</p>
                        <p className="text-xl">Blog & News</p>
                    </div>
                    <div className="w-50 h-auto">
                        <p className="text-xl">Open Positions</p>
                        <p className="text-xl">Tenders</p>
                        <p className="text-xl">Case Studies</p>
                    </div>
                    <div className="w-50 h-auto">
                        <p className="text-xl">Imprint</p>
                        <p className="text-xl">Data Protection</p>
                        <p className="text-xl">Terms & Conditions</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
