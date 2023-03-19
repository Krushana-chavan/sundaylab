import React from 'react'
import "./viewAllComment.css"
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { ImCancelCircle } from "react-icons/im";
import { BsSend, BsBookmark } from "react-icons/bs";

const ViewAllComment = ({setSeeComment}) => {
    return (
        <div className='viewAllComment-container'>
            <div className='viewAll-image'>
                <img src="https://instagram.fpat1-2.fna.fbcdn.net/v/t39.30808-6/335997460_734701078034426_1983485217095913144_n.jpg?stp=c0.190.720.900a_dst-jpg_e15_s480x480&_nc_ht=instagram.fpat1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uILklolodt4AX9TEM0-&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzA1OTg3NDAzODMxNjUwNDc2Mg%3D%3D.2-ccb7-5&oh=00_AfAVcAtO2SXkK8BGMtwIJ2MNpvNa92gXA-n3C6G9W_TBNw&oe=641CA2D0&_nc_sid=6136e7" alt="Image" />
            </div>
            <div className="secon-viewAll">
                <div className='viewAll-pro'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                        <div className="viewAll-propName">
                            <div>
                                <p>itz_manish_705</p>
                            </div>
                            <p>Original audio</p>
                        </div>
                    </div>
                    <div>
                        <FiMoreHorizontal className='incre' />
                    </div>
                </div>
                <hr className='boredr' />

                <div className='AllComment-Display'>
                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='Single-comment-container mb'>
                        <div className='viewAll-pro'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                                <div className="viewAll-propName">
                                    <div>
                                        <p>itz_manish_705</p>
                                        <small>Har Har Mahadev</small>
                                    </div>
                                    <div className='reply-section'>
                                        <p>2h</p>
                                        <p>Reply</p>
                                        <p>See Translation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AiOutlineHeart className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='boredr' />
                <div className='viewAll-icon'>
                    <div className='like-comment-share-and-save'>
                        <div className='like-share-comment'>
                            <AiOutlineHeart className='font-size-icon color-g' />
                            <TbMessageCircle2 className='font-size-icon color-g' />
                            <BsSend className='icon-send color-g' />
                        </div>
                        <div>
                            <BsBookmark className='icon-send color-g' />
                        </div>
                    </div>
                </div>
                <hr className='boredr' />
                <div className='comment-viewAll'>
                    <div><p>&#128512;</p></div>
                    <div className="input-viewAll">
                        <input type="text" placeholder='Add a comment...' />
                        <button >Post</button>
                    </div>
                </div>
            </div>

            <div className='cancelButton-ViewAlll'>
                <ImCancelCircle className='incre' onClick={()=>setSeeComment(false)}/>
            </div>
        </div>
    )
}

export default ViewAllComment