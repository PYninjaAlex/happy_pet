let description = document.querySelector(".description")
let cat_name = document.querySelector(".span_cat")
let price = document.querySelector('.price')

const pages = [
    document.querySelector('#corgi'),
    document.querySelector('#labrador_white'),
    document.querySelector('#labrador'),
    document.querySelector('#pug')
];

const next = () => {
    document.querySelector(".left").style.display = "block"
    if (cat_name.innerHTML === "Мопс") {
        pages[3].style.display = 'none';
        pages[0].style = "display: block;\n" +
            "position: absolute;\n" +
            "    width: 269px;\n" +
            "    height: 302px;\n" +
            "    left: 79px;\n" +
            "    top: 90px;"

        cat_name.innerHTML = "Корги";
        cat_name.style = "position: absolute;\n" +
            "    width: 250px;\n" +
            "    height: 48px;\n" +
            "    left: 150px;\n" +
            "    top: 380px;\n" +
            "\n" +
            "    font-family: 'Inter', serif;\n" +
            "    font-style: normal;\n" +
            "    font-weight: 600;\n" +
            "    font-size: 40px;\n" +
            "    line-height: 48px;"

        description.style = "position: absolute;\n" +
            "    width: 373px;\n" +
            "    height: 79px;\n" +
            "    left: 20px;\n" +
            "    top: 460px;\n" +
            "\n" +
            "    font-family: 'Inter', serif;\n" +
            "    font-style: normal;\n" +
            "    font-weight: 600;\n" +
            "    font-size: 30px;\n" +
            "    line-height: 36px;\n" +
            "    text-align: center;\n" +
            "    letter-spacing: 0.08em;";

        description.innerHTML = "Милый пушистый друг любит поиграть";

        price.innerHTML = "50000р"
        return 0
    }

    if (cat_name.innerHTML === "Корги") {
        pages[0].style.display = 'none'
        pages[1].style = "display: block;" +
            "position: absolute;\n" +
            "width: 163.87px;\n" +
            "height: 302px;\n" +
            "left: 150px;\n" +
            "top: 70px;";

        cat_name.innerHTML = "Долматинец";
        cat_name.style = "position: absolute;\n" +
            "width: 303px;\n" +
            "height: 48px;\n" +
            "left: 85px;\n" +
            "top: 380px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 800;\n" +
            "font-size: 40px;\n" +
            "line-height: 48px;"

        description.style = "position: absolute;\n" +
            "width: 450px;\n" +
            "height: 79px;\n" +
            "left: -20px;\n" +
            "top: 460px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 600;\n" +
            "font-size: 30px;\n" +
            "line-height: 36px;\n" +
            "letter-spacing: 0.08em;";

        description.innerHTML = "Маленький красивый настоящий защитник";

        price.innerHTML = "45000р"
        return 0
    }

    if (cat_name.innerHTML === "Долматинец") {
        pages[1].style.display = 'none'
        pages[2].style = "display: block;\n" +
            "position: absolute;\n" +
            "width: 220.82px;\n" +
            "height: 350px;\n" +
            "left: 108px;\n" +
            "top: 42px;"

        cat_name.innerHTML = "Лабрадор";
        cat_name.style = "position: absolute;\n" +
            "width: 198px;\n" +
            "height: 48px;\n" +
            "left: 115px;\n" +
            "top: 380px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 800;\n" +
            "font-size: 40px;\n" +
            "line-height: 48px;";

        description.style = "position: absolute;\n" +
            "width: 450px;\n" +
            "height: 79px;\n" +
            "left: -23px;\n" +
            "top: 460px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 600;\n" +
            "font-size: 30px;\n" +
            "line-height: 36px;\n" +
            "text-align: center;\n" +
            "letter-spacing: 0.08em;";

        description.innerHTML = "Большой пушистый настоящий друг"

        price.innerHTML = "60000р"
        return 0
    }

    if (cat_name.innerHTML === "Лабрадор") {
        pages[2].style.display = 'none'
        pages[3].style = "display: block;\n" +
            "position: absolute;\n" +
            "width: 284.17px;\n" +
            "height: 302px;\n" +
            "left: 70px;\n" +
            "top: 90px;"

        cat_name.innerHTML = "Мопс";
        cat_name.style = "position: absolute;\n" +
            "width: 303px;\n" +
            "height: 48px;\n" +
            "left: 155px;\n" +
            "top: 380px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 800;\n" +
            "font-size: 40px;\n" +
            "line-height: 48px;"

        description.style = "position: absolute;\n" +
            "width: 450px;\n" +
            "height: 79px;\n" +
            "left: -23px;\n" +
            "top: 460px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 600;\n" +
            "font-size: 30px;\n" +
            "line-height: 36px;\n" +
            "text-align: center;\n" +
            "letter-spacing: 0.08em;";

        description.innerHTML = "Милый храпящий дружелюбный друг"

        price.innerHTML = "30000р"
        return 0
    }
}

