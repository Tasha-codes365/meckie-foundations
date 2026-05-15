import{u as b,r as l,a as j,b as v,j as e,c as N,L as i}from"./index-JPWAG1LQ.js";function k(r){const n=b({warn:r?.router===void 0}),s=r?.router||n,a=l.useRef(void 0);return j(s.stores.__store,o=>{if(r?.select){if(r.structuralSharing??s.options.defaultStructuralSharing){const t=v(a.current,r.select(o));return a.current=t,t}return r.select(o)}return o})}function y({children:r,delay:n=0}){const s=l.useRef(null),[a,o]=l.useState(!1);return l.useEffect(()=>{const t=s.current,c=new IntersectionObserver(([d])=>{d.isIntersecting?o(!0):o(!1)},{threshold:.15});return t&&c.observe(t),()=>c.disconnect()},[]),e.jsx("div",{ref:s,style:{transition:`all 800ms ease ${n}ms`},className:`
        transform
        ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
      `,children:r})}const h=(...r)=>r.filter((n,s,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===s).join(" ").trim();const w=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const C=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,a)=>a?a.toUpperCase():s.toLowerCase());const m=r=>{const n=C(r);return n.charAt(0).toUpperCase()+n.slice(1)};var M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const S=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const R=l.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:t,iconNode:c,...d},p)=>l.createElement("svg",{ref:p,...M,width:n,height:n,stroke:r,strokeWidth:a?Number(s)*24/Number(n):s,className:h("lucide",o),...!t&&!S(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,f])=>l.createElement(g,f)),...Array.isArray(t)?t:[t]]));const u=(r,n)=>{const s=l.forwardRef(({className:a,...o},t)=>l.createElement(R,{ref:t,iconNode:n,className:h(`lucide-${w(m(r))}`,`lucide-${r}`,a),...o}));return s.displayName=m(r),s};const E=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],_=u("menu",E);const $=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],A=u("moon",$);const H=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],P=u("sun",H);const L=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],D=u("x",L),x=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/products",label:"Products"},{to:"/services",label:"Services"},{to:"/gallery",label:"Gallery"},{to:"/contact",label:"Contact"}];function Q(){const[r,n]=l.useState(!1),s=k({select:t=>t.location.pathname}),{theme:a,toggle:o}=N();return l.useEffect(()=>{n(!1)},[s]),e.jsxs("header",{className:`\r
    fixed\r
    top-0\r
    inset-x-0\r
    z-50\r
    bg-background/95\r
    backdrop-blur-lg\r
    border-b\r
    border-border\r
    transition-all\r
    duration-500\r
  `,children:[e.jsxs("div",{className:`\r
          container-luxe\r
          flex\r
          items-center\r
          justify-between\r
          h-[88px]\r
          lg:h-[100px]\r
          px-5\r
          lg:px-6\r
        `,children:[e.jsx(i,{to:"/",className:`\r
            flex\r
            items-center\r
            shrink-0\r
            transition-transform\r
            duration-300\r
            hover:scale-[1.02]\r
          `,children:e.jsx("img",{src:"https://i.ibb.co/hJQSF5sQ/logo-transparent-background.png",alt:"Meckie Construction",className:`\r
    h-[85px]\r
    sm:h-[95px]\r
    lg:h-[110px]\r
    w-auto\r
    object-contain\r
    mt-2\r
  `})}),e.jsx("nav",{className:`\r
            hidden\r
            lg:flex\r
            items-center\r
            gap-10\r
          `,children:x.map(t=>{const c=t.to==="/"?s==="/":s.startsWith(t.to);return e.jsxs(i,{to:t.to,className:`\r
                  relative\r
                  text-[11px]\r
                  tracking-[0.22em]\r
                  uppercase\r
                  font-medium\r
                  text-foreground/75\r
                  hover:text-foreground\r
                  transition-colors\r
                  duration-300\r
                `,children:[t.label,e.jsx("span",{className:`\r
                    absolute\r
                    -bottom-2\r
                    left-1/2\r
                    -translate-x-1/2\r
                    h-[1.5px]\r
                    bg-[var(--brand-orange)]\r
                    transition-all\r
                    duration-500\r
                  `,style:{width:c?"18px":"0px"}})]},t.to)})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:o,"aria-label":"Toggle theme",className:`\r
    hidden\r
    sm:inline-flex\r
    h-10\r
    w-10\r
    items-center\r
    justify-center\r
    border\r
    border-foreground/70\r
    text-foreground\r
    hover:bg-foreground\r
    hover:text-background\r
    transition-all\r
    duration-300\r
  `,children:a==="light"?e.jsx(A,{className:"h-4 w-4"}):e.jsx(P,{className:"h-4 w-4"})}),e.jsx(i,{to:"/contact",className:`\r
    hidden\r
    md:inline-flex\r
    items-center\r
    justify-center\r
    text-[11px]\r
    tracking-[0.24em]\r
    uppercase\r
    font-medium\r
    px-6\r
    h-10\r
    border\r
    border-foreground/70\r
    text-foreground\r
    hover:bg-foreground\r
    hover:text-background\r
    transition-all\r
    duration-300\r
  `,children:"Request Quote"}),e.jsx("button",{onClick:()=>n(t=>!t),className:`\r
              lg:hidden\r
              inline-flex\r
              h-10\r
              w-10\r
              items-center\r
              justify-center\r
            `,"aria-label":"Menu",children:r?e.jsx(D,{className:"h-5 w-5"}):e.jsx(_,{className:"h-5 w-5"})})]})]}),e.jsx("div",{className:`
          lg:hidden
          overflow-hidden
          transition-[max-height,opacity]
          duration-500
          ${r?"max-h-[85vh] opacity-100":"max-h-0 opacity-0"}
        `,children:e.jsxs("div",{className:`\r
            container-luxe\r
            py-10\r
            flex\r
            flex-col\r
            gap-7\r
            border-t\r
            border-border\r
            bg-background\r
          `,children:[x.map((t,c)=>e.jsx(i,{to:t.to,className:`\r
                font-display\r
                text-3xl\r
                tracking-wide\r
              `,style:{animationDelay:`${c*60}ms`},children:t.label},t.to)),e.jsx("button",{onClick:o,className:`\r
              self-start\r
              mt-2\r
              text-[11px]\r
              tracking-[0.22em]\r
              uppercase\r
              text-muted-foreground\r
            `,children:a==="light"?"Dark mode":"Light mode"})]})})]})}function W(){return e.jsx(y,{children:e.jsxs("footer",{className:"mt-14 border-t border-border bg-surface",children:[e.jsxs("div",{className:"container-luxe py-20 grid gap-14 md:grid-cols-12",children:[e.jsxs("div",{className:"md:col-span-5",children:[e.jsx("img",{src:"https://i.ibb.co/hJQSF5sQ/logo-transparent-background.png",alt:"Meckie Construction",className:`\r
              h-[120px]\r
              lg:h-[150px]\r
              w-auto\r
              object-contain\r
              mb-3\r
            `}),e.jsx("p",{className:"text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2",children:"Construction · Est. 1995"}),e.jsx("p",{className:"mt-8 max-w-md text-sm leading-relaxed text-muted-foreground",children:"Premium paving, driveways and architectural surfaces — engineered in Harare, installed with the discipline of three decades."}),e.jsx("div",{className:"hairline mt-10"}),e.jsx("p",{className:"mt-6 text-xs italic text-muted-foreground",children:'"Construction Excellence. Every Project. Every Time."'})]}),e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("p",{className:"eyebrow",children:"Navigate"}),e.jsx("ul",{className:"mt-6 space-y-4 text-sm",children:[["/","Home"],["/about","About"],["/products","Products"],["/services","Services"],["/gallery","Gallery"],["/contact","Contact"]].map(([r,n])=>e.jsx("li",{children:e.jsx(i,{to:r,className:`\r
                    link-underline\r
                    text-foreground/80\r
                    hover:text-foreground\r
                    transition-colors\r
                  `,children:n})},r))})]}),e.jsxs("div",{className:"md:col-span-4",children:[e.jsx("p",{className:"eyebrow",children:"Visit"}),e.jsxs("ul",{className:"mt-6 space-y-6 text-sm leading-relaxed text-foreground/80",children:[e.jsxs("li",{children:[e.jsx("span",{className:"block text-xs uppercase tracking-widest text-muted-foreground mb-1",children:"Hatfield"}),"7 Dawlish Road, Chadcombe, Hatfield, Harare"]}),e.jsxs("li",{children:[e.jsx("span",{className:"block text-xs uppercase tracking-widest text-muted-foreground mb-1",children:"Waterfalls"}),"3243 Masotsha Ndlovu, Waterfalls, Harare"]}),e.jsxs("li",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx("a",{href:"tel:+263772989306",className:"link-underline",children:"+263 77 298 9306"}),e.jsx("span",{className:"text-muted-foreground",children:"·"}),e.jsx("a",{href:"mailto:sales@meckieconstruction.co.zw",className:"link-underline",children:"sales@meckieconstruction.co.zw"})]})]})]})]}),e.jsx("div",{className:"border-t border-border",children:e.jsxs("div",{className:`\r
          container-luxe\r
          h-16\r
          flex\r
          items-center\r
          justify-between\r
          text-[11px]\r
          tracking-widest\r
          uppercase\r
          text-muted-foreground\r
        `,children:[e.jsxs("span",{children:["© ",new Date().getFullYear()," Meckie Driveways (Pvt) Ltd"]}),e.jsx("span",{className:"hidden md:inline",children:"Harare · Zimbabwe"})]})})]})})}function F({children:r}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-background text-foreground",children:[e.jsx(Q,{}),e.jsx("main",{className:"flex-1 pt-20",children:r}),e.jsx(W,{})]})}function I({eyebrow:r,title:n,intro:s}){return e.jsxs("section",{className:"container-luxe pt-24 pb-20 md:pt-32 md:pb-28",children:[e.jsx("p",{className:"eyebrow reveal",children:r}),e.jsx("h1",{className:"reveal reveal-delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl",children:n}),s&&e.jsx("p",{className:"reveal reveal-delay-2 mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground",children:s}),e.jsx("div",{className:"hairline mt-16"})]})}export{F as P,y as R,I as a,u as c};
