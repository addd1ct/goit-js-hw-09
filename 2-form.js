import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const l=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-data"));if(e===null)return;for(const t in e)feedbackFormEl.elements[t].value=e[t]}catch(e){console.log(e)}},o=formDataFormLS;l();const m=e=>{const{target:t}=e,a=t.value,r=t.name;o[r]=a,localStorage.setItem("feedback-form-data",JSON.stringify(o))},n=e=>{e.preventDefault(),console.log(o),e.currentTarget.reset(),localStorage.removeItem("feedback-form-data"),o={email:"",message:""}};feedbackFormEl.addEventListener("input",m);feedbackFormEl.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
