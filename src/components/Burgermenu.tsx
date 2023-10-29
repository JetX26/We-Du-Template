'use client'
import Image from "next/image"
import icon from '../app/assets/wix images/profile-user.png'
import closeBtn from '../app/assets/wix images/close-btn.png'
import { useGlobalStore } from "../app/helper/store"





const Burgermenu = (): React.ReactNode => {
    const { setShowBurger } = useGlobalStore()

    return (
        <div className=" bg-white z-30 h-full w-full absolute top-0 flex flex-col gap-16 p-12 text-2xl">
            <div className=" flex justify-between">
                <div className=" flex items-center gap-4">
                    <Image height={50} width={50} src={icon} alt='Profile Icon'></Image>
                    <h1 className=" text-3xl font-bold">Log In</h1>
                </div>
                <span>
                    <Image onClick={() => {
                        setShowBurger(false)
                    }} src={closeBtn} width={50} height={50} alt="Close Button"></Image>
                </span>
            </div>
            <div className=" flex flex-col gap-4">
                <h2>Home</h2>
                <h2>Product</h2>
                <h2>Pricing Plans</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}


export default Burgermenu;





