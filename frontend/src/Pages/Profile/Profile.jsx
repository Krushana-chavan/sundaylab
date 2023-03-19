import React, { useContext } from 'react';
import LeftMenu from '../../Components/LeftMenu/LeftMenu';
import { AiOutlineSetting } from "react-icons/ai";
import { BsGrid3X3, BsBookmark } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./profile.css"
import { AuthContext } from '../../Context/AuthContextProvider';
import CreatePost from '../../Components/CreatePost/CreatePost';

const Profile = () => {
    const { setCreate, create } = useContext(AuthContext)
    const postImageArray = [
        { url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
        { url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
        { url: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg" },
        { url: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg" },
        { url: "https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=" },
        { url: "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" },
    ]
    return (
        <div className='container'>
            <div className='leftMenu'>
                <LeftMenu setCreate = {setCreate}/>
            </div>
            <div className='rightm-menu'>
                <div className='right-menu-container'>
                    <div className='profile-image-with-info'>
                        <div className='profile-image'>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="profile-image" />
                        </div>
                        <div className="profileInfo-section">
                            <div className="profile-name-edit">
                                <p>itz_manish_705</p>
                                <div>
                                    <button>Edit profile</button>
                                    <button>Ad tools</button>
                                </div>
                                <AiOutlineSetting className='incre' />
                            </div>
                            <div className="profile-post-follower">
                                <p><span className='fw-b'>427</span> following</p>
                                <p><span className='fw-b'>274</span> followers</p>
                                <p><span className='fw-b'>3</span> post</p>
                            </div>
                            <div className="profile-name">
                                <p>Manish Kumar</p>
                                <small>Brahara Kothi</small>
                            </div>
                        </div>
                    </div>

                    <div className='Profile-post-view'>
                        <div>
                            <hr className='hrTag mb' />
                        </div>
                        <div>
                            <div className='post-saved-tagged'>
                                <div className='icon-with-name'>
                                    <BsGrid3X3 className='font-size-i' />
                                    <span>posts</span>
                                </div>
                                <div className='icon-with-name'>
                                    <BsBookmark className='font-size-i' />
                                    <span>saved</span>
                                </div>
                                <div className='icon-with-name'>
                                    <HiOutlineUserCircle className='font-size-i inc' />
                                    <span>tagged</span>
                                </div>
                            </div>
                        </div>

                        <div className='posts-images'>
                            {postImageArray && postImageArray.map((postImage, index) => (
                                <div key={index}>
                                    <img src={postImage.url} alt="Posts_Image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {
                create ? <>
                    <div className="Create-post-in-home">
                        <CreatePost setCreate={setCreate} />
                    </div>
                </> : null
            }
        </div>
    )
}

export default Profile