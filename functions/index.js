const functions = require("firebase-functions");
const express = require("express");
const { request, response } = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HfjIBD3QUFDLKnNTOLL2xruh4sszdHiThXqnVBcPDK0fn8neYcAGFZUcxMNZu8e9ivYzS0N36WabkWvHgS4dwIv00elObYHCq"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));

app.use(express.json());

//API routes
app.get("/123", (request, response) =>
  response.status(200).send("hello world")
);
app.post("/123", (request, response) =>
  response.status(202).send("hello world1")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
