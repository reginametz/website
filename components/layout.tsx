import Footer from "./footer";
import Meta from "./meta";

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />
            {/* <div className="absolute w-screen bg-slate-100 h-screen top-1/2 -z-10 left-0"></div> */}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
