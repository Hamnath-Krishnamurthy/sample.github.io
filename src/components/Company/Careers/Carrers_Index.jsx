import React from 'react'
import CoreValues from './CoreValues'
import Culture from './Culture'
import KnowOurTeams from './KnowOurTeams'
import LeadersWord from './LeadersWord'
import Openings from './Openings'
import PerksBenefits from './PerksBenefits'
import V from '../../../assets/FAQ/v.svg'
const CarrersInner = () => {
  return (
    <section className='careers scrollspy-example' data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"  tabindex="0">
      <Culture />
      <CoreValues/>
      <KnowOurTeams/>
      <LeadersWord/>
      <PerksBenefits/>
      <Openings/>
    </section>
  )
}

export default CarrersInner
