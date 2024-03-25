import React from 'react'

import PagesHero from '../HireUs/PagesHero'
// import PagesHeader from './PagesHeader'
import PagesOurExpertise from '../HireUs/PagesOurExpertise'
import PagesRecentWork from '../HireUs/PagesRecentWork'
import PagesSectionBlueFirst from '../HireUs/PagesSectionBlueFirst'
import PagesFOOTER from '../HireUs/PagesFOOTER'
import PagesBlueSECTIONtwo from '../HireUs/PagesBlueSECTIONtwo'
import Pagestogether from '../HireUs/Pagestogether'
function HireUs() {
  return (
    <div>
      {/* <PagesHeader/> */}
    <PagesHero/>
    <PagesSectionBlueFirst/>
    <PagesOurExpertise/>
    <PagesRecentWork/>
<PagesBlueSECTIONtwo/>
<Pagestogether/>
<PagesFOOTER/>
    </div>
  )
}

export default HireUs
