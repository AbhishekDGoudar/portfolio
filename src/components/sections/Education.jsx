import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen flex items-center justify-center bg-[#f5f5dc] px-6 py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl w-full">
                    {/* Gradient heading to match theme */}
                    <h3 className="text-center text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Education
                    </h3>

                    {/* Education Cards (beige + black border, same as projects/experience) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* UTA */}
                        <div className="p-6 rounded-xl border border-black bg-[#f5f5dc] hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-all text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/src/assets/logo/University_of_Texas_at_Arlington.png"
                                    alt="University of Texas at Arlington"
                                    className="w-28 h-24 object-contain"
                                />
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">MS, Data Science</span>
                                <br />
                                University of Texas at Arlington
                                <br />
                                GPA: 4.0
                                <br />
                                August 2023 – May 2025
                                <br />
                                <i className="text-sm text-gray-600">
                                    Courses: Statistical Theory &amp; Applications, Statistical &amp; Scientific
                                    Computing, Neural Networks, Machine Learning, Big Data and Cloud Computing,
                                    Data Visualization.
                                </i>
                            </p>
                        </div>

                        {/* CMRIT */}
                        <div className="p-6 rounded-xl border border-black bg-[#f5f5dc] hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-all text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/src/assets/logo/CMRIT_logo.png"
                                    alt="CMRIT"
                                    className="w-28 h-24 object-contain"
                                />
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">
                                    B.E, Electronics and Communication Engineering
                                </span>
                                <br />
                                C.M.R Institute of Technology
                                <br />
                                August 2013 – August 2017
                                <br />
                                <i className="text-sm text-gray-600">
                                    Courses: Data Structures and Algorithm, Design Patterns, Operating Systems,
                                    Embedded Programming, Distributed Systems, Computer Networks.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
