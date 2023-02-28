type SupporterType = {
    name: string;
    image: string;
    avatar: string;
    link: string;
    excerpt: string;
    location: {
        latitude: number;
        longitude: number
    };
};

export default SupporterType;
