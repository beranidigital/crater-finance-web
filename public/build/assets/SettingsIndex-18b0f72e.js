import{B as h,a as B}from"./BaseListItem-000773ac.js";import{e as F,l as v,g as b,F as H,ba as N,bb as A,al as D,r as c,o as s,n as i,w as o,a as n,b as a,c as w,M as k,a1 as y,L as S}from"./main-55335c70.js";import{u as G}from"./global-e8b9ee07.js";import"./auth-1696cd6c.js";const M={class:"w-full mb-6 select-wrapper xl:hidden"},O={class:"pb-3 lg:col-span-3"},U={class:"space-y-1"},j={class:"flex"},q={class:"hidden mt-1 xl:block min-w-[240px]"},z={class:"w-full overflow-hidden"},W={__name:"SettingsIndex",setup(I){const{t:_}=F(),{useRoute:$,useRouter:x}=window.VueRouter,d=$(),R=x(),r=G(),m=v(()=>r.companySlug);let V=b({});b();const u=H([{link:`/${r.companySlug}/customer/settings/customer-profile`,title:_("settings.account_settings.account_settings"),icon:N},{link:`/${r.companySlug}/customer/settings/address-info`,title:_("settings.menu_title.address_information"),icon:A}]);D(()=>{d.path===`/${r.companySlug}/customer/settings`&&R.push({name:"customer.profile"});const t=u.find(g=>g.link===d.path);V.value={...t}}),v(()=>u);function p(t){return d.path.indexOf(t)>-1}return(t,g)=>{const f=c("BaseBreadcrumbItem"),L=c("BaseBreadcrumb"),P=c("BasePageHeader"),C=c("RouterView"),E=c("BasePage");return s(),i(E,null,{default:o(()=>[n(P,{title:t.$tc("settings.setting",2),class:"pb-6"},{default:o(()=>[n(L,null,{default:o(()=>[n(f,{title:t.$t("general.home"),to:`/${m.value}/customer/dashboard`},null,8,["title","to"]),n(f,{title:t.$tc("settings.setting",2),to:`/${m.value}/customer/settings/customer-profile`,active:""},null,8,["title","to"])]),_:1})]),_:1},8,["title"]),a("div",M,[a("aside",O,[a("nav",U,[n(B,null,{default:o(()=>[(s(!0),w(S,null,k(u,(e,l)=>(s(),i(h,{key:l,title:e.title,to:e.link,active:p(e.link),index:l,class:"py-3"},{icon:o(()=>[(s(),i(y(e.icon),{class:"h-5 w-6"}))]),_:2},1032,["title","to","active","index"]))),128))]),_:1})])])]),a("div",j,[a("div",q,[n(B,null,{default:o(()=>[(s(!0),w(S,null,k(u,(e,l)=>(s(),i(h,{key:l,title:e.title,to:e.link,active:p(e.link),index:l,class:"py-3"},{icon:o(()=>[(s(),i(y(e.icon),{class:"h-5 w-6"}))]),_:2},1032,["title","to","active","index"]))),128))]),_:1})]),a("div",z,[n(C)])])]),_:1})}}};export{W as default};