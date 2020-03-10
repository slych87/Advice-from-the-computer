const options = ['opcja 1', 'opcja 2'];

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length)
    console.log(index);
    document.querySelector('h1').textContent = options[index];
}

const addOption = (e) => {
    e.priventDefault();

    const input = document.querySelector('input');
    options.push(input.value);
    alert(`dodana została opcja ${input.value}`);
    input.value = "";
}

const resetOptions = (e) => {
    e.priventDefault();
    option.length = 0;
}

const showOptions = () => {
    alert(options.join(' --- --- '));
}


document.querySelector('.add').addEventListener('click', addOption);

document.querySelector('.clean').addEventListener('click', resetOptions);

document.querySelector('.showAdvice').addEventListener('click', showAdvice);

document.querySelector('.showOptions').addEventListener('click', showOptions);
