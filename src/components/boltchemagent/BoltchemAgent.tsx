import React from 'react'

const BoltchemAgent = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-customBlue to-customPurple">
            <div className="h-full container mx-auto flex flex-col justify-center items-center">
                <h2 className="text-white text-[40px] mb-6 text-center">
                    Medicinal Chemistry Agent
                </h2>
                <div className="h-3/4 max-w-4xl flex flex-col justify-center items-center">
                <p className="text-white text-[20px] text-center">Design. Synthesize. Optimize.</p>
                    <p className="text-white text-[20px] text-center">
                        Our Medicinal Chemistry Agent leverages AI and data-driven insights to streamline the design, synthesis, and optimization of drug candidates. Tailored to address the complex needs of modern drug discovery, our platform empowers medicinal chemists to design molecules with precision, predictability, and optimal efficacy from the outset.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BoltchemAgent