import React from 'react';

export type Language = 'en' | 'ar';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
}

export interface Metric {
  label: string;
  value: string;
  sub: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}

export type HookCategory = 'vegetal' | 'general';

export interface HookParams {
  product: string;
  audience: string;
  painPoints: string;
  desiredResult: string;
  usp: string;
}