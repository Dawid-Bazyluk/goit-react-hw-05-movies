import{u as p,r as a,j as e,L as n,O as d}from"./index-dEEh359X.js";import{A as h,f as v}from"./api-n6-Ti5Dt.js";const j="_wrapper_1p6hs_5",x="_poster_1p6hs_14",_="_title_1p6hs_20",m="_overview_1p6hs_26",w="_overviewTitle_1p6hs_30",u="_additional_1p6hs_36",g="_btn_1p6hs_41",t={wrapper:j,poster:x,title:_,overview:m,overviewTitle:w,additional:u,btn:g},y=()=>{const{movieId:o}=p(),i=`https://api.themoviedb.org/3/movie/${o}?api_key=${h}`,[s,l]=a.useState({});return a.useEffect(()=>{(async()=>{const c=await v(i);l(c)})()},[i]),e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:t.wrapper,children:[s.poster_path&&e.jsx("img",{className:t.poster,src:s.poster_path?`https://image.tmdb.org/t/p/w500${s.poster_path}`:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:s.title}),e.jsxs("article",{children:[e.jsx("h2",{className:t.title,children:s.title}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("h3",{children:" User rating: "}),e.jsxs("span",{children:[" ☆ ",s.vote_average]})]}),e.jsxs("li",{children:[e.jsx("h3",{children:"Genres: "}),s.genres!==void 0&&e.jsx("span",{children:`${s.genres.map(r=>r.name).join(" | ")}`})]})]}),e.jsxs("div",{className:t.overview,children:[e.jsx("h3",{className:t.overviewTitle,children:"Overview"}),e.jsx("p",{children:s.overview})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:t.additional,children:"Additional information"}),e.jsxs("div",{className:t.btn,children:[e.jsx(n,{to:"cast",children:e.jsx("button",{type:"button",children:"Cast"})}),e.jsx(n,{to:"reviews",children:e.jsx("button",{type:"button",children:"Reviews"})})]}),e.jsx(d,{})]})]})};export{y as default};
