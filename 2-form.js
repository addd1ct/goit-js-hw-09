import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let m;const a=m;let r;const n=()=>{let t;try{const e=JSON.parse(localStorage.getItem("feedback-form-data"));if(e===null)return;for(const o in e)t.elements[o].value=e[o]}catch(e){console.log(e)}};n();const c=t=>{const{target:e}=t,o=e.value,l=e.name;a[l]=o,localStorage.setItem("feedback-form-data",JSON.stringify(a))},s=t=>{t.preventDefault(),console.log(a),t.currentTarget.reset(),localStorage.removeItem("feedback-form-data"),a={email:"",message:""}};r.addEventListener("input",c);r.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
