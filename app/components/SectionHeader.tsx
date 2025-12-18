const SectionHeader = (
    {
        subheading,
        heading,
        description
    }: {
        subheading?: string,
        heading?: string,
        description?: string
    }
) => {
    return (
        <div className="text-center">
            {
                subheading && <span className="border rounded-md py-1.5 px-2.5 bg-white">{subheading} </span>
            }

            <h2 className="text-5xl font-bold my-6 font-raleway">
                {heading}
            </h2>

            <p className="max-w-2/3 mx-auto text-[18px] font-medium text-gray-20">{description}</p>
        </div>
    )
}

export default SectionHeader