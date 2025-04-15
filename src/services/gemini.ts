import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY as string);

export const generateResponse = async (prompt: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();
    return text;
  } catch (error: unknown) {
    console.error('Error generating response:', (error as Error).message || error);
    return 'Sorry, I encountered an error. Please try again.';
  }
};
