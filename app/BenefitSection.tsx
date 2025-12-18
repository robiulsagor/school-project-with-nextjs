import SectionHeader from "./components/SectionHeader"
import BenefitCard from "./BenefitCard"

const benefitData = [
    {
        id: 1,
        icon: '/assets/benefit_icon1.png',
        title: "Holistic Learning Approach",
        description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
    },
    {
        id: 2,
        icon: '/assets/benefit_icon2.png',
        title: "Experienced Educators",
        description: "Our passionate and qualified teachers create supportive and stimulatve learning envioronment."
    },
    {
        id: 3,
        icon: '/assets/benefit_icon3.png',
        title: "Nurturing Environment",
        description: "We prioritize safety and provide a warm and caring atmospere for every child."
    },
    {
        id: 4,
        icon: '/assets/benefit_icon4.png',
        title: "Play based Learning",
        description: "We believe in the power of play to foster creativity, problem-solving skills, and social development."
    },
    {
        id: 5,
        icon: '/assets/benefit_icon5.png',
        title: "Individualized Attention",
        description: "Our small class sizes ensure personalized attention for every child."
    },
    {
        id: 6,
        icon: '/assets/benefit_icon6.png',
        title: "Parent Involvement",
        description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
    },
]

const BenefitSection = () => {
    return (
        <section className="section">
            <div className="section_wrapper mt-12 py-10">
                <SectionHeader
                    subheading="Clidren Deserve Bright Future"
                    heading="Our Benefits"
                    description="With a dedicated team of experienced educators, state-of-the-art-facilities, and a comprehensive curriculam, we aim to lay a strong foundation for your child's future."
                />
                {/* Header section of the Current Section */}

                <div className="grid grid-cols-3 gap-x-8 gap-y-14 mt-24">
                    {
                        benefitData.map(benefit => (
                            <BenefitCard key={benefit.id} benefit={benefit} />
                        ))
                    }
                </div>

            </div>
        </section >
    )
}

export default BenefitSection