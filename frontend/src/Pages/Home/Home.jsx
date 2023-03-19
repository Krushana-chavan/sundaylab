import React, { useContext, useState } from 'react'
import LeftMenu from '../../Components/LeftMenu/LeftMenu'
import Slider from "react-slick";
import "../../SlickCSS/slick.css";
import "../../SlickCSS/slickTheme.css";
import "./home.css"
import { Link } from 'react-router-dom';
import { CgCopyright } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsSend, BsBookmark } from "react-icons/bs";
import CreatePost from "../../Components/CreatePost/CreatePost";
import { AuthContext } from '../../Context/AuthContextProvider';


const Home = () => {
  const {setCreate, create} = useContext(AuthContext)

  const status = [
    { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80", name: "Manis_Kumar_Jaiswal" },
    { image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80", name: "Roshan_Kumar" },
    { image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg", name: "Krishna_Kumar" },
    { image: "https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg", name: "Pushkar_Raj" },
    { image: "https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=", name: "Pankaj_Rai" },
    { image: "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg", name: "Jyoti_Kumari" },
    { image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg", name: "Rahul_Kumari" },
    { image: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg", name: "Rakesh_Roshan" },
    { image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80", name: "Chhotu_Kumar" },
    { image: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg", name: "Tashmin" },
  ]

  const AllSugestion = [
    { image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg", name: "Rahul_Kumari" },
    { image: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg", name: "Rakesh_Roshan" },
    { image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80", name: "Chhotu_Kumar" },
    { image: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg", name: "Tashmin" },
  ]

  const foote = ["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Language", "Meta Verified"]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  console.log(create)
  return (
    <div className='container'>
      <div className='leftMenu'>
        <LeftMenu setCreate={setCreate} />
      </div>
      <div className='Home-right'>
        <div className='main-dashboard'>
          <div className='Home-center-part'>
            <div>
              <div className='Home-slider-container'>
                <Slider {...settings}>
                  {status.map((ele, index) => (
                    <div key={index} className="Home-singleSlide">
                      <img src={ele.image} className="Home-slide-Image" alt={`${ele.name}_Image`} />
                      <p>{ele.name}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className='post-container'>
              <div>
                <div className='image-with-more-dot-icon'>
                  <div className="image-center-contain-home">
                    <img className='center-image-home' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                    <p>itz_manish_705</p>
                    <li><span className='buttlet'>.</span>2d</li>
                  </div>
                  <div>
                    <FiMoreHorizontal className='incre' />
                  </div>
                </div>

                <div className='post-image-home'>
                  <img src="https://instagram.fpat1-2.fna.fbcdn.net/v/t39.30808-6/335997460_734701078034426_1983485217095913144_n.jpg?stp=c0.190.720.900a_dst-jpg_e15_s480x480&_nc_ht=instagram.fpat1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uILklolodt4AX9TEM0-&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzA1OTg3NDAzODMxNjUwNDc2Mg%3D%3D.2-ccb7-5&oh=00_AfAVcAtO2SXkK8BGMtwIJ2MNpvNa92gXA-n3C6G9W_TBNw&oe=641CA2D0&_nc_sid=6136e7" alt="Picture_Post" />
                </div>
              </div>

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

              <div className='like-section'>
                <p>1 Like</p>
              </div>

              <div className='comment-part'>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>

            <div className='post-container'>
              <div>
                <div className='image-with-more-dot-icon'>
                  <div className="image-center-contain-home">
                    <img className='center-image-home' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_pic" />
                    <p>itz_manish_705</p>
                    <li><span className='buttlet'>.</span>2d</li>
                  </div>
                  <div>
                    <FiMoreHorizontal className='incre' />
                  </div>
                </div>

                <div className='post-image-home'>
                  <img src="https://instagram.fpat1-2.fna.fbcdn.net/v/t39.30808-6/335997460_734701078034426_1983485217095913144_n.jpg?stp=c0.190.720.900a_dst-jpg_e15_s480x480&_nc_ht=instagram.fpat1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uILklolodt4AX9TEM0-&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzA1OTg3NDAzODMxNjUwNDc2Mg%3D%3D.2-ccb7-5&oh=00_AfAVcAtO2SXkK8BGMtwIJ2MNpvNa92gXA-n3C6G9W_TBNw&oe=641CA2D0&_nc_sid=6136e7" alt="Picture_Post" />
                </div>
              </div>

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

              <div className='like-section'>
                <p>1 Like</p>
              </div>

              <div className='comment-part'>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>
          </div>



          <div className='Home-righ-part'>
            <div>
              <div className='HomePro-section'>
                <div className='Pic-and-name-home'>
                  <div className="Home-singleSlide">
                    <img className="Home-slide-Image" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Profile_Image" />
                  </div>
                  <div className='naming-home'>
                    <p>itz_manish_705</p>
                    <p>Manish Kumar</p>
                  </div>
                </div>
                <Link className='switch-title'>Switch</Link>
              </div>
              <div>
                <div className='suggestion-part'>
                  <p className='sugge'>Suggestion</p>
                  <p>See All</p>
                </div>

                <div>
                  {AllSugestion && AllSugestion.map((ele, index) => (
                    <div className='HomePro-section' key={index}>
                      <div className='Pic-and-home'>
                        <div className="Home-s">
                          <img src={ele.image} alt={`${ele.name}_Image`} />
                        </div>
                        <div className='folloowers-name-home'>
                          <p>itz_manish_705</p>
                          <p>{ele.name}</p>
                        </div>
                      </div>
                      <Link className='switch-title'>Follow</Link>
                    </div>
                  ))}
                </div>


              </div>

              <div className='foote'>
                {foote && foote.map((ele, index) => (
                  <li key={index}>{ele}</li>
                ))}
              </div>
              <div className='Home-copyRight'>
                <CgCopyright /><span>2023 Instagram from Meta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        create ? <>
          <div className="Create-post-in-home">
            <CreatePost setCreate = {setCreate}/>
          </div>
        </> : null
      }
    </div>
  )
}

export default Home