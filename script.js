document.getElementById("projects").onclick = function(e) {
    if (e.target.dataset.proj) {
        let box = document.getElementById("projectAlert");
        box.textContent = "Youclicked : " + e.target.dataset.proj + "✅";
        box.classList.remove("d-none");
        setTimeout(() => box.classList.add ("d-none"),3000);
    }
};
document.getElementById("contractForm").onsubmit = function(e) {
    e.preventDefault(); let form = this;
    fetch(form.action,{
        method : "POST",
        body:  new FormData(form),
        headers : { Accept: "application/json"}
    })

    .then(res => {
        if (res.ok) {
            document.getElementById("sendOk").classList.remove("d-none");
            form.reset();
        } else {
            document.getElementById("sentFail").classList.remove("d-none");
        }
    })
    .catch(() => {
        document.getElementById("sentFail").classList.remove("d-none");
    });
};
    const h=document.querySelector(".hero"),b=document.querySelector(".navbar-brand"),
    t=()=>b.classList.toggle("hide", h.gerBouncingClientRect().bottom > 60 );
    t(); addEventListener("scroll",t);
    