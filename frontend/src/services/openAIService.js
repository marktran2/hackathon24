import axios from "axios";
import { BACKEND_URL, QUOTE_PATH } from "../utils/constants";

export const getAIQuote = async () => {
  try {
    const response = await axios.get(BACKEND_URL + QUOTE_PATH, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
