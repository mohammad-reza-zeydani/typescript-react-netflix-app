import logo from '../../assets/images/logo.png'
import netflix from '../../assets/images/netflix-header.jpg'
import { THeader } from '../../types/types'
import { Link } from 'react-router-dom'
const Header= () => {
    const language:THeader[]=[{
        id:1,
        name:"English"
    },
    {
        id:2,
        name:"Spanish"
    }
]
const token=localStorage.getItem("token")
    return ( 
            <header className='flex flex-col items-center text-white relative bg-gradient-to-r from-gray-900 via-gray900 to-gray-800 border-b-4 sm:border-b-8 border-b-gray-800'>
                <div className='absolute w-size flex justify-between items-center'>
                    <img className='w-20 xs:w-24 sm:w-36 lg:w-44' src={logo} alt="" />
                    <div className='flex items-center gap-x-1 xs:gap-x-2 z-20'>
                        <select className='border border-white bg-transparent px-1 py-px sm:px-2 sm:py-1 text-sm sm:text-lg'>
                            {
                                language.map((lang=>{
                                    return (
                                        <option className=' text-zinc-400' key={lang.id}>{lang.name}</option>
                                    )
                                }))
                            }
                        </select>
                        {
                            token ?(
                             <>
                                <Link to={"/netflix"} className='bg-red-700 text-xs xs:text-sm active-btn sm:text-lg px-2 py-1 sm:px-5 sm:py-1 rounded-md'>Dashboard</Link>
                                <Link to={"/sign_out"} className='bg-red-700 text-xs xs:text-sm active-btn sm:text-lg px-2 py-1 sm:px-5 sm:py-1 rounded-md'>Sign Out</Link>
                             </>
                            ):(
                                <Link to={"/sign_in"} className='bg-red-700 text-sm sm:text-lg px-3 py-px active-btn sm:px-5 sm:py-1 rounded-md'>Sign In</Link>
                            ) 
                        }
                    </div>
                </div>
                <div className=' absolute z-10 h-full flex flex-col gap-y-2  items-center justify-center'>
                    <div className='flex flex-col gap-y-1 sm:gap-y-2 items-center'>
                      <h1 className="font-sans font-bold text-xl xs:text-3xl lg:text-6xl text-white">
                       Unlimited movies, TV <br></br>shows and more.
                      </h1>
                       <p className="text-white font-sans text-sm xs:text-lg sm:text-xl lg:text-2xl">
                        Watch anywhere. Cancel anytime.
                     </p>
                       <p className="text-white font-sans text-sm text-center xs:text-lg sm:text-xl lg:text-2xl">
                          Ready to watch? Enter your email to create or restart your membership.
                        </p>
                    </div>
                    <div className='flex flex-col gap-y-2 sm:flex-row w-full items-center justify-center child:py-1 child:md:py-3 child:px-1 child:md:px-5'>
                   <input className='w-5/6 sm:w-4/6 lg:w-5/6 outline-none text-black' type="email" placeholder="search email" />
                   <Link to={"/sign_up"} className='bg-red-700 text-base active-btn '>Get Started</Link>
                   </div>
                </div>
                <img className='mix-blend-overlay h-96 md:h-auto w-full bg-cover bg-no-repeat bg-center' src={netflix} alt="" />
            </header>
     );
}
 
export default Header;