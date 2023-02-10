const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "code-davinci-003",
  prompt: "import os\nimport openai\n\nopenai.api_key = os.getenv(\"OPENAI_API_KEY\")\n\nresponse = openai.Completion.create(\n  model=\"code-davinci-003\",\n  prompt=\"\\\"\\\"\\\"\\n1. Create a list of first names\\n2. Create a list of last names\\n3. Combine them randomly into a list of 100 full names\\n\\\"\\\"\\\"\",\n  temperature=0,\n  max_tokens=300,\n  top_p=1,\n  frequency_penalty=0,\n  presence_penalty=0\n)",
  temperature: 0,
  max_tokens: 300,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
