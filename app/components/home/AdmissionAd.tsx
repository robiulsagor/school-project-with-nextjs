import Image from "next/image"

const AdmissionAd = () => {
    return (
        <div className="bg-[#ffdecc] border p-2 text-center relative overflow-hidden rounded-md text-sm md:text-base">
            <Image
                className="absolute left-0 -bottom-6"
                src='/assets/design_gredient.png'
                width={150}
                height={100}
                alt="icon"
            />
            <Image
                className="absolute left-[30%] -top-4.5"
                src='/assets/design_circle.png'
                width={50}
                height={50}
                alt="icon"
            />

            <Image
                className="absolute right-[30%] -bottom-2.5"
                src='/assets/design_circle.png'
                width={30}
                height={30}
                alt="icon"
            />
            Admission is open for 2026-2027. Apply Now →
        </div>
    )
}

export default AdmissionAd