import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_AI_API_KEY ?? "",
});

export const discuss = async (message: string, model: string) => {
    return await mistral.chat.complete({
      model: model || "mistral-small-latest",
      messages: [
        {
          content: message,
          role: "user",
        },
      ],
    });
}