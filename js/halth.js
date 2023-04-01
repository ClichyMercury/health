const ENVOYER_button = document.querySelector(".update")
submit_button.onclick = (e) => {
  // toutes les données d'entree on reçu ces variables
  const fname = document.getElementById("nom").value;
  const lname= document.getElementById("prenom").value;
  const Email = document.getElementById("age").value;
  const phone = document.getElementById("sex").value;
  const pass = document.getElementById("contact").value;
//   const cpass = document.getElementById("cpass").value;
e.preventDefaut();
//   stockez maintenant ces donnees dans la boutique de votre site web
localStorage.setItem('nom',fname)
localStorage.setItem('prenom',lname)
localStorage.setItem('Email',email)
localStorage.setItem('phone',sex)
localStorage.setItem('contact',pass)
// localStorage.setItem('password',cpass)

// ecrire une condition
if(fname == "" &&  lname == "" &&  email == "" &&  pass == "" && ){
    // changer le systeme d'alert
    swal("Opps..!", "le champ de saisie doit être rempli!", 
    "error");
}

else{
    if(pass !== cpass){
        swal("opps..!", "password not marching!", "error");
    }else
    {
        swal("Good !", "registration successful!", "success");
    }
}


}