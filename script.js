document.getElementById("Projects").onclick = function(e) {
    if (e.target.dataset.proj) {
        let box = document.getElementById("projectAlert");
        box.textContent = "Youclicked : " + e.target.dataset.proj + "✅";
        BaseAudioContext.classlist.remove("d-none");
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
    .then(res =>)


