import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

    const playAudio = () => {
        const audio = new Audio("https://en-audio.howtopronounce.com/1611291770600a5c7acbe06.mp3");
        audio.play();
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-[#f5f5dc]" // beige background
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4 flex flex-col items-center">
                    {/* Profile Picture */}
                    <img
                        src="/src/assets/images/Abhishek_Goudar.jpg"
                        alt="Abhishek Goudar"
                        className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover border-4 border-blue-400"
                    />
                    {/* Name + Pronunciation */}
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Hi, I'm Abhishek
                        </h1>
                    </div>

                    {/* Phonetic Guide */}
                    <p className="text-sm text-gray-600 italic mb-8">
                        Pronounced as: <b>Ah-bish-shek</b>  
                        <button
                            onClick={playAudio}
                            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                            aria-label="Play pronunciation"
                        >
                            🔊
                        </button>
                    </p>
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Software Engineer with a passion for building scalable, high-impact technology
                        solutions. My expertise spans software development, system design, performance
                        optimization, and applied machine learning, where I’ve successfully led
                        cross-functional teams to deliver innovative products.
                        <br /><br />
                        I thrive at the intersection of engineering and collaboration—whether driving
                        technical execution, mentoring junior engineers, or pushing the boundaries of
                        what’s possible. With a strong foundation in engineering principles and a
                        commitment to continuous learning, I aim to contribute to cutting-edge projects
                        that create measurable impact.
                        <br /><br />
                        Always open to connecting with professionals who are passionate about technology,
                        innovation, and solving complex challenges.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#experience"
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            View Experience
                        </a>

                        <a
                            href="mailto:abhishekdgoudar@gmail.com"
                            className="border border-blue-500/50 text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                            aria-label="Email Abhishek at abhishekdgoudar@gmail.com"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
