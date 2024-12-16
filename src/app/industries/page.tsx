import React from 'react'

const Industries = () => {
    return (
        <>
            <div className="flex flex-col bg-gradient-to-br from-customDarkpurple  to-custompurple2">
                <div className="h-[80px]"></div>
                <div className="container mx-auto py-16">
                    {/* <h2 className="text-4xl text-white mb-12 text-center">
                        Industries we serve
                    </h2> */}
                    <div className="grid md:grid-cols-3 grid-cols-1 h-[50vh]">
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <h2 className="text-[40px] text-white">Pharmaceutical & Biotechnology</h2>
                            <p className="text-[25px] text-lightText">Explain how your tools help streamline discovery pipelines and offer a competitive edge with AI-driven insights.
                            </p>
                        </div>
                        <div className="md:col-span-1">

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 h-[50vh]">
                        <div className="md:col-span-1">

                        </div>
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <h2 className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">Academic Research & Universities</h2>
                            <p className="text-[25px]">Explain how your tools help streamline discovery pipelines and offer a competitive edge with AI-driven insights.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-gradient-to-r from-customBlue to-customPurple">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 h-[50vh]">
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <h2 className="text-[40px] text-white">Agri-biotech & Environmental Sciences</h2>
                            <p className="text-[25px] text-lightText">Describe potential applications in these fields, such as bioactive molecule discovery for crop protection and environmental impact reduction.</p>
                        </div>
                        <div className="md:col-span-1">

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="container mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1 h-[50vh]">
                <div className="md:col-span-1">

                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                    <h2 className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">Industries Interested in Sustainable Alternatives</h2>
                    <p className="text-[25px]">Companies in cosmetics, fragrances, and related fields can leverage our AI-powered platform to discover sustainable, bio-based ingredients and eco-friendly alternatives, promoting innovation in product formulation and ingredient sourcing.</p>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Industries