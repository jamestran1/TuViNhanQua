export type Gender = 'Male' | 'Female';

export interface Star {
  name: string;
  type: 'ChinhTinh' | 'PhuTinh';
  element: string;
  status?: string; // Đắc, Hãm, Bình, Vượng...
  isMajor: boolean;
}

export interface Palace {
  id: number;
  name: string;
  zodiacSign: string;
  stars: Star[];
  isBodyPalace: boolean;
}

export interface TuViChart {
  metadata: {
    name: string;
    gender: Gender;
    birthDateSolar: string;
    birthDateLunar: string;
    element: string;
    cuc: string;
  };
  palaces: Palace[];
  aiInterpretation?: {
    summary: string;
    karmicAnalysis: string;
    advice: string;
  };
}