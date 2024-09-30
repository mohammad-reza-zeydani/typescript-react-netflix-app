import { TMovies } from "../../../types/types";
import { useMyContext } from "../../context/context";
import BackButton from "../backBtn";
const MarkedMovies = () => {
  //at this context ,mark has marked movies and handleDelete is to remove marked movie from marked list
  const { mark, handleDelete } = useMyContext();
  return (
    <>
      {/* back to home page btn */}
      <BackButton />
      <div className='container px-1 xs:px-8 mb-20 mx-auto'>
        {/* if mark is empty show this message */}
        {!mark.length ? (
          <h1 className='text-center text-red-700 text-2xl md:text-4xl lg:text-7xl py-12 lg:py-48'>
            There are no any marked movies
          </h1>
        ) : (
          <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 text-white'>
            {/* if mark is not empty show the contents */}
            {mark?.map((item: TMovies) => {
              return (
                <div
                  style={{ borderColor: item.color }}
                  className='border sm:border-2 rounded-lg relative'>
                  {/* the image of the movie we got from context */}
                  <img
                    className='rounded-lg image-animate w-full h-44 md:h-52'
                    src={item.image}
                    alt={item.name}
                  />
                  {/* Mark svg ,this svg has onClick event that has handleDelete function to delete the movie*/}
                  <svg
                    onClick={() => handleDelete(item.id)}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-7 lg:size-9 bg-white text-red-700 active-btn rounded-md p-1 absolute top-2 right-2 cursor-pointer active:bgblue'>
                    <path
                      fill-rule='evenodd'
                      d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  {/*genre & name of the movies we got from context*/}
                  <div className='py-3 px-3'>
                    <span>{item.name}</span>
                    <h2 className='md:text-lg'>{item.genre}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MarkedMovies;
