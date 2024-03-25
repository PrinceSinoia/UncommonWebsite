import React from 'react'
import styled from 'styled-components'



const Wrapper =styled.section`
.BecomingAmentor{
    padding-top:15%;
    padding-bottom: 15%;
    background: #F2F3FE;
}
.colorDiv{
    background: white;
    padding-top:10%;
    padding-bottom: 14%;
 
}
.images-div{
position: relative;
}
.colorBlue{
    display: none;
    z-index: 1;
}
img{
    border-radius: 5%;
    width: 70%;
    display: flex;
    margin: 0 auto;
    z-index: 2;
}
.img-2{
    width: 32%;
    position: absolute;
    z-index: 3;
    left: 251px;
    top: 176px;
}

h4{
    padding: 0 40px;
    line-height: 30px;
    padding-top:19%;
    text-align:center;
    padding-bottom: 4%;
}

p{
    text-align: center;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 300;
    padding: 0 62px;
}

@media (min-width:768px) {
  .colorDiv {
    background: white;
    padding-top: 8%;
    padding-bottom: 5%;
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-radius: 2%;
} 
img {
    border-radius: 5%;
    width: 125%;
    display: flex;
    margin: 0;
    position: relative;
    margin-left: 18px;
    z-index: 2;
}
.img-2 {
    width: 65%;
    position: absolute;
    z-index: 3;
    top: 137px;
    left: 169px;
}
.BecomingAmentor {
    padding-top: 8%;
    padding-bottom: 15%;
    background: #F2F3FE;
}
.colorBlue{
    border-radius: 3%;
    display: block;
    width: 217px;
    height: 184px;
    background: #4553E6;
    position: absolute;
    z-index: 1;
    top: -21px;
    left: 2px;
}
.img-text-combo{
    display: flex;
    margin: 0 5px;
}
h4 {
    padding: 0 32px;
    line-height: 30px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 19px;
    font-weight: bold;
    margin-left: 58px;
}
p {
    text-align: left;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
    padding: 0 97px;
}
}
 
@media (min-width: 992px) {
 .colorDiv {
    background: white;
    padding-top: 8%;
    padding-bottom: 5%;
    display: flex;
    width: 79%;
    margin: 0 auto;
    border-radius: 2%;
}
 .BecomingAmentor {
    padding-top: 4.5%;
    padding-bottom: 4.5%;
    background: #F2F3FE;
}
.img-text-combo{
    display: flex;
    margin: 0 60px;
}
 img {
    border-radius: 5%;
    width: 168%;
    display: flex;
    margin: 0;
    height: 230px;
    position: relative;
    margin-left: 18px;
    z-index: 2;
    object-fit: cover;
}
h4 {
    padding: 0 3px;
    line-height: 30px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 21px;
    font-weight: bold;
    margin-left: 124px;
}
 p {
    text-align: left;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
    padding: 0px 53px;
    margin-left: 77px;
}
 .colorBlue {
    border-radius: 3%;
    display: block;
    width: 146px;
    height: 222px;
    background: #4553E6;
    position: absolute;
    z-index: 1;
    top: -21px;
    left: 1px;
}
 .img-2 {
    width: 109%;
    position: absolute;
    z-index: 3;
    height: 131px;
    top: 156px;
    left: 113px;
    object-fit: cover;
}
 h4 {
    padding: 0 19px;
    line-height: 30px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 21px;
    font-weight: bold;
    margin-left: 141px;
}
 p {
   line-height: 1.5;
    padding: 0px 53px;
    margin-left: 100px;
}
}
@media (min-width: 1200px) {
    .BecomingAmentor {
    padding-top: 4%;
    padding-bottom: 4.5%;
    background: #F2F3FE;
} 
.colorDiv {
    background: white;
    padding-top: 7.5%;
    padding-bottom: 4.5%;
    display: flex;
    width: 80%;
    margin: 0 auto;
    border-radius: 2%;
}
.img-text-combo{
    display: flex;
    margin: 0 100px;
}
img {
    border-radius: 5%;
    width: 208%;
    display: flex;
    margin: 0;
    height: 209px;
    position: relative;
    margin-left: 22px;
    z-index: 2;
    object-fit: cover;
}
.colorBlue {
    border-radius: 5%;
    display: block;
    width: 187px;
    height: 210px;
    background: #4553E6;
    position: absolute;
    z-index: 1;
    top: -21px;
    left: 1px;
}
.img-2 {
    width: 110%;
    position: absolute;
    z-index: 3;
    height: 155px;
    top: 108px;
    left: 120px;
    object-fit: cover;
}
 h4 {
    padding: 0px 75px;
    line-height: 40px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 28px;
    font-weight: bold;
    margin-left: 130px;
}
p {
    font-size: 21px;
   line-height: 1.5;
    padding: 0px 53px;
    margin-left: 155px;
}
}
`

function BecomingAmentor() {
  return (
   <Wrapper>
        <div class="BecomingAmentor">
        <div class="colorDiv">
<div className='img-text-combo'>
            <div class="images-div">
                <div class="colorBlue"></div>
                <img className='img-2' src="../uncommon images/log2.png" alt="photo"/>
                <img src="../uncommon images/mentor.jpeg" alt="photo"/>
            </div>
            <div class="BecomingAmentor-text-div">
                <h4>Becoming a Mentor at Uncommon has been an extraordinary experience. It’s been a privilege to watch
                    Walter grow from novice to world-class designer.</h4>
                <p>-Rasa Lavarevic, Sr. UX/UI Designer, Autodesk</p>
            </div>
            </div>
        </div>
    </div>
   </Wrapper>
  )
}

export default BecomingAmentor
