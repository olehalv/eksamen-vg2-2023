import axios from "axios";

import { IP } from "./IP";

export const ChatService = (prompt) => {
  axios
    .post(
      `http://${IP}:5000/createChat`,
      {
        prompt: prompt,
        name: "Ole",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
