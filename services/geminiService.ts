import { GoogleGenAI, Type } from "@google/genai";
import { ServiceRoute } from '../types';

// Per coding guidelines, initialize GoogleGenAI with the API key directly from process.env.
// The availability of the key is a hard requirement and should not be checked for.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates smart route suggestions based on a user's natural language query.
 * @param query The user's input string (e.g., "how to get from A to B").
 * @returns A promise that resolves to an array of ServiceRoute objects.
 */
export const generateSmartRoute = async (query: string): Promise<ServiceRoute[]> => {
  try {
    const response = await ai.models.generateContent({
      // Upgraded model to gemini-3-pro-preview for more advanced reasoning.
      model: "gemini-3-pro-preview",
      contents: `User query about mobility in Yucatan: "${query}". 
      Generate 2-3 plausible travel route options formatted strictly as JSON.
      Assume the context is travel between municipalities in Yucatan (e.g., Merida, Progreso, Umán, Kanasín) or local within Merida.
      
      Modes can be: "Va-y-Ven", "IE-TRAM", "Ruta Nocturna", "Bicicleta", "Caminata".
      Carbon footprint should be in grams CO2.
      Duration in minutes.
      Cost in MXN.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              from: { type: Type.STRING },
              to: { type: Type.STRING },
              duration: { type: Type.STRING },
              modes: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              cost: { type: Type.STRING },
              carbonFootprint: { type: Type.STRING }
            },
            required: ['id', 'from', 'to', 'duration', 'modes', 'cost', 'carbonFootprint']
          }
        }
      }
    });

    if (response.text) {
      // Use .trim() to handle potential leading/trailing whitespace in the JSON response.
      const cleanedJson = response.text.trim();
      return JSON.parse(cleanedJson) as ServiceRoute[];
    }
    return [];
  } catch (error) {
    console.error("Gemini Error generating smart route:", error);
    // Return empty array on error to prevent UI crash.
    return [];
  }
};