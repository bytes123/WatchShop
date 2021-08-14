import React from 'react'
import {
  AiFillApple,
  AiFillAndroid,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { HiTranslate } from 'react-icons/hi'

export const SectionLookingFood = [
  {
    id: 1,
    title: "Hungry? You're in the right place",
    bgrColor: 'pink',
    imgLeft:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8ea937a9e9bc84c76710ea1032bd9800.svg',
    imgRight:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/176ea4cde53d65c47cf920c8b8a24912.svg',
    locationLabel: 'Enter delivery address',
    deliveryTime: 'Deliver now',
    confirmButton: 'Find Food',
    textInfo: ' for your recent addresses',
  },
  {
    id: 2,
    title: "Hungry? You're in the right place",
    bgrColor: '#FFF2D9',
    imgLeft:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f3767e1f1931a0b3d5e2af48b47575b.svg',
    imgRight:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/57dc47b168662ba80b01c66ed1e1420c.svg',
    locationLabel: {
      icon: 'HiLocationMarker',
      label: 'Enter delivery address',
    },
    deliveryTime: {
      icon: 'BiTime',
      label: 'Deliver now',
    },
    confirmButton: 'Find Food',
    textInfo: ' for your recent addresses',
  },
  {
    id: 3,
    title: "Hungry? You're in the right place",
    bgrColor: '#FFC043',
    imgLeft:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f54fdfb464db5da7c42e62c735bdf8f1.svg',
    imgRight:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bab80ef67bbbc99f2b7d45cfc395eb1b.svg',
    locationLabel: {
      icon: 'HiLocationMarker',
      label: 'Enter delivery address',
    },
    deliveryTime: {
      icon: 'BiTime',
      label: 'Deliver now',
    },
    confirmButton: 'Find Food',
    textInfo: ' for your recent addresses',
  },
]

export const asideList = [
  {
    id: 1,
    url: './business/eats',
    text: 'Create a business account',
  },
  {
    id: 2,
    url: './restaurent',
    text: 'Add your restaurant',
  },
  {
    id: 3,
    url: './drive/delivery',
    text: 'Sign up to deliver',
  },
]

export const appIntroduction = [
  {
    iconApp:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg',
    inforApp: "There's more to love in the app.",
    iphoneInfo: [
      {
        iphoneName: 'iphone',
        iphoneIcon: <AiFillApple />,
      },
    ],
    androidInfo: [
      {
        androidName: 'Android',
        androidIcon: <AiFillAndroid />,
      },
    ],
  },
]

export const categoryData = {
  key: 'category',
  title: 'Food Near Me',
  viewSelector: 'View all',
  leftIcon: <BsArrowLeftShort />,
  rightIcon: <BsArrowRightShort />,
  menuList: [
    {
      section: [
        {
          id: 1,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
          foodCategory: 'Fast Food',
        },
        {
          id: 2,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/0bc9ca19a02e3bd03f2395c8cf8a3e0c',
          foodCategory: 'Breakfast and Brunch',
        },
        {
          id: 3,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/a5aa9bbba0172134449b4ad48611d92b',
          foodCategory: 'American',
        },
        {
          id: 4,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/7b2a32908c050e6b07252ffcbe651e8c',
          foodCategory: 'Mexican',
        },
        {
          id: 5,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/a84dc69cee307fba4f559b1e825d8e9e',
          foodCategory: 'Chinese',
        },
        {
          id: 6,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/78e3d7f0866e5f17c8350216653b063b',
          foodCategory: 'Japanese',
        },
      ],
    },
    {
      section: [
        {
          id: 1,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/256bc34a3917153511de66ce2510be0a',
          foodCategory: 'Italian',
        },
        {
          id: 2,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/5bcce6114b9d2d5a39b81e756a250407',
          foodCategory: 'Healthy',
        },
        {
          id: 3,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/57864fe0d398139ac2175e7457c63954',
          foodCategory: 'Asian',
        },
        {
          id: 4,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/836fa3b8cf098f8cbed99cedc7c06779',
          foodCategory: 'Indian',
        },
        {
          id: 5,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/9a7792417e52d2be9f6550b48e48a4fc',
          foodCategory: 'Thai',
        },
        {
          id: 6,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/da6fcee0cd362a754551e695d7546f62',
          foodCategory: 'Taiwanese',
        },
      ],
    },
    {
      section: [
        {
          id: 1,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/256bc34a3917153511de66ce2510be0a',
          foodCategory: 'Italian',
        },
        {
          id: 2,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/5bcce6114b9d2d5a39b81e756a250407',
          foodCategory: 'Healthy',
        },
        {
          id: 3,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/57864fe0d398139ac2175e7457c63954',
          foodCategory: 'Asian',
        },
        {
          id: 4,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/836fa3b8cf098f8cbed99cedc7c06779',
          foodCategory: 'Indian',
        },
        {
          id: 5,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/9a7792417e52d2be9f6550b48e48a4fc',
          foodCategory: 'Thai',
        },
        {
          id: 6,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/da6fcee0cd362a754551e695d7546f62',
          foodCategory: 'Taiwanese',
        },
      ],
    },
    {
      section: [
        {
          id: 1,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/256bc34a3917153511de66ce2510be0a',
          foodCategory: 'Italian',
        },
        {
          id: 2,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/5bcce6114b9d2d5a39b81e756a250407',
          foodCategory: 'Healthy',
        },
        {
          id: 3,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/57864fe0d398139ac2175e7457c63954',
          foodCategory: 'Asian',
        },
        {
          id: 4,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/836fa3b8cf098f8cbed99cedc7c06779',
          foodCategory: 'Indian',
        },
        {
          id: 5,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/9a7792417e52d2be9f6550b48e48a4fc',
          foodCategory: 'Thai',
        },
        {
          id: 6,
          image:
            'https://duyt4h9nfnj50.cloudfront.net/sku/da6fcee0cd362a754551e695d7546f62',
          foodCategory: 'Taiwanese',
        },
      ],
    },
  ],
}

export const SectionBrandData = [
  {
    image:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg',
    titleItem: 'Feed your employees',
    label: 'Create a business account',
    link: './business/eats',
  },
  {
    image:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg',
    titleItem: 'Your restaurant, delivered',
    label: 'Add your restaurant',
    link: './resstaurent',
  },
  {
    image:
      'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg',
    titleItem: 'Deliver with Uber Eats',
    label: 'Sign up to deliver',
    link: './drive/delivery',
  },
]

export const foodsData = {
  key: 'category',
  title: 'Order Food Delivery in San Francisco Bay Area',
  leftIcon: <BsArrowLeftShort />,
  rightIcon: <BsArrowRightShort />,
  menuList: [
    {
      section: [
        {
          id: 1,
          price: '$2.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.4',
          image:
            'https://d1ralsognjng37.cloudfront.net/25fbd3ef-9e6d-46ad-9d65-6a89d6103772.jpeg',
          foodCategory: 'Jack in the Box (4649 Geary Blvd)',
        },
        {
          id: 2,
          price: '$6.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.2',
          image:
            'https://d1ralsognjng37.cloudfront.net/b53bbb9c-278f-4535-a1c1-8aaa9df1e91c.jpeg',
          foodCategory: "McDonald's® (Daly City)",
        },
        {
          id: 3,
          price: '$2.49 Delivery Fee',
          dollar: false,
          time: '30–40 Min',
          point: '3.8',
          image:
            'https://d1ralsognjng37.cloudfront.net/6eb30bcb-a9c0-44c8-9a35-2bb30330f8e2.jpeg',
          foodCategory: "Adam's Fantastic Desserts Cakes",
        },
      ],
    },
    {
      section: [
        {
          id: 1,
          price: '$2.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.4',
          image:
            'https://d1ralsognjng37.cloudfront.net/25fbd3ef-9e6d-46ad-9d65-6a89d6103772.jpeg',
          foodCategory: 'Jack in the Box (4649 Geary Blvd)',
        },
        {
          id: 2,
          price: '$6.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.2',
          image:
            'https://d1ralsognjng37.cloudfront.net/b53bbb9c-278f-4535-a1c1-8aaa9df1e91c.jpeg',
          foodCategory: "McDonald's® (Daly City)",
        },
        {
          id: 3,
          price: '$2.49 Delivery Fee',
          dollar: false,
          time: '30–40 Min',
          point: '3.8',
          image:
            'https://d1ralsognjng37.cloudfront.net/6eb30bcb-a9c0-44c8-9a35-2bb30330f8e2.jpeg',
          foodCategory: "Adam's Fantastic Desserts Cakes",
        },
      ],
    },
    {
      section: [
        {
          id: 1,
          price: '$2.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.4',
          image:
            'https://d1ralsognjng37.cloudfront.net/25fbd3ef-9e6d-46ad-9d65-6a89d6103772.jpeg',
          foodCategory: 'Jack in the Box (4649 Geary Blvd)',
        },
        {
          id: 2,
          price: '$6.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.2',
          image:
            'https://d1ralsognjng37.cloudfront.net/b53bbb9c-278f-4535-a1c1-8aaa9df1e91c.jpeg',
          foodCategory: "McDonald's® (Daly City)",
        },
        {
          id: 3,
          price: '$2.49 Delivery Fee',
          dollar: false,
          time: '30–40 Min',
          point: '3.8',
          image:
            'https://d1ralsognjng37.cloudfront.net/6eb30bcb-a9c0-44c8-9a35-2bb30330f8e2.jpeg',
          foodCategory: "Adam's Fantastic Desserts Cakes",
        },
      ],
    },
    {
      section: [
        {
          id: 1,
          price: '$2.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.4',
          image:
            'https://d1ralsognjng37.cloudfront.net/25fbd3ef-9e6d-46ad-9d65-6a89d6103772.jpeg',
          foodCategory: 'Jack in the Box (4649 Geary Blvd)',
        },
        {
          id: 2,
          price: '$6.49 Delivery Fee',
          dollar: true,
          time: '35–45 Min',
          point: '4.2',
          image:
            'https://d1ralsognjng37.cloudfront.net/b53bbb9c-278f-4535-a1c1-8aaa9df1e91c.jpeg',
          foodCategory: "McDonald's® (Daly City)",
        },
        {
          id: 3,
          price: '$2.49 Delivery Fee',
          dollar: false,
          time: '30–40 Min',
          point: '3.8',
          image:
            'https://d1ralsognjng37.cloudfront.net/6eb30bcb-a9c0-44c8-9a35-2bb30330f8e2.jpeg',
          foodCategory: "Adam's Fantastic Desserts Cakes",
        },
      ],
    },
  ],
}

export const statusData = {
  key: 'category',
  menuList: [
    {
      section: [
        {
          id: 1,
          image:
            'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg',
          foodCategory: 'Feed your employees',
          link: 'Create a business account',
        },
        {
          id: 2,
          image:
            'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg',
          foodCategory: 'Your restaurant, delivered',
          link: 'Add your restaurant',
        },
        {
          id: 3,
          image:
            'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg',
          foodCategory: 'Deliver with Uber Eats',
          link: 'Sign up to deliver',
        },
      ],
    },
  ],
}

export const newFoodsData = {
  key: 'category',
  title: 'New on Uber Eats',
  menuList: [
    {
      section: [
        {
          id: 1,
          price: '$1.49 Delivery Fee',
          dollar: false,
          time: '40–50 Min',
          point: 'New',
          image:
            'https://d1ralsognjng37.cloudfront.net/f6cc82a4-6de6-4524-bb5f-1f132c762aa7.webp',
          foodCategory: 'Brioche Bakery & Cafe',
        },
        {
          id: 2,
          price: '$1.49 Delivery Fee',
          dollar: false,
          time: '25–35 Min',
          point: 'New',
          image:
            'https://d1ralsognjng37.cloudfront.net/2dc389a1-a959-4af2-b0cb-90961d80bb05.webp',
          foodCategory: 'All Star Cafe',
        },
      ],
    },
  ],
}

export const CenterMapCountries = {
  header: 'Cities Near Me',
  label: 'View all 500+ cities',
}

export const MapCountries = {
  countries: [
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
  ],
}

export const MapCountriesOnly = {
  header: 'Countries with Uber Eats',
  countries: [
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
    {
      id: 'atlanta-ga',
      country: 'Atlanta',
    },
  ],
}

export const footerLink = [
  {
    id: 1,
    linkInfo: 'About Uber Eats',
    itemLink: [
      {
        id: 1,
        linking: 'Read our blog',
      },
      {
        id: 2,
        linking: 'Buy gift cards',
      },
      {
        id: 3,
        linking: 'Create a business account',
      },
      {
        id: 4,
        linking: 'Add your restaurant',
      },
      {
        id: 5,
        linking: 'Sign up to deliver',
      },
    ],
  },
  {
    id: 2,
    linkInfo: 'Get Help',
    itemLink: [
      {
        id: 1,
        linking: 'View all cities',
      },
      {
        id: 2,
        linking: 'View all countries',
      },
      {
        id: 3,
        linking: 'Restaurants near me',
      },
      {
        id: 4,
        linking: 'Save on your first order',
      },
      {
        id: 5,
        logo: true,
        logoSource: <HiTranslate />,
        linking: 'English',
      },
    ],
  },
]

export const footerLogo = [
  {
    name: 'facebook',
    logo: <AiFillFacebook />,
  },
  {
    name: 'twitter',
    logo: <AiOutlineTwitter />,
  },
  {
    name: 'instagram',
    logo: <AiOutlineInstagram />,
  },
]

export const footerHeadList = [
  {
    id: 1,
    name: 'Privacy Policy',
  },
  {
    id: 2,
    name: 'Terms',
  },
  {
    id: 3,
    name: 'Pricing',
  },
]
