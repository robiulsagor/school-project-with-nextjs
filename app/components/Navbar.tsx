import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="border mt-1.5 rounded-md flex justify-between items-center overflow-hidden ">
            <div className="p-2 bg-orange-65">
                <Image src='/assets/logo.png' width={150} height={60} alt="logo" />
            </div>

            <ul className="flex gap-0 text-sm md:text-base">
                <li className="border-l">
                    <Link href={'/'} className="px-4 p-3  block bg-orange-90 w-full ">Home</Link>
                </li>
                <li className="border-l">
                    <Link href={'/'} className="nav_link">About Us</Link>
                </li>
                <li className="border-l">
                    <Link href={'/'} className="nav_link">Academics</Link>
                </li>
                <li className="border-l">
                    <Link href={'/'} className="nav_link">Admissions</Link>
                </li>
                <li className="border-l">
                    <Link href={'/'} className="nav_link">Student Life</Link>
                </li>
                <li className="border-l">
                    <Link href={'/'} className="px-4 p-3 block bg-orange-80">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar