/* Replace the illustrative entries below with the lab's actual information.
   All links are optional. Paths resolve relative to the HTML pages at the repository root,
   e.g. assets/images/member.jpg or assets/papers/paper.pdf (not relative to this JS file). */
window.AIRC = {
  demo: true,
  description: 'We explore the intersection of artificial intelligence and robot control — connecting learning, perception, and action to build capable robotic systems.',
  // Set these when the lab details are ready. Empty values show honest placeholders.
  affiliation: '', email: '', address: '', github: '',
  research: [
    { id: 'learning', image: 'assets/images/research-learning.svg', imageAlt: 'A learned robot policy transferring skills from simulation to a physical robot.', number: '01', title: 'Robot Learning', short: 'Learning to act, adapt, and generalize.', description: 'How can robots learn useful skills from experience and transfer them to new tasks? This example direction brings together reinforcement learning, imitation learning, and simulation-to-reality transfer.', tags: ['Reinforcement learning', 'Sim-to-real', 'Imitation learning'] },
    { id: 'control', image: 'assets/images/research-control.svg', imageAlt: 'A robot following an optimized trajectory with feedback control.', number: '02', title: 'Intelligent Control', short: 'Bringing intelligence into physical motion.', description: 'How can learning and model-based methods work together? This example direction explores motion planning, optimization, and feedback control for reliable interaction with the physical world.', tags: ['Optimal control', 'Motion planning', 'Dynamics'] },
    { id: 'manipulation', image: 'assets/images/research-manipulation.svg', imageAlt: 'A robotic gripper using visual perception to grasp an object.', number: '03', title: 'Robotic Manipulation', short: 'Understanding and interacting with the world.', description: 'How can robots perceive objects and manipulate them with purpose? This example direction connects visual understanding with grasping, dexterous manipulation, and coordinated robot motion.', tags: ['Visual perception', 'Grasping', 'Dexterous manipulation'] }
  ],
  news: [
    { date: '2026.11', type: 'Lab', title: 'A new home for AIRC Lab', text: 'Example update: introduce the lab, share a milestone, or announce a new project.' },
    { date: '2026.10', type: 'Research', title: 'From simulation to the real world', text: 'Example update: highlight a research demo and link to its project page.' },
    { date: '2026.09', type: 'Community', title: 'Ideas, conversations, and collaboration', text: 'Example update: share a seminar, conference visit, or lab activity.' }
  ],
  publications: [
    { id: 'sample-learning', year: '2026', topic: 'Robot Learning', title: 'Learning transferable skills for robotic manipulation', authors: 'Author One, Author Two, Corresponding Author', venue: 'Sample publication · replace with venue', summary: 'An illustrative entry showing how a paper title, author list, venue, abstract, and research links will appear.', selected: true, paper: '', code: '', project: '', bibtex: '' },
    { id: 'sample-control', year: '2026', topic: 'Intelligent Control', title: 'Combining learned policies with model-based robot control', authors: 'Author One, Author Two, Corresponding Author', venue: 'Sample publication · replace with venue', summary: 'Use this space for a short description of the problem, the method, and the main contribution.', selected: true, paper: '', code: '', project: '', bibtex: '' },
    { id: 'sample-manipulation', year: '2025', topic: 'Robotic Manipulation', title: 'Coordinated perception and action for object interaction', authors: 'Author One, Author Two, Corresponding Author', venue: 'Sample publication · replace with venue', summary: 'Add your actual publication information and optional links to a PDF, code repository, or project website.', selected: false, paper: '', code: '', project: '', bibtex: '' }
  ],
  team: [
    { name: 'Faculty name', role: 'Principal Investigator', group: 'Faculty', focus: 'Research interests and a short introduction.', initials: 'PI', image: '', website: '' },
    { name: 'Researcher name', role: 'PhD Student', group: 'Students', focus: 'Robot learning & control', initials: 'PhD', image: '', website: '' },
    { name: 'Researcher name', role: 'PhD Student', group: 'Students', focus: 'Robotic manipulation', initials: 'PhD', image: '', website: '' },
    { name: 'Researcher name', role: 'Master’s Student', group: 'Students', focus: 'Perception & planning', initials: 'MS', image: '', website: '' }
  ]
};
