import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let r={};const o=document.querySelector(".feedback-for"),n=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-data"));if(e===null)return;for(const t in e)o.elements[t]&&(o.elements[t].value=e[t])}catch(e){console.log(e)}};n();const c=e=>{const{target:t}=e,a=t.value,l=t.name;r[l]=a,localStorage.setItem("feedback-form-data",JSON.stringify(r))},s=e=>{e.preventDefault(),console.log(r),e.currentTarget.reset(),localStorage.removeItem("feedback-form-data"),r={email:"",message:""}};o?(o.addEventListener("input",c),o.addEventListener("submit",s)):console.error("Форма не найдена!");
//# sourceMappingURL=2-form.js.map
