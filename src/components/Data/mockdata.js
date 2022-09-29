import cardImg from '../../assets/company/card2.png'
import card from '../../assets/icons/cards.svg'
import Home from '../../assets/TimeLine/Home.svg'
import Envelope from '../../assets/TimeLine/Envelope.svg'
import ExploreUseCasesBanner from '../../assets/Banner/UseCase.svg'

import Pic1 from '../../assets/careers/Img-1.svg'
const mockData = [
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Payments',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Payments',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'payments',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'Buisness',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
  {
    img: cardImg,
    btn_content: 'payments',
    timestamp: '9 June 2022 4:14 PM',
    title: 'Industry experts in digital payments',
    body: ` We aim to expand the benefits of financial technology to
    emerging digital businesses and offer advance use cases,
    customized for diverse business models. By offering an Open
    API based card issuing and processing platform.`,
    pathName: '',
  },
]

const faq = {
  table_of_contents: [
    { id: 1, data: 'API Basics' },
    { id: 2, data: 'Account Holder' },
    { id: 3, data: 'Widgets' },
    { id: 4, data: 'Funding' },
    { id: 5, data: 'SDKs' },
    { id: 6, data: 'Webhooks' },
    { id: 7, data: 'Spend Controls' },
    { id: 8, data: 'Balances and Currencies' },
    { id: 9, data: 'Integration' },
    { id: 10, data: 'Authentication' },
    { id: 11, data: 'Risk and Fraud prevention' },
    { id: 12, data: 'Transactions' },
    { id: 13, data: 'Payment' },
    { id: 14, data: 'PCI Compliance and Security' },
  ],
  accordion: [
    {
      id: 1,
      questions: 'Can I request multiple user access tokens?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 2,
      questions: 'Are updates to the Core API backward-compatible?      ',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 3,
      questions: "How is an object's token formatted?      ",
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 4,
      questions: 'When do user access tokens expire?      ',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 5,
      questions:
        'Do POST requests require body field data if all fields are optional?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 6,
      questions: 'How do I inspect existing objects?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 7,
      questions: 'When do user access tokens expire?    ',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 8,
      questions:
        'Do POST requests require body field data if all fields are optional?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 9,
      questions:
        'Do POST requests require body field data if all fields are optional?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 10,
      questions: 'How do I inspect existing objects?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 11,
      questions: 'When do user access tokens expire?    ',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
    {
      id: 12,
      questions:
        'Do POST requests require body field data if all fields are optional?',
      answers:
        'Yes, you can request additional user access tokens before or while existing tokens are in use. New tokens do not invalidate existing tokens.For more information on user access tokens, see Authentication in the Core API Reference.',
      timeStamp: 'Updated May 05, 2022',
    },
  ],
}

const caseStudy = {
  table_of_content: [
    {
      id: 1,
      data: 'All',
      content: 'all',
    },
    {
      id: 2,
      data: 'Digital Lending',
      content: 'Buisness',
    },
    {
      id: 3,
      data: 'Buy Now Pay Later',
      content: 'Payments',
    },
    {
      id: 4,
      data: 'Digital Banks',
      content: 'Health Care',
    },
    {
      id: 5,
      data: 'Online Delivery',
      content: 'E-Commerce',
    },
    {
      id: 6,
      data: 'Market Place',
      content: 'Buisness',
    },
    {
      id: 7,
      data: 'Digital Insurance',
      content: 'Buisness',
    },
    {
      id: 8,
      data: 'Transactions',
      content: 'Payments',
    },
    {
      id: 9,
      data: 'Payment',
      content: 'Payments',
    },
    {
      id: 10,
      data: 'PCI Compliance and Security',
      content: 'Payments',
    },
  ],
}

const GlobalSearch = [
  {
    id: 1,
    question: 'How is Fintech revolutionizing Remittances?',
    category: 'Blogs',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 2,
    question:
      'The VISA Everywhere Initiative — A journey spanning 100 countries',
    category: 'Case studies',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 3,
    question: 'How is Fintech revolutionizing Remittances?',
    category: 'Blogs',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 4,
    question:
      'The VISA Everywhere Initiative — A journey spanning 100 countries',
    category: 'Case studies',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 5,
    question: 'How is Fintech revolutionizing Remittances?',
    category: 'Blogs',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 6,
    question:
      'The VISA Everywhere Initiative — A journey spanning 100 countries',
    category: 'Case studies',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 7,
    question: 'How is Fintech revolutionizing Remittances?',
    category: 'Blogs',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 8,
    question:
      'The VISA Everywhere Initiative — A journey spanning 100 countries',
    category: 'Case studies',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 9,
    question: 'How is Fintech revolutionizing Remittances?',
    category: 'Blogs',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 10,
    question:
      'The VISA Everywhere Initiative — A journey spanning 100 countries',
    category: 'Case studies',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 11,
    question: 'How is Fintech revolutionizing Remittances?',
    category: 'Blogs',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
  {
    id: 12,
    question:
      'The VISA Everywhere Initiative — A journey spanning 100 countries',
    category: 'Case studies',
    description:
      'The word “Remittance” means money sent to an individual in another place. The Latin origin of the word means “To let go or to send.” As the human civilization evolved, so did remittances. It was earlier a bill payment .....',
  },
]

const useCase = {
  banner: {
    title: 'Digital Lending',
    content: 
      {
        title : 'Disburse and track loans through configurable cards',
        description :`Pecto empowers digital lenders to instantly issue cards-for-loans,
        track usage, offer value-added benefits to customers, and build
        loyalty.`
      }
    ,
  },
  problem :[
    {
      title:'The Problem',
      sub_title:'Lenders lack spend visibility and control the payment',
      description :`Digital lenders want smarter ways to service digital-native borrowers
      like MSMEs and consumers who seek term loans to meet business and
      personal needs. But lenders typically lack visibility into how
      customers use loan money, once it is disbursed, which makes it
      difficult for them to optimize underwriting models. Additionally, they
      want to be able to configure controls like merchant categories to
      streamline how the loan amount is spent.`
    },{
      title : 'The Solution',
      sub_title :'A single card solution to monitor loan spend and grow your revenue',
      description :`Pecto equips digital lenders with an instant card issuance solution
      that is easy to set up. Lenders can instantly issue cards to disburse
      loan amounts and define where and how the money is spent. You can also
      retain credit-worthy customers by seamlessly adding further credit to
      the card, at attractive interest rates.`
    }
  ],
  howItWorks :{
    title : 'How it works',
    timeline : [
      {
        img : Home,
        step : 'step 1',
        step_description: `The customer applies for a loan through your digital platform.`
      },
      {
        img : Envelope,
        step : 'step 2',
        step_description: `You instantly issue a card for the loan. Customer completes the
        digital KYC through your app and the card is upgraded to a
        full-KYC card.`
      },
      {
        img : Home,
        step : 'step 3',
        step_description: `You set spend controls on the card such as merchant categories,
        geographies, spend limits, etc.`
      },
      {
        img : Envelope,
        step : 'step 4',
        step_description: 'Pecto disburses the approved loan amount onto the card.'
      },
      {
        img : Home,
        step : 'step 5',
        step_description: `Customer makes a purchase at an online or physical store using
        the card.`
      },
      {
        img : Envelope,
        step : 'step 6',
        step_description: `Pecto receives the transaction details/ request, checks the
        balance on the card, and authorizes the transaction based on the
        defined spend controls as well as the available balance on the
        card.`
      },
      {
        img : Home,
        step : 'step 7',
        step_description: 'Customer purchase is successful.'
      },
      {
        img : Envelope,
        step : 'step 8',
        step_description: `Customer can view the remaining card balance, purchase history,
        and available offers/ offers available at merchants for card
        usage, through your app.`
      },
      {
        img : Home,
        step : 'step 9',
        step_description: `Customer repays the loan amount in instalments, as defined by
        you.`
      },
      // {
      //   img : Envelope,
      //   step : 'step 10',
      //   step_description: `Customer repays the loan amount in instalments, as defined by
      //   you.`
      // },
      // {
      //   img : Home,
      //   step : 'step 11',
      //   step_description: `Customer repays the loan amount in instalments, as defined by
      //   you.`
      // },
      // {
      //   img : Envelope,
      //   step : 'step 12',
      //   step_description: `Customer repays the loan amount in instalments, as defined by
      //   you.`
      // },
    ]
  },
  exploreUseCase : [
    {
      img : ExploreUseCasesBanner,
      title : 'Digital only banks',
      description : 'The demand in convenience, transparency, and a feature-rich digital experience.'
    },
    {
      img : ExploreUseCasesBanner,
      title : 'Digital only banks',
      description : 'The demand in convenience, transparency, and a feature-rich digital experience.'
    },
    {
      img : ExploreUseCasesBanner,
      title : 'Digital only banks',
      description : 'The demand in convenience, transparency, and a feature-rich digital experience.'
    },
    {
      img : ExploreUseCasesBanner,
      title : 'Digital only banks',
      description : 'The demand in convenience, transparency, and a feature-rich digital experience.'
    },
    {
      img : ExploreUseCasesBanner,
      title : 'Digital only banks',
      description : 'The demand in convenience, transparency, and a feature-rich digital experience.'
    },
  ],
  benefits : {
    title :'How you benefit',
    subtitle : 'Instant cards to support digital-first businesses',
    accordion : [
      {
        id:1,
        question : 'Control customer spend',
        answer : 'Configure card settings to allow merchant categories, define geographies and spend limits, and more. '
      },
      {
        id:2,
        question : 'Create additional revenue sources',
        answer : 'Configure card settings to allow merchant categories, define geographies and spend limits, and more. '
      },
      {
        id:3,
        question : 'Personalize loans and offers',
        answer : 'Configure card settings to allow merchant categories, define geographies and spend limits, and more. '
      },
      {
        id:4,
        question : 'Improve cash flow',
        answer : 'Configure card settings to allow merchant categories, define geographies and spend limits, and more. '
      },
      {
        id:5,
        question : 'Enhance customer stickiness',
        answer : 'Configure card settings to allow merchant categories, define geographies and spend limits, and more. '
      },
      {
        id:6,
        question : 'Merchant offers for customers',
        answer : 'Configure card settings to allow merchant categories, define geographies and spend limits, and more. '
      },
    ]
  }
}

const careers = {
  core: {
    title: 'Our core values',
    content: [
      {
        img: card,
        typeOfWork: 'Team work',
        description: 'Collaborate, Build and Exceed expectations',
      },
      {
        img: card,
        typeOfWork: 'Proactive',
        description: 'Accountable to improve and solve challenges.',
      },
      {
        img: card,
        typeOfWork: 'Innovation',
        description: 'Solve digital businesses challenges with ease.',
      },
    ],
  },
  perksBenefits : {
    title : 'Perks and Benefits',
    description : 'We’re building a culture where great people get great rewards, from learning and growth opportunities to benefits that will help you live your best life. We need a healthy and happy team to succeed, so we make sure to take care of our employees in more ways than one.',
    cards : [
      {
        img : card,
        title : 'Comprehensive health plans',
        description : 'We offer individual healthcare after completion of 1 year service'
      },
      {
        img : card,
        title : 'Learning and development',
        description : 'We hold regular events for staff'
      },
      {
        img : card,
        title : 'Flexible work arrangements',
        description : 'Help out with community and charity projects'
      },
      {
        img : card,
        title : 'Enhanced Parental leave',
        description : '3 months full-pay parental leave plus reduced working hours on full-pay for new parents.'
      },
      {
        img : card,
        title : 'Volunteer days',
        description : 'Help out with community and charity projects'
      },
      {
        img : card,
        title : 'Employee equity program',
        description : '3 months full-pay parental leave plus reduced working hours on full-pay for new parents.'
      },
    ]
  },
  careerOpenings :{
    title :'Our openings',
    description : 'We’re looking for top-notch people who want to build their best work. If you are passionate about solving hard problems, and thrive when surrounded by peers that inspire you, then PECTO is a place for you.',
  },
  knowOurTeams : [
    {
      id:1,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
    },
    {
      id:2,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      id:3,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      id:4,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      id:5,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      id:6,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      id:7,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      id:8,
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
    {
      img : Pic1,
      name : 'Hari Chandran',
      designation : 'Founder and Managing Partner',
      content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem`

    },
  ]
}
export { mockData, faq, caseStudy, GlobalSearch, careers, useCase }
