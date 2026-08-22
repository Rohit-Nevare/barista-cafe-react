import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Blog from "./Blog";
import Navigation from "./Navigation";
import Contact from "./Contact";

import "./Home.css";
import Shop from "./Shop";

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
//   { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
   { label: 'About', path: '/about' },
    { label: 'Shop', path: '/shop' },
    { label: 'Contact', path: '/contact' },
];

const aboutspan = "Discover";
const aboutimg = "/images/Illustration/about.jpg";
const abouth1 = "Our Story";
const aboutpara =
  "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.";
const aboutbtn = "Read More";

const data = [
  {
    photoName: "/images/Illustration/choices.png",
    title: "Easy To Order",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    photoName: "/images/Illustration/express-delivery.png",
    title: "Fastest Delivery",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    photoName: "/images/Illustration/coffee-beans.png",
    title: "Quality Coffee",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

// Menu section
const menuspan="Discover";

const menuh1="Our Menu";

const menupara="On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.";

const menubtn="View All Menu";

const menuhead="Our Best Coffee Sellers";

const propara="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";

const prohead="Our Best Products";


const menuimage=[
    {
        mimg:"/images/Illustration/menu-1.jpg",
    },
    {
        mimg:"/images/Illustration/menu-2.jpg",
    },
    {
        mimg:"/images/Illustration/menu-3.jpg",
    },
    {
        mimg:"/images/Illustration/menu-4.jpg"
    }
]

const products = [
  {
   
    photoName: "/images/Illustration/menu-1.jpg",
    title: "Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  {
    photoName: "/images/Illustration/menu-2.jpg",
    title: "Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  {
    photoName: "/images/Illustration/menu-3.jpg",
    title:"Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  {
    photoName: "/images/Illustration/menu-4.jpg",
    title:"Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  
];

// image gallery
const imagesgallery=[
    {
        galleryimg:"/images/Illustration/gallery-1 (1).jpg",
    },
    {
        galleryimg:"/images/Illustration/gallery-2 (1).jpg",
    },
    {
        galleryimg:"/images/Illustration/gallery-3 (1).jpg",
    },
    {
        galleryimg:"/images/Illustration/gallery-4 (1).jpg",
    },
]

// Menu tabs
const menuToast=[
    {
        menuimg:"/images/Illustration/Avocado toast.jfif",
        title: "Greek Avocado Toast",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/French toast.jfif",
        title: "French Toast",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/Garlic toast.jfif",
        title: "Cheese Garlic Toast",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },

]
const menuPizza=[
    {
        menuimg:"/images/Illustration/Margherita.jfif",
        title: "Margherita Pizza",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/mushroom.jfif",
        title: "Mushroom Garlic Pizza",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/veggie.jfif",
        title: "Viggie Pizza",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },

]

const menuDessert=[
    {
        menuimg:"/images/Illustration/Tiramisu Dessert.jfif",
        title: "Tiramisu Dessert",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/Chocolate Lava Cakes.jfif",
        title: "Choclate Lava Cake",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/Creamy Biscoff Cheesecake.jfif",
        title: "Creamy Biscoff Cheesecake",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },

]

const menumain=[
    {
        menuimg:"/images/Illustration/dish-8.jpg",
        title: "Greek veggie salad",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dish-7.jpg",
        title: "Greek Prawn salad",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dish-6.jpg",
        title: "Grilled fish",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dish-3 (1).jpg",
        title: "Grilled fish sauce",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dish-4.jpg",
        title: "greek chiken roast",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dish-1 (1).jpg",
        title: "chiken red sauce",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },

]

const menudrink=[
    {
        menuimg:"/images/Illustration/drink-1 (1).jpg",
        title: "Lemonade Juice",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/drink-2 (1).jpg",
        title: "Pineapple Juice",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/drink-3 (1).jpg",
        title: "Soda Drinks",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/drink-5.jpg",
        title: "Pineapple Juice",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/drink-6.jpg",
        title: "Soda Drinks",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/drink-7.jpg",
        title: "Lemon mint Mojito",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },

]

const menudes=[
    {
        menuimg:"/images/Illustration/dessert-1 (1).jpg",
        title: "Hot Cake Honey",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration//dessert-2 (1).jpg",
        title: "Hot pan Cake ",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dessert-3 (1).jpg",
        title: "Fruit tart",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dessert-4.jpg",
        title: "Blueberry chessecake",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dessert-5.jpg",
        title: "Banana Dessert",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },
     {
        menuimg:"/images/Illustration/dessert-6.jpg",
        title: "Strawberry pancake",
        para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        price:"$2.19",
        button:"Add to Cart",
    },

]


const menucof=[
     {
   
    menuimg: "/images/Illustration/menu-1.jpg",
    title: "Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  {
    menuimg: "/images/Illustration/menu-2.jpg",
    title: "Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  {
    menuimg: "/images/Illustration/menu-3.jpg",
    title:"Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
  {
    menuimg: "/images/Illustration/menu-4.jpg",
    title:"Coffee Capuccino",
    para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    price:"$5.19",
    button:"Add to Cart",
  },
]

// // Testimonials
const testspan="Testimony";

const test="Customer Says";

const testpara="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

const testi=[
    {
        testiimg:"/images/Illustration/men.jfif",
        name:"Louise Kelly",
        comment:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        desgi:"Illustrator Design",
    },
     {
        testiimg:"/images/Illustration/women.jfif",
        name:"Louise Kelly",
        comment:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        desgi:"Illustrator Design",
    },
     {
        testiimg:"/images/Illustration/men-2.avif",
        name:"Louise Kelly",
        comment:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        desgi:"Illustrator Design",
    },
     {
        testiimg:"/images/Illustration/women-2.avif",
        name:"Louise Kelly",
        comment:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        desgi:"Illustrator Design",
    },
]

// Blog
const blgh1="Recent From Blog";

const blgcon="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";

const blog=[
    {
        blogimg:"/images/Illustration/image_1.jpg",
        title:"The Delicious Pizza",
        para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date:"Sept 10,2018",
    },
     {
        blogimg:"/images/Illustration/image_2.jpg",
        title:"The Delicious Pizza",
        para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date:"Sept 10,2018",
    },
     {
        blogimg:"/images/Illustration/image_3.jpg",
        title:"The Delicious Pizza",
        para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date:"Sept 10,2018",
    },
     {
        blogimg:"/images/Illustration/image_4.jpg",
        title:"The Delicious Pizza",
        para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date:"Sept 10,2018",
    },
     {
        blogimg:"/images/Illustration/image_5.jpg",
        title:"The Delicious Pizza",
        para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date:"Sept 10,2018",
    },
     {
        blogimg:"/images/Illustration/image_6.jpg",
        title:"The Delicious Pizza",
        para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date:"Sept 10,2018",
    },
]
// contact section
const contactspan="Let's";

const contacthead="Book a Table";

const contactbtn="Book Table";

// //footer section

const footerabout="About us";

const footerpara="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."


const footericons=[
    {
        imagei:"bi bi-twitter text-light"
    },
    {
        imagei:"bi bi-facebook text-light"
    },
    {
        imagei:"bi bi-instagram text-light"
    },
    
]

const footerblog="Recent Blog";

const footerimgcon=[
    {
        footerimg:"/images/Illustration/image_1.jpg",
        footerpara:"Even the all-powerful Pointing has no control about",
        footerdate:"Sept 10,2018",
        footerspan:"Admin",
    },
    {
        footerimg:"/images/Illustration/image_2.jpg",
        footerpara:"Even the all-powerful Pointing has no control about",
        footerdate:"Sept 10,2018",
        footerspan:"Admin",
    }
]

const footerserv="Services";

const footerserlist=["Cooked","Delivery","Qulity Foods","Mixed"];

const footerq="Have a Questions?";

const footerqlist=[
    {
        footericon:"bi bi-geo-alt-fill",
        footerpara:" 203 Fake St. Mountain View, San Francisco, California, USA",
    },
    {
        footericon:"bi bi-telephone",
        footerpara:" +2 392 3929 210",
    },
    {
        footericon:"bi bi-envelope",
        footerpara:"info@yourdomain.com",
    }
]

const App = () => {
  return (
   <>
   <Navigation menuItems={menuItems} brand="Barista" />
      <div className=" px-0 mx-0">
        <Routes>
          <Route path="/" element={<Home abtspan={aboutspan} abtimg={aboutimg} abth1={abouth1} abtpara={aboutpara} abtbtn={aboutbtn} feature={data} menu={products} gallery={imagesgallery} toast={menuToast} pizza={menuPizza}
            dessert={menuDessert} menspan={menuspan} menh1={menuh1} menpara={menupara} menusimg={menuimage} menubutton={menubtn} menuhead1={menuhead} procon={propara}  menuhead2={prohead} testomonials={testi} testicon={test}  testispan={testspan} testipara={testpara} blogs={blog} blogh1={blgh1} blogcon={blgcon} conspan={contactspan} conhead={contacthead} conbtn={contactbtn}  footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footercon={footerimgcon} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}/>} />

          <Route path="/menu" element={ <Menu menu={products} gallery={imagesgallery} main={menumain} drink={menudrink}
            des={menudes} menspan={menuspan} menh1={menuh1} menpara={menupara} menusimg={menuimage} menubutton={menubtn} menuhead1={menuhead} procon={propara}  menuhead2={prohead} footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footercon={footerimgcon} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}/>} />

          {/* <Route path="/service" element={<Resturant restotitle={restoh1}  menu={menus} menu2={menus2} footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footerlink={footerlinks} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}  />} /> */}

          <Route path="/blog" element={<Blog blogs={blog} blogh1={blgh1} blogcon={blgcon} footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footercon={footerimgcon} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}/>} />

           <Route path="/about" element={<About abtspan={aboutspan} abtimg={aboutimg} abth1={abouth1} abtpara={aboutpara} abtbtn={aboutbtn} testomonials={testi} testicon={test}  testispan={testspan} testipara={testpara} menspan={menuspan} menh1={menuh1} menpara={menupara} menusimg={menuimage} menubutton={menubtn} footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footercon={footerimgcon} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}/>} />

           <Route path="/shop" element={<Shop menu={products} gallery={imagesgallery} main={menumain} drink={menudrink}
            des={menudes} cof={menucof} menspan={menuspan} menh1={menuh1} menpara={menupara} menusimg={menuimage} menubutton={menubtn} menuhead1={menuhead} procon={propara}  menuhead2={prohead} footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footercon={footerimgcon} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}/>} />

            <Route path="/contact" element={<Contact conspan={contactspan} conhead={contacthead} conbtn={contactbtn} footerabt={footerabout}  footerp={footerpara} footeri={footericons}  footerblg={footerblog} footercon={footerimgcon} footers={footerserv} footerlist={footerserlist} footerque={footerq} footerqli={footerqlist}/>} />
        </Routes>
      </div>
   </>
  );
};

export default App;
