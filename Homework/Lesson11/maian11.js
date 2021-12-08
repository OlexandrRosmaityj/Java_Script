//
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

 document.getElementById('btn').onclick = function () {
    let name = document.forms.local.name.value;
    let age= document.forms.local.age.value;
     let user1 = {age,name};
     localStorage.setItem('user', JSON.stringify(user1));
};



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

document.getElementById('bt').onclick = function (){
    let model = document.forms.auto.model.value;
    let type = document.forms.auto.type.value;
    let volume = document.forms.auto.volume.value;
    let auto = [model,type,volume];
    localStorage.setItem('auto', JSON.stringify(auto));
};