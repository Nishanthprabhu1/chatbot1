<!DOCTYPE html>
<html>
<head>
  <title>Chatbot Test</title>
</head>
<body>
  <h1>Chatbot1 Test</h1>
  <button onclick="sendMessage()">Send Hello</button>

  <script>
    function sendMessage() {
      fetch("http://localhost:5678/webhook-test/chatbot1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "Hello from browser!" })
      })
      .then(res => res.json())
      .then(data => {
        alert("Response: " + JSON.stringify(data));
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
    }
  </script>
</body>
</html>
