const balance = document.getElementById('balance);
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElemntById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('');

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);
let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

    function addTransaction(e) {
        e.preventDefault();
        if (text.value.trim() === '' amount.value.trim() === '') {
            alert('Please add a text and amount');
        } else {
            const transaction = {
                id: generateID(),
                text: text.valu,
                amount: +amount.value
            };
            transactions.push(transaction);
            addTransactionDOM(transaction);
            updateValues();
            updateLocalStorage;
            text.value = '';
            amount.value = '';
        }
    }
    