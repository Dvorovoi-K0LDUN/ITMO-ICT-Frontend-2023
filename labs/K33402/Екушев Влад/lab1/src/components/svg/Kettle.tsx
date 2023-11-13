import { SvgIcon, SvgIconTypeMap } from '@mui/material'
import React from 'react'

const Kettle: React.FC<SvgIconTypeMap<unknown, 'svg'>['props']> = (props) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      component={'svg'}
      {...props}
    >
      <path
        d="M5.5 14V5L4.27585 3.17242C4.10584 2.91858 4.0891 2.65972 4.22563 2.39583C4.36215 2.13194 4.58556 2 4.89583 2H13.7917C14.2651 2 14.6682 2.16635 15.0009 2.49906C15.3336 2.83177 15.5 3.23486 15.5 3.70833V4.5H17.0044C17.4181 4.5 17.7708 4.64688 18.0625 4.94063C18.3542 5.23438 18.5 5.5875 18.5 6V10C18.5 10.4125 18.3531 10.7656 18.0594 11.0594C17.7656 11.3531 17.4125 11.5 17 11.5H15.5V14C15.5 14.4125 15.3531 14.7656 15.0594 15.0594C14.7656 15.3531 14.4125 15.5 14 15.5H7C6.5875 15.5 6.23437 15.3531 5.94062 15.0594C5.64687 14.7656 5.5 14.4125 5.5 14ZM7 14H14V3.5H6.29167L7 4.55V14ZM15.5 10H17V6H15.5V10ZM11.75 4.5C11.4028 4.5 11.1076 4.62153 10.8646 4.86458C10.6215 5.10764 10.5 5.40278 10.5 5.75V11.75C10.5 12.0972 10.6215 12.3924 10.8646 12.6354C11.1076 12.8785 11.4028 13 11.75 13C12.0972 13 12.3924 12.8785 12.6354 12.6354C12.8785 12.3924 13 12.0972 13 11.75V5.75C13 5.40278 12.8785 5.10764 12.6354 4.86458C12.3924 4.62153 12.0972 4.5 11.75 4.5ZM4.25 18C4.0375 18 3.85938 17.9285 3.71563 17.7856C3.57188 17.6427 3.5 17.4656 3.5 17.2544C3.5 17.0431 3.57188 16.8646 3.71563 16.7188C3.85938 16.5729 4.0375 16.5 4.25 16.5H16.75C16.9625 16.5 17.1406 16.5715 17.2844 16.7144C17.4281 16.8573 17.5 17.0344 17.5 17.2456C17.5 17.4569 17.4281 17.6354 17.2844 17.7813C17.1406 17.9271 16.9625 18 16.75 18H4.25Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

export default Kettle
