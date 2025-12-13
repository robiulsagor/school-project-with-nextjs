import Image from "next/image"

const Hero = () => {
    return (
        <section className="section">
            <Image src="/assets/design_gredient.png" width={800} height={600} alt="design gredient" className="absolute top-0 right-0 w-[120px] h-[120px] object-cover -z-10 opacity-45 rounded-lg  -scale-x-[1]" />
            {/* design image */}

            <div className="section_wrapper flex items-center gap-12">
                <Image src='/assets/hero_img.png' width={300} height={300} alt="hero image" className="w-[90%] h-auto object-cover" />
                {/* hero image */}

                <div className="">
                    <span className="font-semibold underline">Welcome to Little Learners Academy</span>

                    <h2 className="text-[45px] font-extrabold leading-tight font-raleway">Where Young Minds Blossom and <span className="text-orange-65"> Dreams Take Flight. </span></h2>

                    <p className="pt-4 pb-8 text-lg w-[90%]">Our kinder garden school provides a nurturing environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together.</p>

                    <div className="w-[95%] border rounded-lg py-5 px-8 flex items-center justify-between  bg-orange-97  relative after:absolute after:content-['-'] after:w-full after:h-full after:top-2 after:left-2 after:bg-orange-80 after:rounded-lg after:-z-10">
                        <div>
                            <h1 className="text-4xl font-bold">+7000</h1>
                            <span>Students Passed Out</span>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold">+37</h1>
                            <span>Awards and Recognitions</span>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold   ">+15</h1>
                            <span>Experience Educators</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero