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
      abstract: 'Our research focuses on developing intelligent robotic systems by integrating **Task and Motion Planning (TAMP)**, **Imitation Learning (IL)**, and **Transfer Learning (TL)**. We aim to enable robots to autonomously reason about complex tasks, acquire manipulation skills from limited demonstrations, and adapt learned behaviors across diverse environments and robot embodiments. Our work combines high-level task reasoning with low-level motion planning and control to support efficient and reliable manipulation. We also investigate data-efficient learning and skill transfer methods to improve generalization across different objects, tasks, and robotic platforms. Ultimately, we seek to develop flexible, robust, and adaptable robotic systems capable of performing complex real-world manipulation tasks.',
      homeImage: 'assets/images/home/research-robot-control-learning.jpg',
      imageAlt: 'Top row: simulated assembly and a physical block assembly setup. Bottom row: an arrow points from a single arm holding a red piece to two arms holding an orange basket.',
      topics: [
        {
          id: 'imitation-transfer-learning',
          title: 'Robot Imitation Learning & Transfer Learning',
          icon: 'assets/images/home/research-learning.svg',
          publicationTopic: 'Robot Learning',
          videoUrl: 'assets/videos/teleoperation-act-cup-flip.mp4',
          image: 'assets/images/research/research-transfer-learning.webp',
          imageAlt: 'An operator holds a controller beside a single robot arm and a separate dual-arm station with colored blocks.',
          description: [
            'Our research focuses on **Imitation Learning** and **Transfer Learning** for robotic manipulation, enabling robots to acquire skills from demonstrations and apply them across diverse tasks and robotic embodiments. We explore learning manipulation behaviors from human demonstrations and transferring skills between different robotic systems, particularly from single-arm to dual-arm manipulation. Our goal is to reduce reliance on extensive task-specific demonstrations and advance the development of versatile robotic learning systems capable of acquiring, adapting, and reusing manipulation skills in complex real-world environments.'
          ],
          tags: ['Imitation learning', 'Transfer learning']
        },
        {
          id: 'control',
          title: 'Task and Motion Planning',
          icon: 'assets/images/home/research-control.svg',
          publicationTopic: 'Intelligent Control',
          videoUrl: 'assets/videos/task-and-motion-planning.mp4',
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
      abstract: 'Our research explores robotic manipulation of **deformable objects** and **dexterous robotic hands**, with an emphasis on understanding and controlling complex physical interactions. For deformable objects such as cables, we investigate dynamics modeling, contact-aware planning, and feedback control for shaping, routing, and assembly tasks. For dexterous manipulation, we focus on multi-finger coordination, tactile sensing, and contact-rich control to achieve stable grasping and precise in-hand manipulation. By combining physical modeling, robot learning, and optimization-based control, we aim to advance robotic capabilities in challenging manipulation scenarios.',
      homeImage: 'assets/images/home/research-robotic-dexterous-manipulation.jpg',
      imageAlt: 'A dexterous robotic hand grasps a marked cube, while a separate gripper handles a flexible red USB cable.',
      topics: [
        {
          id: 'dexterous-manipulation',
          title: 'Dexterous Manipulation',
          icon: 'assets/images/home/research-manipulation.svg',
          publicationTopic: 'Robotic Manipulation',
          videoUrl: 'assets/videos/dexterous-manipulation.mp4',
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
          videoUrl: 'assets/videos/deformable-object-manipulation.mp4',
          image: 'assets/images/research/research-deformable-cable-square.webp',
          description: [
            'Our research focuses on robotic manipulation of **deformable objects**, particularly cables and other flexible linear materials. We aim to enable robots to understand and handle the complex behaviors of deformable objects across diverse manipulation tasks, including cable shaping, routing, and assembly. Our work explores the challenges of manipulating objects with changing shapes and physical properties, with an emphasis on reliable interaction and adaptation to different materials and environments. Potential applications include automated wiring, cable harness assembly, and flexible manufacturing.'
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
          videoUrl: 'assets/videos/locomotion-manipulation.mp4',
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
    { name: 'Heng Liu', group: 'Phd Students', focus: 'Robotic Manipulation | Robot Planning and Control | Autonomous Robotic Systems', image: 'assets/images/team/heng_liu.webp', website: '', email: 'heng.liu@connect.um.edu.mo' },
    { name: 'Jiale Dong', group: 'Phd Students', focus: 'Deformable Manipulation', image: 'assets/images/team/jiale_dong.webp', website: '', email: 'jiale.dong@connect.um.edu.mo' },
    { name: 'Xuecong Huang', group: 'Phd Students', focus: 'locomanipulation | JEPA worldmodel', image: 'assets/images/team/xuecong_huang.webp?v=2', website: 'https://lockedflysher.github.io/', email: 'lockedflysher@proton.me' },
    { name: 'Yulong Feng', group: 'Master Students', focus: 'Robot Control | Transfer Learning', image: 'assets/images/team/yulong_feng.webp', website: '', email: 'yulong.feng@connect.um.edu.mo' },
    { name: 'Congquan Zhang', group: 'Master Students', focus: '', image: 'assets/images/team/congquan_zhang.webp', website: '' },
    { name: 'Longkang Song', group: 'Master Students', focus: '', image: 'assets/images/team/longkang_song.webp', website: '' },
    { name: 'Yuting Wang', group: 'Master Students', focus: '', image: 'assets/images/team/yuting_wang.webp', website: '' },
    { name: 'Xinxiang Lin', group: 'Master Students', focus: '', image: 'assets/images/team/xinxiang_lin.webp', website: '' },
    { name: 'Junjie Yang', group: 'Master Students', focus: '', image: 'assets/images/team/junjie_yang.webp', website: '' },
    { name: 'Kexin Fang', group: 'Master Students', focus: '', image: 'assets/images/team/kexin_fang.webp', website: '' },
    { name: 'Jiayi Liu', group: 'Master Students', focus: '', image: 'assets/images/team/jiayi_liu.webp', website: '' },
    { name: 'Kaiwen Yang', group: 'Master Students', focus: '', image: 'assets/images/team/kaiwen_yang.webp', website: '' },
    { name: 'Yitong Zheng', group: 'Master Students', focus: '', image: 'assets/images/team/yitong_zheng.webp', website: '' },
    { name: 'Jian Gao', group: 'Master Students', focus: '', image: 'assets/images/team/jian_gao.webp', website: '' },
    { name: 'Chenghao Zhang', group: 'Master Students', focus: '', image: 'assets/images/team/chihao_zhang.webp', website: '' },
    { name: 'Yixuan Wang', group: 'Master Students', focus: '', image: 'assets/images/team/yixuan_wang.webp', website: '' },
    { name: 'Jiayi Zhang', group: 'Master Students', focus: '', image: 'assets/images/team/jiayi_zhang.webp', website: '' },
    { name: 'Xianyu Shu', group: 'Master Students', focus: '', image: 'assets/images/team/xianyu_shu.webp?v=2', website: '' },
  ]
};
