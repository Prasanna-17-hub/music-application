import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../helper/Spinner';
import { AuthUserContext } from '../../Context/AuthContextApi';

const UploadProfilePhoto = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();
  let [photoFile, setPhotoFile] = useState("");
  let [photoPreview, setPhotoPreview] = useState(null);
  let [isLoading, setIsLoading]= useState(false);

  let handleFileInputChange = (e) => {
    let file = e.target.files[0]
    // console.log(file)
    setPhotoFile(file);
    // ! URL.createObjectURL(file)setPhotos
    setPhotoPreview(URL.createObjectURL(file))
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!photoFile) {
        toast.error("Please select a file before uploading");
        return;
      }
      // ! COnverting image innto binary data
      //? FormData()-> API
      let fileData = new FormData();
      fileData.append("file", photoFile);
      fileData.append("upload_preset", "project")
      fileData.append("cloud_name", "dfevqyfyg");

      // ! Upload your binary data to the cloudinary
      let response = await fetch("https://api.cloudinary.com/v1_1/dfevqyfyg/image/upload", {
        method: "POST",
        body: fileData
      })

      let result = await response.json();
      let imageUrl = result.url;

      // ! Update the profile
      await updateProfile(authUser, {
        photoURL: imageUrl
      })

      toast.success("Profile photo updated successfully")
      navigate("/user/profile");

    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading ", error);

    }
    setIsLoading(false);
  }
  return (
    <section className='w-[100%] h-[calc(100vh-70px)] flex flex-col justify-center items-center'>
      <article className='w-[35%] bg-gray-900 flex flex-col justify-center items-center rounded-md'>
        <header className='w-full '>
          <h1 className='text-3xl text-center font-bold uppercase py-6 px-4'>Upload Profile Photo</h1>
        </header>
        {photoPreview === null ? <>
          <div className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-gray-500'>
            No File Selected
          </div>
        </> : <>
          <img src={photoPreview} alt="" className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-gray-500' />
        </>}

      </article>
      <main className='w-[35%] bg-gray-900'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center my-3 px-6'>
            <label htmlFor="profile" className='font-semibold text-lg py-2'>Upload your profile photo here</label>
            <input type="file" name='photoFile' id='profile'
              className='border py-2 px-4 border-gray-500 border-dotted file:bg-white file:p-1 file:rounded cursor-pointer file:cursor-pointer'
              onChange={handleFileInputChange} />
          </div>
          <div className='flex justify-center items-center mt-3 mb-5'>
            <button className='py-2 px-6 bg-blue-600 hover:bg-blue-700 cursor-pointer text-lg rounded-lg'>Upload Profile Photo</button>
          </div>
        </form>
      </main>
      {isLoading && (<section className="w-[100%] h-[100vh] bg-black/50 fixed top-0 ">
        <Spinner/>
      </section>)}
    </section>
  )
}

export default UploadProfilePhoto