(this.webpackJsonpmockshop=this.webpackJsonpmockshop||[]).push([[0],{187:function(e,t,a){},473:function(e,t,a){"use strict";a.r(t);var r=a(3),i=a(0),n=a.n(i),c=a(8),o=a.n(c),s=(a(187),a(10)),d="GET_PRODUCTS_SUCCESS",l="GET_PRODUCTS_FAILURE",p="SET_CATEGORIES_LIST_DISPLAY",u="SET_PRODUCTS_LIST_DISPLAY",h="SET_PRODUCT_DISPLAY",g="UPDATE_SEARCH_TERM",m="CLEAR_SEARCH_TERM",b=function(){return{type:p}},j=function(e){return{type:u,categoryName:e}},f=function(e,t){return{type:h,productId:e,productCategory:t}},y=(a(122),a(510)),O=a(518),w=a(513),S=a(517),v=a(515),C=a(516),x=function(e){var t=Object(y.a)({cardDiv:{width:200,margin:4,textAlign:"center",listStyleType:"none"},media:{height:200,width:"90%",backgroundSize:"contain",margin:"5px auto"},label:{fontWeight:"bold",textTransform:"capitalize"}})();return Object(r.jsx)("div",{className:t.cardDiv,onClick:e.clickHandler,children:Object(r.jsx)(w.a,{variant:"outlined",children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(C.a,{className:t.media,image:e.imageURL}),Object(r.jsx)(S.a,{className:t.label,children:e.title})]})})})},D=Object(y.a)({spinner:{marginTop:90}}),k=function(){var e=Object(s.c)((function(e){return e.productData.productDataByCategory})),t=Object(s.c)((function(e){return e.productData.error})),a=Object(s.b)(),i=D();return e?Object(r.jsx)("div",{id:"category-cards-container",children:Object(r.jsx)("div",{id:"cards-container",children:Object.keys(e).map((function(t){return Object(r.jsx)(x,{title:t,imageURL:e[t][0].image,clickHandler:function(){return a(j(t))}})}))})}):t?Object(r.jsx)("p",{children:t}):Object(r.jsx)(O.a,{className:i.spinner})},T=a(519),I=Object(y.a)({cardDiv:{width:"20%",maxWidth:200,margin:4,textAlign:"center",listStyleType:"none"},media:{height:200,width:"90%",backgroundSize:"contain",margin:"5px auto"},label:{fontWeight:"bold"},spinner:{marginTop:90},title:{fontSize:20,textTransform:"capitalize"}}),A=function(){var e=Object(s.c)((function(e){return e.productData.productDataByCategory})),t=Object(s.c)((function(e){return e.appData.selectedCategoryName})),a=Object(s.b)(),i=I(),n=e[t];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:i.title,children:t}),Object(r.jsx)("div",{id:"cards-container",children:n.map((function(e){return Object(r.jsx)(x,{title:e.title,imageURL:e.image,clickHandler:function(){return a(f(e.id,e.category))}})}))}),Object(r.jsx)(T.a,{variant:"outlined",onClick:function(){return a(b())},children:"Back"})]})},L=a(36),P="TOGGLE_CART_TAB",R="ADD_TO_CART",N="REMOVE_FROM_CART",B=a(520),_=a(525),E=a(524),H=a(527),W=Object(y.a)((function(){return{sizeSelector:{minWidth:50,marginRight:20},quantitySelector:{minWidth:50},addToCartButton:{display:"block",marginTop:"15px"}}})),F=function(){var e,t=Object(s.b)(),a=Object(s.c)((function(e){return e.appData.selectedCategoryName})),n=Object(s.c)((function(e){return e.appData.selectedProductId})),c=Object(s.c)((function(e){return e.productData.productDataById}))[n],o=W(),d=Object(i.useState)(null),l=Object(L.a)(d,2),p=l[0],u=l[1],h=Object(i.useState)(null),g=Object(L.a)(h,2),m=g[0],b=g[1],f=[];!function(e){for(var t=1;t<=e;t++)f.push(t)}(10),e=a.indexOf("clothing")>=0;var y={id:n,size:p,qty:m};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{id:"product-container",children:[Object(r.jsx)("img",{src:c.image,id:"product-image"}),Object(r.jsxs)("div",{id:"product-details",children:[Object(r.jsx)("h2",{children:c.title}),Object(r.jsx)("p",{children:c.description}),Object(r.jsxs)("p",{id:"product-price",children:["Price: $",c.price]}),e&&Object(r.jsxs)(B.a,{className:o.sizeSelector,children:[Object(r.jsx)(_.a,{shrink:!0,children:"Size"}),Object(r.jsxs)(E.a,{value:p,onChange:function(e){u(e.target.value)},children:[Object(r.jsx)(H.a,{value:"S",children:"S"}),Object(r.jsx)(H.a,{value:"M",children:"M"}),Object(r.jsx)(H.a,{value:"L",children:"L"}),Object(r.jsx)(H.a,{value:"XL",children:"XL"})]})]}),Object(r.jsxs)(B.a,{className:o.quantitySelector,children:[Object(r.jsx)(_.a,{shrink:!0,children:"Quantity"}),Object(r.jsx)(E.a,{value:m,onChange:function(e){b(e.target.value)},children:f.map((function(e){return Object(r.jsx)(H.a,{value:e,children:e})}))})]}),Object(r.jsx)(T.a,{className:o.addToCartButton,variant:"contained",color:"primary",onClick:function(){return t({type:R,addedProductDetails:y})},children:"Add to Cart"})]})]}),a&&Object(r.jsx)(T.a,{variant:"outlined",onClick:function(){return t(j(a))},children:"Back"})]})},M=(a(194),Object(y.a)((function(){return{clearSearchButton:{marginTop:19.92},searchResultsBanner:{display:"flex",margin:"0 30px 0 80px",justifyContent:"space-between",alignItems:"flex-start"},productCardsContainer:{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}}))),U=function(){var e=Object(s.c)((function(e){return e.appData.searchTerm})),t=Object(s.c)((function(e){return e.productData.productDataById})),a=M(),i=Object(s.b)(),n=Object.keys(t).filter((function(a){return t[a].title.toLowerCase().includes(e.toLowerCase())||t[a].description.toLowerCase().includes(e.toLowerCase())||t[a].category.toLowerCase().includes(e.toLowerCase())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:a.searchResultsBanner,children:[Object(r.jsxs)("div",{id:"search-details",children:[Object(r.jsx)("h2",{children:"Search results for"}),Object(r.jsxs)("h3",{children:['"',e,'"']})]}),Object(r.jsx)(T.a,{variant:"outlined",className:a.clearSearchButton,onClick:function(){i({type:m})},children:"Clear Search Results"})]}),Object(r.jsx)("div",{className:a.productCardsContainer,children:n.map((function(e){return Object(r.jsx)(x,{title:t[e].title,imageURL:t[e].image,clickHandler:function(){return i(f(e,t[e].category))}})}))})]})},z=a(521),G=a(522),q=a(523),Y=a(170),J=a.n(Y),V=a(171),Q=a.n(V),Z=a(526),X=a(19),K=a(173),$=a.n(K),ee=a(172),te=a.n(ee),ae=Object(y.a)((function(e){return{appToolbar:{display:"flex",justifyContent:"space-between"},homeButton:{marginRight:20,display:"inline-block"},cartButton:{marginLeft:20},search:{backgroundColor:Object(X.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.b)(e.palette.common.white,.25)},borderRadius:5,justifySelf:"flex-end",display:"flex",alignItems:"center"},leftAppBarItems:{display:"flex",alignItems:"center"},searchIcon:{height:"100%",pointerEvents:"none",display:"flex",alignItems:"center",padding:5,position:"absolute"},searchInput:{color:"inherit",padding:5,paddingLeft:"calc(1em + 15px)",width:"10em",transition:"width 0.3s"},searchInputFocused:{width:"15em"}}})),re=function(){var e=ae(),t=Object(s.c)((function(e){return e.appData.searchTerm})),a=Object(s.c)((function(e){return e.cartData.productsInCart})),i=Object(s.c)((function(e){return e.cartData.isCartTabDisplayed})),n=Object(s.b)();return Object(r.jsx)(z.a,{position:"static",className:e.appBar,children:Object(r.jsxs)(G.a,{className:e.appToolbar,children:[Object(r.jsxs)("div",{className:e.leftAppBarItems,children:[Object(r.jsx)(q.a,{color:"inherit",className:e.homeButton,onClick:function(){n(b())},children:Object(r.jsx)(J.a,{})}),Object(r.jsx)(S.a,{children:"Sean's Wonderful WebStore"})]}),Object(r.jsxs)("div",{className:e.leftAppBarItems,children:[Object(r.jsxs)("div",{className:e.search,children:[Object(r.jsx)("div",{className:e.searchIcon,children:Object(r.jsx)(Q.a,{})}),Object(r.jsx)(Z.a,{placeholder:"Search...",className:e.searchInput,classes:{focused:e.searchInputFocused},onChange:function(e){var t;n((t=e.target.value,{type:g,newSearchTerm:t}))},value:t})]}),Object(r.jsx)(q.a,{color:"inherit",className:e.cartButton,onClick:function(){n(function(e){return{type:P,payload:!e}}(i))},children:0===Object.keys(a).length?Object(r.jsx)(te.a,{}):Object(r.jsx)($.a,{})})]})]})})},ie=a(178),ne=Object(y.a)({shoppingCartContainer:{minWidth:200,width:"35%",minHeight:"100vh"}}),ce=function(){var e=ne(),t=Object(s.b)(),a=Object(s.c)((function(e){return e.cartData.productsInCart})),i=Object(s.c)((function(e){return e.productData.productDataById}));return Object(r.jsxs)(ie.a,{variant:"outlined",className:e.shoppingCartContainer,children:[Object(r.jsx)("h4",{id:"shopping-cart-title",children:"Shopping Cart"}),Object.keys(a).length<1?Object(r.jsx)("p",{id:"empty-cart-statement",children:"The Cart is Empty"}):Object.keys(a).map((function(e){var n,c,o=a[e];if(e.includes("_")){var s=e.indexOf("_");n=e.slice(0,s),c=e.slice(s+1)}else n=e,c=null;return Object(r.jsxs)("div",{id:"cart-product",onClick:function(){t(f(n,i[n].category))},children:[Object(r.jsx)("div",{id:"cart-product-image-container",children:Object(r.jsx)("img",{src:i[n].image,id:"cart-product-image"})}),Object(r.jsxs)("div",{id:"cart-product-details",children:[Object(r.jsx)("p",{id:"cart-product-title",children:i[n].title}),c&&Object(r.jsxs)("p",{children:["Size: ",c]}),Object(r.jsxs)("p",{children:["Qty: ",o]}),Object(r.jsx)("p",{onClick:function(a){t({type:N,removedCartItemKey:e}),a.stopPropagation()},id:"product-remove-button",children:"Remove"})]})]},n)}))]})},oe=[{id:1,title:"Mens Casual Premium Slim Fit T-Shirts",price:22.3,description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",category:"men clothing",image:"https://bananarepublicfactory.gapfactory.com/webcontent/0018/225/616/cn18225616.jpg"},{id:2,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men clothing",image:"https://content.backcountry.com/images/items/900/FJR/FJR00CF/DUS.jpg"},{id:3,title:"Mens Cotton Jacket",price:55.99,description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",category:"men clothing",image:"https://cdni.llbean.net/is/image/wim/187059_888_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},{id:4,title:"Mens Casual Slim Fit",price:15.99,description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",category:"men clothing",image:"https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw66d009ad/images/hi-res/52691_COBP.jpg?sw=1000&sh=1000&sfrm=png&q=90&bgcolor=f6f6f6"},{id:5,title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",price:695,description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",category:"jewelery",image:"https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/8919423_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp"},{id:6,title:"Solid Gold Petite Micropave",price:168,description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",category:"jewelery",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4uBGsbfKPJAwRJhzON7teCzhnXo7mcJstq_s8O4_b7R-cIImIWQHy5_Kry8L42WL_SNvia8zuUmc&usqp=CAc"},{id:7,title:"White Gold Plated Princess",price:9.99,description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",category:"jewelery",image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQH7Vqyqe8TEPQexQwbvDtyukA5GtbtUbIDWfbUGyXbIVaRg2wj7YYfuYqeVCVtq5IK-Shvr88VSmo&usqp=CAc"},{id:8,title:"Pierced Owl Rose Gold Plated Stainless Steel Double",price:10.99,description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",category:"jewelery",image:"https://cdn.shopify.com/s/files/1/1369/3013/products/da99dd0c8c6ddae5793445bd0e183e9c_e29d762b-e7f3-4a6c-95c2-73f097233e31_601x600.jpg?v=1581552980"},{id:9,title:"WD 2TB Elements Portable External Hard Drive - USB 3.0",price:64,description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",category:"electronics",image:"https://shop.westerndigital.com/content/dam/store/en-us/assets/products/portable/wd-elements-portable/gallery/1tb/wd-elements-portable-1-2tb-front.png.wdthumb.1280.1280.webp"},{id:10,title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",price:109,description:'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',category:"electronics",image:"https://images-na.ssl-images-amazon.com/images/I/61U7T1koQqL._AC_SX466_.jpg"},{id:11,title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",price:109,description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",category:"electronics",image:"https://images-na.ssl-images-amazon.com/images/I/71kWymZ%2Bc%2BL._AC_SL1500_.jpg"},{id:12,title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",price:114,description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",category:"electronics",image:"https://shop.westerndigital.com/content/dam/store/en-us/assets/products/portable/wd-gaming-drive/gallery/4tb/wd-gaming-drive-portable-front.png.wdthumb.1280.1280.webp"},{id:13,title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",price:599,description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",category:"electronics",image:"https://i.ebayimg.com/images/g/fpEAAOSwnNVfxnd1/s-l1600.jpg"},{id:14,title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",price:999.99,description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",category:"electronics",image:"https://www.staples-3p.com/s7/is/image/Staples/sp95746791_sc7?wid=700&hei=700"},{id:15,title:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",price:56.99,description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",category:"women clothing",image:"https://cdni.llbean.net/is/image/wim/507061_34659_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},{id:16,title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",price:29.95,description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",category:"women clothing",image:"https://www.fanjackets.com/wp-content/uploads/2020/09/black-trucker-biker-leather-jacket-with-hood-620x1048.jpg"},{id:17,title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",price:39.99,description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",category:"women clothing",image:"https://cdni.llbean.net/is/image/wim/506197_33018_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},{id:18,title:"MBJ Women's Solid Short Sleeve Boat Neck V ",price:9.85,description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",category:"women clothing",image:"https://cdni.llbean.net/is/image/wim/501229_34659_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},{id:19,title:"Opna Women's Short Sleeve Moisture",price:7.95,description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",category:"women clothing",image:"http://cdn.shopify.com/s/files/1/0071/5633/4681/products/Women_Flutter-Short-Sleeve-Shirt_Linen_B36_1024x1024.jpg?v=1564706417"},{id:20,title:"DANVOUY Womens T Shirt Casual Cotton Short",price:12.99,description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",category:"women clothing",image:"https://m.media-amazon.com/images/I/71S4U74FgzL._AC_UL1500_.jpg"}];var se=function(){var e=Object(s.c)((function(e){return e.appData.activePage})),t=Object(s.c)((function(e){return e.appData.searchTerm})),a=Object(s.c)((function(e){return e.cartData.isCartTabDisplayed})),n=Object(s.b)();return Object(i.useEffect)((function(){n({type:d,payload:oe})}),[]),Object(r.jsxs)("div",{id:"app",children:[Object(r.jsx)(re,{}),Object(r.jsxs)("div",{id:"page-and-cart-container",children:[Object(r.jsx)("div",{id:"page-content-container",children:t?Object(r.jsx)(U,{}):function(){switch(e){case"categoriesList":return Object(r.jsx)(k,{});case"productsList":return Object(r.jsx)(A,{});case"product":return Object(r.jsx)(F,{});default:return Object(r.jsx)(k,{})}}()}),a&&Object(r.jsx)(ce,{})]})]})},de=a(39),le=a(13),pe={productDataByCategory:null,productDataById:null,error:""},ue={activePage:"categories",selectedCategoryName:"",selectedProductId:"",searchTerm:""},he=a(4),ge=a(176),me=a(20),be={isCartTabDisplayed:!1,productsInCart:{}},je=Object(de.combineReducers)({productData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=function(e){return e.reduce((function(e,t){return e[t.category]=e[t.category]||[],e[t.category].push(t),e}),{})},r=function(e){return e.reduce((function(e,t){return e[t.id]=t,e}),{})};switch(t.type){case d:return Object(le.a)(Object(le.a)({},e),{},{productDataByCategory:a(t.payload),productDataById:r(t.payload),error:""});case l:return Object(le.a)(Object(le.a)({},e),{},{productDataByCategory:null,productDataById:null,error:t.payload});default:return e}},appData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(le.a)(Object(le.a)({},e),{},{activePage:"categoriesList",selectedCategoryName:"",selectedProductId:"",searchTerm:""});case u:return Object(le.a)(Object(le.a)({},e),{},{activePage:"productsList",selectedCategoryName:t.categoryName,selectedProductId:""});case h:return Object(le.a)(Object(le.a)({},e),{},{activePage:"product",selectedProductId:t.productId,selectedCategoryName:t.productCategory,searchTerm:""});case g:return Object(le.a)(Object(le.a)({},e),{},{searchTerm:t.newSearchTerm});case m:return Object(le.a)(Object(le.a)({},e),{},{searchTerm:""});default:return e}},cartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(le.a)(Object(le.a)({},e),{},{isCartTabDisplayed:t.payload});case R:var a,r=t.addedProductDetails.id,i=t.addedProductDetails.qty,n=t.addedProductDetails.size;a=n?r+"_"+n:r;var c=e.productsInCart[a];return Object(le.a)(Object(le.a)({},e),{},{productsInCart:Object(le.a)(Object(le.a)({},e.productsInCart),{},Object(me.a)({},a,c?c+i:i))});case N:var o=e.productsInCart,s=t.removedCartItemKey,d=(o[s],Object(he.a)(o,[s].map(ge.a)));return Object(le.a)(Object(le.a)({},e),{},{productsInCart:d});default:return e}}}),fe=a(174),ye=a(175),Oe=Object(de.createStore)(je,Object(fe.composeWithDevTools)(Object(de.applyMiddleware)(ye.a)));o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(s.a,{store:Oe,children:Object(r.jsx)(se,{})})}),document.getElementById("root"))}},[[473,1,2]]]);
//# sourceMappingURL=main.69b84540.chunk.js.map