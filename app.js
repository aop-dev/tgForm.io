document.getElementById("form__tg").addEventListener('submit', function (e) {
    e.preventDefault();
});

let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.setText("Відправити дані для обробки");
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    const formData = {
        firstname: this.firstName.value,
        lastname: this.lastName.value,
        middlename: this.middleName.value,
        code: this.code.value 
    };
    tg.sendData(formData);
});

let usercard = document.getElementsByClassName("form__usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChaild(p);



