import React , {useState}from 'react'
import styled from 'styled-components'



const Wrapper=styled.section`
display: flex;
justify-content: space-between;



.header{
    z-index: 5;
    display: flex;
justify-content: space-between;
width: 100%;
flex-direction:row;
background:grey;

}
.hamburger{
  right: 0;
    padding:20px 37px 20px 6px;
      position: absolute;
      margin-right:10px;
      transition:all 0.7s ease;
      z-index:3;

}
span{
   right: 0;
    position: absolute;
    gap: 10px;
    width: 40px;
    height: 2px;
    background:black;
    &:before{
       right: 0;
        width: 100%;
    height: 100%;
    background:red; 
    position: absolute;
    top: -5px;
    transition: all .6s ease-in-out;
    content: "";
    }
    &:after{
      right: 0;
        width: 100%;
    height: 100%;
    background:red; 
    position: absolute;
    top: 5px;
    transition: all .6s ease-in-out;
    content: "";
    }
}
.open{
    span{
        background-color: transparent;
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

ul{
    background-color: green;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    overflow: hidden;
    max-width:0;
    width: 100%;
    height: 100vh;

    li{
display: block;
width: max-content;
padding:10px;
    }
    a{
        color:black;
    }
}

.change{
    max-width:100%;  
}
.block{
    display: none;
}

`

function Jump() {
    const [click ,setClick]=useState(false)
  return (
    <Wrapper>
      <div className='header'>
<p>Jumpstart</p>

<div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
    <span></span>
</div>

<ul className={click ? "change" : ""} >
    <a href='#'><li>About Jumpstart</li></a>
    <a href='#'><li>Blog & News</li></a>
    <a href='#'><li>For Kids</li></a>
    <a href='#'><li>For Parents</li></a>
    <a href='#'><li>For Teachers</li></a>
  
</ul>
<div className='block'> 

</div>
      </div>
    </Wrapper>
  )
}

export default Jump
