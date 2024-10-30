(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{6877:function(e,t,r){Promise.resolve().then(r.bind(r,8659))},3145:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(8461),s=r.n(n)},9376:function(e,t,r){"use strict";var n=r(5475);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},8461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},getImageProps:function(){return c}});let n=r(7043),s=r(5346),a=r(5878),o=n._(r(5084));function c(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let i=a.Image},8659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7437),s=r(2265),a=r(4645),o=r(7379),c=r(3145),i=r(502),l=r(3943);function u(e){let{hasPromotions:t}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-center gap-1 text-sm font-medium",children:[(0,n.jsx)(c.default,{src:t?"/icon/check.svg":"/icon/x-mark.svg",alt:"hasPromotions",width:16,height:16}),(0,n.jsx)("span",{className:t?"text-green-700":"text-red-700",children:t?"Yes":"No"})]})}var d=r(9376);function p(e){let{children:t,id:r}=e,s=(0,d.useRouter)(),a=e=>{s.push("/companies/".concat(e))};return(0,n.jsx)("tr",{className:"bg-zinc-50 font-medium cursor-pointer",onClick:()=>a(r),children:t})}function f(e){let{searchTerm:t}=e,[r,a]=(0,s.useState)([]);(0,s.useEffect)(()=>{(async()=>{a(await (0,i.ap)())})()},[]);let o=r.filter(e=>e.title.toLowerCase().includes(t.toLowerCase())),d={1:"#FB923C",2:"#60A5FA",3:"#FB7185",4:"#34D399",5:"#C084FC",6:"#1D4ED8",7:"#723aaf",8:"#7ba32f"};return(0,n.jsx)("div",{className:"w-full bg-gray-100 px-10 pb-14",children:(0,n.jsxs)("table",{className:"w-full border-separate border-spacing-y-2",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:" text-sm",children:[(0,n.jsx)("th",{className:"font-light pb-[18px] pt-[30px] text-start",children:"Category"}),(0,n.jsx)("th",{className:"font-light pb-[18px] pt-[30px] text-start",children:"Company"}),(0,n.jsx)("th",{className:"font-light pb-[18px] pt-[30px]",children:"Status"}),(0,n.jsx)("th",{className:"font-light pb-[18px] pt-[30px]",children:"Promotion"}),(0,n.jsx)("th",{className:"font-light pb-[18px] pt-[30px]",children:"Country"}),(0,n.jsx)("th",{className:"font-light pb-[18px] pt-[30px]",children:"Joined data"})]})}),(0,n.jsx)("tbody",{children:o.map(e=>{let{id:t,title:r,status:s,joinedDate:a,hasPromotions:o,categoryId:i,categoryTitle:f,countryTitle:h}=e;return(0,n.jsxs)(p,{id:t,children:[(0,n.jsx)("td",{className:"text-start text-xs py-3 rounded-l-lg border-l-8 pl-3",style:{borderColor:d[i]||"white",color:d[i]||"#111827"},children:f}),(0,n.jsxs)("td",{className:" flex gap-x-2 text-gray-900 text-sm  py-3",children:[(0,n.jsx)(c.default,{src:"/images/logoDefaultCompany.svg",alt:"logo",width:20,height:20}),r]}),(0,n.jsx)("td",{className:"text-center text-gray-900 text-sm py-3",children:(0,n.jsx)(l.Z,{status:s})}),(0,n.jsx)("td",{className:"text-center text-gray-900 text-sm py-3",children:(0,n.jsx)(u,{hasPromotions:o})}),(0,n.jsx)("td",{className:"text-center text-gray-900 text-sm py-3",children:h}),(0,n.jsx)("td",{className:"text-center text-gray-900 text-sm py-3 rounded-r-lg",children:a})]},t)})})]})})}function h(){let[e,t]=(0,s.useState)("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{page:"Companies"}),(0,n.jsx)("main",{children:(0,n.jsxs)("section",{children:[(0,n.jsx)(o.Z,{onSearch:t,type:"company",url:"/companies/new-company"}),(0,n.jsx)(f,{searchTerm:e})]})})]})}},4645:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437);function s(e){let{page:t}=e;return(0,n.jsxs)("header",{className:"flex flex-1 py-6 pl-10 pr-7 border-b border-gray-300",children:[(0,n.jsx)("h1",{className:"flex-1 text-3xl font-semibold text-gray-900",children:t}),(0,n.jsxs)("div",{className:"flex border-l border-gray-300 pl-9 gap-x-3",children:[(0,n.jsx)("div",{className:"w-[44px] bg-black h-[44px] rounded-full bg-[url('/images/avatar.jpg')] bg-cover"}),(0,n.jsxs)("div",{className:"flex flex-col ",children:[(0,n.jsx)("span",{className:"font-semibold text-base",children:"Apoo"}),(0,n.jsx)("span",{className:"text-sm font-light",children:"simpsons@gmail.com"})]})]})]})}r(2265)},3943:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7437);r(2265);var s=r(1994);let a={active:"Active",notActive:"Not Active",pending:"Pending",suspended:"Suspended"};function o(e){let{status:t}=e;return(0,n.jsxs)("div",{className:(0,s.Z)("inline-flex items-center rounded-3xl font-medium text-sm py-1 px-3.5 justify-center w-max","active"===t&&"bg-green-100 text-green-700","notActive"===t&&"bg-red-100 text-red-700","pending"===t&&"bg-orange-100 text-orange-700","suspended"===t&&"bg-blue-100 text-blue-700"),children:[(0,n.jsx)("div",{className:"w-1 h-1 bg-current rounded-full mr-2"}),a[t]]})}},7379:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7437),s=r(2265),a=r(3145),o=r(7648);function c(e){let{onSearch:t,type:r,url:c}=e,[i,l]=(0,s.useState)("");return(0,n.jsxs)("div",{className:"flex justify-between px-10 py-8 ",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{value:i,type:"text",placeholder:"Search...",className:"py-3 pl-3 pr-8 rounded border border-gray-300 text-sm min-w-[455px]",onChange:e=>{let r=e.target.value;l(r),t(r)}}),(0,n.jsx)(a.default,{src:"/icon/glass.svg",alt:"glass",width:20,height:20,className:"absolute right-3 top-1/2 transform -translate-y-1/2 "})]}),(0,n.jsxs)(o.default,{href:c,className:"py-2.5 px-5 bg-gray-900 rounded text-white",children:["Add ",r]})]})}},502:function(e,t,r){"use strict";r.d(t,{Ej:function(){return o},ap:function(){return a},e5:function(){return i},ht:function(){return u},oq:function(){return c},qA:function(){return d},sp:function(){return l}});let n="65c21c4ff7e6ea59682aa7e1";async function s(e){try{let t=await fetch("https://".concat(n,".mockapi.io/api/v1/").concat(e));if(!t.ok){if(404===t.status)return[];throw Error("Error fetching ".concat(e,": ").concat(t.statusText))}return await t.json()}catch(t){throw console.error(t),Error("Failed to fetch data from ".concat(e))}}async function a(){return s("companies")}async function o(e){return s("companies/".concat(e))}async function c(e){return s("promotions?companyId=".concat(e))}async function i(e){try{let t=await fetch("https://".concat(n,".mockapi.io/api/v1/companies"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Error submitting form.");return await t.json()}catch(e){throw console.error("Error submitting form.",e),e}}async function l(e){try{if(!(await fetch("https://".concat(n,".mockapi.io/api/v1/promotions"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw Error("Error creating promo")}catch(e){console.error("Error creating promo:",e)}}async function u(e){try{if(!(await fetch("https://".concat(n,".mockapi.io/api/v1/companies/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,hasPromotions:!0})})).ok)throw Error("Error change company")}catch(e){console.error("Error chenging company:",e)}}async function d(e){try{if(!(await fetch("https://".concat(n,".mockapi.io/api/v1/promotions/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})).ok)throw Error("Error change company")}catch(e){console.error("Error deleting promotion:",e)}}},1994:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(n&&(n+=" "),n+=t);return n}}},function(e){e.O(0,[878,648,971,117,744],function(){return e(e.s=6877)}),_N_E=e.O()}]);