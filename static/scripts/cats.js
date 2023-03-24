let count = 0
const next = () => {
    count += 1
    if (count === 4) {
        count = 0
    }
    let description = document.querySelector(".description")
    let cat_name = document.querySelector(".span_cat")
    let price = document.querySelector('.price')
    const pages = [
        document.querySelector('#mein_cun'),
        document.querySelector('#american'),
        document.querySelector('#napoleon'),
        document.querySelector('#britain')
    ];

    if (count === 0) {
        pages[3].style.display = 'none';
        pages[count].style = "display: block;" +
            "position: absolute;\n" +
            "    width: 300px;\n" +
            "    height: 311.15px;\n" +
            "    left: 60px;\n" +
            "    top: 70px;";

        cat_name.innerHTML = "Мейн-кун";
        cat_name.style = "position: absolute;\n" +
            "    width: 250px;\n" +
            "    height: 48px;\n" +
            "    left: 109px;\n" +
            "    top: 390px;\n" +
            "\n" +
            "    font-family: 'Inter', serif;\n" +
            "    font-style: normal;\n" +
            "    font-weight: 600;\n" +
            "    font-size: 40px;\n" +
            "    line-height: 48px;";

        description.style = "position: absolute;\n" +
            "    width: 373px;\n" +
            "    height: 79px;\n" +
            "    left: 17px;\n" +
            "    top: 460px;\n" +
            "\n" +
            "    font-family: 'Inter', serif;\n" +
            "    font-style: normal;\n" +
            "    font-weight: 600;\n" +
            "    font-size: 30px;\n" +
            "    line-height: 36px;\n" +
            "    text-align: center;\n" +
            "    letter-spacing: 0.08em;";

        description.innerHTML = "Большой ласковый и общительный друг";


        price.innerHTML = "40000р"
    }

    if (count === 1) {
        pages[count-1].style.display = 'none'
        pages[count].style = "display: block;" +
            "position: absolute;\n" +
            "width: 367px;\n" +
            "height: 335px;\n" +
            "left: 30px;\n" +
            "top: 40px;";

        cat_name.innerHTML = "Американская";
        cat_name.style = "position: absolute;\n" +
            "width: 303px;\n" +
            "height: 48px;\n" +
            "left: 60px;\n" +
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

        description.innerHTML = "Милая, ласковая и общительная подруга";

        price.innerHTML = "20000р"
    }
    if (count === 2) {
        pages[count-1].style.display = 'none'
        pages[count].style = "display: block;\n" +
            "position: absolute;\n" +
            "width: 220.82px;\n" +
            "height: 350px;\n" +
            "left: 108px;\n" +
            "top: 55px;"

        cat_name.innerHTML = "Наполеон";
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

        description.innerHTML = "Приятный ласковый и общительный друг"

        price.innerHTML = "35000р"

    } if (count === 3) {
        pages[count-1].style.display = 'none'
        pages[count].style = "display: block;\n" +
            "position: absolute;\n" +
            "width: 396.27px;\n" +
            "height: 400px;\n" +
            "left: 20px;\n" +
            "top: 55px;"

        cat_name.innerHTML = "Британская";
        cat_name.style = "position: absolute;\n" +
            "width: 303px;\n" +
            "height: 48px;\n" +
            "left: 95px;\n" +
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

        description.innerHTML = "Маленькая милая и общительная кошечка"

        price.innerHTML = "70000р"
    }
}