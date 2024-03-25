import React from 'react'
import styled from 'styled-components'
import  {RiArrowDropDownLine} from 'react-icons/ri'





const Wrapper =styled.section`
/* z-index: 5; */
position: absolute;
top:0;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;


.header{
    /* padding-bottom: 8%; */
    z-index: 3;
    background-color: #4A5AF8;
   height: 90px;
   position: absolute;
   top: 0px;
   display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;   
}

img{
    width: 50%;
}

/* .active{
    font-weight:bolder;
} */
ul{
   gap : 40px;
    z-index: 4;
    position: absolute;
   left : 0;
top: 0;  
width: 100%;
height: 100vh;
background: #4A5AF8;
max-height:0vh;
overflow: hidden;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
transition:all 0.7s ease-in-out;
& li:hover {
    background-color: blue;
  }

}
ul li {

    display: block;
    color:#F1F1FE;
    font-weight:bolder ;
    padding: 10px;
    width: max-content;
    /* transition: all .4s ease-in-out;  */
} 


 a {
    text-decoration: none;
    color: #F1F1FE;
    font-size: 20px;
    font-weight: bolder;
    width: max-content;
}
/* 
.active{
    text-decoration: underline;  
   color: #FFFFFF;
} */
.hamburger{
  right: 30px;
    padding:20px 37px 20px 6px;
      position: absolute;
      /* margin-right:0px; */
      /* transition:all 0.7s ease; */
      z-index:9;

}

span{
    border-radius:15px;
   right: 0;
    position: absolute;
    transition: all .6s ease-in-out;
    width: 40px;
    height: 3px;
    background:#F1F1FE;
    &:before{
        border-radius:15px;
       right: 0;
        width: 100%;
    height: 100%;
   background:#F1F1FE;
    position: absolute;
    top: -9px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
        border-radius:15px;
      right: 0;
        width: 100%;
    height: 100%;
     background:#F1F1FE;
    position: absolute;
    top: 9px;
    transition: all .6s ease-in-out;
    content: "";
    }
}

.open{
    transition:all 300ms ease;
    span{
        background:transparent;
        &:before{
       transform: rotate(496deg);
   top: 0;
    }
    &:after{
        transform: rotate(-496deg);
        top: 0;
    }
    }
}
.change{
    top: 0;
max-height:95vh;

}



@media (min-width: 768px) {

    .header{
        height: 110px;
    }
    ul{
        height: 90vh;
        transition:all 0.7s ease-in-out;
        il{
            font-size: 28px;
        }
        a{}
    }
  
   img {
    width: 42%;
}
}

@media (min-width: 992px) {
    .donate{
width: 95px;
height: 50px;
background: blue;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5%;
color: white;
    }
    img{
        width: 43%;

    }
    .header{
        height: 131px;
        background:none;
        height: 97px;
    }
   
   
    span{
    &:before{
      
    top: -8px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
     
    top: 8px;
    transition: all .6s ease-in-out;
    content: "";
    }


 
/* ul{
    
    display: unset;
    height: auto;
   position: relative;
    top: 0px;
    max-height:100%;
    background:none;
 
} */
/* ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
 background: transparent;
 
} */
}
  




ul{
   

padding-top: 15px;
    gap : 27px;
    z-index: 8;
    position: relative;
   left : 0px;
top: 0;  
width: 100%;
height: 100vh;
background: none;
max-height:100vh;
overflow: hidden;
display: flex;
flex-direction:row;
transition: none;
li {

display: block;
color:black;
font-weight:bolder ;
padding: 10px;
width: max-content;

} 
}

/* a {
   
    font-weight: bolder;
    width: max-content;
} */
/* .active{
    font-size: 25px;
    font-weight:bolder;
} */



a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    font-weight: bolder;
    
}
 
.hamburger{
 display: none;
}
}


@media (min-width: 1200px) {
    .donate{
width: 120px;
height: 47px;
background: blue;
display: flex;
justify-content: center;
align-items: center;
border-radius: 6%;
color: white;
    }
img{
    width: 30%;
    height: 145px;

}
    .header{
    /* padding-bottom: 0%;
    height: 90px; */
}
    .hamburger{
    /* margin-left:5px; */
}
    span{
   right: 0;
    position: absolute;
    gap: 10px;
    width: 40px;
    height: 3px;
    background:#CC3725;
    &:before{
       right: 0;
        width: 100%;
    height: 100%;
   background:#CC3725;
    position: absolute;
    top: -10px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
      right: 0;
        width: 100%;
    height: 100%;
     background:#CC3725;
    position: absolute;
    top: 10px;
    transition: all .6s ease-in-out;
    content: "";
    }
}


a {  
font-size: 18px;
  font-weight: 500;
}

   /* ul{
    height: 100vh;


   }  */
  
/* 
   .active{
    font-size: 36px;
    font-weight:bolder;
    padding-bottom:30px;
} */


ul{
   


   gap : 27px;
   z-index: 8;
   position: relative;
  left : 5px;
top: 0;  
width: 100%;
height: 100vh;
background: none;
max-height:100vh;
overflow: hidden;
display: flex;
flex-direction:row;
margin-right: 60px;
    justify-content: flex-end;

li {

display: block;
color:black;
font-weight:bolder ;
padding: 10px;
width: max-content;
transition:  none;
} 
}


}
`

function PazKuda() {
  return (
    <Wrapper>
    <div className='header'>
    <img src="../uncommon images/Logo-With-Text-1.png" alt="logo"/>
   <div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
   <span></span>
    </div>
    <ul className={click ? "change" : ""} >
    <a href='#'> <li>Home</li></a>
    <a href="#">Our Story</a>
    <a href="#">Innovation Hub</a>
    <a href="#">Hire Us</a>
    <a className='donate' href="#">Donate</a>
   </ul>
   
         </div>
       </Wrapper>
  )
}

export default PazKuda
