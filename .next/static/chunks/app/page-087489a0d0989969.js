(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3847:function(e,l,t){Promise.resolve().then(t.bind(t,695))},695:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return Home}});var s=t(7437),A=t(2265),a=t(4033),i=t(4660);let r=(0,i.Ue)((e,l)=>({showBurger:!1,setShowBurger:l=>{e({showBurger:l})}}));var components_Navbar=()=>{let{push:e}=(0,a.useRouter)(),{setShowBurger:l}=r();return(0,s.jsxs)("div",{className:" flex xs:gap-4 justify-between w-full px-16 py-10 sm:text-sm sm:p-6 xl:text-lg xxl:text-lg",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:" text-2xl",children:(0,s.jsx)("strong",{children:"WeDu"})}),(0,s.jsx)("p",{children:"Communicate. Collaborate. Create."})]}),(0,s.jsxs)("div",{className:" flex gap-7 lg:gap-4 sm:hidden md:hidden items-center",children:[["Home","Product","Pricing Plans","Contact","Login"].map((l,t)=>"Pricing Plans"!==l?(0,s.jsx)("a",{href:"#".concat(l),children:(0,s.jsx)("button",{children:l})},t):(0,s.jsx)("button",{onClick:()=>{e("/pricing")},children:l},t)),(0,s.jsx)("button",{onClick:()=>{e("/pricing")},className:" sm:hidden md:hidden ml-3 bg-[#ffd60a] p-2.5 rounded-md border-[1px] border-black font-bold",children:"Get Started"})]}),(0,s.jsxs)("button",{onClick:e=>{e.preventDefault(),l(!0),console.log("burger is shown")},className:" flex flex-col gap-2 lg:hidden xl:hidden xxl:hidden sm:justify-center",children:[(0,s.jsx)("div",{className:" w-[30px] h-[2px] bg-black"}),(0,s.jsx)("div",{className:" w-[30px] h-[2px] bg-black"}),(0,s.jsx)("div",{className:" w-[30px] h-[2px] bg-black"})]})]})},d=t(6691),n=t.n(d),c={src:"/_next/static/media/main-banner-img.d20e6463.png",height:1259,width:1534,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAuklEQVR42gGvAFD/AP/+//z9/f/////5+f/+/+jr7bS5wfj6/AD+/v7////f8um/srPxp6LXwMips8D59vIA/P383ODcacCjd5eK2Z0A77pw1qOj8+PhAPP19AB0RwB4UcWwwuS2ze/e4bK8xeLj5QD39/i9w74ASwCBmJWny73S5OK8r5Pr6OAA+Pj47uLR3ltClFxWAJp+xdTbrMGj4urhAPbo2r+dWLmRl6+QkGiRtdK9zcW+q92lo/QhfqH/85IxAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},components_Hero=()=>(0,s.jsxs)("div",{className:" p-16 sm:p-10 w-full flex sm:flex-col justify-evenly items-center gap-10 xl:text-lg",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-7",children:[(0,s.jsx)("h1",{className:" font-bold text-4xl",children:"Communicate. Collaborate. Create."}),(0,s.jsx)("p",{children:"WeDu provides an effective and powerful way to manage your projects"}),(0,s.jsx)("button",{className:" bg-black text-white p-2.5 rounded-md ",children:"Get Started"}),(0,s.jsx)("div",{className:"flex gap-3 xl:justify-evenly",children:["Speed & Security","Flexibility & Scalability","Better Collaboration"].map((e,l)=>(0,s.jsx)("p",{className:" ",children:e},l))})]}),(0,s.jsx)("div",{children:(0,s.jsx)(n(),{height:500,width:500,alt:"hero image",src:c})})]}),o={src:"/_next/static/media/comment-alt.cce8ca0a.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42g3DLQrCAAAG0BdtRqNpcSewWTyCZXfwACpiFjQoyEDxZ3Fbtu1qn+PxaHQuzl4a/VgXVtYmEXreYe9qaR4+NGFj6+QYvjzCwd3NLjwZFEqzUakwUKm1FqNWrRJh6jeaRvwBEnAkzWUh9YkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},components_Chat=e=>{let{setShow:l}=e;return(0,s.jsx)("span",{onClick:()=>{l(!0)},className:"hover:cursor-pointer bg-yellow-600 flex justify-center z-999999  items-center bottom-3 right-3 fixed rounded-full w-[50px] h-[50px]",children:(0,s.jsx)(n(),{width:30,height:40,alt:"Chat",src:o})})},x={src:"/_next/static/media/cross-circle.70473f90.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAQUlEQVR42mMAAk2GAww/gXA/kAXmvmH4D4VvgDyGA0DGYYYHDPdBLKAqoNL/QK4LED4Asn5iCGBqwTQUJLQfYS0AEXktwBZIvRQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},components_ChatOpen=e=>{let{setShow:l}=e,[t,a]=(0,A.useState)();return(0,s.jsxs)("div",{className:"fixed bottom-0 right-0 z-20 bg-slate-300 w-[350px] rounded-lg h-[600px] m-3 flex flex-col justify-between border-black border-[3px] overflow-auto",children:[(0,s.jsxs)("div",{className:" bg-white p-2 rounded-tl-lg rounded-tr-lg relative",children:[(0,s.jsx)("span",{className:" absolute top-2 right-2 hover:cursor-pointer",children:(0,s.jsx)(n(),{src:x,alt:"Close Button",width:30,height:30,onClick:()=>{l(!1)}})}),(0,s.jsx)("h2",{className:"  text-xl",children:"WeDu"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:" bg-green-400 w-[10px] h-[10px] rounded-full"}),(0,s.jsx)("p",{children:"We will reply as soon as we can"})]})]}),(0,s.jsxs)("div",{className:" bg-yellow-400 flex flex-grow flex-col",children:[(0,s.jsx)("div",{className:" p-3 m-3 rounded-md bg-blue-500 w-[50%]",children:(0,s.jsx)("p",{children:"User Message"})}),(0,s.jsx)("div",{className:" flex justify-end",children:(0,s.jsx)("div",{className:" bg-green-500 p-3 m-3 rounded-md w-[50%] flex justify-end",children:(0,s.jsx)("p",{children:"Bot message"})})})]}),(0,s.jsxs)("form",{className:" flex",onSubmit:e=>{e.preventDefault();let l=new FormData(e.currentTarget),t=l.get("message");a(t)},children:[(0,s.jsx)("input",{type:"text",placeholder:"Type your message...",className:" w-full p-3 rounded-bl-lg ",name:"message"}),(0,s.jsx)("button",{className:" p-3",children:"Send"})]})]})},m={src:"/_next/static/media/last-sec-photo.a1525005.png",height:559,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/Af8AAAD3ExxfCe3ky8agwdaiYD8cTHcAK0zXALx3bGr9Aa22igAYv9+3+ShJGfEyN6Hu4dhiJALu/eEDvepeBx9sAf+xABJlAaeNLBBCYDoD/AAU/vUAzuTgAJnxuQA+C/BFAd2jAJTG94BpJRdE6+jk2AL99/wB+fnwAKz22AQWB+pyvAA/biot4FUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},components_Eightsec=()=>(0,s.jsxs)("div",{className:" h-[850px] p-10 flex flex-col items-center gap-12 pt-28 relative ",children:[(0,s.jsxs)("h1",{className:" text-4xl text-center sm:text-2xl",children:["Get Ready to Maximize Your Productivity ",(0,s.jsx)("br",{})," With Our Workflow Solutions"]}),(0,s.jsx)("button",{className:" bg-black p-4 text-white",children:"Get Started"}),(0,s.jsx)(n(),{className:" absolute bottom-[-25px] z-10",width:1100,height:1e3,alt:"People Working",src:m})]}),h={src:"/_next/static/media/image1.ee5f1657.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAQAACwcAAAAAN+t/mN0aAABdyiI02jUAAFMgeE48OwAAXfwmR/8xAAAptnyNphMAAQAmOkQoAAAAAQkKCQwBAABWUDggGAAAADABAJ0BKggACAACQDglpAADcAD++5zAAA==",blurWidth:8,blurHeight:8},g={src:"/_next/static/media/image2.0b91a9ab.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEBAwACAQAAAAAAAwAAAQBizljjswwAAFn//ND/fQAAAFWTH3MzACFAIykxHTYdDBwdMyAZHw0AAAAAAAAAAABWUDggGAAAADABAJ0BKggACAACQDglpAADcAD++5zAAA==",blurWidth:8,blurHeight:8},u={src:"/_next/static/media/image3.1a3bad65.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABYBPZtpPzSVXOIACqqCHpgBIBdJjACVYQQYeEWOEhIhJBogMy05UjQ/htM0B9imNEFqz7kCLAX2I0iPqsbBz+VlA4IBgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vucwAA=",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/image4.97282828.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDwAAAABcFvbthId3CWjEzKNqIBFrk1QlfbgtchMDfQQEYnA17QBgXIZckSJ/n9XSCLdtRaIAn4Y6iAQZJGNwAdWUDggGAAAADABAJ0BKggACAACQDglpAADcAD++5zAAA==",blurWidth:8,blurHeight:8},b={src:"/_next/static/media/image5.85b816cc.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDoAAAABYBXbtpL9/BXASrjDP0TQWgw1oAOEjIgAAwYQ5BkC7PI+swHxB8kHmvO6V7Si2dZOKj8VedoPGkAAVlA4IBgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vucwAA=",blurWidth:8,blurHeight:8},f={src:"/_next/static/media/image6.ae350f9d.webp",height:126,width:126,blurDataURL:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABcFTbttOcX8Z0DOCk914EoAAHjJFRkmGGcZgVDxGRCMG/EEBT8QvenzEcNOb1PdZ9czjT0zB9jYUNIBAgBFZQOCAYAAAAMAEAnQEqCAAIAAJAOCWkAANwAP77nMAA",blurWidth:8,blurHeight:8},w={src:"/_next/static/media/image7.be45819b.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABcFXbtlItXP/d3UNYJQjB4JcAJOGFex0iIvnXnm19dAjeeXpDcLhuHHB/bf35YB/LfmqQFp1TJIAsCjIAAFZQOCAYAAAAMAEAnQEqCAAIAAJAOCWkAANwAP77nMAA",blurWidth:8,blurHeight:8},j={src:"/_next/static/media/image8.850677e7.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABcFzbttJcdOQOQ5dmKMQd5t4Q81SRPtKBp4eISFBfgMBflTVzCgL3x+16jsB5LGfGApzmJYECiLbjxAoI/BAAVlA4IBgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vucwAA=",blurWidth:8,blurHeight:8},components_Fifthsec=()=>(0,s.jsxs)("div",{className:" flex flex-col gap-24 bg-[#ffc8dd] p-24 sm:p-10 xxl:text-lg",children:[(0,s.jsxs)("div",{className:" px-32 flex flex-col gap-4 xl:text-xl sm:w-full sm:p-0",children:[(0,s.jsx)("strong",{children:(0,s.jsx)("h1",{className:" text-3xl lg:text-center",children:"Trusted Among Industry Leaders"})}),(0,s.jsx)("p",{className:" w-[30%] lg:text-center lg:w-full md:w-full xl:w-[50%] xxl:w-[50%] sm:w-full",children:"I'm a paragraph. Click here to add your own text and edit me. It's easy.\n            Just click “Edit Text” or double click me to add your own content and\n            make changes to the font."})]}),(0,s.jsx)("div",{className:" grid grid-cols-4 grid-rows-2 gap-15 justify-items-center",children:[h,g,u,p,b,f,w,j].map((e,l)=>(0,s.jsx)(n(),{height:125,width:125,src:e,alt:"Industry Icons"},l))})]}),Footer=()=>(0,s.jsxs)("div",{id:"Contact",className:" bg-[#ffc403] gap-8 h-auto text-black py-24 flex flex-col items-center relative justify-center xl:text-xl sm:text-sm sm:h-auto md:text-md md:h-auto xxl:text-lg",children:[(0,s.jsxs)("div",{className:" w-[90%] flex flex-col ",children:[(0,s.jsx)("h1",{className:" font-bold text-3xl",children:"WeDu"}),(0,s.jsx)("p",{children:"Communicate. Collaborate. Create."})]}),(0,s.jsxs)("div",{className:" w-[90%] h-[80%] flex gap-14 justify-center sm:flex-col sm:gap-8 sm:text-lg md:flex-col md:gap-8 md:text-lg",children:[(0,s.jsxs)("div",{className:"h-full w-[17%]  flex flex-col  gap-24 sm:gap-0 sm:w-full md:gap-0 md:w-full",children:[(0,s.jsx)("h2",{className:" font-bold text-2xl",children:"Contact"}),(0,s.jsxs)("p",{children:["500 Terry Francine Street ",(0,s.jsx)("br",{}),"San Francisco, CA 94158"]}),(0,s.jsxs)("p",{children:["General Inquiries: ",(0,s.jsx)("br",{}),"123-456-7890"]})]}),(0,s.jsxs)("div",{className:"  w-[18%]  flex flex-col gap-24 justify-evenly sm:h-full sm:gap-0 sm:w-full md:gap-0 md:w-full md:h-full",children:[(0,s.jsx)("div",{className:" h-[32px] w-full sm:hidden md:hidden"}),(0,s.jsxs)("p",{children:["Sales:",(0,s.jsx)("br",{}),"info@mysite.com"]}),(0,s.jsxs)("p",{children:["Customer Care:",(0,s.jsx)("br",{}),"info@mysite.com"]})]}),(0,s.jsxs)("div",{className:"  w-[18%] flex flex-col gap-20 sm:h-full sm:gap-0 sm:w-full md:h-full md:gap-0 md:w-full",children:[(0,s.jsx)("span",{children:(0,s.jsx)("h2",{className:" font-bold text-xl",children:"Quick Links"})}),(0,s.jsxs)("span",{children:[(0,s.jsx)("p",{children:"Terms & Conditions"}),(0,s.jsx)("p",{children:"Privacy Policy"})]}),(0,s.jsx)("div",{})]}),(0,s.jsxs)("div",{className:"  w-[18%]  flex flex-col gap-20 sm:h-full sm:w-full sm:gap-2 md:h-full md:w-full md:gap-2",children:[(0,s.jsx)("h2",{className:" font-bold text-2xl",children:"Follow"}),(0,s.jsx)("p",{children:"Sign up to get the latest news on our product."}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Email*"}),(0,s.jsxs)("div",{className:" flex sm:h-full md:h-full",children:[(0,s.jsx)("input",{type:"text",className:"bg-white border-red-800 border-r-0 rounded-md rounded-tr-none rounded-br-none border-[2px] w-[70%] md:w-[40%] sm:w-[80%]"}),(0,s.jsx)("button",{className:"  p-2 bg-black rounded-md rounded-tl-none rounded-bl-none text-white",children:"Subscribe"})]})]})]}),(0,s.jsx)("div",{className:" w-[18%] sm:w-full",children:(0,s.jsxs)("div",{className:"flex flex-col w-full h-full gap-12 items-center justify-center",children:[(0,s.jsx)("div",{}),(0,s.jsx)("h2",{className:" font-bold text-3xl md:text-xl lg:text-xl sm:text-2xl",children:"LinkedIn"}),(0,s.jsx)("h2",{className:" font-bold text-3xl md:text-xl lg:text-xl sm:text-2xl",children:"YouTube"}),(0,s.jsx)("h2",{className:" font-bold text-3xl md:text-xl lg:text-xl sm:text-2xl",children:"Facebook"})]})})]})]}),N={src:"/_next/static/media/How-We-Work.09bad5e6.png",height:993,width:746,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAvklEQVR42k3Kyw7BQBiG4bkI9+HmxJotW7EREQkSsZEQC1I7JHUolUjEKVUlJYpop39npvNrd57Nt/hesrzQgmZ6ODfcLPm33lufw8lEw7xx62Kpx+1mVc6nmwQlVjEiwzBkjOHdtnGgjDTSGfQUj1JkQSAAIHg5DkLIc6RRq+98n6KUkgkhOETRVV0pBHyouhTiA2OCI+773QNZaHpqrOpnD3gLvk89eBvoP6Y2iU2UYSJeOsskxbHUxnOl+AMgtpXuWILcsQAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},components_Fourthsec=()=>(0,s.jsxs)("div",{className:" p-16 sm:p-10 w-full flex sm:flex-col md:flex-col justify-evenly flex-row-reverse items-center gap-16 xl:text-lg xxl:text-lg",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-7 w-[50%] sm:w-full",children:[(0,s.jsxs)("h1",{className:" font-bold text-4xl",children:["Built for Creatives, ",(0,s.jsx)("br",{})," by Creatives"]}),(0,s.jsx)("p",{children:"I'm a paragraph. Click here to add your own text and edit  me. It's\n            easy. Just click “Edit Text” or double click me to add your own\n            content and make changes to the font. I'm a great place for you to\n            tell a story and let your users know a little more about you."}),(0,s.jsx)("div",{className:"flex gap-3 xl:w-full xxl:w-full",children:["All-In One Toolkit","Integrated File Sharing","Total Design Freedom"].map((e,l)=>(0,s.jsx)("p",{className:" w-[100px] xl:w-auto xxl:w-auto",children:e},l))})]}),(0,s.jsx)("div",{className:" w-[50%] flex justify-center",children:(0,s.jsx)(n(),{height:500,width:500,alt:"hero image",src:N})})]}),components_Secondsec=()=>(0,s.jsxs)("div",{className:" bg-[#ffbf23] h-[500px] flex items-center justify-evenly p-16 sm:p-10 lg:gap-8 lg:text-center md:p-4 md:flex-col md:justify-center md:gap-8 xl:text-lg xxl:text-lg sm:flex-col",children:[(0,s.jsx)("h1",{className:" text-3xl max-w-sm",children:(0,s.jsx)("strong",{children:"With the Right Software, Great Things Can Happen"})}),(0,s.jsx)("p",{className:" break-all max-w-lg",children:"I am a paragraph. Click here to add your own text and edit me. It is\n        easy. Just click “Edit Text” or double click me to add your\n        own content and make changes to the font. Feel free to drag and drop me\n        anywhere you like on your page. Im a great place for you to tell a\n        story and let your users know a little more about you."})]}),B={src:"/_next/static/media/check.cd10fad6.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAV0lEQVR42mNAgP8sYOofIwOEZgViu3+3QDJMQCYbEJv/+/+vhuGvMFCIHcrNBCn98i8NSFoBuTlAKVaGf/7//v6b8O/3v3wQF2KcHVBVKoSLsAxoNIQGAHQHLUx1OM1iAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},components_Seventhsec=()=>(0,s.jsx)("div",{className:" h-[800px] flex justify-center items-center xl:text-lg xxl:text-lg sm:h-auto",children:(0,s.jsxs)("div",{className:" w-full h-full bg-[#edede9] flex sm:flex-col",children:[(0,s.jsx)("div",{className:" w-1/2 h-full flex justify-center sm:w-full",children:(0,s.jsxs)("div",{className:" flex flex-col justify-center h-full gap-6 w-[60%] sm:w-full sm:p-6",children:[(0,s.jsxs)("h1",{className:" text-3xl",children:["Explore Our ",(0,s.jsx)("br",{})," Pricing Options"]}),(0,s.jsx)("p",{className:" text-lg",children:"I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."}),(0,s.jsx)("button",{className:" p-2 bg-black text-white rounded-md w-[50%]",children:"See More"})]})}),(0,s.jsx)("div",{className:" w-1/2 h-full flex justify-center items-center sm:w-full",children:(0,s.jsxs)("div",{className:" w-[65%] sm:w-full sm:p-6",children:[(0,s.jsxs)("div",{className:" bg-black  text-stone-50 p-6 flex flex-col gap-4 rounded-tr-lg rounded-tl-lg",children:[(0,s.jsx)("h1",{className:" text-3xl",children:"Premium"}),(0,s.jsxs)("h2",{className:" text-2xl",children:[(0,s.jsx)("span",{className:" text-6xl",children:"50"})," $US"]}),(0,s.jsx)("p",{children:"Every month"}),(0,s.jsx)("p",{children:"Use this area to describe one of your memberships."}),(0,s.jsx)("p",{children:"Valid for 12 months"}),(0,s.jsx)("div",{className:" flex justify-center",children:(0,s.jsx)("button",{className:" bg-white rounded-lg text-black p-4 w-[300px]",children:"Get Started"})})]}),(0,s.jsx)("div",{className:" bg-pink-200 p-6 flex flex-col gap-2 border-black border-[2px] rounded-bl-lg rounded-br-lg",children:(0,s.jsx)("div",{className:" flex flex-col gap-4",children:["I'm a benefit","I'm a benefit","I'm a benefit","I'm a benefit"].map((e,l)=>(0,s.jsxs)("div",{className:" flex gap-4 items-center",children:[(0,s.jsx)(n(),{className:" bg-black p-1 rounded-full",width:20,height:10,src:B,alt:"Check Mark"}),(0,s.jsx)("p",{children:e},l)]},l))})})]})})]})}),Q={src:"/_next/static/media/1.5ce60072.png",height:298,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAvklEQVR42mMAAQsGBibtyqDmgjJnDhBfrjaUhUGgJMCZtyZsH0NF+F0GBmt2vapgTQYQEK0I7mCoDf+/Z5bDrcWT3Rcz1EQ+N68IsGNwibGVZCgIuDOty/1/V6fnf4bayP/y9eEnGTiOtvOKbKw8wjA37z/D9MxvsmWBTQwJLmIMwsuKlLj2N3+UOdX1W+5QywIGZMBXEXyErzJkJ4jN0p3AJpzuzsQgEuvILZjhYcVbEpAlVOTPB5IUTnRmBABPMDo6g9s65QAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},v={src:"/_next/static/media/2.26bdecf9.png",height:257,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAz0lEQVR42mNABncWqSrdXarRtniOLy9YQLDIz8q1xNsAxL6xUPPwizXq///7M3CDJcUqg88z1Ia/rC1UNToySen/veU65xg21PnabK3UYNAr9S9gqI34P6XMcfP5Pp7/eZsKfjIcaP2vuKdhHwPD6lL2hZH21y4Za/4/nWL5h2Nn3XexLdVN0ovzJRimGqlIn1dSfn5WRvHvUSvD/3uDrFcwIIMZkSYtqZ0e/6dkmB38z8AgDBarCmEGS/YttlNcPttmxZb5+s4g/pEyLbAEAAwUTuC7rl9ZAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},C={src:"/_next/static/media/3.a1b8ed4d.png",height:284,width:220,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AQD//wAed1FT4s4DwvFqyF/4AA4hirMCdQEreVFV1QUHqooH6rFjL+4x+vf36+7q3E0BE4JZlu34/GleIA3w9iofBlDMv6i95waJAQd/WJYN/f1p7D0r/T319QIDxNUBwPYDYQEMelSB/gsIfg00Ivz05e4A9Q0JBB0JBmIBAHZSXQAQC6IALR7+DwsHAgMBAev5+/1vATBoRjEFIBXO+C4gANUAAnY5SoOP0MeI/AGtfRsT+hYmefoQE9nIGyebl6blABddIwMF8lP0vlWycwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},components_Sixthsec=()=>{let e=["","",""];return(0,s.jsxs)("div",{className:"  flex flex-col justify-center items-center p-24 sm:p-10 gap-14 xl:text-lg xxl:text-lg",children:[(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("h1",{className:" text-3xl lg:text-center md:text-center",children:"What Our Clients Say"})}),(0,s.jsx)("div",{className:" flex gap-12 md:flex-col sm:flex-col",children:[{name:"Deena Levies, ",location:"Mission Bay",image:Q},{name:"Tom Smithenson, ",location:"Parkmerced",image:v},{name:"Tilly Green, ",location:"Hayes Valley",image:C}].map((l,t)=>(0,s.jsxs)("div",{className:" bg-white w-[280px] flex-col h-[370px] flex gap-4 relative  border-[2px] border-black rounded-md",children:[(0,s.jsx)("div",{className:" bg-[#ffbd00] w-full h-[10%] flex gap-2 items-center pl-4 rounded-tr-md rounded-tl-md border-[2px] border-b-black",children:e.map((e,l)=>(0,s.jsx)("div",{className:" rounded-full w-[7px] h-[7px] bg-black"},l))}),(0,s.jsxs)("div",{className:" p-4 flex grow flex-col justify-between",children:[(0,s.jsx)("p",{children:"Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are."}),(0,s.jsxs)("div",{className:" flex flex-col items-end justify-end flex-grow",children:[(0,s.jsxs)("p",{children:[l.name,(0,s.jsx)("br",{})]}),(0,s.jsx)("p",{children:l.location})]})]}),(0,s.jsx)(n(),{width:120,height:120,alt:"Plant Image",src:l.image,className:" absolute bottom-[-20px] left-[-15px]"})]},t))})]})},k={src:"/_next/static/media/Artboard 48 copy 4_5x-100.27bcc3b7.webp",height:300,width:226,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoGAAgAAkA4JZACdIE02AAZAfwlgAD+ZtLvdmM/zr7kf6W6s+srfNXbbL0XZd/4imhT5g+jJ6mFQkqsh64ujtFJ6bubqO3/JOeluRuqqrP7GQtGOBf6Jz9cB8AAAA==",blurWidth:6,blurHeight:8},y={src:"/_next/static/media/Artboard 48 copy 5_5x-100.c228cb96.webp",height:298,width:226,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoGAAgAAkA4JbACdDKVQVs5e8AA/vYvgZEHCMcuo8NejWec+cM/4QahaLA7rbR5/Yu7/OHuTfOYr3sSCmT7evgTBjwb7jdAAAA=",blurWidth:6,blurHeight:8},U={src:"/_next/static/media/Artboard 48 copy 6_5x-100.fee0fada.webp",height:298,width:226,blurDataURL:"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwAQCdASoGAAgAAkA4JaACdADze7UQAP740KrwaePR8Cl3wYkQgMYKNQfYVuZmD/X80fIf49R+v4MZ87YF8f/sVK6/XfOMVw47CjHGzL8//kyQAAA=",blurWidth:6,blurHeight:8},I={src:"/_next/static/media/Artboard 48 copy 7_5x-100.4498d595.webp",height:298,width:226,blurDataURL:"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAQCdASoGAAgAAkA4JbACdAEOun8CAAD+65zlolS6raaqPqqnlMMaT/yoxHAOFZDvuZnvnadNwfbMPdT5H+f+ciXzuYP/SX4d/Jv/2v6tDxfhmAA=",blurWidth:6,blurHeight:8},components_Thirdsec=()=>{let e="Im a paragraph. Click here to add your own text and edit me. Im a great place for you to tell a story and let your users know a little more about you.";return(0,s.jsxs)("div",{id:"Product",className:"  h-auto p-24 sm:p-10 flex flex-col justify-center gap-10 xl:text-lg xxl:text-lg",children:[(0,s.jsxs)("div",{className:" flex flex-col gap-3",children:[(0,s.jsx)("h1",{className:" text-3xl",children:"What We Offer"}),(0,s.jsxs)("p",{className:"",children:["I am a paragraph. Click here to add your own text and edit me. Its easy. ",(0,s.jsx)("br",{}),"Just click “Edit Text” or double click me to add your own content and"," ",(0,s.jsx)("br",{}),"make changes to the font."]})]}),(0,s.jsx)("div",{className:"flex gap-5 justify-center md:flex-col md:scale-[0.9] sm:flex-col",children:[{image:k,title:"Workflows",description:e},{image:y,title:"All-In-One Solution",description:e},{image:U,title:"Comprehensive Customer Support",description:e},{image:I,title:"Smart Automation Tools",description:e}].map((e,l)=>(0,s.jsxs)("div",{className:" flex flex-col gap-2 md:items-center",children:[(0,s.jsx)("div",{className:" border-black md:w-[70%]  border-[3px] rounded-lg  flex justify-center",children:(0,s.jsx)(n(),{height:200,width:300,alt:"Image detailing workflow",src:e.image,className:" rounded-lg w-full"})}),(0,s.jsx)("strong",{children:(0,s.jsx)("h2",{className:" text-xl",children:e.title})}),(0,s.jsx)("p",{children:e.description})]},l))})]})},D={src:"/_next/static/media/profile-user.5a5d04c9.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWklEQVR42jWIsQmAMBQFbxoRs5Gdu9jrFk5hoxAHyBoWVkKaxIPgP3j/3gPoiVSJGhiPZZSqOe3KBmBWG9lXmKRouQ0Hs5xtuIz/so2Bm4VOVm0ACCReSQT4AEW+Ja0TtJCLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},E={src:"/_next/static/media/close-btn.893a9f68.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAOElEQVR42mNgYGIAASY4DQSuDAoMICAPZEEZsxkEgHA2gwIDVJEAwwwgFGBgYGDCEMDQgmkourUA96kHdTr5Y2AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},components_Burgermenu=()=>{let{setShowBurger:e}=r();return(0,s.jsxs)("div",{className:" bg-white z-30 h-full w-full absolute top-0 flex flex-col gap-16 p-12 text-2xl",children:[(0,s.jsxs)("div",{className:" flex justify-between",children:[(0,s.jsxs)("div",{className:" flex items-center gap-4",children:[(0,s.jsx)(n(),{height:50,width:50,src:D,alt:"Profile Icon"}),(0,s.jsx)("h1",{className:" text-3xl font-bold",children:"Log In"})]}),(0,s.jsx)("span",{children:(0,s.jsx)(n(),{onClick:()=>{e(!1)},src:E,width:50,height:50,alt:"Close Button"})})]}),(0,s.jsxs)("div",{className:" flex flex-col gap-4",children:[(0,s.jsx)("h2",{children:"Home"}),(0,s.jsx)("h2",{children:"Product"}),(0,s.jsx)("h2",{children:"Pricing Plans"}),(0,s.jsx)("h2",{children:"Contact"})]})]})};function Home(){let[e,l]=(0,A.useState)(!1),{showBurger:t,setShowBurger:a}=r();return(0,A.useEffect)(()=>{console.log(t)},[e,t]),(0,s.jsxs)("main",{className:"".concat(t&&" overflow-y-hidden"," h-full flex flex-col relative"),children:[(0,s.jsx)(components_Navbar,{}),(0,s.jsx)(components_Hero,{}),(0,s.jsx)(components_Secondsec,{}),(0,s.jsx)(components_Thirdsec,{}),(0,s.jsx)(components_Fourthsec,{}),(0,s.jsx)(components_Fifthsec,{}),(0,s.jsx)(components_Sixthsec,{}),(0,s.jsx)(components_Seventhsec,{}),(0,s.jsx)(components_Eightsec,{}),(0,s.jsx)(Footer,{}),(0,s.jsx)(components_Chat,{setShow:l}),e&&(0,s.jsx)(components_ChatOpen,{setShow:l}),t?(0,s.jsx)(components_Burgermenu,{}):null]})}}},function(e){e.O(0,[655,971,472,744],function(){return e(e.s=3847)}),_N_E=e.O()}]);