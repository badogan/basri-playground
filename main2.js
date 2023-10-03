// import { BedrockClient, ListModelsCommand } from "@aws-sdk/client-bedrock";
const { BedrockClient, ListModelsCommand } = require("@aws-sdk/client-bedrock")
// const AWS = require('aws-sdk');

// const bedrock = new AWS.Bedrock({
//   apiVersion: '2023-10-30',
//   region: 'us-east-1'
// });


// Create a new Bedrock client instance with the desired configuration
const REGION = 'us-east-1'
const client = new BedrockClient({ region: REGION });

const FOUNDATION_ID = 'amazon.titan-tg1-large'; // Replace with the desired model ID

// Use the client instance to call the desired command, for example, ListModelsCommand
const params = {
  FoundationId: FOUNDATION_ID,
};
const command = new ListModelsCommand(params);


// client.listFoundationModels({}, (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   });


// const response = await client.send(command);
const response = client.send(command);

// Log the response
console.log(response);