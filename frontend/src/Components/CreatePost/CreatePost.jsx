import React, { useRef, useState, useEffect } from 'react'
import { BsImages } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import "./createPost.css"

const CreatePost = ({setCreate}) => {
    const [selectedFile, setSelectedFile] = useState();
    // Specify the default image
    const [defaultUserImage, setDefaultUserImage] = useState("");
    const inputFile = useRef(null);

    // On each change let user have access to a selected file
    const handleChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    // Clean up the selection to avoid memory leak
    useEffect(() => {
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            setDefaultUserImage(objectURL);
            return () => URL.revokeObjectURL(objectURL);
        }
    }, [selectedFile]);


    return (
        <div className='create'>
            {defaultUserImage === "" ? <>
            <div className='title-create-post'>
                <p>Create new post</p>
            </div>
            </> : <div className='Btn-next-con'>
                <button className='btn-next'>Next</button>
            </div>}
            {defaultUserImage === "" ? <>
                <div className='icon-and-button-create'>
                    <BsImages className='ic' />
                    <p>Drag photos and videos</p>
                    <input
                        type="file"
                        onChange={handleChange}
                        ref={inputFile}
                        style=  {{display:"none"}}
                        accept = "image/*"
                    />

                    <button onClick={() => inputFile.current.click()}>Select from computer</button>
                </div>
            </> : <>
            <div className="image-user-create">
                <img src={defaultUserImage} alt="user profile picture" />
                <button></button>
            </div>
            </>
            }

            <div className='cancelButton-create'>
                <ImCancelCircle className='incre' onClick={()=>setCreate(false)}/>
            </div>
        </div>
    )
}

export default CreatePost