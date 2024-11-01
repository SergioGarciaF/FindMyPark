import logo from '../../assets/logo.svg'
import {Instagram} from 'lucide-react'

const ComingSoon = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen mx-auto bg-background'>
    <h1 className="text-4xl text-center md:text-6xl text-secondary font-title">Coming soon...</h1>
    <img className='w-24 mt-4 md:w-40' src={logo} alt="Logo findmypark" />
    <div className='flex mt-4 space-x-3'>
    <Instagram className='text-secondary' />
    <a href='https://www.instagram.com/findmypark.es/' target='_blank' className='text-4xl font-semibold text-center md:text-xl text-secondary font-title'>@findmypark.es</a>
    </div>
</div>

  )
}

export default ComingSoon