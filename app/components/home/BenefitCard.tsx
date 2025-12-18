import Image from "next/image"

type benefitType = {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const BenefitCard = ({ benefit }: { benefit: benefitType }) => {
    return (
        <div className="border-2 px-8 pt-12 pb-10 rounded-lg bg-white relative after:absolute after:content-[''] after:w-full after:h-full after:bg-black after:rounded-lg after:top-2 after:left-2 after:-z-10">
            {/* card icon */}
            <div className="w-14 h-14 border-2 absolute -top-7  left-5 rounded-xl bg-orange-95 flex items-center justify-center">
                <Image src={benefit.icon} width={100} height={100} className="w-6 h-6" alt="icon" />
            </div>
            <h3 className="text-2xl font-bold font-raleway text-gray-10">{benefit.title}</h3>
            <p className="mt-4 text-base text-gray-30 font-medium">{benefit.description}</p>
        </div>
    )
}

export default BenefitCard