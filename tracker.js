const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

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
    
    function generateID() {
        return Math.floor(Math.random() * 100000000);
    }
    // Add transactions to DOM list
    function addTransactionDOM(trasaction) {
        // Get sign
        const sign = transaction.amount < 0 ? ' : '+';
        const item = document.createElement('');
        // Add class based on value
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
        item.innerHTML = `
        ${transaction.text} <span>${sasn}${Math.abs(
            transaction.amount
        )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id
            })">x</button>
      `;
        list.appendChild(item);
    }
    function updateValues() {
        const amounts = transactions.map(transacton => transaction.amount);
        const total = amounts.reduce((, item) => (acc += item), 0).toFixed(2);
        const income = amounts
            .filter(item => item > 0)
            .toFixed(2);
        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
        ).toFixed(2)
        balance.innerText = `$${total}`;
        money_plus.innerText = `$${inome}`;
        money_minus.innerText = `$${expense}`;
    }
    