import React from 'react'

interface InputProps {
    placeholder: string
    isTextArea?: boolean
}


export default function Input({placeholder,isTextArea}:InputProps) {
  return (
    <>
    {!isTextArea ? <input type="text" className='input' placeholder={placeholder} />:  <textarea className='input' placeholder={placeholder} rows={5} />}
    </>
  )
}
