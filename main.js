const AWS = require('aws-sdk')
const { getASpecificPrompt, returnARandomPrompt, processingFunction } = require('./helper.js');

const bedrock = new AWS.BedrockRuntime({
  apiVersion: '2023-10-30',
  region: 'us-east-1'
});

// const modelId1 = 'amazon.titan-tg1-large'; // Replace with the desired model ID
const modelId2 = "ai21.j2-ultra-v1"; // Replace with the desired model ID

const promptReceived = returnARandomPrompt()
// const promptReceived = getASpecificPrompt(2)

const bodyForModelId2 = {
  prompt: promptReceived,
  maxTokens: 200,// It specifies the maximum number of tokens to generate for each response
  temperature: 0.7, //to control the creativity and randomness of the generated text. 0 near-zero creativity
  topP: 1, //When generating text, the model ranks the possible next tokens by their probabilities and selects the smallest set of tokens that exceeds the topP threshold. 
  stopSequences: [], //list of strings that represent the desired stopping points for text generation. When the model generates one of these sequences, it will stop generating more text and return the completed text up to that point
  countPenalty: { scale: 0 },
  presencePenalty: { scale: 0 }, //to control the repetition of phrases and words in the generated text. It helps to decrease the likelihood of generating tokens that have already been mentioned in either the prompt or the completion
  frequencyPenalty: { scale: 0 }, //parameter used in AI text generation models, including GPT models like AI21 Studio's J2-Ultra, to control the model's tendency to repeat predictions
};

const params = {
  "modelId": modelId2,
  "contentType": "application/json",
  "accept": "*/*",
  "body": JSON.stringify(bodyForModelId2)
}

bedrock.invokeModel(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    console.log("============================")
    console.log("Prompt: ", bodyForModelId2.prompt)
    console.log("============================")
    console.log("Completion: ", processingFunction(data))
    console.log("============================")
  };
});
