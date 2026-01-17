import SectionHeader from "../SectionHeader"
import NavigatePageCard from "./NavigatePageCard"

const navigatePageData = [
    {
        id: `1`,
        title: `About Us`,
        description: `Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.`,
        link: `/about-us`
    },
    {
        id: `2`,
        title: `Academics`,
        description: `Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.`,
        link: `/academics`
    },
    {
        id: `3`,
        title: `Student Life`,
        description: `Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.`,
        link: `/student-life`
    },
    {
        id: `4`,
        title: `Admissions`,
        description: `Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.`,
        link: `/admissions`
    },
]


const NavigatePage = () => {
    return (
        <section className="section">
            <div className="container mt-12 py-10">
                <SectionHeader
                    subheading="Explore More"
                    heading="Navigate through our Pages"
                    description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
                />

                <div className="grid grid-cols-2 gap-8 mt-10 w-[80%] mx-auto">
                    {
                        navigatePageData.map((item) => (
                            <NavigatePageCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        ))
                    }
                </div>

                {/* <NavigatePageCard />
                <NavigatePageCard />
                <NavigatePageCard />
                <NavigatePageCard />
            </div> */}
            </div>
        </section >
    )
}

export default NavigatePage