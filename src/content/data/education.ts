export interface Education {
  school: string;
  degree: string;
  start: number;
  end: number;
}

export const education: Education[] = [
  {
    school: 'Purdue University',
    degree: 'MS, Industrial Engineering — Data Science & Operations Research',
    start: 2017,
    end: 2020,
  },
  {
    school: 'PSG College of Technology, Anna University',
    degree: 'BE, Electrical & Electronics Engineering',
    start: 2011,
    end: 2015,
  },
];

export const skills = [
  'Statistical Modeling',
  'ML Systems Architecture',
  'Data Infrastructure & Engineering',
  'Network Science',
  'AI-Augmented Workflow',
];

export const tools = ['R', 'Python', 'SQL', 'BigQuery', 'D3.js', 'Google Cloud Platform'];