const back = () => {
    if (cat_name.innerHTML === "Корги") {
        pages[0].style.display = 'none'
        pages[3].style = "display: block;\n" +
            "position: absolute;\n" +
            "width: 284.17px;\n" +
            "height: 302px;\n" +
            "left: 70px;\n" +
            "top: 90px;"

        cat_name.innerHTML = "Мопс";
        cat_name.style = "position: absolute;\n" +
            "width: 303px;\n" +
            "height: 48px;\n" +
            "left: 155px;\n" +
            "top: 380px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 800;\n" +
            "font-size: 40px;\n" +
            "line-height: 48px;"

        description.style = "position: absolute;\n" +
            "width: 450px;\n" +
            "height: 79px;\n" +
            "left: -23px;\n" +
            "top: 460px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 600;\n" +
            "font-size: 30px;\n" +
            "line-height: 36px;\n" +
            "text-align: center;\n" +
            "letter-spacing: 0.08em;";

        description.innerHTML = "Милый храпящий дружелюбный друг";

        price.innerHTML = "30000р";
        return 0
    }

    if (cat_name.innerHTML === "Мопс") {
        pages[3].style.display = 'none'
        pages[2].style = "display: block;\n" +
            "position: absolute;\n" +
            "width: 220.82px;\n" +
            "height: 350px;\n" +
            "left: 108px;\n" +
            "top: 42px;"

        cat_name.innerHTML = "Лабрадор";
        cat_name.style = "position: absolute;\n" +
            "width: 198px;\n" +
            "height: 48px;\n" +
            "left: 115px;\n" +
            "top: 380px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 800;\n" +
            "font-size: 40px;\n" +
            "line-height: 48px;";

        description.style = "position: absolute;\n" +
            "width: 450px;\n" +
            "height: 79px;\n" +
            "left: -23px;\n" +
            "top: 460px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 600;\n" +
            "font-size: 30px;\n" +
            "line-height: 36px;\n" +
            "text-align: center;\n" +
            "letter-spacing: 0.08em;";

        description.innerHTML = "Большой пушистый настоящий друг";

        price.innerHTML = "60000р";
        return 0
    }

    if (cat_name.innerHTML === "Лабрадор") {
        pages[2].style.display = 'none'
        pages[1].style = "display: block;" +
            "position: absolute;\n" +
            "width: 163.87px;\n" +
            "height: 302px;\n" +
            "left: 150px;\n" +
            "top: 70px;";

        cat_name.innerHTML = "Долматинец";
        cat_name.style = "position: absolute;\n" +
            "width: 303px;\n" +
            "height: 48px;\n" +
            "left: 85px;\n" +
            "top: 380px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 800;\n" +
            "font-size: 40px;\n" +
            "line-height: 48px;";

        description.style = "position: absolute;\n" +
            "width: 450px;\n" +
            "height: 79px;\n" +
            "left: -20px;\n" +
            "top: 460px;\n" +
            "\n" +
            "font-family: 'Inter';\n" +
            "font-style: normal;\n" +
            "font-weight: 600;\n" +
            "font-size: 30px;\n" +
            "line-height: 36px;\n" +
            "letter-spacing: 0.08em;";

        description.innerHTML = "Маленький красивый настоящий защитник";

        price.innerHTML = "45000р";
        return 0
    }

    if (cat_name.innerHTML === "Долматинец") {
        pages[1].style.display = 'none';
        pages[0].style = "display: block;\n" +
            "position: absolute;\n" +
            "    width: 269px;\n" +
            "    height: 302px;\n" +
            "    left: 79px;\n" +
            "    top: 90px;"

        cat_name.innerHTML = "Корги";
        cat_name.style = "position: absolute;\n" +
            "    width: 250px;\n" +
            "    height: 48px;\n" +
            "    left: 150px;\n" +
            "    top: 380px;\n" +
            "\n" +
            "    font-family: 'Inter', serif;\n" +
            "    font-style: normal;\n" +
            "    font-weight: 600;\n" +
            "    font-size: 40px;\n" +
            "    line-height: 48px;"

        description.style = "position: absolute;\n" +
            "    width: 373px;\n" +
            "    height: 79px;\n" +
            "    left: 20px;\n" +
            "    top: 460px;\n" +
            "\n" +
            "    font-family: 'Inter', serif;\n" +
            "    font-style: normal;\n" +
            "    font-weight: 600;\n" +
            "    font-size: 30px;\n" +
            "    line-height: 36px;\n" +
            "    text-align: center;\n" +
            "    letter-spacing: 0.08em;";

        description.innerHTML = "Милый пушистый друг любит поиграть";

        price.innerHTML = "50000р";
        return 0
    }
}