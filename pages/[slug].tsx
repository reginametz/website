import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import TopNavigation from "../components/top-navigation";

type Props = {
    children: React.ReactNode;
};

export default function Page({ children }: Props) {
    return (
        <>
            <Head>
                <title>Sovereign Cloud Stack</title>
            </Head>
            <Container>
                <TopNavigation />
            </Container>
            <Layout>{children}</Layout>
        </>
    );
}
