import React from 'react'

const RoleOverView = ({ active }) => {
  // const handleActive
  return (
    <div className='container'>
      <article className='mt-4'>
        <p className='fnt-500 fnt-20-fixed txt-primary pt-3 mb-4'>Position Summary</p>
        <p className='fnt-400 fnt-16 txt-black'>
          PECTO is looking for a highly driven, dedicated Sales Engineer who
          will support the Business Development and Customer Success teams at
          PECTO in Europe. You will engage with new customer opportunities, help
          respond to inbound opportunities, and work closely with our account
          executives to shepherd deals from opening, through to contract and
          closing stage. Beyond pre-sales, you'll be expected to play a
          supporting role to our Delivery Teams as customers integrate to our
          platform, go live, and ramp.
        </p>

        <p className='fnt-400 fnt-16 txt-black mb-4'>
          We are looking for a sales engineer whose professional DNA is rooted
          in both Technology and Sales. Your work will inevitably include
          networking to build relationships, contributing to sales
          presentations, workflow modeling, solution design and ensuring our
          customers fully grasp the value in our platform. Key to this role is
          an ability to understand PECTO technology, expertly communicate its
          benefits, and win the trust of the product and technology teams of our
          potential partners.{' '}
        </p>

        <p className='fnt-400 fnt-16 txt-black mb-4'>
          You’ll be collaborating closely with other key players on the PECTO
          team, including Technology, Product, Customer Success, Risk, Legal and
          Operations and the knowledge you gain will be critical in ensuring our
          customers are fully briefed and supported as they use the multiple
          products and features on the platform.
        </p>

        <p className='fnt-400 fnt-16 txt-black mb-3'>
          We're looking for someone who knows payments'''' and loves payments
          technology and while you don't have to have direct card issuing
          experience, we strongly prefer someone who understands the payments
          ecosystem, particularly on the issuing side. In addition, experience
          of payments risk and fraud would be a tremendous advantage.
        </p>
        <div className='pt-3'>
          <p className='fnt-500 fnt-20-fixed txt-primary'>Responsibilities</p>
          <ul className='list-group-disc ps-4'>
            <li className='fnt-16 fnt-400 txt-black'>
              Design, build, and maintain APIs, services, and systems across
              Stripe’s engineering teams.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Work with engineers across the company to build new features at
              large-scale.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Improve engineering standards, tooling, and processes.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Shape future proof interfaces that are easy to build against and
              meet the requirements of product teams.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Debug production issues across services and multiple levels of the
              stack.
            </li>
          </ul>
        </div>
        <div className='pt-3'>
          <p className='fnt-500 fnt-20-fixed txt-primary'>Requirements</p>
          <ul className='list-group-disc ps-4'>
            <li className='fnt-16 fnt-400 txt-black'>
              Have a strong technical background, including 7+ years of
              experience building impactful products or systems.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Have solid experience in designing large-scale and complex systems
              that delivered critical impact to the business.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Are skilled in gathering and effectively synthesizing users’
              feedback and experience with platforms and product offerings.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Are skilled in working across engineering teams and other
              functions in building alignment, driving decision-making, and
              communicating transparently.
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Are effective in giving and receiving constructive feedback
              to/from peers and team members.
            </li>
          </ul>
        </div>
        <div className='pt-3'>
          <p className='fnt-500 fnt-20-fixed txt-primary'>Benefits and Perks</p>
          <ul className='list-group-disc ps-4'>
            <li className='fnt-16 fnt-400 txt-black'>
              {' '}
              Flexible time off – take what you need
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Retirement savings program with company contribution
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Employee insurance premiums paid 100% + coverage for dependents
              and pets
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Family forming benefits including fertility support and up to 20
              weeks Parental Leave
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Free therapy sessions, financial coaching, and a Wellness stipend
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              Monthly stipend to support our hybrid work model{' '}
            </li>
            <li className='fnt-16 fnt-400 txt-black'>
              The best-in-class perks and benefits for developers. Check out our
              careers page for the same: Pecto Careers.
            </li>
          </ul>
        </div>
      </article>
      <div className='text-center my-5'>
        <button
          className='btn btn-pri fnt-600 fnt-16 text-light text-uppercase'
          onClick={() => active(1)}
        >
          apply now
        </button>
      </div>
    </div>
  )
}

export default RoleOverView
