export interface ApiClientOptions {
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface Inputs {
  example: string
  exampleRequired: string
}

export interface User {
  name: string;
  avatar: string;
  role: string;
  portfolio: string;
  skills: string[];
  bio: string;
  github: string;
  linkedin: string;
  experiences: Experience[];
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface APIResponse<T> {
  success: boolean
  data: T
}

export interface MistralAPIResponse {
  id: string;
  object: string;
  model: string;
  usage : {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  }
  created: number;
  choices: {
    index: number;
    message: {
      content: string;
      prefix: boolean;
      role: string;
      toolCalls?: any
    };
    finishReason: string;
  }[];
}

export interface FinalResponse {
  coverLetterExample: string;
  keywordsForResume: string[];
  keywordsForInterview: string[];
  improvementAreas: string[];
  strengths: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  matchingPercentage: number;
}