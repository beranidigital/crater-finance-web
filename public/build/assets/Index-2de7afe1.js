import{D as A,e as E,g as U,l as j,h as v,i as C,G as K,j as X,k as Y,W as Q,r as m,o as y,n as B,w as o,b as k,q as x,t as h,m as e,a as t,s as J,a1 as Z,I as G,H as F,a5 as ee,J as ae,F as te,ag as O,a3 as ne}from"./main-55335c70.js";import{u as L}from"./mail-sender-1c84da3c.js";import{_ as re,a as le,b as oe}from"./SesDriver-3a94734a.js";const se={class:"flex justify-between w-full"},ie={class:"p-4 sm:p-6 my-2"},de={class:"z-0 flex justify-end p-4 border-t border-solid border--200 border-modal-bg"},S="settings.mail_sender",ue={__name:"MailSenderModal",setup(I){const c=A(),r=L(),{t:i}=E();let _=U(!1);const f=j(()=>{switch(r.currentMailSender.driver){case"smtp":return oe;case"mail":return!1;case"sendmail":return!1;case"mailgun":return le;case"ses":return re;default:return!1}}),g=l=>{if(l==""||l===null)return!0;const a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;return l.split(",").every(d=>a.test(d))},q=j(()=>({name:{required:v.withMessage(i("validation.required"),C),minLength:v.withMessage(i("validation.name_min_length",{count:3}),K(3))},from_name:{required:v.withMessage(i("validation.required"),C)},from_address:{required:v.withMessage(i("validation.required"),C),email:v.withMessage(i("validation.email_incorrect"),X)},cc:{multiEmail:v.withMessage(i("validation.email_incorrect"),g)},bcc:{multiEmail:v.withMessage(i("validation.email_incorrect"),g)},driver:{required:v.withMessage(i("validation.required"),C)}})),s=Y(q,j(()=>r.currentMailSender));async function V(){if(s.value.$touch(),s.value.$invalid)return!0;try{const a=r.isEdit?r.updateMailSender:r.addMailSender;_.value=!0;var l=null;switch(r.currentMailSender.driver){case"smtp":l=r.smtpConfig;break;case"mailgun":l=r.mailgunConfig;break;case"ses":l=r.sesConfig;break}r.currentMailSender.settings=l;let $=await a(r.currentMailSender);_.value=!1,c.refreshData&&c.refreshData($.data.data),n()}catch{return _.value=!1,!0}}function n(){c.closeModal(),setTimeout(()=>{r.resetCurrentMailSender(),s.value.$reset()},300)}return Q(async()=>{await r.fetchMailDrivers()}),(l,a)=>{const $=m("BaseIcon"),u=m("BaseInput"),d=m("BaseInputGroup"),w=m("BaseMultiselect"),M=m("BaseInputGrid"),z=m("BaseDivider"),T=m("BaseSwitchSection"),N=m("BaseButton"),P=m("BaseModal");return y(),B(P,{show:e(c).active&&e(c).componentName==="MailSenderModal"},{header:o(()=>[k("div",se,[x(h(e(c).title)+" ",1),t($,{name:"XIcon",class:"h-6 w-6 text-gray-500 cursor-pointer",onClick:n})])]),default:o(()=>[k("form",{action:"",onSubmit:J(V,["prevent"])},[k("div",ie,[t(M,null,{default:o(()=>[t(d,{label:l.$t(`${S}.name`),error:e(s).name.$error&&e(s).name.$errors[0].$message,"help-text":l.$t(`${S}.name_help`),required:""},{default:o(()=>[t(u,{modelValue:e(r).currentMailSender.name,"onUpdate:modelValue":a[0]||(a[0]=p=>e(r).currentMailSender.name=p),modelModifiers:{trim:!0},invalid:e(s).name.$error,type:"text",onInput:a[1]||(a[1]=p=>e(s).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error","help-text"]),t(d,{label:l.$t(`${S}.from_name`),error:e(s).from_name.$error&&e(s).from_name.$errors[0].$message,required:""},{default:o(()=>[t(u,{modelValue:e(r).currentMailSender.from_name,"onUpdate:modelValue":a[2]||(a[2]=p=>e(r).currentMailSender.from_name=p),invalid:e(s).from_name.$error,type:"text",onInput:a[3]||(a[3]=p=>e(s).from_name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),t(d,{label:l.$t(`${S}.from_address`),error:e(s).from_address.$error&&e(s).from_address.$errors[0].$message,required:""},{default:o(()=>[t(u,{modelValue:e(r).currentMailSender.from_address,"onUpdate:modelValue":a[4]||(a[4]=p=>e(r).currentMailSender.from_address=p),invalid:e(s).from_address.$error,type:"text",onInput:a[5]||(a[5]=p=>e(s).from_address.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),t(d,{label:l.$t(`${S}.cc`),error:e(s).cc.$error&&e(s).cc.$errors[0].$message,"help-text":l.$t(`${S}.email_list`)},{default:o(()=>[t(u,{modelValue:e(r).currentMailSender.cc,"onUpdate:modelValue":a[6]||(a[6]=p=>e(r).currentMailSender.cc=p),invalid:e(s).cc.$error,type:"text",onInput:a[7]||(a[7]=p=>e(s).cc.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error","help-text"]),t(d,{label:l.$t(`${S}.bcc`),error:e(s).bcc.$error&&e(s).bcc.$errors[0].$message,"help-text":l.$t(`${S}.email_list`)},{default:o(()=>[t(u,{modelValue:e(r).currentMailSender.bcc,"onUpdate:modelValue":a[8]||(a[8]=p=>e(r).currentMailSender.bcc=p),invalid:e(s).bcc.$error,type:"text",onInput:a[9]||(a[9]=p=>e(s).bcc.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error","help-text"]),t(d,{label:l.$t(`${S}.driver`),error:e(s).driver.$error&&e(s).driver.$errors[0].$message,required:""},{default:o(()=>[t(w,{modelValue:e(r).currentMailSender.driver,"onUpdate:modelValue":a[10]||(a[10]=p=>e(r).currentMailSender.driver=p),options:e(r).mail_drivers,"can-deselect":!1,invalid:e(s).driver.$error},null,8,["modelValue","options","invalid"])]),_:1},8,["label","error"]),(y(),B(Z(f.value),{"mail-sender-store":e(r)},null,8,["mail-sender-store"]))]),_:1}),t(z,{class:"mt-4 mb-0"}),e(r).isDisable?G("",!0):(y(),B(T,{key:0,modelValue:e(r).currentMailSender.is_default,"onUpdate:modelValue":a[11]||(a[11]=p=>e(r).currentMailSender.is_default=p),title:l.$t(`${S}.is_default`),description:l.$t(`${S}.is_default_description`)},null,8,["modelValue","title","description"]))]),k("div",de,[t(N,{class:"mr-3 text-sm",variant:"primary-outline",type:"button",onClick:n},{default:o(()=>[x(h(l.$t("general.cancel")),1)]),_:1}),t(N,{loading:e(_),disabled:e(_),variant:"primary",type:"submit"},{left:o(p=>[e(_)?G("",!0):(y(),B($,{key:0,name:"SaveIcon",class:F(p.class)},null,8,["class"]))]),default:o(()=>[x(" "+h(e(r).isEdit?l.$t("general.update"):l.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}},H="settings.mail_sender",me={__name:"MailSenderIndexDropdown",props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(I){const c=I,r=ee(),{t:i}=E(),_=L(),f=ae(),g=A();async function q(n){await _.fetchMailSender(n),g.openModal({title:i(`${H}.edit_mail_sender`),componentName:"MailSenderModal",size:"md",refreshData:c.loadData&&c.loadData})}function s(n){r.openDialog({title:i("general.are_you_sure"),message:i(`${H}.confirm_delete`),yesLabel:i("general.ok"),noLabel:i("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async l=>{if(l){if((await _.deleteMailSender(n)).data.success)return c.loadData&&c.loadData(),!0;c.loadData&&c.loadData()}})}async function V(n){g.openModal({title:i("general.send_test_mail"),componentName:"MailSenderTestModal",size:"md",id:n,refreshData:c.loadData&&c.loadData})}return(n,l)=>{const a=m("BaseIcon"),$=m("BaseButton"),u=m("BaseDropdownItem"),d=m("BaseDropdown");return y(),B(d,null,{activator:o(()=>[e(f).name==="mailsender.view"?(y(),B($,{key:0,variant:"primary"},{default:o(()=>[t(a,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(y(),B(a,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:o(()=>[t(u,{onClick:l[0]||(l[0]=w=>q(I.row.id))},{default:o(()=>[t(a,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),x(" "+h(n.$t("general.edit")),1)]),_:1}),t(u,{onClick:l[1]||(l[1]=w=>V(I.row.id))},{default:o(()=>[t(a,{name:"PaperAirplaneIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),x(" "+h(n.$t("general.send_test_mail")),1)]),_:1}),I.row.is_default?G("",!0):(y(),B(u,{key:0,onClick:l[2]||(l[2]=w=>s(I.row.id))},{default:o(()=>[t(a,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),x(" "+h(n.$t("general.delete")),1)]),_:1}))]),_:1})}}},ce={class:"flex justify-between w-full"},pe={class:"p-4 md:p-8"},fe={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},R="settings.mail_sender",ge={__name:"MailSenderTestModal",setup(I){const c=A(),r=L(),{t:i}=E();let _=U(!1),f=te({mail_sender_id:"",to:"",subject:"",message:""});const g=U(!1),q=j(()=>c.active&&c.componentName==="MailSenderTestModal");function s(){g.value=!0,f.mail_sender_id=c.id,setTimeout(()=>{g.value=!1},100)}const V={mail_sender_id:{required:v.withMessage(i("validation.required"),C)},to:{required:v.withMessage(i("validation.required"),C),email:v.withMessage(i("validation.email_incorrect"),X)},subject:{required:v.withMessage(i("validation.required"),C),maxLength:v.withMessage(i("validation.subject_maxlength"),O(100))},message:{required:v.withMessage(i("validation.required"),C),maxLength:v.withMessage(i("validation.message_maxlength"),O(255))}},n=Y(V,f);function l(){f.mail_sender_id="",f.to="",f.subject="",f.message="",n.value.$reset()}async function a(){if(n.value.$touch(),n.value.$invalid)return!0;_.value=!0,(await r.sendTestMail(f)).data&&$()}function $(){c.closeModal(),setTimeout(()=>{_.value=!1,c.resetModalData(),l()},300)}return(u,d)=>{const w=m("BaseIcon"),M=m("BaseMultiselect"),z=m("BaseInputGroup"),T=m("BaseInput"),N=m("BaseTextarea"),P=m("BaseInputGrid"),p=m("BaseButton"),W=m("BaseModal");return y(),B(W,{show:q.value,onOpen:s},{header:o(()=>[k("div",ce,[x(h(e(c).title)+" ",1),t(w,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:$})])]),default:o(()=>[k("form",{action:"",onSubmit:J(a,["prevent"])},[k("div",pe,[t(P,{layout:"one-column"},{default:o(()=>[t(z,{label:u.$t(`${R}.title`),variant:"horizontal","content-loading":g.value,error:e(n).mail_sender_id.$error&&e(n).mail_sender_id.$errors[0].$message},{default:o(()=>[t(M,{modelValue:e(f).mail_sender_id,"onUpdate:modelValue":d[0]||(d[0]=b=>e(f).mail_sender_id=b),invalid:e(n).mail_sender_id.$error,label:"name",options:e(r).mailSenders,"value-prop":"id","can-deselect":!1,"can-clear":!1,placeholder:u.$t(`${R}.select_mail_sender`),searchable:"","track-by":"name","content-loading":g.value},null,8,["modelValue","invalid","options","placeholder","content-loading"])]),_:1},8,["label","content-loading","error"]),t(z,{label:u.$t("general.to"),error:e(n).to.$error&&e(n).to.$errors[0].$message,variant:"horizontal",required:"","content-loading":g.value},{default:o(()=>[t(T,{modelValue:e(f).to,"onUpdate:modelValue":d[1]||(d[1]=b=>e(f).to=b),type:"text",invalid:e(n).to.$error,"content-loading":g.value,onInput:d[2]||(d[2]=b=>e(n).to.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"]),t(z,{label:u.$t("general.subject"),error:e(n).subject.$error&&e(n).subject.$errors[0].$message,variant:"horizontal",required:"","content-loading":g.value},{default:o(()=>[t(T,{modelValue:e(f).subject,"onUpdate:modelValue":d[3]||(d[3]=b=>e(f).subject=b),type:"text",invalid:e(n).subject.$error,"content-loading":g.value,onInput:d[4]||(d[4]=b=>e(n).subject.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"]),t(z,{label:u.$t("general.message"),error:e(n).message.$error&&e(n).message.$errors[0].$message,variant:"horizontal",required:"","content-loading":g.value},{default:o(()=>[t(N,{modelValue:e(f).message,"onUpdate:modelValue":d[5]||(d[5]=b=>e(f).message=b),rows:"4",cols:"50",invalid:e(n).message.$error,"content-loading":g.value,onInput:d[6]||(d[6]=b=>e(n).message.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"])]),_:1})]),k("div",fe,[t(p,{variant:"primary-outline",type:"button",class:"mr-3","content-loading":g.value,onClick:d[7]||(d[7]=b=>$())},{default:o(()=>[x(h(u.$t("general.cancel")),1)]),_:1},8,["content-loading"]),t(p,{loading:e(_),variant:"primary",type:"submit","content-loading":g.value},{left:o(b=>[e(_)?G("",!0):(y(),B(w,{key:0,name:"PaperAirplaneIcon",class:F(b.class)},null,8,["class"]))]),default:o(()=>[x(" "+h(u.$t("general.send")),1)]),_:1},8,["loading","content-loading"])])],32)]),_:1},8,["show"])}}},D="settings.mail_sender",be={__name:"Index",setup(I){const c=A(),r=L(),{t:i}=E(),_=U(null),f=ne("utils");function g(){c.openModal({title:i(`${D}.add_new_mail_sender`),componentName:"MailSenderModal",size:"md",refreshData:V})}const q=j(()=>[{key:"name",label:i(`${D}.name`),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"driver",label:i(`${D}.driver`),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"from_address",label:i(`${D}.from_address`),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"is_default",label:i(`${D}.is_default`),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function s({page:n,filter:l,sort:a}){let $={orderByField:a.fieldName||"created_at",orderBy:a.order||"desc",page:n},u=await r.fetchMailSenders($);return{data:u.data.data,pagination:{totalPages:u.data.meta.last_page,currentPage:n,totalCount:u.data.meta.total,limit:u.data.meta.per_page?u.data.meta.per_page:10}}}async function V(){_.value&&_.value.refresh()}return(n,l)=>{const a=m("BaseIcon"),$=m("BaseButton"),u=m("BaseBadge"),d=m("BaseTable"),w=m("BaseSettingCard");return y(),B(w,{title:n.$tc(`${D}.title`,2),description:n.$t(`${D}.description`)},{action:o(()=>[t($,{type:"submit",variant:"primary-outline",onClick:g},{left:o(M=>[t(a,{class:F(M.class),name:"PlusIcon"},null,8,["class"])]),default:o(()=>[x(" "+h(n.$t(`${D}.add_new_mail_sender`)),1)]),_:1})]),default:o(()=>[t(ue),t(ge),t(d,{ref_key:"table",ref:_,class:"mt-16",data:s,columns:q.value},{"cell-is_default":o(({row:M})=>[t(u,{"bg-color":e(f).getBadgeStatusColor(M.data.is_default?"YES":"NO").bgColor,color:e(f).getBadgeStatusColor(M.data.is_default?"YES":"NO").color},{default:o(()=>[x(h(M.data.is_default?n.$t("general.yes"):n.$t("general.no")),1)]),_:2},1032,["bg-color","color"])]),"cell-actions":o(({row:M})=>[t(me,{row:M.data,table:_.value,"load-data":V},null,8,["row","table"])]),_:1},8,["columns"])]),_:1},8,["title","description"])}}};export{be as default};