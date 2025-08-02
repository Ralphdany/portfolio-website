import React from 'react'

const Contacts = () => {
  return (
    <section className='px-10 md:px-25 mx-auto py-10 mb-20 max-w-7xl w-full' id='contacts'>
      <form className='p-5 bg-gray-800/60 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="firstName">FirstName</label>
          <input type="text" name='firstName'required className='bg-gray-900/85 rounded-sm p-2'/>
          </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="lastName">LastName</label>
          <input type="text"name='lastName' required className='bg-gray-900/85 rounded-sm p-2' />
          </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' required className='bg-gray-900/85 rounded-sm p-2' />
          </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="message">Send me a message </label>
          <textarea name="message" rows={5} className='bg-gray-900/85 rounded-sm p-2' required placeholder="Type your message here..."></textarea>
        </div>
        <div>
          <button type='submit' className='px-4 py-2 bg-indigo-500 font-bold font-mono text-sm rounded-sm cursor-pointer text-white hover:opacity-80'>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contacts