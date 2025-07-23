import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalAudioPlayer } from '../Context/AudioPlayerContext';

const AlbumDetails = () => {
    let location = useLocation();
    // console.log(location);
    let {songs, setSongs, isPlaying, setIsPlaying, currentSongIndex, setCurrentSongIndex} = useContext(GlobalAudioPlayer);
    // !Extract the album details only from the state
    let albumData = location?.state;
    console.log("Album data:", albumData);

    // !Extract te song list from the album data
    let songList = albumData?.songs;
    console.log("Song List:", songList);
    // !Create one function which will handle the songs
    let handleSongChange=(index)=>{
        setSongs(songList);
        setCurrentSongIndex(index);
        if(currentSongIndex === index){
            setIsPlaying(!isPlaying);
        }else{
            setIsPlaying(true);
        }
}
    return (
        <section className='w-full min-h-[calc(100vh-70px)] flex flex-col items-center pt-10'>
            {/* For album details */}
            <article className='w-[95%] flex gap-2 h-[400px] bg-[#1E2939] px-8 py-6 rounded-md hover:bg-gray-900 hover:ring-1 hover:ring-blue-600 transition-all duration-50 ease-linear'>
                {/* Left aside -> album thumbnail */}
                <aside className='basis-[30%] h-[350px] p-1 relative'><img src={albumData?.albumThumbnail} alt={albumData?.albumTitle} className='w-full h-full object-cover rounded-md' />
                    <span className='py-0.5 px-3 bg-rose-600 rounded-md absolute top-[-10px] right-[-8px]'>{albumData?.albumType}</span>
                </aside>
                {/* right side -> album details */}
                <aside className='basis-[70%] h-[350px]'>
                    <h1 className='text-5xl font-bold tracking-wider px-2 py-3'>{albumData?.albumTitle}</h1>
                    <p className='px-2 py-1'>
                        <span className='text-lg font-semibold mr-1 text-justify'>Description:</span>
                        <span className='text-gray-300 italic'>{albumData?.albumDesc}</span>
                    </p>
                    <p className='px-2 py-1'>
                        <span className='text-lg font-semibold mr-1 text-justify'>Release Date:</span>
                        <span className='text-gray-300 italic'>{albumData?.albumReleaseDate}</span>
                    </p>
                    <p className='px-2 py-1'>
                        <span className='text-lg font-semibold mr-1 text-justify'>Album Language:</span>
                        <span className='text-gray-300 italic'>{albumData?.albumLang}</span>
                    </p>
                    <p className='px-2 py-1'>
                        <span className='text-lg font-semibold mr-1 text-justify'>Starcast:</span>
                        <span className='text-gray-300 italic'>{albumData?.albumStarcast}</span>
                    </p>
                    <p className='px-2 py-1'>
                        <span className='text-lg font-semibold mr-1 text-justify'>Album Director:</span>
                        <span className='text-gray-300 italic'>{albumData?.albumDirector}</span>
                    </p>
                    <p className='px-2 py-1'>
                        <span className='text-lg font-semibold mr-1 text-justify'>No.of Tracks:</span>
                        <span className='text-gray-300 italic'>{albumData?.albumSongsCount}</span>
                    </p>
                </aside>
            </article>
            {/* Song list container */}
            <main className='w-full mt-5 rounded-b-md'>
                <header className='w-full '>
                    <h1 className='text-3xl font-semibold py-2 px-9'>Song Collection</h1>
                </header>
                <table className='ml-8 w-[95%] mb-50'>
                    <thead>
                        <tr className='bg-gray-800 text-white rounded-t-md '>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>Track No.</td>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>Poster</td>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>Song Name</td>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>Song Singer</td>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>Song Music Director</td>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>Duration</td>
                            <td className='py-2 px-3 text-lg fonnt-semibold'>size</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            songList.length > 0 ? (
                                songList.map((song, index) => {
                                    return (
                                        <tr onClick={()=>handleSongChange(index)} className='bg-[#1E2939] text-white hover:bg-gray-900 transition-all duration-75 ease-in-out cursor-pointer '>
                                            <td className='text-center'>{index+1}</td>
                                            <td className='flex justify-center items-center py-2 px-2'>
                                                <img src={song?.songThumbnail} alt={song?.songTitle}className='w-[60px] h-[60px] rounded-md'/>
                                            </td>
                                            <td className='text-center px-2'>{song?.songTitle}</td>
                                            <td className='p-1'>{song?.songSingers}</td>
                                            <td className='p-2'>{song?.songMusicDirector}</td>
                                            <td className='text-center'>{song?.duration}</td>
                                            <td className='text-center'>{song?.size}</td>
                                        </tr>
                                    )
                                })) : (<p className='text-center'>Song Collection not found for this album</p>)
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </main>
        </section>
    )
}

export default AlbumDetails