import { Github, Instagram, Linkedin } from "@deemlol/next-icons";

function Footer() {
    return (
        <div className='w-full h-full bg-black text-white py-6 px-12 flex flex-col sm:flex-row justify-center items-start'>
            <div className='w-full sm:w-[400px] p-5  sm:border-r border-white flex justify-center sm:justify-normal flex-col gap-1'>
                <img src="/favicon.png" alt="footer_logo" width={200} height={200} className='self-center' />
                <p className='text-justify text-zinc-300 text-sm'>
                    Discover a wide selection of high-quality products at unbeatable prices. Shop confidently with fast shipping and secure checkout. Your one-stop destination for all your shopping needs!
                </p>
            </div>
            <div className='w-full sm:w-[320px] h-80 sm:h-full flex flex-col justify-center items-center sm:items-start p-5 px-15'>
                <h1>Social Media Links</h1>
                <div className='flex gap-3 pt-4'>
                    <a href="https://www.instagram.com/lucifer60_2/" target='blank' className='border-white border p-1 rounded-full hover:bg-white hover:text-black'><Instagram size={18} /></a>
                    <a href='https://www.linkedin.com/in/nikhilpathak602/' target='blank' className='border-white border p-1 rounded-full hover:bg-white hover:text-black'><Linkedin size={18} /></a>
                    <a href='https://github.com/11804800' target='blank' className='border-white border p-1 rounded-full hover:bg-white hover:text-black'><Github size={18} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer