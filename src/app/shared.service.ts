import { Injectable } from '@angular/core';

export interface CategorySection {
  id: number;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  detail: string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() { }

  getWheelCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/wheel/wheel01.webp',
        name: 'Alloyrims Silver CD70 | Star Shape | Premium Quality',
        price: 21999,
        oldPrice: 22900,
        detail: 'Upgrade your bike with our Alloyrims Silver CD70! Featuring a star shape design for an aesthetic look and better grip, these premium quality rims will enhance your riding experience. Experience...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel02.webp',
        name: 'Silver Curve Alloy Rims for CD 70 – Durable & Sleek Design',
        price: 23000,
        oldPrice: 25000,
        detail: 'Upgrade your Honda CD 70 with our stylish and strong Silver Curve Alloy Rims. Made from high-quality aluminum, these rims are built to last, are lightweight, and add a modern...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel03.webp',
        name: 'Crown Red Alloy Rims for Honda CD70 - Premium Quality',
        price: 23000,
        oldPrice: 25000,
        detail: 'Upgrade your Honda CD70 with our premium Crown Red Alloy Rims—designed for riders who demand style and performance. Featuring a bold red finish and a sleek design, these lightweight rims...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel04.webp',
        name: 'Crown Golden Alloy Rims for Honda CD70 - Elegant & Durable',
        price: 23000,
        oldPrice: 25000,
        detail: "Upgrade your Honda CD70 with our premium Crown Golden Alloy Rims, designed to combine style and performance. Featuring a luxurious golden finish, these lightweight rims enhance your bike's aesthetics, improve..."
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel05.webp',
        name: 'Alloyrims CD70 | YBR Shape Blue Outline | Premium Quality',
        price: 21999,
        oldPrice: 0,
        detail: 'Enhance your ride with the Alloyrims CD70 featuring a sleek YBR shape and striking blue outline. Crafted with premium quality materials, these rims offer durability and style, ensuring your bike...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel06.webp',
        name: 'Premium Red Curve Alloy Rims for CD 70 – Stylish & Durable Design',
        price: 23000,
        oldPrice: 25000,
        detail: 'Upgrade your Honda CD 70 with our premium Red Curve Alloy Rims—crafted for riders who value both style and performance. With a sleek red finish and modern curved design, these...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel07.webp',
        name: 'Curve Golden Alloy Rims for Honda CD70 - Stylish & Durable',
        price: 23000,
        oldPrice: 25000,
        detail: 'Transform your Honda CD70 with our premium Curve Golden Alloy Rims, designed for bikers in Pakistan who value elegance and performance. These lightweight alloy rims feature a striking golden finish...'
      },
      {
        id: 2,
        image: '/assets/images/wheel/wheel08.webp',
        name: 'Alloy Rims in YBR Shape With plates for Honda CG125 - Stylish, Durable, and Affordable | Top Choice in Pakistan',
        price: 34999,
        oldPrice: 38000,
        detail: 'Transform your Honda CG125 with YBR Shape Alloy Rims, designed for bikers in Pakistan seeking cutting-edge style and reliable performance. With a modern YBR-inspired design, these premium alloy rims offer...'
      },
      {
        id: 2,
        image: '/assets/images/wheel/wheel09.webp',
        name: 'Silver Alloy Rims for Honda CG125 - Durable & Stylish',
        price: 31999,
        oldPrice: 35000,
        detail: "Elevate your Honda CG125 with our high-quality Silver Alloy Rims, crafted for riders in Pakistan who demand durability and style. These premium alloy rims feature a sleek silver finish that..."
      },
      {
        id: 2,
        image: '/assets/images/wheel/wheel10.webp',
        name: 'Golden Alloy Rims CG125',
        price: 32000,
        oldPrice: 0,
        detail: ''
      },
      // ... (add the rest of the items as needed)
    ];
  }

  getCD70CategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/tanks/tank001.webp',
        name: '2025 Red CD70',
        price: 8500,
        oldPrice: 7999,
        detail: 'The 2025 Red CD70 is a high-quality motorcycle that boasts a genuine paint and logo, making it a durable and stylish choice. With its advanced 2025 model and vibrant red...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank002.webp',
        name: '2025 Blk CD70',
        price: 8999,
        oldPrice: 7500,
        detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank003.webp',
        name: '2025 Black-Blue Sticker CD70',
        price: 8999,
        oldPrice: 7500,
        detail: 'The 2024 Blk-Blue Sticker CD70 features a customized 2024 blue sticker on a sleek black fuel tank, adding a touch of beauty to your ride. With a professional and objective...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank004.webp',
        name: '2005 CD70 FUEL TANK - CUSTOMIZED GENUINE',
        price: 9900,
        oldPrice: 9200,
        detail: "Looking for a reliable replacement fuel tank for your 2005 CD 70? Look no further! Our genuine quality customized fuel tank is the perfect fit for your bike, providing long-lasting..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank005.webp',
        name: '2010 CD70 FUEL TANK - CUSTOMIZED GENUINE',
        price: 10000,
        oldPrice: 9200,
        detail: "Upgrade your bike's fuel tank with the 2010 CD 70 FUEL TANK. With its genuine quality and customized design, you can enjoy a smoother and more efficient ride. Perfect for..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank006.webp',
        name: '2012 Red CD70',
        price: 9900,
        oldPrice: 9200,
        detail: 'Upgrade to the 2012 Red CD70 for a customised, high quality ride. With a unique fuel tank and superior construction, this bike is a top choice for those seeking durability...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank007.webp',
        name: '2007 Red CD70',
        price: 9999,
        oldPrice: 9200,
        detail: 'Ride in style with the 2007 Red CD70 outfit for your Honda CD70 bike. This genuine quality outfit boasts a sleek red color and is designed specifically for the 2007...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank008.webp',
        name: '2013 Red CD70',
        price: 9999,
        oldPrice: 9200,
        detail: 'Upgrade your Honda CD70 with the 2013 Red CD70 fuel tank set. Made with genuine quality materials, this set guarantees reliable performance for your bike. Take your ride to the...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank009.webp',
        name: '1997 Red CD70',
        price: 9999,
        oldPrice: 9200,
        detail: "Upgrade your motorcycle with our 1997 Red CD70! Featuring a high-quality fuel tank set, genuine paint, sticker, and monogram, this model is sure to stand out. Take your ride to..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank010.webp',
        name: '2015 red CD70',
        price: 9999,
        oldPrice: 9200,
        detail: "Introducing the 2015 red CD70 - the perfect blend of style and functionality. This outfit boasts a customised design, genuine fueltank, and high-quality materials, making it a top-of-the-line product. Upgrade..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank011.jpeg',
        name: '46 Honda Purple/Grey CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Upgrade your ride with the 46 Honda Purple/Grey CD70. The sleek design features a high-quality, logo outfit in a stylish purple and grey color. Elevate your bike with this top-of-the-line...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank012.jpeg',
        name: 'Alter Chilli Red CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'The Alter Chilli Red CD70 boasts a stunning Alter fuel tank, shaped in a sleek and beautiful design. This addition to your CD70 bike not only enhances its appearance but...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank013.jpeg',
        name: 'Alter Honda logo Design CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Enhance the look of your CD70 with the Alter Honda Logo Design. Featuring a beautiful black and red combination, this outfit adds a stylish touch to your bike. Stand out...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank014.jpeg',
        name: 'Black Special Edition CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Enhance the style of your CD70 bike with our Black Special Edition CD70. Featuring a sleek and modern design, this special edition bike offers a unique black color that is...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank015.jpeg',
        name: 'Chili Red Irani design Alter CD70',
        price: 6500,
        oldPrice: 6000,
        detail: "Upgrade your bike's style with the Chili Red Irani design Alter CD70. The special red chilli colour and unique irani design will give your CD70 bike a sleek and modern...'"
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank016.jpeg',
        name: 'Dunhill Purple/Smoke CD79',
        price: 6500,
        oldPrice: 6000,
        detail: 'Upgrade your CD70 bike with the stylish Dunhill Purple/Smoke CD79 design outfit. This sleek combination of purple and smoke adds a touch of elegance to your ride. Made by Dunhill,...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank017.jpeg',
        name: 'Flame Red CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Introducing the Flame Red CD70 - the perfect addition to your bike with its stunning 3D flame design outfit. Let your bike stand out from the rest with this beautiful...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank018.jpeg',
        name: 'Golden Flame Design | CD70 | High Quality',
        price: 6500,
        oldPrice: 6000,
        detail: 'Discover the superior quality of our Golden Flame Design/Cd70/High Quality/Outfits, designed for an elevated and premium experience. Trust in our expertise and choose the best for your needs.'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank019.jpeg',
        name: 'Green Flame Design | CD70 | High Quality Outfit',
        price: 6500,
        oldPrice: 6000,
        detail: 'Elevate the look of your CD70 bike with our high quality Green Flame Design. This expertly crafted design features a stunning green flame pattern that is sure to turn heads....'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank020.jpeg',
        name: 'Harley Orange/white Alter CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience the sleek design and improved functionality of the Harley Orange/white Alter CD70. With its uniquely shaped fuel tank, this bike stands out from the rest. Ride in style and...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank021.jpeg',
        name: 'Honda Logo White/Red cd70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Featuring a white logo design with vibrant red accents, the Honda Logo White/Red cd70 is a beautiful addition to any cd70 bike. Designed for both style and functionality, this product...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank022.jpeg',
        name: 'Honda White/Red logo Design CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Expertly designed for the Honda CD70, our paint design in white and red exudes quality and style. With a professional finish, it adds a sleek and dynamic look to your...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank023.jpeg',
        name: 'Irani black/blue CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience the sleek and stylish design of the Irani black/blue CD70. This high-quality product for CD70 bikes features a unique black and blue design that is sure to turn heads....'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank024.jpeg',
        name: 'Irani Blk/Blue lines Alter CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience enhanced durability and style with the Irani Blk/Blue lines Alter CD70. This fuel tank, designed in a sleek black color, is a high-quality product that fits perfectly into the...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank025.jpeg',
        name: 'Irani Blk/Red Design CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience a unique twist on the classic CD70 with our Irani Blk/Red Design. The intricate black design adds a touch of elegance to your bike, giving it an aesthetic look....'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank026.jpeg',
        name: 'Irani Silver/Blk Design Alter CD70',
        price: 6500,
        oldPrice: 6000,
        detail: "Enhance the look of your CD70 bike with our high-quality Irani silver design, inspired by the sleek and stylish 125 shape. Upgrade your bike's appearance and stand out on the..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank027.jpeg',
        name: 'Irani Silver/Mix Design CD70',
        price: 6500,
        oldPrice: 6000,
        detail: "Introducing the Irani Silver/Mix Design CD70, a high-quality product with a special paint design to elevate the aesthetic of your CD70 bike's fuel tank.Our expert design guarantees durability and..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank028.jpeg',
        name: 'Markhor Black/White | CD70 | A+ Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience superior quality with the Markhor Black/White CD70, featuring A+ craftsmanship and flexible sidecovers designed for enhanced durability and comfort. This upgrade ensures a reliable ride while maintaining the classic...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank029.jpeg',
        name: 'Markhor Blk/Blue CD70',
        price: 6500,
        oldPrice: 6000,
        detail: "Polish the look of your CD70 bike with the stunning Markhor Black Blue design. This high-quality design is sure to turn heads and elevate your bike's appearance.With its sleek..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank030.jpeg',
        name: 'Markhor Blk/Red CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Expertly designed with a striking Markhor design, this black and red CD70 outfit makes for a beautiful addition to your bike. Its fueltank is perfect for CD70 models, adding functionality...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank031.jpeg',
        name: 'Markhor Blue & White | CD70 | A+ Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience superior quality with the Markhor Blue/White CD70, featuring A+ grade craftsmanship and flexible sidecovers designed for enhanced durability and comfort. This model combines reliable performance with thoughtful design, making...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank032.jpeg',
        name: 'Markhor Red/white CD70',
        price: 6500,
        oldPrice: 6000,
        detail: '"The Markhor Red/white CD70 features a beautifully designed exterior, adding a touch of elegance to your CD70 bike. Enjoy riding in style and standing out from the crowd with this...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank033.jpeg',
        name: 'Markhor Silver/Blk CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Upgrade your bike with the stylish and durable Markhor Silver/Blk CD70 fuel tank. With its unique silver and black design, stand out on the road while its high-quality material ensures...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank034.jpeg',
        name: 'Markhor White/Blue | CD70 | A+ Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        detail: 'Markhor White/Blue | CD70 | A+ Quality With Flexible Sidecovers'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank035.jpeg',
        name: 'Nardo Grey design CD70',
        price: 6500,
        oldPrice: 6000,
        detail: "Upgrade your CD70 bike's style with our Nardo Grey design fuel tank! The high-quality paint gives a sleek, modern look that will turn heads on the road. Stand out from..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank036.jpeg',
        name: 'Nardo Grey Irani Design CD70',
        price: 6500,
        oldPrice: 6000,
        detail: 'Enhance your CD70 motorcycle with our high-quality Nardo Grey Irani Design fuel tank. Made specifically for the CD70 model, this fuel tank boasts a sleek Nardo Grey color and durable...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank037.jpeg',
        name: 'Power Plus Black Grey | CD70 | Premium Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        detail: 'Enhance your CD70 motorcycle with our Power Plus tank, engineered for superior performance and durability. This premium quality tank comes complete with flexible sidecovers that provide excellent protection while allowing...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank038.jpeg',
        name: 'Power Plus Red | CD70 | Premium Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience superior performance with our Power Plus Red CD70 motorcycle parts. These premium quality side covers offer exceptional flexibility and durability, perfectly designed to fit your CD70 model. Enhance both...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank038.jpeg',
        name: 'RED FLAME | CD70 | APLUS QUALITY | FLEXIBLE SIDECOVER',
        price: 6500,
        oldPrice: 6000,
        detail: 'Experience premium protection with our RED FLAME CD70 side cover. Crafted with A-PLUS QUALITY materials, this flexible side cover offers durability and easy installation for your CD70 motorcycle. The vibrant...'
      },
      // ... (add the rest of the items as needed)
    ];
  }

  getCG125CategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/tanks/tank001.webp',
        name: '2025 Red CD70',
        price: 8500,
        oldPrice: 7999,
        detail: 'The 2025 Red CD70 is a high-quality motorcycle that boasts a genuine paint and logo, making it a durable and stylish choice. With its advanced 2025 model and vibrant red...'
      },
    ];
  }

  getLEDlightingCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/lights/10066.jpg',
        name: 'Lights',
        price: 8500,
        oldPrice: 7999,
        detail: 'Lights'
      },
    ];

  }

  getHelmetGadgetsCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/helmet/10020.jpeg',
        name: 'Helmet',
        price: 8500,
        oldPrice: 7999,
        detail: 'This is a Helmet'
      },
    ];
  }

  getSilencerCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/silencer/10028.jpeg',
        name: 'Silencer',
        price: 8500,
        oldPrice: 7999,
        detail: 'Silencer'
      },
    ];
  }
}