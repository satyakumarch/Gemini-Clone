// // Import the Google Generative AI library
// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   // Load the API key securely from an environment variable
//   const apiKey = process.env.GEMINI_API_KEY;
  
//   if (!apiKey) {
//     throw new Error("API key is missing. Set GEMINI_API_KEY in your environment variables.");
//   }
  
//   // Initialize the Google Generative AI instance
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   // Load the generative model
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp", // Ensure the model name is correct
//   });
  
//   // Configuration for text generation
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run() {
//     try {
//       // Start a new chat session with the configured model
//       const chatSession = model.startChat({
//         generationConfig,
//         history: [],
//       });
  
//       // Send a message to the chat session
//       const result = await chatSession.sendMessage("What is React.js?");
      
//       // Log the response text
//       console.log(result.response);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }
  
//   // Run the function
//   run();
  // Import the Google Generative AI library
// Import the Google Generative AI library
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// API key (use process.env in production)
const apiKey = "AIzaSyBm4s-96FF96HEwL5uEYuVZ4ECYTMziiuc";

if (!apiKey) {
  throw new Error("API key is missing. Set GEMINI_API_KEY in your environment variables.");
}

// Initialize the Google Generative AI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Load the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Ensure the model name is correct
});

// Configuration for text generation
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to run chat
export const runChat = async (prompt) => {
  try {
    // Start a new chat session with the configured model
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    // Send a message to the chat session
    const result = await chatSession.sendMessage(prompt);

    // Return the response text
    return result.response;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};
