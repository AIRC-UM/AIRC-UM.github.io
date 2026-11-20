/* Edit the lab content here. Links are optional. Paths resolve relative to the HTML pages at the repository root,
   e.g. assets/images/team/member.webp or assets/papers/paper.pdf (not relative to this JS file). */
window.AIRC = {
  description: 'We explore the intersection of artificial intelligence and robot control — connecting learning, perception, and action to build capable robotic systems.',
  // Set these when the lab details are ready. Empty values show honest placeholders.
  affiliation: '', email: '', address: '', github: '',
  research: [
    {
      id: 'learning',
      title: 'Robot Control & Learning',
      icon: 'assets/images/research/icon-robot-arm.svg',
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
      icon: 'assets/images/research/icon-dexterous-manipulation.svg',
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
      icon: 'assets/images/research/icon-locomotion.svg',
      abstract: 'World-model-driven loco-manipulation aims to enable robots to autonomously transport and manipulate objects through predictive environmental understanding and coordinated whole-body control. By integrating **Joint-Embedding Predictive Architecture (JEPA)** world models, reinforcement learning, and optimisation-based control, this research explores long-horizon planning and robust physical interaction. Through self-supervised multimodal representations and latent dynamics prediction, robots can anticipate physical outcomes, maintain balance under varying payloads, and adapt to diverse objects, terrains, and environments. Our goal is to bridge high-level world modelling with low-level whole-body control, advancing the adaptability, robustness, and generalisation of robotic loco-manipulation in complex real-world scenarios.',
      homeImage: 'assets/images/research/research-loco-manipulation.png',
      imageAlt: 'A conceptual illustration of motion planning and feedback.',
      topics: [
        {
          id: 'locomotion-manipulation',
          title: 'Locomotion Manipulation',
          icon: 'assets/images/research/icon-locomotion.svg',
          image: 'assets/images/research/research-loco-manipulation.png',
          imageAlt: 'A conceptual illustration of motion planning and feedback.',
          description: [
            'World-model-driven loco-manipulation focuses on enabling robots to autonomously transport and manipulate objects through predictive environmental understanding and coordinated whole-body control. Inspired by internal predictive models in biological intelligence, this research integrates Joint-Embedding Predictive Architecture (JEPA) world models, reinforcement learning, and optimisation-based control to achieve long-horizon planning and robust physical interaction. By leveraging self-supervised multimodal representations and latent-space dynamics prediction, robots can anticipate physical outcomes, regulate whole-body balance under varying payloads, and perform complex transport tasks, including grasping, load-bearing traversal, and adaptive placement. Particular emphasis is placed on modelling robot–object–environment interactions, rejecting dynamic disturbances, and developing control strategies that accommodate different objects, terrains, and robotic morphologies. This research aims to bridge the gap between high-level latent world modelling and high-frequency whole-body control, advancing the adaptability, robustness, and generalisation of robotic transport in complex and unstructured environments.'
          ]
        }
      ]
    }
  ],
  news: [
    { date: '2026.11', type: 'Lab', title: 'A new home for AIRC Lab', text: 'Example update: introduce the lab, share a milestone, or announce a new project.' },
    { date: '2026.10', type: 'Research', title: 'From simulation to the real world', text: 'Example update: highlight a research demo and link to its project page.' },
    { date: '2026.09', type: 'Community', title: 'Ideas, conversations, and collaboration', text: 'Example update: share a seminar, conference visit, or lab activity.' }
  ],
  team: [
    { name: 'Zhehua Zhou', group: 'Principal Investigator', focus: '', image: 'assets/images/team/Photo_Zhehua_Zhou.webp', website: 'https://zhehuazhou.github.io', email: 'zhzhou@um.edu.mo' },
    { name: 'Sihua Zhang', group: 'Postdoctoral Researchers', focus: 'Safety control | control barrier function | safety motion planning', image: 'assets/images/team/sihua_zhang.webp', website: '', email: 'sihuazhang@um.edu.mo' },
    { name: 'Ziqian Li', group: 'Phd Students', focus: 'Dexterous Manipulation | Tactile Sensing | Contact-Rich Manipulation', image: 'assets/images/team/ziqian_li.webp', website: '', email: 'ziqian.li@connect.um.edu.mo' },
    { name: 'Heng Liu', group: 'Phd Students', focus: 'Robotic Manipulation Robot | Planning and Control | Autonomous Robotic Systems', image: 'assets/images/team/heng_liu.webp', website: '', email: 'heng.liu@connect.um.edu.mo' },
    { name: 'Jiale Dong', group: 'Phd Students', focus: 'Deformable Manipulation', image: 'assets/images/team/jiale_dong.webp', website: '', email: 'yc68113@connect.um.edu.mo' },
    { name: 'Xuecong Huang', group: 'Phd Students', focus: 'locomanipulation | JEPA worldmodel', image: 'assets/images/team/xuecong_huang.webp?v=2', website: '', email: 'lockedflysher@proton.me' },
    { name: 'Yulong Feng', group: 'Master Students', focus: 'Robot Control | Transfer Learning', image: 'assets/images/team/yulong_feng.webp', website: '', email: 'yulong.feng@connect.um.edu.no' },
    { name: 'Congquan Zhang', group: 'Master Students', focus: '', image: 'assets/images/team/congquan_zhang.webp', website: '' },
    { name: 'Longkang Song', group: 'Master Students', focus: '', image: 'assets/images/team/longkang_song.webp', website: '' },
    { name: 'Yuting Wang', group: 'Master Students', focus: '', image: 'assets/images/team/yuting_wang.webp', website: '' },
    { name: 'xinxiang Lin', group: 'Master Students', focus: '', image: 'assets/images/team/xinxiang_lin.webp', website: '' },
    { name: 'Junjie Yang', group: 'Master Students', focus: '', image: 'assets/images/team/junjie_yang.webp', website: '' },
    { name: 'Kexin Fang', group: 'Master Students', focus: '', image: 'assets/images/team/kexin_fang.webp', website: '' },
    { name: 'Jiayi Liu', group: 'Master Students', focus: '', image: 'assets/images/team/jiayi_liu.webp', website: '' },
    { name: 'Kaiwen Yang', group: 'Master Students', focus: '', image: 'assets/images/team/kaiwen_yang.webp', website: '' },
    { name: 'Yitong Zheng', group: 'Master Students', focus: '', image: 'assets/images/team/yitong_zheng.webp', website: '' },
    { name: 'Jian Gao', group: 'Master Students', focus: '', image: 'assets/images/team/jian_gao.webp', website: '' },
    { name: 'Chihao Zhang', group: 'Master Students', focus: '', image: 'assets/images/team/chihao_zhang.webp', website: '' },
    { name: 'Yixuan Wang', group: 'Master Students', focus: '', image: 'assets/images/team/yixuan_wang.webp', website: '' },
    { name: 'Jiayi Zhang', group: 'Master Students', focus: '', image: 'assets/images/team/jiayi_zhang.webp', website: '' },
    { name: 'Xianyu Shu', group: 'Master Students', focus: '', image: 'assets/images/team/xianyu_shu.webp?v=2', website: '' },
  ]
};
