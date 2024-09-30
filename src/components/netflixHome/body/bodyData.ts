import tv from "../../../assets/images//tv(1).png"
import phone from "../../../assets/images/phone.jpg"
import devices from "../../../assets/images/devices.png"
import kids from "../../../assets/images/kids.png"
import { TBody } from "../../../types/types"
export const BodyData:TBody[]=[
    {
        id:1,
        image:tv,
        title:"Enjoy on your TV.",
        text:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more.",
        reverse:false
    },
    {
        id:2,
        image:phone,
        title:"Download your shows and watch offline.",
        text:"Save your favorites easily and always have something to watch.",
        reverse:true
    },
    {
        id:3,
        image:devices,
        title:"Watch everywhere",
        text:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV wi paying more.",
        reverse:false
    },
    {
        id:4,
        image:kids,
        title:"Create profiles for kids.",
        text:"Send kids on adventures with their favorite characters in a space made just for them-free with your membership.",
        reverse:true
    },
]