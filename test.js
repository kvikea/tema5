 //find DOM elementer
 let container = document.querySelector("#personliste");
 let personer;
 //hent json
 async function getJson() {
     let liste = await fetch("personer.json");
     personer = await liste.json();
     //console.log(personer);
     visPersoner();
 }

 function visPersoner() {
     // vis personer i DOM
     personer.forEach(person => {
         //opret element og indsÃ¦t i DOM
         const clon = ` <section class="person" >
        <h3 data-navn>${person.fornavn} ${person.efternavn}</h3>
        <p >email: ${person.email}</p>
        <p  data-linktosingle>Se single</p>
        </section>`;
         container.insertAdjacentHTML('beforeend', clon);

         let nr = container.querySelectorAll(".person").length - 1;
         //jeg bruger email som id, da den er unik
         const id = person.email;
         //nÃ¥r der klikkes pÃ¥ en person gemmes denne i sessionStorage
         container.querySelectorAll(".person")[nr].addEventListener("click", () => {
             sessionStorage.setItem("single", JSON.stringify(person));
             //visSingle();
             //id bliver sendt med som urlvariabel til singleside
             location.href = `single2.html?id=${id}`;
             console.log(id);
         });
     });
 }

 /*function visSingle() {
     let mySingle = sessionStorage.getItem("single");
     let info = JSON.parse(mySingle);
     console.log(info);
 }*/
 //lÃ¦s script nÃ¥r DOM er hentet
 document.addEventListener("DOMContentLoaded", getJson);
