import React from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AddCircleOutline } from '@mui/icons-material';
import { HiMenu } from "react-icons/hi";
import "./leftMenu.css";


const LeftMenu = ({setCreate}) => {
    return (
        <div className='left-container'>
            <div className='contain'>
                <div className='logo-left'>
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                </div>

                <div>
                    <div className='icon-title'>
                        <Link to="/">
                            <GrHomeRounded className="font-size-icon"/>
                            <p>Home</p>
                        </Link>
                    </div>

                    <div className='icon-title'>
                        <Link>
                            <BsSearch className="font-size-icon"/>
                            <p>Search</p>
                        </Link>
                    </div>

                    <div className='icon-title'>
                        <Link>
                            <MdOutlineExplore className="font-size-icon incre"/>
                            <p>Explore</p>
                        </Link>
                    </div>

                    <div className='icon-title'>
                        <Link>
                            <BiMoviePlay className="font-size-icon incre"/>
                            <p>Reels</p>
                        </Link>
                    </div>

                    <div className='icon-title'>
                        <Link>
                            <TbMessageCircle2 className="font-size-icon incre"/>
                            <p>Messages</p>
                        </Link>
                    </div>

                    <div className='icon-title'>
                        <Link>
                            <AiOutlineHeart className="font-size-icon incre"/>
                            <p>Notifications</p>
                        </Link>
                    </div>
                    <div className='icon-title'>
                        <Link onClick={()=>setCreate(true)}>
                            <AddCircleOutline className="font-size-icon incre"/>
                            <p>Create</p>
                        </Link>
                    </div>

                    <div className='profile-continer'>
                        <Link to="/profile">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="propfile_pic" />
                            <p>Profile</p>
                        </Link>
                    </div>

                    <div className='Hem-icon'>
                        <HiMenu className='incre'/>
                        <p>More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu