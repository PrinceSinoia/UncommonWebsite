import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const Wrapper =styled.section`
.Stay-Engaged{
padding-top: 25%;
}
h2{
    font-size: 39px;
    font-weight: bold;
    text-align: center;
}
.img{
    width: 100%;
   margin-top: 30px;
}

a img{
    width: 97%;
    border-radius: 5%;
}
.vido-combo{
    padding-top: 8%;
    display: flex;
    gap: 13px;
    justify-content: flex-end;
  margin: 25px;
    align-items: center;
}
.video-image-div{
width: 30px;
height: 30px;
background: red;
}
p{
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding-top: 6%;
}
h3{
    display: none;
}
form{
display: flex;
margin: 0 auto;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
padding-bottom: 20%;
}
.inpput{
    color: red;
    border: none;
    background: #EEEEEE;
    width: 160px;
    height: 40px;
    border-radius: 7%;
    font-size: 18px;
}
.inpput-submit{
    color: white;
    width: 160px;
    height: 40px;
    border: none;
    background: #4A5AF8;
    border-radius: 7%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-div{
display: flex;
flex-direction: row;
gap: 8px;
}

@media (min-width: 768px){
  .img{
    width: 221%;
    height: 395px;
    object-fit: cover;
    margin-left: 43px;
    border-radius: 12px;
  } 
  .section-combo{
    display: flex;

  } 
 p {
    margin-left: 38px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    padding-top: 6%;
}
 form {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 18%;
    padding-bottom: 20%;
}
 a img {
    width: 95%;
    border-radius: 5%;
}
.inpput {
    color: red;
    border: none;
    background: #EEEEEE;
    width: 160px;
    height: 53px;
    border-radius: 7%;
    font-size: 18px;
}
 .inpput-submit {
   
    border: none;
  
    width: 160px;
    height: 53px;
    border-radius: 7%;
    font-size: 18px;
}
 .vido-combo {
    padding-top: 8%;
    display: flex;
    gap: 13px;
    justify-content: flex-end;
    margin-right: 52px;
    align-items: center;
    margin-left: 60px;
}
h2 {
    font-size: 54px;
    font-weight: bold;
    text-align: center;
}
.Stay-Engaged{
padding-top: 25%;
padding-bottom: 8%;
}
.Stay-Engaged {
    padding-top: 12%;
    padding-bottom: 8%;
}
 h2 {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
}

}


@media (min-width: 992px){
     h2 {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    margin-left: 149px;
}
  .img {
    width: 100%;
    height: 464px;
    object-fit: cover;
    margin-left: 67px;
}  
h3{
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-left: 44px;
    padding-top: 5%;
} 
a img {
    width: 95%;
    border-radius: 5%;
}
 .vido-combo {
    padding-top: 8%;
    display: flex;
    gap: 13px;
    justify-content: flex-end;
    margin-right: 120px;
    align-items: center;
    margin-left: 46px;
}

 p {
    margin-left: 40px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    padding-top: 6%;
}
.inpput {
    color: red;
    border: none;
    background: #EEEEEE;
    width: 240px;
    height: 60px;
    border-radius: 7%;
    font-size: 18px;
}
 .inpput-submit {
    color: red;
    border: none;
   
    width: 240px;
    height: 60px;
    border-radius: 7%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}
 form {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 9%;
    padding-bottom: 20%;
    margin-right: 58px;
}
}

@media (min-width: 1200px) {
    .img {
    width: 68%;
    height: 464px;
    object-fit: cover;
    margin-left: 140px;
    border-radius: 14px;
} 
 .vido-combo {
    padding-top: 3%;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-right: 170px;
    align-items: center;
} 
 p {
    padding-bottom: 3%;
    margin-left: 65px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    padding-top: 1%;
}
 h3 {
    display: block;
    font-size: 29px;
    font-weight: bold;
    margin-left: 60px;
    padding-top: 2%;
    padding-bottom: 3%;
} 
.form-div{
    display: flex;
    gap: 15px;
}

 .inpput {
    color: red;
    border: none;
    background: #EEEEEE;
    width: 332px;
    height: 47px;
    border-radius: 3%;
    font-size: 18px;
    font-weight: bold;
}
 .inpput-submit {
    color: red;
    border: none;
    width: 332px;
    height: 47px;
    border-radius: 3%;
    font-size: 18px;
    background: #4A5AF8;
}

 form {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding-top: 1%;
    padding-bottom: 15%;
    margin-right: 89px;
}

  a img {
    width: 100%;
    border-radius: 5%;
    margin-left: 20px;
}
 .Stay-Engaged {
    padding-top: 12%;
    padding-bottom: 0%;
}
 h2 {
    padding-bottom: 3%;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    margin-left: 149px;
}
}
`
function StayEngaged() {
  return (
    <Wrapper>
         <div class="Stay-Engaged">

<h2>Stay Engaged</h2>
<div class="section-combo">
<img className='img' src="../uncommon images/all-clack-uncommon-shirt.png" alt="photo"/>
    <div class="text-images-combo">
        <div class="vido-combo">
            {/* <div className='video-image-div'></div> */}
            <a href='https://www.instagram.com/p/C03Z7ONAYFf/'>
            <img src="../images/Aloe Vera Product - Made with PosterMyWall-5.jpg" alt=""/>
                                    </a>
                                    <a href='https://www.instagram.com/p/C01dNzstSew/'>
                                    <img src="../images/Aloe Vera Product - Made with PosterMyWall-5.jpg" alt=""/>
                                    </a>
                                    <a href='https://www.instagram.com/p/C01aX7PNx9n/'>
                                    <img src="../images/Aloe Vera Product - Made with PosterMyWall-5.jpg" alt=""/>
                                    </a>
                                    <a href='https://www.instagram.com/p/C01X585tGWh/'>
                                    <img src="../images/Aloe Vera Product - Made with PosterMyWall-5.jpg" alt=""/>
                                    </a>


            {/* <img src="../uncommon images/heroimg.png" alt="photo"/>
        <video src="../uncommon images/fin.mp4" controls></video>
        <video src="../uncommon images/fin.mp4"controls></video>
        <video src="../uncommon images/fin.mp4" controls></video>
        <video   src="../uncommon images/fin.mp4" controls></video> */}
        </div>

        <p>Instagram | LinkedIn |<Link to='/blog'>Blog</Link></p>
        <h3>Sign Up For Our Mailing List</h3>

        <form >
            <div className='form-div'>
            
            <input className='inpput' type="text"placeholder='First Name'/>
            <input  className='inpput'type="text"placeholder='Last Name'/>
            </div>
            <div className='form-div'>
            <input className='inpput'type="text"placeholder='Email'/>
            <input  className='inpput-submit'type="text"placeholder='Submit'/>
            </div>
        </form>
    </div>
</div>
</div>
    </Wrapper>
      

  )
}

export default StayEngaged
