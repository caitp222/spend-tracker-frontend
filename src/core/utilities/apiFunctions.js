export async function getUser() {
  const response = await fetch('http://localhost:3000/users/3')
  .then((res) => res.json())
  .catch(err => console.log(err));
  return response;
}

export async function createEntry(record) {
  const response = await fetch('http://localhost:3000/users/3/money_records',{
    method: 'POST',
    body: JSON.stringify({ money_record: record }),
    headers: {'Content-Type': 'application/json'},
  }).then((res) => res.json())
  .catch(err => console.log(err));
  return response;
}
