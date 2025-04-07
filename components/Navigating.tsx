const Navigating = () => {   
    return(
        <div className="min-w-screen min-h-screen absolute top-0 left-0 z-50">
        <div
            className="bg-[#18233c] w-screen h-screen animate-[navigating_1.5s_linear]"
        />
        <div
            className="bg-[#141a29] w-screen h-screen delay-[2s] animate-[navigating_1.5s_linear]"
        />
        <div
            className="bg-[#0d1018] w-screen h-screen delay-[2s] animate-[navigating_1.5s_linear]"
        />
        </div>
    )
}

export default Navigating;