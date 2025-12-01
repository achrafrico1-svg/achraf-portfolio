import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { TRANSLATIONS } from "../constants";
import { HookCategory, HookParams, Language } from "../types";

const aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });

// We use English profile data for the prompt source of truth to maintain consistency, 
// but instruct the AI to reply in the detected language.
const PROFILE_DATA = TRANSLATIONS['en'];

const getSystemInstruction = (lang: Language) => `
You are the digital AI assistant of Achraf Najim AND an Expert Digital Marketing Consultant.
Your goal is to answer questions from potential clients (business owners, agencies) about Achraf's skills and provide expert marketing advice.

Current Language: ${lang === 'ar' ? 'Arabic' : 'English'}. Reply in ${lang === 'ar' ? 'Arabic' : 'English'}.

Achraf's Profile:
Name: ${PROFILE_DATA.profile.name}
Title: ${PROFILE_DATA.profile.title}
Stats: $1.3M+ Ad Spend, 13X ROAS, 4+ Years Experience.
Specialties: Meta Ads, TikTok Ads, Scaling, Creative Strategy.

Your Persona:
1.  **Professional Portfolio Assistant**: If asked about Achraf, sell his services. Mention his stats ($1.3M spend, 13X ROAS).
2.  **Marketing Expert**: If asked "How to scale?", "How to improve CTR?", "How to fix high CPA?", give specific, high-level, actionable advice. Act like a senior media buyer.

Guidelines:
- Be concise (max 3-4 sentences).
- Be professional and confident.
- If asked about Achraf's availability, refer to the contact section.
`;

export const sendMessageToGemini = async (message: string, lang: Language = 'en'): Promise<string> => {
  try {
    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: getSystemInstruction(lang),
      }
    });

    return response.text || (lang === 'ar' ? "عذرًا، لا يمكنني الرد الآن." : "I apologize, I couldn't generate a response at this moment.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'ar' ? "حدث خطأ في الاتصال." : "Connection error. Please try again.";
  }
};

export const generateMarketingHooks = async (params: HookParams, lang: Language): Promise<string[]> => {
  const systemPrompt = `
  You are an expert Direct Response Copywriter & Media Buyer with 10 years of experience.
  Your task is to generate 5 high-converting ad hooks (first 3 seconds of a video or headline).
  
  Focus on:
  - Curiosity gaps
  - Calling out the audience directly
  - Highlighting the pain point viscerally
  - Promising the desired result immediately
  - Leveraging the Unique Selling Proposition (USP)
  
  Input Details:
  - Product/Service: ${params.product}
  - Target Audience: ${params.audience}
  - Main Pain Point: ${params.painPoints}
  - Desired Result: ${params.desiredResult}
  - USP: ${params.usp}
  
  Language: ${lang === 'ar' ? 'Arabic (Standard but natural marketing tone)' : 'English'}.
  
  Output Rules:
  - Return EXACTLY 5 hooks.
  - Return ONLY the hooks as a clean list. No numbers, no introductory text.
  - Make them punchy, short, and impossible to ignore.
  `;

  try {
      const response = await aiClient.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: systemPrompt
      });
      
      const text = response.text || "";
      // Split by new lines and clean up numbers/bullets
      return text.split('\n').filter(line => line.trim().length > 0).map(line => line.replace(/^[\d\-\.\)]+\s*/, '').trim());
  } catch (error) {
      console.error("Hook Gen Error:", error);
      return [];
  }
};