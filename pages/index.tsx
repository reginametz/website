import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getAllSupporters } from "../lib/api";
import Post from "../interfaces/post";
import HeroBanner from "../components/hero-banner";
import ClaimBanner from "../components/claim-banner";
import ThreeColumns from "../components/three-columns";
import PartnerSection from "../components/partner-section";
import TopNavigation from "../components/top-navigation";
import Container from "../components/container";
import Head from "next/head";
import TargetAudiences from "../components/target-audiences";
import Milestones from "../components/milestones";
import Supporter from "../interfaces/supporter";

type Props = {
    allPosts: Post[];
    allSupporters: Supporter[]
};

export default function Index({ allPosts, allSupporters }: Props) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(0);
    return (
        <>
            <Layout>
                <Head>
                    <title>Sovereign Cloud Stack</title>
                </Head>
                <Container>
                    <TopNavigation />
                </Container>
                <HeroBanner
                    title="One platform – standardized, built and operated by many."
                    image="/assets/images/mountain.png"
                />
                <Container>
                    <ClaimBanner
                        title="One Platform"
                        paragraph="Imagine a cloud platform where users can easily switch between Cloud Service Providers without being locked-in...."
                        color="green"
                    />
                </Container>
                <Container>
                    <ThreeColumns />
                </Container>
                <Container>
                    <ClaimBanner
                        title="By Many"
                        paragraph="SCS is designed, developed and maintained by industry leading cloud service providers from Europe."
                        color="blue"
                    />
                </Container>
                <Container>
                    <PartnerSection supporters={allSupporters} />
                </Container>

                <HeroBanner
                    title="Digital Sovereignty within the cloud."
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image="/assets/images/sea.jpeg"
                    cta="/digital-sovereignty-cloud"
                />
                <Container>
                    <TargetAudiences />
                    <Intro
                        title="Blog"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    <Intro
                        title="Milestones"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <Milestones />
                </Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (locale: string) => {
    const allSupporters = getAllSupporters();

    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
    ]);

    return {
        props: { allPosts, allSupporters },
    };
};
