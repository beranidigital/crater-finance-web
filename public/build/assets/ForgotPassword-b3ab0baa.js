import{u as w,e as V,F as I,g as _,h as f,i as S,j as q,k as x,r as i,o as l,c as u,a as n,w as m,m as r,t as d,b as N,q as M,s as F,v as C,$ as D}from"./main-55335c70.js";const E={key:0},G={key:1},j={class:"mt-4 mb-4 text-sm"},T={__name:"ForgotPassword",setup(L){const g=w(),{t:c}=V(),o=I({email:""}),p=_(!1),t=_(!1),$={email:{required:f.withMessage(c("validation.required"),S),email:f.withMessage(c("validation.email_incorrect"),q)}},a=x($,o);async function y(s){if(a.value.$touch(),!a.value.$invalid)try{t.value=!0,(await C.post("/api/v1/auth/password/email",o)).data&&g.showNotification({type:"success",message:"Mail sent successfully"}),p.value=!0,t.value=!1}catch(e){D(e),t.value=!1}}return(s,e)=>{const h=i("BaseInput"),b=i("BaseInputGroup"),B=i("BaseButton"),k=i("router-link");return l(),u("form",{id:"loginForm",onSubmit:F(y,["prevent"])},[n(b,{error:r(a).email.$error&&r(a).email.$errors[0].$message,label:s.$t("login.enter_email"),class:"mb-4",required:""},{default:m(()=>[n(h,{modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=v=>o.email=v),invalid:r(a).email.$error,focus:"",type:"email",name:"email",onInput:e[1]||(e[1]=v=>r(a).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),n(B,{loading:t.value,disabled:t.value,type:"submit",variant:"primary"},{default:m(()=>[p.value?(l(),u("div",G,d(s.$t("validation.not_yet")),1)):(l(),u("div",E,d(s.$t("validation.send_reset_link")),1))]),_:1},8,["loading","disabled"]),N("div",j,[n(k,{to:"/login",class:"text-sm text-primary-400 hover:text-gray-700"},{default:m(()=>[M(d(s.$t("general.back_to_login")),1)]),_:1})])],32)}}};export{T as default};