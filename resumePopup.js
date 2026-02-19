const resumeBtn = document.getElementById("resumeBtn");
const overlay = document.getElementById("resumeOverlay");

if(resumeBtn){
resumeBtn.addEventListener("click", () => {
overlay.classList.add("active");
});
}

function closeResume(){
overlay.classList.remove("active");
}

overlay.addEventListener("click", e=>{
if(e.target === overlay){
closeResume();
}
});

document.addEventListener("keydown", e=>{
if(e.key === "Escape"){
closeResume();
}
});
