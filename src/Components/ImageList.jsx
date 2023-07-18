import React from 'react'
import fedex from '../Assets/image 25.png'
import google from '../Assets/google-1-removebg-preview 1.png'
import Ola from '../Assets/Ola.svg'
import microsoft from '../Assets/new-Microsoft-logo-removebg-preview 1.png'
import Amazon from '../Assets/539f3ffbecad044276726c01-removebg-preview 1.png'
import walmart from '../Assets/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'

const ImageList = () => {
  return (
    <div className=' w-full h-50 bg-black flex  flex-wrap gap-10 justify-center items-center'>
        <div  className=' w-full h-24 flex  flex-wrap gap-10 justify-center items-center' >
        <img src={ fedex} alt=""  className=' w-36 bg-white rounded-md p-4'/>
            <img src={ google} alt="" className=' w-36 bg-white rounded-md p-4' />
            <img src={ Ola} alt=""  className=' w-36 bg-white rounded-md p-4'/>
            <img src={ microsoft} alt="" className=' w-36 bg-white rounded-md p-4' />
        </div>
        <div className=' w-full h-24 flex  flex-wrap gap-10 justify-center items-center'>
            <img src= {Amazon} alt=""  className=' w-36 bg-white rounded-md p-4'/>
            
            <img src= {walmart}alt=""  className=' w-36 bg-white rounded-md p-4'/>
        </div>

    </div>
  )

}

export default ImageList