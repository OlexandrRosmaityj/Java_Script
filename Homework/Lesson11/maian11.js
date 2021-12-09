//
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

 document.getElementById('btn').onclick = function () {
    let name = document.forms.local.name.value;
    let age= document.forms.local.age.value;
    localStorage.setItem('user', JSON.stringify({age,name}));
};



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

document.getElementById('bt').onclick = function () {
    let model = document.forms.auto.model.value;
    let type = document.forms.auto.type.value;
    let volume = document.forms.auto.volume.value;
    let car = {model:model, type:type, volume:volume};
    let cars = JSON.parse( localStorage.getItem('cars'))
    console.log(cars)
      if (!cars){
        cars = [];
        cars.push(car);
        console.log(cars)
              localStorage.setItem("cars", JSON.stringify(cars))
    }else {
          cars.push(car);
          localStorage.setItem("cars", JSON.stringify(cars))

      }

}

