"use client"
import Spline from '@splinetool/react-spline'

const SplineScene = () => {
    return (
        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
            <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode' />
        </div>
    )
}

export default SplineScene