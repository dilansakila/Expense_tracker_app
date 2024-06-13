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
    