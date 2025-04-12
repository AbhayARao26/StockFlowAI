
import { useToast } from "@/hooks/use-toast";

// We would normally use environment variables for API keys
// This is just a placeholder for demonstration
const API_KEY = "YOUR_GEMINI_API_KEY"; 

interface GeminiMessage {
  role: "user" | "model";
  parts: {
    text: string;
  }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
  promptFeedback?: {
    blockReason?: string;
  };
}

export const getGeminiResponse = async (messages: GeminiMessage[]): Promise<string> => {
  try {
    // The Gemini API endpoint
    const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
    
    // Prepare the request body
    const requestBody = {
      contents: messages,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    };

    // Make the API request
    const response = await fetch(`${endpoint}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();
    
    // Check for content filters being triggered
    if (data.promptFeedback?.blockReason) {
      throw new Error(`Content blocked: ${data.promptFeedback.blockReason}`);
    }

    // Extract the response text
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    }

    throw new Error("No response generated");
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I couldn't process your request at the moment. Please try again later.";
  }
};

// Hook for easy access to the Gemini API with toast notifications
export const useGeminiApi = () => {
  const { toast } = useToast();

  const sendMessage = async (message: string, previousMessages: GeminiMessage[] = []): Promise<string> => {
    try {
      // Add the new user message to the conversation
      const updatedMessages = [
        ...previousMessages,
        {
          role: "user" as const,
          parts: [{ text: message }],
        },
      ];

      const response = await getGeminiResponse(updatedMessages);
      return response;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response from the AI assistant",
        variant: "destructive",
      });
      console.error("Gemini API error:", error);
      return "Sorry, I encountered an error. Please try again later.";
    }
  };

  return { sendMessage };
};
