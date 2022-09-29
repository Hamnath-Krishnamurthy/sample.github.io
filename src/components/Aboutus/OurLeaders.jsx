import React, { useCallback, useMemo } from 'react'
import leader from '../../assets/Banner/Leader.png'
import leader_1 from '../../assets/Banner/Leader_1.png'
import leader_2 from '../../assets/Banner/Leader_2.png'
import leader_3 from '../../assets/Banner/Leader_3.png'
import leader_4 from '../../assets/Banner/Leader_4.png'
import leader_5 from '../../assets/Banner/Leader_5.png'
import linked_ldr from '../../assets/icons/ldr_linked.svg'
import linked_twt from '../../assets/icons/ldr_twitter.svg'
import leader_lin from '../../assets/logos/leader_link.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import pop_img from '../../assets/Banner/popimg.svg'
import PopUpModal from '../PopUpModal/PopUpModal'

const LeaderDetails = {
  title: 'Meet our leaders',
  values: [
    {
      id: 1,
      img: leader,
      name: 'Hari Chandran',
      designation: 'Founder and Managing Partner',
      // data: [
      //   {
      //     img: pop_img,
      //     name: 'Hari Chandran',
      //     Desig: 'Founder and Managing Partner',
      content:
        "Hari is the CTO and co-founder of MCIP. He leads the Product Development and Technology teams. Under his leadership, Riskified has built an e-commerce risk management platform with proprietary machine learning models that drive an automated decisioning engine supporting its e-commerce risk mitigation suite of products. Assaf brings two decades of experience developing robust systems with ML algorithms and intelligent UIs for risk management applications. He was selected to be a research scientist for the Ambient Intelligence group at MIT's Media Lab",
      //   },
      // ],
    },
    {
      id: 2,
      img: leader_1,
      name: 'Hari Chandran',
      designation: 'Founder and Managing Partner',
      // data: [
      //   {
      //     img: pop_img,
      //     name: 'Hari Chandran',
      //     Desig: 'Founder and Managing Partner',
      content:
        "Hari is the CTO and co-founder of MCIP. He leads the Product Development and Technology teams. Under his leadership, Riskified has built an e-commerce risk management platform with proprietary machine learning models that drive an automated decisioning engine supporting its e-commerce risk mitigation suite of products. Assaf brings two decades of experience developing robust systems with ML algorithms and intelligent UIs for risk management applications. He was selected to be a research scientist for the Ambient Intelligence group at MIT's Media Lab",
      //   },
      // ],
    },
    {
      id: 3,
      img: leader_2,
      name: 'Hari Chandran',
      designation: 'Founder and Managing Partner',
      // data: [
      //   {
      //     img: pop_img,
      //     name: 'Hari Chandran',
      //     Desig: 'Founder and Managing Partner',
      content:
        "Hari is the CTO and co-founder of MCIP. He leads the Product Development and Technology teams. Under his leadership, Riskified has built an e-commerce risk management platform with proprietary machine learning models that drive an automated decisioning engine supporting its e-commerce risk mitigation suite of products. Assaf brings two decades of experience developing robust systems with ML algorithms and intelligent UIs for risk management applications. He was selected to be a research scientist for the Ambient Intelligence group at MIT's Media Lab",
      //   },
      // ],
    },
    {
      id: 4,
      img: leader_3,
      name: 'Hari Chandran',
      designation: 'Founder and Managing Partner',
      // data: [
      //   {
      //     img: pop_img,
      //     name: 'Hari Chandran',
      //     Desig: 'Founder and Managing Partner',
      content:
        "Hari is the CTO and co-founder of MCIP. He leads the Product Development and Technology teams. Under his leadership, Riskified has built an e-commerce risk management platform with proprietary machine learning models that drive an automated decisioning engine supporting its e-commerce risk mitigation suite of products. Assaf brings two decades of experience developing robust systems with ML algorithms and intelligent UIs for risk management applications. He was selected to be a research scientist for the Ambient Intelligence group at MIT's Media Lab",
      //   },
      // ],
    },
    {
      id: 5,
      img: leader_4,
      name: 'Hari Chandran',
      designation: 'Founder and Managing Partner',
      // data: [
      //   {
      //     img: pop_img,
      //     name: 'Hari Chandran',
      //     Desig: 'Founder and Managing Partner',
      content:
        "Hari is the CTO and co-founder of MCIP. He leads the Product Development and Technology teams. Under his leadership, Riskified has built an e-commerce risk management platform with proprietary machine learning models that drive an automated decisioning engine supporting its e-commerce risk mitigation suite of products. Assaf brings two decades of experience developing robust systems with ML algorithms and intelligent UIs for risk management applications. He was selected to be a research scientist for the Ambient Intelligence group at MIT's Media Lab",
      //   },
      // ],
    },
    {
      id: 6,
      img: leader_5,
      name: 'Hari Chandran',
      designation: 'Founder and Managing Partner',
      // data: [
      //   {
      //     img: pop_img,
      //     name: 'Hari Chandran',
      //     Desig: 'Founder and Managing Partner',
      content:
        "Hari is the CTO and co-founder of MCIP. He leads the Product Development and Technology teams. Under his leadership, Riskified has built an e-commerce risk management platform with proprietary machine learning models that drive an automated decisioning engine supporting its e-commerce risk mitigation suite of products. Assaf brings two decades of experience developing robust systems with ML algorithms and intelligent UIs for risk management applications. He was selected to be a research scientist for the Ambient Intelligence group at MIT's Media Lab",
      //   },
      // ],
    },
  ],
}

const OurLeaders = () => {
  const [initial, setInitial] = useState(0)
  const [renderModal, setRenderModal] = useState(false)

  const handleClick = (id) => {
    console.log('id =>', id)
    setInitial(id)
  }

  const ModalREnder = useMemo(()=>{
    setRenderModal(true)
    return {
      renderModal,
      initial
    }
  },[initial])
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h5 className='fnt-48 fnt-600 text-dark-blue mt-3'>
            {LeaderDetails.title}
          </h5>
          {LeaderDetails.values.map((el, index) => (
            <div
              className='col-md-4 mt-4'
              onClick={(e) => {
                e.persist()
                handleClick(index)
              }}
              type='button'
              data-bs-toggle='modal'
              data-bs-target='#leaderModal'
            >
              <>
                <div className='pop-btn'>
                  <img src={el.img} alt='' className='img-fluid' />

                  {/* <div>
                        <img src={el.img} alt="" className="img-fluid" />
                      </div> */}
                </div>
              </>
              <h5 className='fnt-24 text-bl fnt-500 mt-5'>{el.name}</h5>
              <p className='mb-0 fnt-16 txt-black fnt-400'>{el.designation}</p>
              <div className='mt-2 mb-5'>
                <img src={linked_ldr} alt='' />
                <img src={linked_twt} alt='' className='mx-3' />
              </div>
            </div>
          ))}
          <>
            <PopUpModal
              id={'leaderModal'}
              start={ModalREnder}
              // renderModal={renderModal}
              data={LeaderDetails.values}
            />
          </>
        </div>
      </div>
    </>
  )
}

export default OurLeaders
