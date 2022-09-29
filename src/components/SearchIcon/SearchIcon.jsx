import React from 'react'

const SearchIcon = (props) => {
  const grey = '#A4A4A4'
  const orange = '#F68F51'
  const black = '#000000'
  const blue = '#2C3577'
  const white = '#ffff'

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
        stroke={`${
          props.insideInputTag
            ? grey
            : props.active
            ? orange
            : props.background !== 'secondary'
            ? black
            : white
        }`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.0004 21.0004L16.6504 16.6504'
        stroke={`${
          props.insideInputTag
            ? grey
            : props.active
            ? orange
            : props.background !== 'secondary'
            ? black
            : white
        }`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default SearchIcon
