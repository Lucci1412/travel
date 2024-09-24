'use client'
import Banner from '../common/banner'
export const dataBanner = {
  height: 600,
  img: 'https://2trip.vn/wp-content/themes/trip/img/Hero_home.png',
  title: 'Khám phá những trải nghiệm du lịch Tuyệt Vời',
  subTitle: 'Tìm kiếm những địa điểm du lịch, tham quan, nghỉ dưỡng',
  words: [
    {
      text: 'Khám',
      className: 'text-white',
    },
    {
      text: 'phá',
      className: 'text-white',
    },
    {
      text: 'những',
      className: 'text-white',
    },
    {
      text: 'trải',
      className: 'text-white',
    },
    {
      text: 'nghiệm',
      className: 'text-white',
    },
    {
      text: 'tuyệt',
      className: 'text-white',
    },
    {
      text: 'vời',
      className: 'text-white',
    },
    {
      text: 'cùng',
      className: 'text-white',
    },
    {
      text: 'chúng',
      className: 'text-white',
    },
    {
      text: 'tôi',
      className: 'text-white',
    },
  ],
}
const HomePage = () => {
  return (
    <div className="flex flex-col h-full">
      <Banner
        height={dataBanner.height}
        img={dataBanner.img}
        subTitle={dataBanner.subTitle}
        title={dataBanner.title}
        words={dataBanner.words}
      ></Banner>
      <div className="md:mx-auto container   bg-red-300  h-[500px] px-4"></div>
    </div>
  )
}

export default HomePage
