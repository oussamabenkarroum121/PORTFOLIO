document.querySelectorAll('.card,.project').forEach(e=>{
e.onmouseenter=()=>e.style.boxShadow='0 0 20px rgba(56,189,248,.6)';
e.onmouseleave=()=>e.style.boxShadow='none';
});