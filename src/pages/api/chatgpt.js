async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const messages = body.messages;

    // Make API call to the OpenAI ChatCompletions endpoint
    const response = await fetch(
      "https://cm633.fluentgpt.app/openai/v1/chat/completions",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer cm633-05-2023-c",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: messages,
          temperature: 0.7,
        }),
      }
    );
    const data = await response.json();
    const responseFromAI = data.choices[0].message.content;

    return res.status(200).json({
      message: responseFromAI,
    });
  } else {
    return res.status(405).json({
      message: "method not allowed",
    });
  }
}

export default handler;
