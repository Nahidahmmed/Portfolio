import image from '../../assets/logo/image2.jpg'

export default function Welcome() {
  return (
    <div className='flex w-full mx-[10%] pt-[20%]'>
        <div className='w-[50%]'>
            <p>Welcome! I'm</p>
            <h1>Nahid</h1>
            <p>I build web site & web apps!</p>
            <p>I'm a web developer based in Bangladesh, specializing in cutting-edge web and mobile technologies as well as pixel-perfect designs .</p> 
            <div>
                <button>resume</button>
                <button>resume</button>
            </div>
            <div>
                social links in Icons
            </div>
        </div>
        <div className='w-[50%]'>
            <img className='w-[250px] rounded-xl' src={image} alt="" />
        </div>
    </div>
  )
}
