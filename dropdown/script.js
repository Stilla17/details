const menu = document.getElementById("menu"),
    chevron = document.getElementById("chevron");

const toggleDropdown = () => {
    menu.classList.toggle("open");
    chevron.className = !menu.classList.contains("open") ? "fa fa-chevron-down" : "fa fa-chevron-up";
};

const handleMainButtonClicked = () =>
    alert("Main button clicked");

const handleMenuButtonClicked = () => {
    toggleDropdown();
};


function validSequence(braces) {
    var stack = [];
    var last;

    for (var i = 0; i < braces.length; i++) {
        if (braces[i] == '(') {
            stack.push(braces[i]);
        } else if (braces[i] == ')') {
            if (stack.length) {
                last = stack[stack.length - 1];
                if ((last == '(' && braces[i] == ')')) {
                    stack.pop();
                }
            } else return false;
        }
    }
    return (!stack.length);
}

console.log(validSequence('()')); //true
console.log(validSequence(')(()))')); //false
console.log(validSequence('(')); //false
console.log(validSequence('(())((()())())')); //true