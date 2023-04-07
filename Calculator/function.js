let btn = Array.from(document.querySelectorAll('.button_click'));
let res = document.querySelector('#res');

btn.map((btnValue) => {
    btnValue.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case 'c':
                res.innerHTML = '';
                break;
            case '<-':
                res.innerHTML = res.innerHTML.slice(0, -1);
                break;
            case '=':
                try {
                    res.innerHTML = eval(res.textContent);
                } catch (e) {
                    res.innerHTML = 'Error';
                }
                btn.innerHTML = '';
                break;

            default:
                res.innerHTML += e.target.textContent;
        }
    })
});