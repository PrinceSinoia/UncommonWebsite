import React from 'react'
import styled from 'styled-components';
const Wrapper  = styled.section`
text-align: center;
padding:90px;


@media (min-width: 1200px) {
  /* padding:90px; */
    p{
        font-size: 26px;
    font-weight: bold;
    line-height: 41.7996px;
    color: rgb(0, 0, 0);
    margin-left: 72px;
    margin-right: 111px;
    text-align: left;
    }
    h2{
        font-size: 48px;
        font-weight: 800;
        text-align: left;
        margin-left: 70px;
        margin-right: 282px;
        line-height: 1.6;
        padding-bottom: 4%;
    }
    .hKLglz {
    padding: 15px;
    margin-bottom: 10px;
    border: none;
    width: 514px;
    border-radius: 5px;
    background-color: #f8f8f8;
}
}
@media(max-width:900px){
    padding:20px;   
    }
p{
    font-size: 26px;

font-weight: 200;

line-height: 41.7996px;

 color: rgb(0, 0, 0);
}
.Form{
    padding-left:150px;
    @media(max-width:900px){
        padding-left:20px;
    }
    margin-top:40px;
}

@media (min-width: 992px) {
  padding: 0px;
  text-align: left;
 p {
    font-size: 22px;
    font-weight: 200;
    line-height: 41.7996px;
    color: rgb(0, 0, 0);
    margin-left: 151px;
    margin-right: 20px;
}
h2{
  margin-left: 151px;
    font-size: 40px;
    margin-right: 371px;
    line-height: 1.7;
}
}
@media (min-width: 1200px) {

 p {
    font-size: 22px;
    font-weight: 300;
    line-height: 41.7996px;
    color: rgb(0, 0, 0);
    margin-left: 151px;
    margin-right: 310px;
}
h2{
  margin-left: 151px;
    font-size: 40px;
    margin-right: 501px;
    line-height: 1.6;
}
}
`;

const Input = styled.textarea`

  margin-bottom: 8px;
  border: none;
  width:90%;
  height: 50px;
  border-radius:5px;
  background-color: #f8f8f8;
  gap:8px;

  @media(min-width:768px) {
    width: 44%;
    display: flex;

    gap:5px;
    margin-bottom: 12px;
  }


 
`;
const MessageInput = styled.textarea`

  margin-bottom: 8px;
  border: none;
  width:90%;
  background-color: #f9f9f9;
  height: 120px;
`;const InputGroup = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
gap:8px;

@media (min-width:768px){
  width: 99%;
  display: flex;
  flex-direction: row;
    margin: 0 auto;
  
}

@media (min-width:1200px){
  width: 100%;


}


`;
const Button = styled.button`
  padding: 15px 10px;
  background-color: #4A5AF9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size:25px;
  float:right;
  margin-left:20px;
  margin-left: 175px;
    width: 115px;
  

  @media (min-width: 768px) {
    margin-left: 511px;
    width: 131px;
  }

  @media (min-width: 992px) {
    margin-left: 511px;
    width: 131px;
  }
  @media (min-width: 1200px) {
    margin-left: 950px;
    width: 151px;
  }



`;
function PazForm() {
  return (
    <Wrapper>
        <h2>Want to Donate Technology Equipment?</h2>
    <p>We fundraise to provide our students with the hardware they need to participate in the Uncommon Bootcamp. If you’d like to donate or purchase laptops or smartphones for our students, please fill out the form below. </p>
    
    <div className = ' Form'>
    <InputGroup> 
    <Input type="text" placeholder=" FirstName" />
    <Input type="text" placeholder="  Last Name" />
    </InputGroup>
    <InputGroup>
          <Input type="email" placeholder="Email Adress" />
          <Input type="email" placeholder="Phone Number" />
          </InputGroup>
        

          <InputGroup>
          <MessageInput placeholder="Device Details (Model , Condition,Age, etc.)" />
          </InputGroup>
          <InputGroup>
          <MessageInput placeholder="Message" />
          </InputGroup>
          <InputGroup>
          <Button type="submit">Submit</Button>
          </InputGroup>
    </div>
    </Wrapper>
  )
}

export default PazForm
