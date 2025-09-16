import React from 'react';
import '../../index.css';

const engagementModelsData = [
    {
        title: "Hire Full-time Developer",
        description:
            "Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals.",
    },
    {
        title: "Hire Part-time Developer",
        description:
            "Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire.",
    },
    {
        title: "Professional Services",
        description:
            "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale.",
    },
];

const EngagementModels = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center lg:text-left text-white">
                    Our Flexible Engagement Models
                </h1>
                <p className="text-lg mb-12 max-w-3xl mx-auto text-center lg:text-left lg:mx-0 text-white">
                    Our team is your partner for the next big digital leap. Our customized and highly flexible engagement models are designed to meet business objectives. All of our service engagements are focused on customer satisfaction, and we ensure that clear communication is maintained throughout.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsData.map((card, index) => (
                        <div
                            key={index}
                            className="relative group rounded-[17px] overflow-hidden border border-gray-300 shadow-lg"
                        >
                            {/* Expanding background */}
                            <div className="absolute top-0 left-0 w-full h-[115px] bg-[#c1d8fc] group-hover:h-full transition-all duration-700 ease-in-out z-0"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex justify-center items-center h-[115px] p-5">
                                    <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#151515]">
                                        {card.title}
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <p className="text-base font-bold leading-relaxed text-white group-hover:text-black transition-colors duration-500">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
