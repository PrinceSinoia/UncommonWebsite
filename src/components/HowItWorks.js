import React from 'react'
import styled from 'styled-components'



const Wrapper=styled.section`
.How-It-Works{
    padding-top:10%;
    padding-bottom:4%;
}
.vid{
    width: 90%;
    display: flex;
    margin: 0 auto;
 margin-top: 15%;
    border-radius: 5%;
}
h3{
    font-size: 28px;
    font-weight: 600;
    margin-left: 20px;
}
.div-1{
    h2{
    padding-bottom:9%;
    font-size: 30px;
    margin-left: 20px;
}
.h2-h3-combo-first{
    margin-left: 23px;
}
p{
    padding-top: 4%;
    margin-left: 30px;
    margin-right: 26px;
    line-height: 1.6;
    padding-bottom: 6%;
    font-size: 22px;
    font-weight: 300;
}
hr{
    border: none;
    width: 90%;
    height: 3px;
    background: #707070;
    display: flex;
  
  margin: 0 auto;
}

}

/* end  */

.div-2{
    padding-top:8%;
    h3{
 
        padding: 0 16px;
        line-height: 35px;
        
    margin-right:150px;
    }
    p{
        padding-top: 6%;
    margin-left: 30px;
    margin-right: 12px;
    line-height: 1.6;
    padding-bottom: 6%;
    font-size: 22px;
    font-weight: 300;
}
hr{
    border: none;
    width: 90%;
    height: 3px;
    background: #707070;
    display: flex;
  
  margin: 0 auto;
}
}

/* end  */


.div-3{
    padding-top:8%;

    h3{
        margin-left:23px;
    }
    p{
        padding-top: 4%;
    margin-left: 30px;
    margin-right: 7px;
    line-height: 1.4;
    padding-bottom: 6%;
    font-size: 22px;
    font-weight: 300;
}
hr{
    border: none;
    width: 90%;
    height: 3px;
    background: #707070;
    display: flex;
  
  margin: 0 auto;
}
}

img{
    border-radius:8px;
    padding-top: 15%;
    width: 90%;
    display: flex;
    margin: 0 auto;
}


.uncommonCommunity{
    h2{
        margin-left: 22px;
    padding-top: 10%;
    line-height: 1.5;
    font-size: 28px;
    font-weight: bold;
    }
    p{
        padding-top: 3%;
    margin-left: 20px;
    margin-right: 53px;
    line-height: 1.6;
    font-size: 18px;
    padding-bottom: 6%;
    font-weight: 300;
    word-spacing: 2px;
   
}
button{
    margin-left:22px;
    width: 180px;
    height: 55px;
    background-color: #4A5AF8;
    border-radius: 5px;
   border: #4A5AF8 2px solid;
    font-size: 22px;
    color: #F1F1FE;
    font-weight: bold;
    &:hover{
        color:#4A5AF8;  
     transition:  .2s all ease-in-out;
  background:transparent
 
}
}
}

.mentors{
    padding-top:12%;
    h2{

    margin-right: 102px;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
    margin-left: 41px; 
    }
    p{
        font-weight: 300;
    padding-top: 3%;
    margin-left: 38px;
    margin-right: 40px;
    line-height: 1.8;
    padding-bottom: 6%;
    font-size: 20px;
}
}


@media (min-width: 768px) {
    .How-It-Works{
       
        padding-top:15%;
    padding-bottom:4%;
    }
    .div-1 h2 {
    padding-bottom: 9%;
    font-size: 45px;
    margin-left: 40px;
}
h3 {
    font-size: 43px;
    font-weight: 400;
    margin-left: 40px;
}
.div-1 p {
    padding-top: 4%;
    margin-left: 63px;
    margin-right: 90px;
    line-height: 1.7;
    padding-bottom: 6%;
    font-size: 25px;
    font-weight: 300;
}
.div-1 hr {
    border: none;
    width: 83%;
    height: 3px;
    background: #707070;
    display: flex;
    margin: 0 auto;
}
.div-2 p {
    padding-top: 6%;
    margin-left: 57px;
    margin-right: 96px;
    line-height: 1.7;
    padding-bottom: 6%;
    font-size: 25px;
    font-weight: 300;
}
.div-3 p {
    padding-top: 4%;
    margin-left: 59px;
    margin-right: 85px;
    line-height: 1.7;
    padding-bottom: 6%;
    font-size: 25px;
    font-weight: 300;
}
.div-3 h3 {
    margin-left: 58px;
}
.uncommonCommunity{
    padding-top: 15%;
    display: flex;
gap: 30px;
margin-left: 30px;
}
.vid{
    width: 40%;
}
 .uncommonCommunity h2 {
    margin-left: 11px;
    padding-top: 10%;
    line-height: 1.3;
    font-size: 32px;
    font-weight: bold;
}
.uncommonCommunity p {
    padding-top: 3%;
    margin-left: 15px;
    margin-right: 67px;
    line-height: 1.6;
    font-size: 25px;
    padding-bottom: 6%;
    font-weight: 300;
    word-spacing: 2px;
}
 .uncommonCommunity button {
    margin-left: 20px;
    width: 218px;
    height: 50px;
 
}
.mentors h2 {
    text-align: center;
    margin-right: 102px;
    line-height: 40px;
    font-size: 35px;
    font-weight: bold;
    margin-left: 41px;
    padding-top: 3%;
}
 .mentors p {
    text-align: center;
    font-weight: 300;
    padding-top: 3%;
    margin-left: 0;
    margin-right: 0;
    line-height: 1.8;
    padding-bottom: 6%;
    font-size: 28px;
    padding: 0 89px;
    margin-top: 3%;
}
}

@media (min-width: 992px){
    .How-It-Works {
    padding-top: 7%;
    padding-bottom: 4%;
}
.div-1 h2 {
    padding-bottom: 9%;
    font-size: 42px;
    margin-left: 40px;
}
 h3 {
    font-size: 33px;
    font-weight: 400;
    margin-left: 40px;
}
.div-1 p {
    padding-top: 4%;
    margin-left: 63px;
    margin-right: 245px;
    line-height: 1.7;
    padding-bottom: 6%;
    font-size: 28px;
    font-weight: 300;
}
.div-2 p {
    padding-top: 4%;
    margin-left: 57px;
    margin-right: 172px;
    line-height: 1.7;
    padding-bottom: 6%;
    font-size: 28px;
    font-weight: 300;
}
 .div-3 p {
    padding-top: 4%;
    margin-left: 59px;
    margin-right: 143px;
    line-height: 1.7;
    padding-bottom: 6%;
    font-size: 28px;
    font-weight: 300;
}
.uncommonCommunity{
    padding-top: 0%;
    display: flex;
gap: 30px;
margin-left: 45px;
}
.uncommonCommunity-textDiv{
    padding-top: 10%;
}
 .uncommonCommunity-textDiv {
    padding-top: 14%;
}
.vid {
    width: 46%;
}
.uncommonCommunity h2 {
    margin-left: 11px;
    padding-top: 10%;
    line-height: 1.3;
    font-size: 39px;
    font-weight: bold;
}

.uncommonCommunity p {
    padding-top: 3%;
    margin-left: 10px;
    line-height: 1.6;
    font-size: 25px;
    padding-bottom: 6%;
    font-weight: 300;
    word-spacing: 2px;
}
.mentors h2 { 
    font-size: 45px;
}
}

@media (min-width:1200px) {
   .div-1 h2 {
    padding-bottom: 5%;
    font-size: 54px;
    font-weight: 800;
    margin-left: 63px;
}
 .mentors {
    padding-top: 7%;
}
h3{
margin-left: 63px;
font-size: 39px;
font-weight: 600;
}
.div-1 p {
    padding-top: 2%;
    margin-left: 83px;
    margin-right: 315px;
    line-height: 1.7;
    padding-bottom: 1.5%;
    font-size: 25.5px;
    font-weight: 300;
}
.div-2 p {
    padding-top: 2%;
    margin-left: 83px;
    margin-right: 330px;
    line-height: 1.7;
    padding-bottom: 2%;
    font-size: 25.5px;
    font-weight: 300;
}
.div-3 p {
    padding-top: 2%;
    margin-left: 83px;
    margin-right: 300px;
    line-height: 1.7;
    padding-bottom: 3%;
    font-size: 25.5px;
    font-weight: 300;
}
.div-3 h3 {
    font-size: 43px;
    margin-left: 85px;
}

 .div-2 {
    padding-top: 3%;
}
.div-3 {
    padding-top: 3%;
}
.div-1 hr {
    border: none;
    width: 87%;
    height: 1px;
    background: #707070;
    display: flex;
    margin: 0 auto;
}
.div-2 hr {
    border: none;
    width: 87%;
    height: 1px;
    background: #707070;
    display: flex;
    margin: 0 auto;
}
.div-3 hr {
    border: none;
    width: 87%;
    height: 1px;
    background: #707070;
    display: flex;
    margin: 0 auto;
}
.vid {
    border-radius: 20px;
    width: 36%;
}
 .uncommonCommunity {
    padding-top: 0%;
    display: flex;
    gap: 30px;
    margin-left: 65px;
}
.uncommonCommunity h2 {
    margin-left: 40px;
    padding-top: 10%;
    line-height: 1.3;
    font-size: 55px;
    font-weight: bold;
}
.uncommonCommunity-textDiv {
    padding-top: 12%;
}
 .uncommonCommunity p {
    padding-top: 1%;
    margin-left: 46px;
    line-height: 1.8;
    font-size: 25.5px;
    padding-bottom: 3%;
    font-weight: 300;
    word-spacing: 2px;
    margin-right: 110px;
}
.uncommonCommunity button {
    margin-left: 48px;
    width: 170px;
    height: 49px;
  
}
 .mentors h2 {
    font-size: 55px;
}
.mentors p {
    text-align: center;
    font-weight: 300;
    padding-top: 0.5%;
    margin-left: 40px;
    margin-right: 40px;
    line-height: 1.8;
    padding-bottom: 2%;
    font-size: 25.5px;
    
}
}
`
function HowItWorks() {
  return (
  <Wrapper>

<div class="How-It-Works">
        <div class="divs-combo">
            <div class="div-1">
                <div className='h2-h3-combo-first'>
                <h2>How It Works</h2>
                <h3>Innovation Hubs</h3>
                </div>
                <p>We make longterm investments in our target communities by building innovative, sustainable workspaces
                    to run our free education programs.</p>
                <hr/>
            </div>
            <div class="div-2">
                <h3>Workforce Development</h3>
                <p>Our Technology Bootcamp is for unemployed young adults. Students take crash courses in Design, Coding
                    and Marketing before picking a track to specialize in.</p>
                <hr/>
            </div>
            <div class="div-3">
                <h3>Youth Coding</h3>
                <p>In addition to learning, our Bootcamp Students volunteer their time, teaching free, after-school
                    coding lessons to local primary & secondary students.</p>
                <hr/>
            </div>
        </div>

        <div class="uncommonCommunity">
        <video className='vid' src="../uncommon images/fin.mp4" controls/>
            <div class="uncommonCommunity-textDiv">
                <h2>Join The Uncommon Community.</h2>
                <p>Our Donors believe everyone should have access to high quality technology education & employment
                    opportunities. Let’s close the access gap together.</p>
                    <div className='btn-div'>
                <button>Donate Today</button>
                </div>
            </div>
        </div>


        <div class="mentors">
            <h2>Mentors Change Lives.</h2>
            <p>When our Bootcamp students pick their track for specialization, they’re matched with industry
                professionals for one on one Mentorship.</p>
        </div>
    </div>
  </Wrapper>
  )
}

export default HowItWorks
