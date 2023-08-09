let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.setText("Відправити дані для обробки");
tg.MainButton.show();


Telegram.WebApp.onEvent("mainButtonClicked", function(){
        const formData = {
        firstname: document.getElementById("firstName").value,
        lastname: document.getElementById("lastName").value,
        middlename: document.getElementById("middleName").value,
        code: document.getElementById("code").value};

        tg.sendData(JSON.stringify(formData));
});

let usercard = document.getElementsByClassName("form__usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChaild(p);




