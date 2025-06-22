fetch("http://localhost:5678/webhook-test/chatbot1", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "hello" })
})
  .then(res => res.json())
  .then(data => console.log(data));
