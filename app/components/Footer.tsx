import Image from "next/image"
import Link from "next/link"

const contactData = [
    {
        icon: '/assets/mail.svg',
        info: 'info@littlelearners.com'
    },
    {
        icon: '/assets/phone.svg',
        info: '+880 1755-123456'
    },
    {
        icon: '/assets/map-pin.svg',
        info: '123 Learning St, Education City'
    }
]

const footerLinks = [
    [
        {
            text: "Home", href: "/"
        },
        {
            text: "Features", href: "/#features"
        },
        {
            text: "Our Testimonials", href: "/#testimonials"
        },
        {
            text: "FAQs", href: "/#faqs"
        },
    ],
    [
        {
            text: "About Us", href: "/about"
        },
        {
            text: "Our Mission", href: "/about?#mission"
        },
        {
            text: "Our Vision", href: "/about?#vision"
        },
        {
            text: "Awards and Recognitions", href: "/about?#awards"
        },
        {
            text: "History", href: "/about?#history"
        },
        {
            text: "Teachers", href: "/about?#teachers"
        }
    ],
    [
        {
            text: "Academics", href: "/academics"
        },
        {
            text: "Special Features", href: "/academics?#special-features"
        },
        {
            text: "Gallery", href: "/academics?#gallery"
        },
    ],
    [
        {
            text: "Contact Us", href: "/contact-us"
        },
        {
            text: "Information", href: "/contact-us/?#information"
        },
        {
            text: "Map & Direction", href: "/contact-us/?#map-direction"
        },
    ]
]

const socialLinks = [
    { name: 'Facebook', icon: '/assets/fb.svg', href: '#' },
    { name: 'Twitter', icon: '/assets/twitter.svg', href: '#' },
    { name: 'LinkedIn', icon: '/assets/linkedin.svg', href: '#' },
]

const Footer = () => {

    return (
        <footer className="border-2 border-gray-800 rounded-lg bg-white">
            <div className="container pt-16">
                <div className="grid grid-cols-6 ">
                    <div className="col-span-2">
                        <Image src='/assets/logo.svg' width={180} height={60} alt="logo" />
                        <p className="mt-4 text-slate-700">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>

                        <div className="flex flex-col gap-4 mt-6">
                            {
                                contactData.map((contactData, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <div className="border-2 border-slate-500 rounded p-1.5 bg-orange-95 w-8 h-8 flex items-center justify-center">
                                            <Image src={contactData.icon} width={16} height={16} alt="icon" />
                                        </div>
                                        <div className="text-sm text-slate-700 font-semibold">
                                            {contactData.info}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div> {/* site information */}

                    {
                        footerLinks.map((links, colIndex) => (
                            <div key={colIndex}>
                                {
                                    links.map((link, linkIndex) => (
                                        <div key={linkIndex}    >
                                            <Link href={link.href}
                                                className={`text-[15px] inline-block hover:underline ${linkIndex == 0 ? "font-semibold mb-4 text-gray-15" : "font-medium text-gray-20 mb-2 "}`}>{link.text} </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {/* site useful links */}
                </div>

                <div className="border-t border-b border-t-slate-700 border-b-slate-700 py-8 mt-10  flex items-center justify-between">
                    <div className="text-gray-20">
                        <Link href="#" className="text-[15px]  hover:underline">Terms of Service</Link>
                        <span className="mx-3">|</span>
                        <Link href="#" className="text-[15px]  hover:underline">Terms of Service</Link>
                        <span className="mx-3">|</span>
                        <Link href="#" className="text-[15px]  hover:underline">Terms of Service</Link>
                    </div>
                    <div className="flex gap-4">
                        {
                            socialLinks.map((social, index) => (
                                <div key={index} className="w-14 h-14 border-2 bg-orange-90 border-gray-15 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white hover:border-orange-80 transition">
                                    <Image src={social.icon} width={25} height={25} alt={social.name} />
                                </div>
                            ))
                        }
                    </div>
                    {/* social links icon */}
                </div>

                <div className="py-8">
                    <p className="text-center text-gray-40 ">© 2026 Little Learners. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer