import React from 'react'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({item}) => {
  const [isOpen, setIsOpen]  = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5'>
            <h4 className='text-base lg:text-2xl text-headingColor'>{item.question}</h4>
            <div className={`${isOpen && "bg-primaryColor text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}  onClick={handleOpen}>
              {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
        {isOpen && <div className='mt-4'>
          <p className='text-base leading-6 lg:leading-7 lg:text-lg font-[400] text-textColor'>{item.content}</p>
          </div>}
    </div>
  )
}

export default FaqItem
