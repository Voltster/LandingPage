
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Btn from './Btn';

export default function Home() {
  return (
    <div className='bg-yellow-300 w-screen h-[80vh] relative z-[1]'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='w-full h-full text-white  flex justify-center items-center flex-col hero-bg'>
                <h1 className='text-5xl font-bold uppercase tracking-wide'>Awward winning Agency</h1>
                <p className='w-8/12 mt-1 '>At Ogilvy, we design the brand we turn the brand into an experience and we communicate the brand's story. We make brands matter.</p>
                <Btn text={"Learn More"} outline={true} customClasses="border-white mt-6 hover:bg-yellow-50"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full text-white  flex justify-center items-center flex-col hero-bg2'>
                <h1 className='text-3xl font-bold uppercase tracking-wide'>Awward winning Agency</h1>
                <p className='w-8/12 mt-1 '>At Ogilvy, we design the brand we turn the brand into an experience and we communicate the brand's story. We make brands matter.</p>
                <Btn/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full text-white  flex justify-center items-center flex-col hero-bg3'>
                <h1 className='text-3xl font-bold uppercase tracking-wide'>Awward winning Agency</h1>
                <p className='w-8/12 mt-1 '>At Ogilvy, we design the brand we turn the brand into an experience and we communicate the brand's story. We make brands matter.</p>
                <Btn/>
            </div>
        </SwiperSlide>
    
      </Swiper>
      <h2 className='text-3xl font-bold uppercase tracking-wide text-center py-8 bg-white text-black '>Let's build somthing great</h2>
    </div>
  );
}
