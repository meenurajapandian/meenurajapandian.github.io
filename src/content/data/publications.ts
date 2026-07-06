export interface Publication {
  title: string;
  authors: string;
  journal: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      'Uncovering differential identifiability in network properties of human brain functional connectomes',
    authors: '<b>M Rajapandian</b>, E Amico, K Abbas, M Ventresca and J Goñi',
    journal: 'Network Neuroscience, 2020',
    url: 'https://www.mitpressjournals.org/doi/full/10.1162/netn_a_00140',
  },
  {
    title: 'Towards a mathematical theory of communication for the human connectome',
    authors:
      'E Amico, K Abbas, D Duong-Tran, U Tipnis, <b>M Rajapandian</b>, E Chumin, M Ventresca, J Harezlak, J Goñi',
    journal: 'arXiv preprint',
    url: 'https://arxiv.org/abs/1911.02601',
  },
  {
    title: 'GEFF: Graph Embedding for Functional Fingerprinting',
    authors:
      'K Abbas, E Amico, DO Svaldi, U Tipnis, DA Duong-Tran, M Liu, <b>M Rajapandian</b>, J Harezlak, BM Ances, J Goñi',
    journal: 'NeuroImage, 2020',
    url: 'https://www.sciencedirect.com/science/article/pii/S1053811920306674',
  },
];
