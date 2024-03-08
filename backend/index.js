import express from "express";
import cors from "cors";
import products from "./products";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to QwikShop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
