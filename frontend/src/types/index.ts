interface Tool {
  type: "function";
  name: string;
  description: string;
  parameters?: {
    type: string;
    properties: Record<
      string,
      {
        type: string;
        description: string;
      }
    >;
  };
}

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  tokens?: number;
  type: string;
  response?: {
    usage: {
      total_tokens: number;
      input_tokens: number;
      output_tokens: number;
    };
  };
}

interface Conversation {
  id: string; // Unique ID for react rendering and loggin purposes
  role: string; // "user" or "assistant"
  text: string; // User or assistant message
  timestamp: string; // ISO string for message time
  isFinal: boolean; // Whether the transcription is final
  status?: "speaking" | "processing" | "final"; // Status for real-time conversation states
}

export type { Tool, Message, Conversation };