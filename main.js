const AWS = require('aws-sdk')

const bedrock = new AWS.BedrockRuntime({
  apiVersion: '2023-10-30',
  region: 'us-east-1'
});

// const modelId1 = 'amazon.titan-tg1-large'; // Replace with the desired model ID
const modelId2 = "ai21.j2-ultra-v1"; // Replace with the desired model ID

const promptReceived = "What is the capital city of Finland?"

const bodyForModelId2 = {
  prompt: promptReceived,
  maxTokens: 200,
  temperature: 0.7,
  topP: 1,
  stopSequences: [],
  countPenalty: { scale: 0 },
  presencePenalty: { scale: 0 },
  frequencyPenalty: { scale: 0 },
};

const params = {
  "modelId": modelId2,
  "contentType": "application/json",
  "accept": "*/*",
  "body": JSON.stringify(bodyForModelId2)
}

const processingFunction = (data) => { return JSON.parse(data.body).completions[0].data.text }

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
