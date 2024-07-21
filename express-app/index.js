const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

// Middleware to set headers and handle specific routes
app.use((req, res, next) => {
  // Set custom headers
  res.setHeader("Content-Type", "application/json");
  const { body, path, port,headers } = req;
  return res.status(200).json({ body, path, port,headers });
});
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
