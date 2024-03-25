import React from 'react'
import styled from 'styled-components'


const Wrapper=styled.section`

.color-blue{
      display: none;
    }

@media (min-width: 992px){
      .color-blue{
      display: block;
      width: 100%;
      background: #4A5AF8;
      height: 174px;
    }
    @media (min-width:1200px) {
        .color-blue{
      display: block;
      width: 100%;
      background: #4A5AF8;
      height: 130px;
    }  
    }
    }
`
function Blue() {
  return (
    <Wrapper>
      <div className='color-blue'></div>
    </Wrapper>
  )
}

export default Blue
