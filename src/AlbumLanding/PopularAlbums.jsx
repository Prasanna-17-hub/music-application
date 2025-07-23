import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { __DB } from '../backend/firebaseconfig'
import { FaMusic } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Spinner from "../helper/Spinner"


const PopularAlbums = () => {
    let [albums, setAlbums] = useState(null);

    useEffect(() => {
        let fetchAlbums = async () => {
            try {
                //! Now we will fetch the albums from the database
                let albumCollectionRef = collection(__DB, "music_albums");
                let getAlbums = await getDocs(albumCollectionRef);
                console.log(getAlbums);

                //! Now we will extract the required data
                let albumData = getAlbums.docs.map((album) => ({
                    ...album?.data(),
                    songs: album?.data()?.songs || []
                }))
                console.log("Album Data:", albumData);
                setAlbums(albumData);
            }
            catch (error) {
                console.error("Error while fetching:", error);

            }


        }
        //! call the function
        fetchAlbums();
    }, []);
    return (
        <section className='w-[80vw]'>
            {albums ? (<article className='w-full '>
                <header className='w-full p-5 '>
                    <span className='text-3xl'><FaMusic /></span>
                    <h1 className='text-3xl font-bold '>Popular Albums</h1>
                </header>
                <main className='w-full flex gap-5 items-center'>
                    <div className=' px-5 py-6 flex items-center gap-3'>
                        {albums.map((album, index) => {
                            return <NavLink to ={`album-details/${album?.albumTitle}`}key={index} state={album}>
                                <div className=' w-[260px] h-[330px]  bg-[#1E2939] p-4 rounded-md hover:bg-black/50 hover:ring-1 hover:ring-[wheat]'>
                                    <img src={album?.albumThumbnail} alt={album?.albumTitle} className='w-full h-[250px] object-cover rounded-md hover:scale-105 transition-all duration-100' />
                                  <h1 className='py-2 text-center bg-blue-700 mt-2 rounded text-xl '>{album?.albumTitle}</h1>
                                </div>
                            </NavLink>
                        })}
                    </div>
                </main>
            </article>) : (<section className='w-[100%] h-[100vh] fixed top-0 left-[7%]'>
                        <Spinner/>
                    </section>)}
            
        </section>
    )
}

export default PopularAlbums
