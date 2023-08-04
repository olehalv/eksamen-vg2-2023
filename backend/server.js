const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const PORT = 5000;

const configuration = new Configuration({
  organization: "<TRENGER KONFIGURASJON>",
  apiKey: "<TRENGER KONFIGURASJON>",
});

const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/createImage", async (req, res) => {
  if (req.body.prompt) {
    const response = await openai.createImage({
      prompt: req.body.prompt,
      size: "256x256",
    });
    res.send(response.data.data[0].url);
  }
  res.end();
});

app.post("/createChat", async (req, res) => {
  if (req.body.prompt) {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.prompt }],
    });
    res.send(response.data.choices[0].message.content);
  }
  res.end();
});

app.listen(PORT, console.log("Server listening on port", PORT));
