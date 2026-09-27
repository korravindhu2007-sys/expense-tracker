import { useMemo, useState } from 'react';

const starter = [
  { id: 1, title: 'Groceries', category: 'Food', amount: 850 },
  { id: 2, title: 'Bus Pass', category: 'Transport', amount: 300 },
  { id: 3, title: 'Mobile Recharge', category: 'Bills', amount: 249 },
];

export default function App() {
  const [expenses, setExpenses] = useState(starter);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Food');
  const [amount, setAmount] = useState('');

  const total = useMemo(() => expenses.reduce((sum, item) => sum + Number(item.amount), 0), [expenses]);

  function addExpense(e) {
    e.preventDefault();
    if (!title.trim() || !amount || Number(amount) <= 0) return;
    setExpenses([...expenses, { id: Date.now(), title: title.trim(), category, amount: Number(amount) }]);
    setTitle('');
    setAmount('');
  }

  return (
    <div className="app">
      <header>
        <p>PERSONAL FINANCE</p>
        <h1>Expense Tracker</h1>
        <span>Track your spending simply and clearly.</span>
        <div className="total">Total Spent: ₹{total.toLocaleString('en-IN')}</div>
      </header>
      <main>
        <section className="card">
          <h2>Add Expense</h2>
          <form onSubmit={addExpense}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Expense name" />
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option>Food</option><option>Transport</option><option>Bills</option>
              <option>Shopping</option><option>Education</option><option>Other</option>
            </select>
            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount (₹)" />
            <button>Add Expense</button>
          </form>
        </section>
        <section className="card">
          <h2>Recent Expenses</h2>
          {expenses.map(item => (
            <div className="item" key={item.id}>
              <div><b>{item.title}</b><small>{item.category}</small></div>
              <div><b>₹{Number(item.amount).toLocaleString('en-IN')}</b>
                <button className="delete" onClick={() => setExpenses(expenses.filter(x => x.id !== item.id))}>Delete</button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer>Expense Tracker • React + Vite</footer>
    </div>
  );
}
