/* Edit the lab content here. Links are optional. Paths resolve relative to the HTML pages at the repository root,
   e.g. assets/images/team/member.jpg or assets/papers/paper.pdf (not relative to this JS file). */
window.AIRC = {
  description: 'We explore the intersection of artificial intelligence and robot control — connecting learning, perception, and action to build capable robotic systems.',
  // Set these when the lab details are ready. Empty values show honest placeholders.
  affiliation: '', email: '', address: '', github: '',
  research: [
    {
      id: 'learning',
      title: 'Robot Control & Learning',
      abstract: 'Our research focuses on developing intelligent robotic systems by integrating **Task and Motion Planning (TAMP)**, **Imitation Learning (IL)**, and **Transfer Learning (TL)**. We aim to enable robots to autonomously reason about complex tasks, acquire manipulation skills from demonstrations, and adapt learned behaviors to diverse environments and robot embodiments. Our work explores the integration of high-level task reasoning with low-level motion planning and control, enabling efficient and reliable execution of complex manipulation tasks. We also investigate data-efficient learning approaches that allow robots to extract meaningful task knowledge and interaction strategies from limited demonstrations. Furthermore, we seek to improve the generalization and adaptability of robotic skills across different objects, tasks, and robotic platforms, reducing the need for extensive task-specific training. By bridging the gap between symbolic reasoning, motion generation, and learning-based methods, we strive to develop flexible, robust, and versatile robotic systems capable of performing challenging manipulation tasks in dynamic and unstructured real-world environments.',
      homeImage: 'assets/images/home/research-robot-control-learning.jpg',
      imageAlt: 'Top row: simulated assembly and a physical block assembly setup. Bottom row: an arrow points from a single arm holding a red piece to two arms holding an orange basket.',
      topics: [
        {
          id: 'imitation-transfer-learning',
          title: 'Robot Imitation Learning & Transfer Learning',
          icon: 'assets/images/home/research-learning.svg',
          publicationTopic: 'Robot Learning',
          description: [
            'We study how robots learn manipulation skills from human demonstrations and reuse those skills across tasks, environments, and robotic platforms.'
          ],
          tags: ['Imitation learning', 'Transfer learning']
        },
        {
          id: 'control',
          title: 'Task and Motion Planning',
          icon: 'assets/images/home/research-control.svg',
          publicationTopic: 'Intelligent Control',
          image: 'assets/images/research/task-and-motion-planning.webp',
          imageAlt: 'A branching task reasoning diagram with one path highlighted, above a dual-arm assembly simulation and a physical robot with blocks and an inset of the target structure.',
          description: [
            'Our research focuses on developing Task and Motion Planning (TAMP) frameworks that enable robots to perform complex, **long-horizon manipulation** and **assembly tasks** through integrated logical reasoning and motion planning. We investigate approaches that combine high-level symbolic planning with low-level geometric reasoning and robot control, allowing robots to reason about task dependencies, action sequences, and physical constraints while generating feasible and efficient motions. A key research direction is dual-arm collaborative assembly, where robots must coordinate manipulation actions, allocate tasks, and manage spatial and temporal dependencies between multiple arms. Particular emphasis is placed on partial-order planning, concurrent action execution, and efficient task scheduling to improve coordination and reduce execution time. By bridging symbolic reasoning, motion planning, and multi-arm coordination, we aim to develop scalable and adaptive planning frameworks for autonomous robotic assembly in complex and dynamic environments.'
          ],
          tags: ['Task planning', 'Motion planning', 'Feedback control']
        }
      ]
    },
    {
      id: 'manipulation',
      title: 'Robotic Dexterous Manipulation',
      abstract: 'Our research focuses on enabling robots to perform complex manipulation tasks involving both **deformable objects** and **dexterous robotic hands**. By integrating physical modeling, tactile sensing, robot learning, and optimisation-based control, we aim to achieve robust and adaptive manipulation across diverse objects and environments. For deformable objects such as cables, we investigate structured dynamics prediction, contact-aware planning, and closed-loop control to support shaping, routing, and assembly tasks. For dexterous manipulation, we explore multi-finger coordination, adaptive contact control, and tactile feedback to enable stable grasping and precise in-hand object manipulation. Particular emphasis is placed on understanding robot–object interactions, adapting to uncertain physical properties, and generalizing manipulation skills across different objects, tasks, and robotic embodiments. Our goal is to develop intelligent and versatile robotic manipulation systems capable of handling challenging real-world tasks in dynamic and unstructured environments.',
      homeImage: 'assets/images/home/research-robotic-dexterous-manipulation.jpg',
      imageAlt: 'A dexterous robotic hand grasps a marked cube, while a separate gripper handles a flexible red USB cable.',
      topics: [
        {
          id: 'dexterous-manipulation',
          title: 'Dexterous Manipulation',
          icon: 'assets/images/home/research-manipulation.svg',
          publicationTopic: 'Robotic Manipulation',
          image: 'assets/images/research/research-dexterous-manipulation.png',
          imageAlt: 'A robotic gripper using a camera to locate an object.',
          description: [
            'Robotic manipulation focuses on enabling robots to interact with and manipulate objects through **dexterous finger** movements and adaptive **contact control**.',
            'Inspired by human hand dexterity, this research integrates tactile sensing, contact modelling, and optimisation-based control to achieve robust grasping and precise in-hand manipulation. By leveraging tactile feedback and physical contact constraints, robotic hands can adaptively coordinate multiple fingers, regulate contact forces, and perform complex object movements, including reorientation, repositioning, and regrasping. Particular emphasis is placed on understanding hand–object interactions, optimising contact configurations, and developing manipulation strategies that accommodate different objects, tasks, and robotic hand morphologies. This research aims to bridge the gap between stable grasping and dynamic manipulation, advancing the adaptability, robustness, and generalisation of robotic hands in complex and unstructured environments.'
          ],
          tags: ['Grasping', 'Contact-rich manipulation']
        },
        {
          id: 'deformable-object-manipulation',
          title: 'Deformable Object Manipulation',
          iconText: '∿',
          publicationTopic: 'Robotic Manipulation',
          description: [
            'We study how robots can reliably handle deformable objects, with a focus on cables and other flexible materials. Applications include cable routing and assembly.'
          ],
          tags: ['Cable manipulation', 'Flexible materials']
        }
      ]
    },
    {
      id: 'locomotion',
      title: 'Locomotion Manipulation',
      abstract: 'World-model-driven loco-manipulation aims to enable robots to autonomously transport and manipulate objects through predictive environmental understanding and coordinated whole-body control. By integrating **Joint-Embedding Predictive Architecture (JEPA)** world models, reinforcement learning, and optimisation-based control, this research explores long-horizon planning and robust physical interaction. Through self-supervised multimodal representations and latent dynamics prediction, robots can anticipate physical outcomes, maintain balance under varying payloads, and adapt to diverse objects, terrains, and environments. Our goal is to bridge high-level world modelling with low-level whole-body control, advancing the adaptability, robustness, and generalisation of robotic loco-manipulation in complex real-world scenarios.',
      homeImage: 'assets/images/research/research-loco-manipulation.png',
      image: 'assets/images/research/research-loco-manipulation.png',
      imageAlt: 'A conceptual illustration of motion planning and feedback.',
      description: [
        'World-model-driven loco-manipulation focuses on enabling robots to autonomously transport and manipulate objects through predictive environmental understanding and coordinated whole-body control. Inspired by internal predictive models in biological intelligence, this research integrates Joint-Embedding Predictive Architecture (JEPA) world models, reinforcement learning, and optimisation-based control to achieve long-horizon planning and robust physical interaction. By leveraging self-supervised multimodal representations and latent-space dynamics prediction, robots can anticipate physical outcomes, regulate whole-body balance under varying payloads, and perform complex transport tasks, including grasping, load-bearing traversal, and adaptive placement. Particular emphasis is placed on modelling robot–object–environment interactions, rejecting dynamic disturbances, and developing control strategies that accommodate different objects, terrains, and robotic morphologies. This research aims to bridge the gap between high-level latent world modelling and high-frequency whole-body control, advancing the adaptability, robustness, and generalisation of robotic transport in complex and unstructured environments.'
      ],
      topics: []
    }
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
    { name: 'Zhehua Zhou', group: 'Principal Investigator', focus: 'Research interests and a short introduction.', image: 'assets/images/team/Photo_Zhehua_Zhou.jpg', website: 'https://zhehuazhou.github.io' },
    { name: 'Sihua Zhang', group: 'Postdoctoral Researchers', focus: 'control barrier function、safety-critical control', image: '', website: '' },
    { name: 'Ziqian Li', group: 'Phd Students', focus: 'Robot learning & control', image: '', website: '' },
    { name: 'Heng Liu', group: 'Phd Students', focus: 'Robotic manipulation', image: '', website: '' },
    { name: 'Jiale Dong', group: 'Phd Students', focus: 'Perception & planning', image: '', website: '' },
    { name: 'Xuecong Huang', group: 'Phd Students', focus: 'Transfer Learning & planning', image: '', website: '' },
    { name: 'Yulong Feng', group: 'Master Students', focus: 'Robot Control & Transfer Learning', image: '', website: '' },
  ]
};
