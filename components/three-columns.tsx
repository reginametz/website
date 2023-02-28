const ThreeColumns = () => {
    return (
        <section className="md:justify-between mt-16 mb-16 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                <div className="bg-green-400 px-6 py-12 rounded">
                    <h4 className="mb-4 text-4xl md:text-3xl font-bold leading-tight tracking-tighter text-gray-100 sm:text-6xl">Standardized</h4>
                    <p className="text-xl text-gray-100"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="mt-4 text-xl text-gray-100">Read more</button>
                </div>
                <div className="bg-blue-400 px-6 py-12 rounded">
                    <h4 className="mb-4 text-4xl md:text-3xl font-bold leading-tight tracking-tighter text-gray-100 sm:text-6xl">Built</h4>
                    <p className="text-xl text-gray-100"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="mt-4 text-xl text-gray-100">Read more</button>
                </div>
                <div className="bg-yellow-400 px-6 py-12 rounded">
                    <h4 className="mb-4 text-4xl md:text-3xl font-bold leading-tight tracking-tighter text-gray-100 sm:text-6xl">Operated</h4>
                    <p className="text-xl text-gray-100"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="mt-4 text-xl text-gray-100">Read more</button>
                </div>
            </div>
        </section>
    );
};

export default ThreeColumns;
