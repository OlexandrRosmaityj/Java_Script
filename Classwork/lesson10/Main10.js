// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.getElementById('btn').onclick = function () {
    let i11 = document.forms.f1.i11.value;
    let i12 = document.forms.f1.i12.value;
    let i21 = document.forms.f2.i21.value;
    let i22 = document.forms.f2.i22.value;
    console.log(i11, i12, i21, i22);

};