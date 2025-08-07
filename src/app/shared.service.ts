import { Injectable } from '@angular/core';

export interface CategorySection {
  id: number;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  sku: string;
  categories: string;
  availability: string;
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
        sku: "AR-000126",
        categories: "All Alloy Rims, Alloy Rims-CD70",
        availability: "In Stock",
        detail: 'Upgrade your bike with our Alloyrims Silver CD70! Featuring a star shape design for an aesthetic look and better grip, these premium quality rims will enhance your riding experience. Experience...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel02.webp',
        name: 'Silver Curve Alloy Rims for CD 70 – Durable & Sleek Design',
        price: 23000,
        oldPrice: 25000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your Honda CD 70 with our stylish and strong Silver Curve Alloy Rims. Made from high-quality aluminum, these rims are built to last, are lightweight, and add a modern...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel03.webp',
        name: 'Crown Red Alloy Rims for Honda CD70 - Premium Quality',
        price: 23000,
        oldPrice: 25000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your Honda CD70 with our premium Crown Red Alloy Rims—designed for riders who demand style and performance. Featuring a bold red finish and a sleek design, these lightweight rims...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel04.webp',
        name: 'Crown Golden Alloy Rims for Honda CD70 - Elegant & Durable',
        price: 23000,
        oldPrice: 25000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Upgrade your Honda CD70 with our premium Crown Golden Alloy Rims, designed to combine style and performance. Featuring a luxurious golden finish, these lightweight rims enhance your bike's aesthetics, improve..."
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel05.webp',
        name: 'Alloyrims CD70 | YBR Shape Blue Outline | Premium Quality',
        price: 21999,
        oldPrice: 0,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance your ride with the Alloyrims CD70 featuring a sleek YBR shape and striking blue outline. Crafted with premium quality materials, these rims offer durability and style, ensuring your bike...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel06.webp',
        name: 'Premium Red Curve Alloy Rims for CD 70 – Stylish & Durable Design',
        price: 23000,
        oldPrice: 25000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your Honda CD 70 with our premium Red Curve Alloy Rims—crafted for riders who value both style and performance. With a sleek red finish and modern curved design, these...'
      },
      {
        id: 1,
        image: '/assets/images/wheel/wheel07.webp',
        name: 'Curve Golden Alloy Rims for Honda CD70 - Stylish & Durable',
        price: 23000,
        oldPrice: 25000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Transform your Honda CD70 with our premium Curve Golden Alloy Rims, designed for bikers in Pakistan who value elegance and performance. These lightweight alloy rims feature a striking golden finish...'
      },
      {
        id: 2,
        image: '/assets/images/wheel/wheel08.webp',
        name: 'Alloy Rims in YBR Shape With plates for Honda CG125 - Stylish, Durable, and Affordable | Top Choice in Pakistan',
        price: 34999,
        oldPrice: 38000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Transform your Honda CG125 with YBR Shape Alloy Rims, designed for bikers in Pakistan seeking cutting-edge style and reliable performance. With a modern YBR-inspired design, these premium alloy rims offer...'
      },
      {
        id: 2,
        image: '/assets/images/wheel/wheel09.webp',
        name: 'Silver Alloy Rims for Honda CG125 - Durable & Stylish',
        price: 31999,
        oldPrice: 35000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Elevate your Honda CG125 with our high-quality Silver Alloy Rims, crafted for riders in Pakistan who demand durability and style. These premium alloy rims feature a sleek silver finish that..."
      },
      {
        id: 2,
        image: '/assets/images/wheel/wheel10.webp',
        name: 'Golden Alloy Rims CG125',
        price: 32000,
        oldPrice: 0,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
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
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'The 2025 Red CD70 is a high-quality motorcycle that boasts a genuine paint and logo, making it a durable and stylish choice. With its advanced 2025 model and vibrant red...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank002.webp',
        name: '2025 Blk CD70',
        price: 8999,
        oldPrice: 7500,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank003.webp',
        name: '2025 Black-Blue Sticker CD70',
        price: 8999,
        oldPrice: 7500,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'The 2024 Blk-Blue Sticker CD70 features a customized 2024 blue sticker on a sleek black fuel tank, adding a touch of beauty to your ride. With a professional and objective...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank004.webp',
        name: '2005 CD70 FUEL TANK - CUSTOMIZED GENUINE',
        price: 9900,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Looking for a reliable replacement fuel tank for your 2005 CD 70? Look no further! Our genuine quality customized fuel tank is the perfect fit for your bike, providing long-lasting..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank005.webp',
        name: '2010 CD70 FUEL TANK - CUSTOMIZED GENUINE',
        price: 10000,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Upgrade your bike's fuel tank with the 2010 CD 70 FUEL TANK. With its genuine quality and customized design, you can enjoy a smoother and more efficient ride. Perfect for..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank006.webp',
        name: '2012 Red CD70',
        price: 9900,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade to the 2012 Red CD70 for a customised, high quality ride. With a unique fuel tank and superior construction, this bike is a top choice for those seeking durability...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank007.webp',
        name: '2007 Red CD70',
        price: 9999,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Ride in style with the 2007 Red CD70 outfit for your Honda CD70 bike. This genuine quality outfit boasts a sleek red color and is designed specifically for the 2007...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank008.webp',
        name: '2013 Red CD70',
        price: 9999,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your Honda CD70 with the 2013 Red CD70 fuel tank set. Made with genuine quality materials, this set guarantees reliable performance for your bike. Take your ride to the...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank009.webp',
        name: '1997 Red CD70',
        price: 9999,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Upgrade your motorcycle with our 1997 Red CD70! Featuring a high-quality fuel tank set, genuine paint, sticker, and monogram, this model is sure to stand out. Take your ride to..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank010.webp',
        name: '2015 red CD70',
        price: 9999,
        oldPrice: 9200,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Introducing the 2015 red CD70 - the perfect blend of style and functionality. This outfit boasts a customised design, genuine fueltank, and high-quality materials, making it a top-of-the-line product. Upgrade..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank011.jpeg',
        name: '46 Honda Purple/Grey CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your ride with the 46 Honda Purple/Grey CD70. The sleek design features a high-quality, logo outfit in a stylish purple and grey color. Elevate your bike with this top-of-the-line...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank012.jpeg',
        name: 'Alter Chilli Red CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'The Alter Chilli Red CD70 boasts a stunning Alter fuel tank, shaped in a sleek and beautiful design. This addition to your CD70 bike not only enhances its appearance but...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank013.jpeg',
        name: 'Alter Honda logo Design CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance the look of your CD70 with the Alter Honda Logo Design. Featuring a beautiful black and red combination, this outfit adds a stylish touch to your bike. Stand out...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank014.jpeg',
        name: 'Black Special Edition CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance the style of your CD70 bike with our Black Special Edition CD70. Featuring a sleek and modern design, this special edition bike offers a unique black color that is...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank015.jpeg',
        name: 'Chili Red Irani design Alter CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Upgrade your bike's style with the Chili Red Irani design Alter CD70. The special red chilli colour and unique irani design will give your CD70 bike a sleek and modern...'"
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank016.jpeg',
        name: 'Dunhill Purple/Smoke CD79',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your CD70 bike with the stylish Dunhill Purple/Smoke CD79 design outfit. This sleek combination of purple and smoke adds a touch of elegance to your ride. Made by Dunhill,...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank017.jpeg',
        name: 'Flame Red CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Introducing the Flame Red CD70 - the perfect addition to your bike with its stunning 3D flame design outfit. Let your bike stand out from the rest with this beautiful...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank018.jpeg',
        name: 'Golden Flame Design | CD70 | High Quality',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Discover the superior quality of our Golden Flame Design/Cd70/High Quality/Outfits, designed for an elevated and premium experience. Trust in our expertise and choose the best for your needs.'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank019.jpeg',
        name: 'Green Flame Design | CD70 | High Quality Outfit',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Elevate the look of your CD70 bike with our high quality Green Flame Design. This expertly crafted design features a stunning green flame pattern that is sure to turn heads....'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank020.jpeg',
        name: 'Harley Orange/white Alter CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience the sleek design and improved functionality of the Harley Orange/white Alter CD70. With its uniquely shaped fuel tank, this bike stands out from the rest. Ride in style and...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank021.jpeg',
        name: 'Honda Logo White/Red cd70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Featuring a white logo design with vibrant red accents, the Honda Logo White/Red cd70 is a beautiful addition to any cd70 bike. Designed for both style and functionality, this product...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank022.jpeg',
        name: 'Honda White/Red logo Design CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Expertly designed for the Honda CD70, our paint design in white and red exudes quality and style. With a professional finish, it adds a sleek and dynamic look to your...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank023.jpeg',
        name: 'Irani black/blue CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience the sleek and stylish design of the Irani black/blue CD70. This high-quality product for CD70 bikes features a unique black and blue design that is sure to turn heads....'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank024.jpeg',
        name: 'Irani Blk/Blue lines Alter CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience enhanced durability and style with the Irani Blk/Blue lines Alter CD70. This fuel tank, designed in a sleek black color, is a high-quality product that fits perfectly into the...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank025.jpeg',
        name: 'Irani Blk/Red Design CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience a unique twist on the classic CD70 with our Irani Blk/Red Design. The intricate black design adds a touch of elegance to your bike, giving it an aesthetic look....'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank026.jpeg',
        name: 'Irani Silver/Blk Design Alter CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Enhance the look of your CD70 bike with our high-quality Irani silver design, inspired by the sleek and stylish 125 shape. Upgrade your bike's appearance and stand out on the..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank027.jpeg',
        name: 'Irani Silver/Mix Design CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Introducing the Irani Silver/Mix Design CD70, a high-quality product with a special paint design to elevate the aesthetic of your CD70 bike's fuel tank.Our expert design guarantees durability and..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank028.jpeg',
        name: 'Markhor Black/White | CD70 | A+ Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience superior quality with the Markhor Black/White CD70, featuring A+ craftsmanship and flexible sidecovers designed for enhanced durability and comfort. This upgrade ensures a reliable ride while maintaining the classic...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank029.jpeg',
        name: 'Markhor Blk/Blue CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Polish the look of your CD70 bike with the stunning Markhor Black Blue design. This high-quality design is sure to turn heads and elevate your bike's appearance.With its sleek..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank030.jpeg',
        name: 'Markhor Blk/Red CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Expertly designed with a striking Markhor design, this black and red CD70 outfit makes for a beautiful addition to your bike. Its fueltank is perfect for CD70 models, adding functionality...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank031.jpeg',
        name: 'Markhor Blue & White | CD70 | A+ Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience superior quality with the Markhor Blue/White CD70, featuring A+ grade craftsmanship and flexible sidecovers designed for enhanced durability and comfort. This model combines reliable performance with thoughtful design, making...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank032.jpeg',
        name: 'Markhor Red/white CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: '"The Markhor Red/white CD70 features a beautifully designed exterior, adding a touch of elegance to your CD70 bike. Enjoy riding in style and standing out from the crowd with this...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank033.jpeg',
        name: 'Markhor Silver/Blk CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Upgrade your bike with the stylish and durable Markhor Silver/Blk CD70 fuel tank. With its unique silver and black design, stand out on the road while its high-quality material ensures...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank034.jpeg',
        name: 'Markhor White/Blue | CD70 | A+ Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Markhor White/Blue | CD70 | A+ Quality With Flexible Sidecovers'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank035.jpeg',
        name: 'Nardo Grey design CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Upgrade your CD70 bike's style with our Nardo Grey design fuel tank! The high-quality paint gives a sleek, modern look that will turn heads on the road. Stand out from..."
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank036.jpeg',
        name: 'Nardo Grey Irani Design CD70',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance your CD70 motorcycle with our high-quality Nardo Grey Irani Design fuel tank. Made specifically for the CD70 model, this fuel tank boasts a sleek Nardo Grey color and durable...'
      }, {
        id: 2,
        image: '/assets/images/tanks/tank037.jpeg',
        name: 'Power Plus Black Grey | CD70 | Premium Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance your CD70 motorcycle with our Power Plus tank, engineered for superior performance and durability. This premium quality tank comes complete with flexible sidecovers that provide excellent protection while allowing...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank038.jpeg',
        name: 'Power Plus Red | CD70 | Premium Quality With Flexible Sidecovers',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience superior performance with our Power Plus Red CD70 motorcycle parts. These premium quality side covers offer exceptional flexibility and durability, perfectly designed to fit your CD70 model. Enhance both...'
      },
      {
        id: 2,
        image: '/assets/images/tanks/tank038.jpeg',
        name: 'RED FLAME | CD70 | APLUS QUALITY | FLEXIBLE SIDECOVER',
        price: 6500,
        oldPrice: 6000,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience premium protection with our RED FLAME CD70 side cover. Crafted with A-PLUS QUALITY materials, this flexible side cover offers durability and easy installation for your CD70 motorcycle. The vibrant...'
      },
      // ... (add the rest of the items as needed)
    ];
  }

  getCG125CategorySections(): CategorySection[] {
    return [
      // {
      //   id: 1,
      //   image: '/assets/images/tanks/tank001.webp',
      //   name: '2025 Red CD70',
      //   price: 8500,
      //   oldPrice: 7999,
      //   sku: "abc",
      //   categories: "All",
      //   availability: "In Stock",
      //   detail: 'The 2025 Red CD70 is a high-quality motorcycle that boasts a genuine paint and logo, making it a durable and stylish choice. With its advanced 2025 model and vibrant red...'
      // },
    ];
  }

  getLEDlightingCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight001.webp',
        name: 'A03-X Handle Ring Light | Orange Ring',
        price: 1600.00,
        oldPrice: 2000.00,
        sku: "HL001",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'The A03-X Handle Ring Light with its vibrant orange ring offers reliable, adjustable lighting perfect for enhancing your photos and videos. Its ergonomic handle ensures comfortable use during extended shoots,...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight002.webp',
        name: 'BB1285 Led Spotlights | Yellow & White',
        price: 1700.00,
        oldPrice: 1900.00,
        sku: "HL002",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'Illuminate your space with the BB1285 LED Spotlights, featuring both yellow and white light options. Designed to provide versatile lighting, these spotlights enhance visibility and ambiance, making them ideal for...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight003.webp',
        name: 'Belta TF-134 | LED Lights | Yellow & White',
        price: 1700.00,
        oldPrice: 2000.00,
        sku: "HL003",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'The Belta TF-134 LED lights combine yellow and white illumination to enhance visibility and safety. Designed for durability and efficient performance, these lights are ideal for various applications where clear,...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight004.webp',
        name: 'Boss Led Light | HJG Metal Led | High quality',
        price: 2250.00,
        oldPrice: 2500.00,
        sku: "HL004",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'The Boss Led Light is a premium HJG Metal Led with high quality construction. Its long range throw will illuminate even the darkest of areas, making it a must-have for...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight005.webp',
        name: 'DUAL LENS LED BEAM',
        price: 4800.00,
        oldPrice: 5800.00,
        sku: "HL005",
        categories: "Headlights",
        availability: "In Stock",
        detail: "Upgrade your bike's lighting system with our DUAL LENS LED BEAM. The dual lens design ensures long range throw while the beautiful DRL lights in red add a touch of..."
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight006.webp',
        name: 'DUAL LENS SMD LIGHT',
        price: 6800.00,
        oldPrice: 7500.00,
        sku: "HL006",
        categories: "Headlights",
        availability: "In Stock",
        detail: "Upgrade your bike with our high quality DUAL LENS SMD LIGHT. With metal construction, LED lighting, and long range throw, it's perfect for nighttime rides. Plus, you get a pair..."
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight007.webp',
        name: 'Front Logo Honda Neon | Universal Fitting | High quality',
        price: 1699.00,
        oldPrice: 1800.00,
        sku: "HL007",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'Elevate your bike ride with Front Logo Neon, featuring a vibrant Honda logo and LED neons for increased visibility. Expertly designed for a safe and stylish journey.'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight008.webp',
        name: 'HJG Metal Triple Lens Mini Led | Long Range Throw | High Quality Product',
        price: 1500.00,
        oldPrice: 2000.00,
        sku: "HL008",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'The HJG Metal Triple Lens Mini LED combines durability with exceptional performance. Its triple lens design delivers impressive long-range illumination, making it perfect for outdoor adventures, emergency situations, or everyday...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight009.webp',
        name: 'KZ-30 Led | Zoom In/Out Feature | Premium Quality | Water proof',
        price: 4500.00,
        oldPrice: 5500.00,
        sku: "HL008",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'Upgrade your biking experience with the KZ-30 LED. Enjoy zooming in and out for optimal visibility, while feeling confident with its premium quality and water resistance. Accessorize any bike with...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight010.webp',
        name: 'LED HEADLIGHT',
        price: 2500.00,
        oldPrice: 3000.00,
        sku: "HL010",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'Upgrade your biking experience with our LED Headlight - the best quality option for long range visibility. Designed specifically for bikers and bike lovers, our LED Headlight provides superior brightness...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight011.webp',
        name: 'Retro LED Headlight 011',
        price: 1500.00,
        oldPrice: 2800.00,
        sku: "HL011",
        categories: "Headlights",
        availability: "In Stock",
        detail: "Transform your motorcycle's headlights with our high-quality LED skull panel. This yellow and white LED DRL light easily fits CD70 and CG125 models, giving your bike a unique and beautiful..."
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight012.webp',
        name: 'M4 Led Price',
        price: 1799.00,
        oldPrice: 2199.00,
        sku: "HL012",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'Upgrade your bike with the M4 multicoloured LED light. Enjoy a beautiful throw of light and multicoloured flashes, making your bike stand out. Expertly designed for all bikes, this light...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight013.webp',
        name: 'M6 Led light',
        price: 1199.00,
        oldPrice: 1500.00,
        sku: "HL013",
        categories: "Headlights",
        availability: "In Stock",
        detail: 'Get the most out of your lighting with our M6 Led light. The powerful M6 led emits a bright white light that will illuminate any space. Trust in our advanced...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight014.webp',
        name: 'M8 Led Light',
        price: 1499.00,
        oldPrice: 1799.00,
        sku: "HL014",
        categories: "Headlights",
        availability: "In Stock",
        detail: "Upgrade your bike's lighting with the M8 LED Light. Specifically designed for CG125 and 70 lovers, it provides a bright, clear vision for safer rides. Say goodbye to dim and..."
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight015.webp',
        name: 'Monster Headlight | New Design | Universal Head Light | CD70/CG125',
        price: 2700.00,
        oldPrice: 3000.00,
        sku: "HL015",
        categories: "Headlights",
        availability: "In Stock",
        detail: "Upgrade your motorcycle's front headlight with our new, universal design. Compatible with CD70 and CG125 models, this headlight includes a high beam function for improved visibility on the road. Replace..."
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight016.webp',
        name: 'OWL LED LIGHT | plastic body',
        price: 1450.00,
        oldPrice: 1800.00,
        sku: "TL001",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The OWL LED LIGHT is a bright and versatile bike light with adjustable settings and a long range throw. The LED technology ensures a powerful beam that will guide you...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight017.webp',
        name: 'OWL TRIPLE LENS LIGHT',
        price: 2300,
        oldPrice: 2500,
        sku: "TL002",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The OWL TRIPLE LENS LIGHT is a must-have for bikers and bike lovers. This high-quality, LED light features a unique owl shape and triple lens design, providing long-range visibility and..'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight018.webp',
        name: 'Protocol led flashlight',
        price: 2499,
        oldPrice: 2800,
        sku: "TL003",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The Protocol Led Flashlight is a high-quality, police-style flashlight with dual blue and red flash capabilities. It also features a bright white and yellow LED light for maximum visibility, and...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight019.webp',
        name: 'Single lens led',
        price: 750,
        oldPrice: 1200,
        sku: "TL004",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The Single Lens LED is the perfect choice for CD70 and 125 riders. It offers a long range throw, providing increased visibility and safety on the road. Plus, it is...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight020.webp',
        name: 'Skull led Customized',
        price: 5500,
        oldPrice: 6500,
        sku: "TL005",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Expertly designed with a customised LED panel featuring a metal skull and LED neon light. Enjoy a one-of-a-kind piece that adds a unique touch to your space. Enhance your decor...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight021.webp',
        name: 'SKULL LED HEADLIGHT',
        price: 2500,
        oldPrice: 0,
        sku: "TL006",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Upgrade your biking experience with our Skull LED Headlight. Made with high quality materials and powerful LED lights, this headlight provides a long range of visibility for safe and enjoyable...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight022.webp',
        name: 'Skull Led new',
        price: 82499.00,
        oldPrice: 2850.00,
        sku: "TL007",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Introducing our new Skull Led that fits perfectly on design cg125 and cd70 bikes. With a sleek and modern design, this led will enhance your bike's appearance and brightness. Upgrade..."
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight023.webp',
        name: 'Skull lens Led',
        price: 1499.00,
        oldPrice: 1800.00,
        sku: "TL008",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'I Illuminate your ride with the high quality Skull Lens LED light. Designed for all bikes, this universal product will enhance your visibility and make every journey safer and more stylish...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight024.webp',
        name: 'Skull Lens Light | High Beam Light',
        price: 2500.00,
        oldPrice: 3000.00,
        sku: "TL009",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your visibility on the road with the Skull Lens Light. This high beam light passes through the unique skull design, providing a distinct and eye-catching appearance. With increased brightness...'
      },
      {
        id: 1,
        image: '/assets/images/lights/headLight/headLight025.webp',
        name: 'Triple lens Led light',
        price: 7499.00,
        oldPrice: 9499.00,
        sku: "TL010",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Upgrade your vehicle's lighting with the Triple Lens LED Light. Its high-quality design improves visibility with long range throw and daytime running light feature. Enjoy improved efficiency and durability with..."
      },
      // BackLigt
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight001.webp',
        name: 'Audi Running Backlight | CG125 | Premium Quality Finishing',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL010",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Upgrade your CG125 bike with the premium quality Audi Running Backlight. Enjoy the stylish and sleek design inspired by Audi and enhance your bike's appearance. With premium quality finishing, this..."
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight002.webp',
        name: 'Backlights CG125',
        price: 2500.00,
        oldPrice: 2999.00,
        sku: "TL010",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Introducing Backlights CG125 - the perfect mix of design and function for your CG125 motorcycle. Neon touch adds a touch of style while providing enhanced visibility. Experience the perfect blend...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight003.webp',
        name: 'Dragon Style CG125',
        price: 2500.00,
        oldPrice: 2700.00,
        sku: "TL011",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The Dragon Style CG125 boasts a unique dragon style backlight that sets it apart from other bikes. With its high quality craftsmanship and durable design, this bike is a must-have...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight004.webp',
        name: 'Engroove Fancy BackLight Cover CG125',
        price: 950.00,
        oldPrice: 1250.00,
        sku: "TL012",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CG125 motorcycle with the Engroove Fancy BackLight Cover. This stylish accessory adds a modern touch to your bike while providing improved visibility during night rides. Designed specifically for...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight005.webp',
        name: 'Engroove Fancy BackLight Cover CG125',
        price: 950.00,
        oldPrice: 1250.00,
        sku: "TL013",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CG125 motorcycle with the Engroove Fancy BackLight Cover. This stylish accessory adds a modern touch to your bike while providing reliable protection for your backlights. Designed specifically for...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight006.webp',
        name: 'Engroove Fancy BackLight Cover CG125',
        price: 950.00,
        oldPrice: 1250.00,
        sku: "TL014",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Transform your CG125 motorcycle with the Engroove Fancy BackLight Cover. This specially designed accessory combines style and protection, enhancing your bike's appearance while safeguarding the backlights. Crafted for perfect compatibility..."
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight007.webp',
        name: 'Engroove Fancy BackLight Cover CG125',
        price: 950.00,
        oldPrice: 1250.00,
        sku: "TL015",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Elevate your CG125 motorcycle's appearance with the Engroove Fancy BackLight Cover. This premium accessory not only protects your backlights from damage but also adds a stylish, modern aesthetic to your..."
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight008.webp',
        name: 'Eyes Backlight | CG125 | Premium Quality Finishing',
        price: 2500.00,
        oldPrice: 3000.00,
        sku: "TL016",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CG125 with the Eyes Backlight, designed for premium quality finishing. This upgrade improves visibility and adds a stylish touch to your bike, ensuring safer rides in low-light conditions....'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight009.webp',
        name: 'FLAME SKULL | BACKLIGHT | CD70 / CG125',
        price: 2500.00,
        oldPrice: 3000.00,
        sku: "TL017",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Illuminate your ride with our universal Flame Skull Backlight, specially designed to fit CD70 and CG125 motorcycles. This eye-catching accessory adds a bold, distinctive look to your bike while enhancing...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight010.webp',
        name: 'Lava Backlight Neon Flash | Premium Cover',
        price: 1499.00,
        oldPrice: 1699.00,
        sku: "TL018",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Illuminate your Honda CG125 bike with our Lava Backlight Premium Cover. Featuring a bright neon red light, this cover adds a vibrant touch to your bike while improving visibility for...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight011.webp',
        name: 'Lava Backlight Square',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL019",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your bike rides with the Square Lava backlight. Designed to fit all bikes, this LED backlight not only adds a beautiful touch, but also provides indicators for increased safety....'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight012.webp',
        name: 'Lion Neon Backlight CG125',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL020",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The Lion Neon Backlight CG125 features a stunning red neon backlight, creating a beautiful and eye-catching look for your CG125 bike. The addition of an inside lion light adds an...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight013.webp',
        name: 'New Cross Backlight',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL021",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The New Cross Backlight boasts cutting-edge technology that provides optimal illumination for any situation. With its innovative design and superior lighting, the Cross Backlight offers up to 50% more visibility...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight014.webp',
        name: 'Police Flash Backlight CG125',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL022",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your visibility on the road with the Police Flash Backlight CG125. This unique backlight features a striking Neon red light that is sure to catch the attention of other...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight015.webp',
        name: 'Police Flash Backlight Cover CG125',
        price: 1400.00,
        oldPrice: 1800.00,
        sku: "TL023",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your safety on the road with our Police Flash Backlight Cover for CG125 motorbikes. Made with high quality materials, this cover features a built-in police flashing light to increase...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight016.webp',
        name: 'Red Skull Backlight CD70/CG125',
        price: 2350.00,
        oldPrice: 2400.00,
        sku: "TL024",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Transform your CD70 or CG125 motorcycle with our striking Red Skull Backlight. This eye-catching accessory combines safety with style, providing enhanced visibility while adding an aggressive, custom look to your...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight017.webp',
        name: 'Skull Lens Backlight',
        price: 3000.00,
        oldPrice: 3500.00,
        sku: "TL025",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Introducing the Skull Lens Backlight, a beautifully crafted high quality customizable product. Enhance the aesthetic of your room with this unique piece, designed to add personality and ambiance. Made with...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight018.webp',
        name: 'Smoking Skull Backlight Multicolor | CG125 | Premium Quality Finishing',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL026",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The Smoking Skull Backlight Multicolor for CG125 combines striking design with premium quality finishing, enhancing your bike’s style and visibility. Its vibrant multicolor backlight adds a unique, eye-catching glow, making...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight019.webp',
        name: 'Wanted Neon Backlight CG125',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL027",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Upgrade your CG125 with the Wanted Neon Backlight, featuring stunning neon and RGB lights. Give your bike a unique and stylish look while adding safety with increased visibility. Revamp your...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight020.webp',
        name: 'White Dragon Backlight | CG125 | Premium Quality Finishing',
        price: 2500.00,
        oldPrice: 2800.00,
        sku: "TL028",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CG125 with the White Dragon Backlight, crafted for premium quality and durability. This backlight not only adds a striking visual appeal but also ensures reliable performance, making your...'
      },
      {
        id: 2,
        image: '/assets/images/lights/backLight/backLight021.webp',
        name: 'Wolf Backlight | CG125 | Premium Quality Finishing',
        price: 2500.00,
        oldPrice: 3000.00,
        sku: "TL029",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CG125 with the Wolf Backlight, designed for premium quality finishing. This backlight offers reliable illumination and a sleek look, improving both safety and style on your ride. Crafted...'
      },
      // indicators
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators001.webp',
        name: 'Led Drl Indicators',
        price: 850.00,
        oldPrice: 999.00,
        sku: "TL029",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Enhance your motorcycle's visibility and safety with our LED DRL indicators for CG125 models. These indicators use advanced LED technology to provide brighter and longer lasting lights. Improve your riding..."
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators002.webp',
        name: 'Led Drl indicators',
        price: 850.00,
        oldPrice: 999.00,
        sku: "TL030",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Upgrade your bike's style with our Led Drl indicators. These universal indicators not only add a sleek and unique look, but also provide necessary signaling for safe riding. Their slim..."
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators003.webp',
        name: 'Led Drl Indicators',
        price: 850.00,
        oldPrice: 999.00,
        sku: "TL031",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "These high quality Led indicators come in red, blue, and white variants. Improve your vehicle's visibility and safety with these reliable and efficient indicators. Perfect for any car enthusiast looking..."
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators004.webp',
        name: 'Led Drl Indicators',
        price: 850.00,
        oldPrice: 950.00,
        sku: "TL032",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance the visibility and style of your vehicle with our high-quality LED DRL indicators. Choose from red, blue, or white lights to add a unique touch. Experience improved safety and...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators005.webp',
        name: 'Capsule indicators',
        price: 299.00,
        oldPrice: 350.00,
        sku: "TL033",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'This small, capsule-style indicator features a beautiful golden design that will complement any space. Suitable for a variety of uses, this universal indicator is both practical and aesthetically pleasing. Perfect...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators006.webp',
        name: 'Arrow Indicators DRL Universal',
        price: 750.00,
        oldPrice: 850.00,
        sku: "TL034",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Maximize your bike's safety and style with Arrow Indicators DRL Universal. These multifunctional lights combine a beautiful white DRL (daytime running light) with a yellow indicator light, ensuring enhanced visibility..."
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators007.webp',
        name: 'LED DRL Round Indicators Red & Yellow | CD70/CG125',
        price: 800.00,
        oldPrice: 950.00,
        sku: "TL035",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CD70 or CG125 motorcycle with these LED DRL round indicators in red and yellow. Designed for clear visibility, they improve safety by making your signals more noticeable in...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators008.webp',
        name: 'LED DRL Round Indicators White & Yellow | CD70/CG125',
        price: 850.00,
        oldPrice: 950.00,
        sku: "TL036",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CD70 or CG125 motorcycle with these LED DRL round indicators featuring white and yellow lights. Designed for clear visibility, they improve safety by making your signals more noticeable...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators009.webp',
        name: 'CNC Capsule Metal Indicators Black',
        price: 650.00,
        oldPrice: 750.00,
        sku: "TL037",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Enhance your motorcycle's style with our sleek CNC Capsule Metal Indicators in Black. Precision-crafted from high-quality metal, these indicators offer superior durability while adding a sophisticated touch to your bike...."
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators010.webp',
        name: 'Led Drl Indicators',
        price: 650.00,
        oldPrice: 750.00,
        sku: "TL038",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Indicators Drl are specially designed for use on CG125 and CD70 motorbikes. These high-quality indicators enhance safety and visibility while riding, providing a reliable and efficient way to signal your...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators011.webp',
        name: 'Arrow DRL Indicators Blue & Yellow | CD70/CG125',
        price: 850.00,
        oldPrice: 950.00,
        sku: "TL039",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'Enhance your CD70 or CG125 motorcycle with the Arrow DRL Indicators in blue and yellow. These indicators provide clear, bright signals for improved visibility and safety on the road. Designed...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators012.webp',
        name: 'CNC Capsule Metal Indicators Blue',
        price: 850.00,
        oldPrice: 999.00,
        sku: "TL040",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'CNC Capsule Metal Indicators provide precise visual feedback for your motorcycle. These durable, machined metal indicators enhance both safety and style, offering improved visibility to other road users while complementing...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators013.webp',
        name: 'Red CNC Metals Indicators Universal',
        price: 650.00,
        oldPrice: 750.00,
        sku: "TL041",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'As a universal indicator, the Red CNC Metals Indicators provide clear and accurate readings for a wide variety of metals. With a professional and objective tone, these indicators use scientific...'
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators014.webp',
        name: 'Yellow CNC Metal Indicators',
        price: 650.00,
        oldPrice: 750.00,
        sku: "TL042",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: "Enhance the look of your bike with Yellow CNC Metals Indicators. These metal indicators are not only stylish, but also durable and weather-resistant. Elevate your bike's appearance and stand out..."
      },
      {
        id: 3,
        image: '/assets/images/lights/indicators/indicators015.webp',
        name: 'Indicator Old Model Metal',
        price: 850.00,
        oldPrice: 850.00,
        sku: "TL043",
        categories: "Tail Lights",
        availability: "In Stock",
        detail: 'The Indicator Old Model Metal is expertly crafted with a sturdy metal body, providing durability and reliable performance. Its old model design is perfect for the classic style lover. Boost...'
      },


    ];

  }

  getHelmetGadgetsCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/helmet/helmet001.jpg',
        name: 'Aadora Blue By Vector | Medium Size | Premium Quality',
        price: 5000.00,
        oldPrice: 4000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience the perfect blend of style and durability with Aadora Blue by Vector. Designed in a medium size for a comfortable fit, this premium quality product ensures long-lasting performance. Whether...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet002.jpg',
        name: 'Aadora Green By Vector | Medium Size | Premium Quality',
        price: 5000.00,
        oldPrice: 4000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience the perfect blend of style and quality with Aadora Green by Vector. Designed in a medium size for a comfortable fit, this product offers premium craftsmanship that ensures durability...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet003.jpg',
        name: 'Atlas Honda Helmet | High Quality',
        price: 10500.00,
        oldPrice: 90500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'As an expert in the field, we can confidently state that the Atlas Honda Helmet is of the highest quality. Made with top-notch materials and advanced technology, this helmet guarantees...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet004.jpg',
        name: 'Flip-Up Helmet with Dual Visor for Motorcycles | Premium Safety & Comfort | Best Price in Pakistan',
        price: 7500.00,
        oldPrice: 6500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Flip-Up Helmet with Dual Visor, designed for motorcyclists in Pakistan who prioritize premium safety and comfort. This high-quality helmet features a versatile flip-up design and dual visors for enhanced protection...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet005.jpg',
        name: 'Flip-Up Matt Green Helmet - Premium Comfort & Safety for Riders',
        price: 7500.00,
        oldPrice: 6500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Ride in style with the Flip-Up Matt Green Helmet, designed for motorcycle enthusiasts in Pakistan who prioritize both safety and comfort. The sleek matt green finish adds a unique, modern...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet006.jpg',
        name: 'Helmix Black | Large Size | Premium Quality',
        price: 7500.00,
        oldPrice: 6500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience the superior quality of Helmix Black in a large size, designed to meet your highest expectations. Crafted with premium materials, this product offers durability and reliable performance, ensuring it...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet007.jpg',
        name: 'Helmix Red Helmet | Large Size | Premium Quality',
        price: 5000.00,
        oldPrice: 4000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'The Helmix Helmet in large size offers premium quality protection designed for comfort and safety. Its durable construction ensures reliable impact resistance, while the spacious fit provides all-day comfort for...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet008.jpg',
        name: 'Ninja Elite Red Helmet | Medium Size | DOT Approved | Premium Quality',
        price: 10500.00,
        oldPrice: 90500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Experience superior protection with the Ninja Elite Helmet in medium size. DOT approved for safety, this premium-quality helmet offers reliable impact resistance and comfort for every ride. Designed to keep...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet009.jpg',
        name: 'Revo Green Helmet By Vector | Medium size | DOT Approved | Premium Quality',
        price: 13000.00,
        oldPrice: 12500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'The Revo Helmet by Vector in medium size offers premium quality protection designed for your safety and comfort. Its durable construction ensures reliable impact resistance, while the ergonomic fit provides...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet010.jpg',
        name: 'Vector Blue Helmet | Large Size | Premium Quality',
        price: 5000.00,
        oldPrice: 4500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'The Vector Blue Helmet in large size offers premium quality protection designed for comfort and safety. Its durable construction ensures reliable impact resistance, making it an excellent choice for riders...'
      },
      {
        id: 1,
        image: '/assets/images/helmet/helmet011.jpg',
        name: 'Vector Green Helmet | Large Size | Premium Quality',
        price: 5000.00,
        oldPrice: 4500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Stay safe and comfortable with the Vector Green Helmet in large size. Crafted with premium materials, it offers reliable protection while ensuring a secure fit. Its vibrant green color adds...'
      },
      // gadgets
      {
        id: 2,
        image: '/assets/images/helmet/helmet011.jpg',
        name: 'gadgets',
        price: 5000.00,
        oldPrice: 4500.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'gadgets'
      },
    ];
  }

  getSilencerCategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/silencer/silencer001.jpg',
        name: "WHISTLER | Pakistan's # 1 Sound Exhaust For Honda CG125| Top Quality | Best Sound | Best Chrome",
        price: 7000.00,
        oldPrice: 65000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Experience the best sound and chrome finishing with WHISTLER, Pakistan's top-rated sound exhaust for Honda CG125. Designed for CG125 enthusiasts, it brings back the thunder and powerful sound of old..."
      },
      {
        id: 1,
        image: '/assets/images/silencer/silencer002.jpg',
        name: 'AHL3 Chrome Exhaust for Honda CG125 - Premium Quality & Best Sound | Top Performance in Pakistan',
        price: 6000.00,
        oldPrice: 5000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance your Honda CG125 with the AHL3 Chrome Exhaust, designed to deliver the best sound and improved performance. Featuring a sleek chrome finish and powerful exhaust note, this exhaust system...'
      },
      {
        id: 1,
        image: '/assets/images/silencer/silencer003.jpg',
        name: 'SANKEI 2011 Chrome Silencer for Honda CG125 - Premium Quality & Powerful Sound | Best Price in Pakistan',
        price: 5500.00,
        oldPrice: 5000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Enhance your Honda CG125 with the SANKEI 2011 Chrome Silencer, designed to offer superior performance and a powerful exhaust sound. This premium chrome silencer improves engine efficiency and gives your...'
      },
      {
        id: 1,
        image: '/assets/images/silencer/silencer005.jpg',
        name: 'AHL3 Black Silencer for Honda CG125 - High Performance & Premium Sound | Best in Pakistan',
        price: 6500.00,
        oldPrice: 55000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Transform your Honda CG125 with the AHL3 Black Silencer, designed to deliver outstanding performance and a premium exhaust sound. This high-quality black silencer boosts engine efficiency while producing a bold,...'
      },
      {
        id: 1,
        image: '/assets/images/silencer/silencer006.jpg',
        name: 'SANKEI 2011 Black Silencer for Honda CG125 - Premium Sound & High Performance',
        price: 6500.00,
        oldPrice: 55000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Enhance your Honda CG125 with the SANKEI 2011 Black Silencer, engineered to deliver superior performance and a powerful exhaust sound. This high-quality black silencer boosts your engine's efficiency while offering..."
      },
      {
        id: 1,
        image: '/assets/images/silencer/silencer007.jpg',
        name: 'Akrapovic Silencor/Carbon Fiber/ Best Sound Performance',
        price: 8000.00,
        oldPrice: 7000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: 'Boost your performance with the Akrapovic Silencor. Made with advanced technology, this silencor guarantees the best sound performance for your vehicle. Enjoy a powerful and efficient ride with this top-of-the-line...'
      },
      {
        id: 1,
        image: '/assets/images/silencer/silencer001.jpg',
        name: 'High Bass Exhaust | Carbon Fiber | Universal fitting | High Quality',
        price: 12000.00,
        oldPrice: 11000.00,
        sku: "abc",
        categories: "All",
        availability: "In Stock",
        detail: "Experience premium sound and style with our High Bass Exhaust. Crafted from lightweight carbon fiber, this universal-fitting exhaust delivers deep, resonant bass tones that enhance your ride's performance and presence...."
      },


    ];
  }
}