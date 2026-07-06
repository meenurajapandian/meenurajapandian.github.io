export interface Role {
  title: string;
  start: number;
  end: number | 'present';
}

export interface WorkEntry {
  company: string;
  /** Most recent/current role first. When there's more than one, the timeline
   * is condensed to the latest title with the rest revealed in the expandable. */
  roles: Role[];
  /** Freeform note shown when intermediate role history isn't itemized yet. */
  promotionNote?: string;
}

export const work: WorkEntry[] = [
  {
    company: 'Samsara',
    roles: [{ title: 'Senior Applied Scientist', start: 2022, end: 2026 }],
    promotionNote: 'Promoted through multiple roles during this time.',
  },
  {
    company: 'Gecko Robotics',
    roles: [{ title: 'Data Scientist / Software Engineer', start: 2020, end: 2022 }],
  },
];
