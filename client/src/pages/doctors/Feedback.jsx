import React, {useState} from 'react'
import { formatDate } from '../../utils/formatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    
      <div className="mb-[30px] max-w-[700px]">
        <h4 className='text-xl leading-7 font-semibold text-headingColor mb-3'>All reviews (719)</h4>
        <div className='flex justify-between gap-10 mb-7 '>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full '>
              <img className='w-full' src="../../../public/avatar-icon.png" alt="" />
            </figure>
            <div>
              <h5 className='text-base leading-6 text-primaryColor font-bold'>Anjali Mehta</h5>
              <p className='text-sm leading-6 text-textColor'>{formatDate('02-14-2023')}</p>
              <p className='mt-3 font-medium text-base'>Good Services, highly recommended</p>
            </div>
          </div>
          <div className='flex gap-1 '>
            {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#0067FF' />)}
          </div>
        </div>
        {!showFeedbackForm ? (<div className='text-center'>
          <button className='btn' onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
        </div>) : <FeedbackForm />}
      </div>
  )
}

export default Feedback
