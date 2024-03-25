import React from 'react'
import PazDonateTODAY from '../Donate/PazDonateTODAY'
import PazMorepages from '../Donate/PazMorepages'
import PazFooter from '../Donate/PazFooter'
import PazBluesec from '../Donate/PazBluesec'
import PazHeader from '../Donate/PazHeader'
import PazForm from '../Donate/PazForm'
// import PazKuda from './PazKuda'

function PazAllrounder() {
  return (
    <div>
      {/* <PazKuda/> */}
       <PazHeader/>  
      <PazDonateTODAY/>
      <PazMorepages/>
      <PazForm/>
      <PazBluesec/>
      <PazFooter/> 
    </div>
  )
}

export default PazAllrounder
