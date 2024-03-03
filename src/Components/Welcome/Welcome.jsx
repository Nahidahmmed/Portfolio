import image from '../../assets/logo/image2.jpg'

export default function Welcome() {
  return (
    <div className='lg:flex md:flex w-full px-[10%] pt-[15%] h-screen'>
        <div className='w-[50%] pl-28'>
            <p className='text-2xl font-mono'>Welcome! I'm</p>
            <h1 className='text-7xl font-bold text-[#344955] mt-5'>Nahid</h1>
            <p className='text-4xl mt-10'>I build web site & web apps!</p>
            <p className='text-lg mt-3'>I'm a web developer based in Bangladesh, specializing in cutting-edge web and mobile technologies as well as pixel-perfect designs .</p> 
            <div>
                <button>resume</button>
                <button>resume</button>
            </div>
            <div>
                social links in Icons
            </div>
        </div>
        <div className='w-[50%]'>
            <img className='w-[250px] rounded-xl mx-auto' src={image} alt="" />
        </div>
    </div>
  )
}
