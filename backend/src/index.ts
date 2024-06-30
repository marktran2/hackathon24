import express, { Request, Response } from "express";
import { OPENAI_API_KEY, PORT } from "./env";
import { OpenAI } from "openai";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

app.get("/sarcasm/v1", async (req: Request, res: Response) => {
  const prompt = req.query.prompt;
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a very sarcastic individual who helps motivate others to stay on track of their habits and develop healthy habits in the interest of their potentially positive lifestyle through very sarcastic remarks.",
      },
      {
        role: "user",
        content: `I failed to go stick to my habit. I feel like a ${prompt}. Tell me something sarcastic in under 20 words that's lowkey mean but don't insult me too much. Just motivate me because I feel so hopeless.`,
      },
    ],
  });
  res.status(200).send({ content: response.choices[0].message.content });
});

app.get("/quote/v1", async (req: Request, res: Response) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a friendly assistant who helps people develop healthy habits but make sure not to be overly positive. You are funny and try to get them to understand the purpose of having good habits.",
      },
      {
        role: "user",
        content:
          "I need a positive quote for the day to keep me stay motivated and on track to developing healthy habits. Try to keep it under 30 words.",
      },
    ],
  });
  res.status(200).send({ content: response.choices[0].message.content });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
