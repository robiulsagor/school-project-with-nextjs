import { ArrowRight } from "lucide-react";
import Link from "next/link";

type NavigatePageProps = {
    title: string;
    description: string;
    link: string;
}

const NavigatePageCard = ({ title, description, link }: NavigatePageProps) => {
    return (
        <div className="border border-gray-10 rounded-lg py-12 px-14 shadow hover:shadow-lg transition-shadow duration-300 flex  justify-center bg-white relative after:content-[''] after:absolute after:top-2 after:left-2 after:w-full after:h-full after:bg-black after:z-[-1] after:rounded-lg ">
            <div className="w-[85%] flex flex-col gap-10 justify-between h-full">
                <div >

                    <h2 className="text-3xl text-center font-bold font-raleway">{title}</h2>
                    <div className="grid grid-cols-6 gap-2 my-8">
                        {
                            Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="w-full bg-orange-80 py-0.5 relative">
                                    {(i == 0 || i == 5) && (
                                        <div className={`absolute ${i == 0 ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-3 h-3 border border-slate-800 rounded-full bg-white`}></div>
                                    )}
                                    <div className="border border-slate-600"> </div>
                                </div>
                            ))
                        }

                    </div>
                    <p className="text-center mt-12">{description}</p>
                </div>


                <div className="relative">
                    <Link href={link} className="border border-slate-900 text-center hover:underline flex items-center justify-center gap-2 bg-orange-80 w-full text-black py-1.5 rounded-md  z-10 relative hover:translate-1">Learn More <ArrowRight /> </Link>
                    <span className="absolute top-1 left-1 w-full h-full bg-black rounded-md z-0"></span>
                </div>
            </div>

        </div>
    )
}

export default NavigatePageCard