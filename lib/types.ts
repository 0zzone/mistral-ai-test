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