let name = "alex";
let money = 10000;
let account = 7777;

let name2 = prompt('Как вас зовут?').toLowerCase(); 

switch (name2) {
    case name:
        let number = +prompt('Введите номер счёта');
        switch (number) {
            case account:
                let cashOut = +prompt('Сколько обналичить?');
                switch (true) {
                    case (cashOut <= money):
                        alert('Всё отлично!');
                        alert(`Кол-во снятых денег: ${cashOut}`);
                        alert(`Текущий баланс: ${money - cashOut}`);
                        break;
                    default:
                        alert('Недостаточно средств!');
                }
                break;
            default:
                alert('Пользователь не найден, досвидули');
        }
        break;
    default:
        alert('Пользователь не найден, досвидули');
}






