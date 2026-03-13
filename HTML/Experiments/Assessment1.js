const students = [];
const e = (id) => document.getElementById(id);
const nameI = e('studentName');
const rollI = e('roll');
const mathI = e('math');
const sciI = e('science');
const engI = e('english');
const msg = e('message');
const out = e('results');

const clear = () => {
  nameI.value = '';
  rollI.value = '';
  mathI.value = '';
  sciI.value = '';
  engI.value = '';
  nameI.focus();
};
const table = (h, r) => {
  if (!r.length) return (out.textContent = 'No data');
  const head = `<tr>${h.map((t) => `<th>${t}</th>`).join('')}</tr>`;
  const body = r.map((row) => `<tr>${h.map((k) => `<td>${row[k]||''}</td>`).join('')}</tr>`).join('');
  out.innerHTML = `<table>${head}${body}</table>`;
};

const show = (mode) => {
  const rows = students.map((s) => ({
    name: s.name,
    roll: s.roll,
    math: s.math,
    science: s.science,
    english: s.english,
    total: s.total,
    avg: s.avg.toFixed(2),
  }));
  if (!students.length) return (out.textContent = 'No students');
  if (mode === 'all') return table(['name', 'roll', 'math', 'science', 'english', 'total', 'avg'], rows);
  if (mode === 'tot') return table(['name', 'roll', 'total'], rows);
  if (mode === 'avg') return table(['name', 'roll', 'avg'], rows);
  if (mode === 'high') return table(['name', 'roll', 'avg'], rows.filter((s) => s.avg >= 80));
  if (mode === 'fail') return table(['name', 'roll', 'avg'], rows.filter((s) => s.avg < 40));
  if (mode === 'count') return (out.textContent = `Total: ${students.length}`);
};

const add = () => {
  const name = nameI.value.trim();
  const roll = rollI.value.trim();
  const math = Number(mathI.value);
  const science = Number(sciI.value);
  const english = Number(engI.value);
  if (!name || !roll || isNaN(math) || isNaN(science) || isNaN(english)) {
    return (msg.textContent = 'Fill all fields');
  }
  const total = math + science + english;
  const avg = total / 3;
  students.push({ name, roll, math, science, english, total, avg });
  msg.textContent = `Added ${name}`;
  clear();
  show('count');
};

e('addStudentBtn').addEventListener('click', add);
e('displayAllBtn').addEventListener('click', () => show('all'));
e('totalMarksBtn').addEventListener('click', () => show('tot'));
e('averageMarksBtn').addEventListener('click', () => show('avg'));
e('highAchieversBtn').addEventListener('click', () => show('high'));
e('failedStudentsBtn').addEventListener('click', () => show('fail'));
e('countStudentsBtn').addEventListener('click', () => show('count'));

show('count');
