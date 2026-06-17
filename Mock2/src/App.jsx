import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const addEmployee = () => {
    if (name && salary) {
      setEmployees([...employees, { name, salary: parseFloat(salary) }]);
      setName('');
      setSalary('');
    }
  };

  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

  return (
    <div>
      <h1>Employee Salary Management System</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
      />
      <input
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
        type="number"
      />
      <button onClick={addEmployee}>Add Employee</button>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name}: ${emp.salary}
          </li>
        ))}
      </ul>
      <p>Total Salary: ${totalSalary}</p>
    </div>
  );
}

export default App;