const TargetAudiences = () => {
    return (
        <section className="md:justify-between mt-16 mb-16 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                <div className="px-6 py-12 m-auto">
                    <h4 className="mb-4 text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-gray-900 sm:text-6xl">
                        Governments
                    </h4>
                    <p className="text-4xl text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="px-6 py-12 m-auto">
                    <img
                        className="object-cover h-full w-full max-w-full rounded"
                        src="assets/images/gov.png"
                    />
                </div>
                <div className="px-6 py-12 m-auto">
                    <img
                        className="object-cover h-full w-full max-w-full rounded"
                        src="assets/images/industry.png"
                    />
                </div>
                <div className="px-6 py-12 m-auto">
                    <h4 className="mb-4 text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-gray-900 sm:text-6xl">
                        Industry
                    </h4>
                    <p className="text-4xl text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="px-6 py-12 m-auto">
                    <h4 className="mb-4 text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-gray-900 sm:text-6xl">
                        Cloud Service Providers
                    </h4>
                    <p className="text-4xl text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="px-6 py-12 m-auto">
                    <img
                        className="object-cover h-full w-full max-w-full rounded"
                        src="assets/images/csp.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default TargetAudiences;
