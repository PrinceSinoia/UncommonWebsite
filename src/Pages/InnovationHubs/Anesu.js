import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display :flex;
gap:60px;
padding:90px;
@media(max-width:400px){
    padding :40px;
}
@media(max-width:900px){
    flex-direction:column;
}
.Anesu{
    height:40vh;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    width:400px;
    background:blue;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }

}
.Anesu h1,
.Anesu p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Anesu:hover{
    background:white;   
}
.Anesu:hover h1,
.Anesu:hover p{
    opacity:1;
}

.Kambuzama h1,
.Kambuzama p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Kambuzama:hover{
    background:white;   
}
.Kambuzama:hover h1,
.Kambuzama:hover p{
    opacity:1;
}
.Kambuzama{
    height:40vh;
    width:400px;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    background:black;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }
}
.Warren h1,
.Warren p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Warren:hover{
    background:white;   
}
.Warren:hover h1,
.Warren:hover p{
    opacity:1;
}

.Warren{
    height:40vh;
    width:400px;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    background:yellow;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }
}

@media (min-width: 768px) {
    gap: 10px;
    display: flex;
    flex-direction: row;
 .Anesu {
    width: 773px;
    height: 20vh;
}
.Kambuzama {
    width: 773px;
    height: 20vh;
}
 .Warren {
    width: 773px;
    height: 20vh;
}
}


@media (min-width: 1200px) {
    margin: 0 50px;
    padding-bottom: 5%;
    padding-top: 8%;
    gap: 20px;
    display: flex;
    flex-direction: row;
 .Anesu {
    border-radius:8px ;
    width: 600px;
    height: 46vh;
}
.Kambuzama {
    /* text-align: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center; */
    border-radius:8px ;
    width: 600px;
    height: 46vh;
}
 .Warren {
    border-radius:8px ;
    width: 600px;
    height: 46vh;
} 
}
`;

function Anesu() {
    return (
  <Wrapper>
    <div className = 'Anesu' >
        <h1>Mufakose</h1>
        <p>Read More</p>
    </div>
    <div className = 'Kambuzama' >
    <h1>Kambuzama</h1>
        <p>Read More</p>
    </div>
    <div className = 'Warren' >
    <h1>Warren Park</h1>
        <p>Read More</p>
    </div>
    </Wrapper>
  )
}

export default Anesu