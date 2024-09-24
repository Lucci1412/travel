import { OrderedListOutlined, HomeOutlined, CarOutlined, StarOutlined,CoffeeOutlined  } from '@ant-design/icons';

export const ListMenu = [
  {
    name: 'Top List',
    icon: () => <OrderedListOutlined />,
    path: '/toplist'
  },
  {
    name: 'Địa điểm',
    icon: () => <HomeOutlined />, 
    path: '/'
  },
  {
    name: 'Ăn uống',
    icon: () => <CoffeeOutlined />,
    path: '/an-uong'
  },
  {
    name: 'Homestay',
    icon: () => <HomeOutlined />, 
    path: '/cho-ngu-qua-dem'
  },
  {
    name: 'Thuê xe',
    icon: () => <CarOutlined />, 
    path: '/thue-xe'
  },
  {
    name: 'Review',
    icon: () => <StarOutlined />, 
    path: '/danh-gia'
  },
];