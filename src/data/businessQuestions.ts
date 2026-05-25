import { Question } from '../types';

export const businessQuestions: Question[] = [
  {
    id: 167,
    domain: 'Business Environment',
    task: 'Plan and manage project compliance',
    question: 'A financial payment system project must align with GDPR and PCI-DSS compliance regulations. During planning, how should the project manager ensure all regulatory rules are covered?',
    options: [
      'Document compliance tasks as high-priority user stories in the backlog, assign a security compliance officer, and plan regular automated compliance audits.',
      'Trust that developers are already aware of security regulations and let them handle compliance on their own.',
      'Avoid security compliance checks until the final user acceptance testing (UAT) phase begins.',
      'Request that the PMO handle compliance tracking separately outside the project schedule.'
    ],
    answerIndex: 0,
    explanation: 'compliance (Task 1) requires active planning, setting tracking milestones, and implementing audits early, integrating compliance rules directly into backlog priorities (Definition of Done or user stories).',
    methodology: 'Hybrid'
  },
  {
    id: 168,
    domain: 'Business Environment',
    task: 'Evaluate and deliver project benefits and value',
    question: 'An enterprise CRM project has completed deployment. How should the project manager track and verify if the project delivered the business benefits outlined in the business case?',
    options: [
      'Disband the team immediately after launch and assume operations will track benefits.',
      'Monitor post-deployment metrics against the Benefits Realization Plan, and formally hand over tracking responsibility to operational business owners.',
      'File a change request to expand CRM features to increase the project budget.',
      'Rely on user-satisfaction surveys taken only 1 day post-launch.'
    ],
    answerIndex: 1,
    explanation: 'Measuring benefits (Task 2) involves comparing post-launch KPIs against the Benefits Realization Plan and handing off ownership to operations for long-term benefit evaluation.',
    methodology: 'Predictive'
  },
  {
    id: 169,
    domain: 'Business Environment',
    task: 'Evaluate and address external business environment changes for impact on scope',
    question: 'During a sustainable energy housing project, a sudden global tariff hike increases solar panel prices by 45%, threatening the project baseline. What is the FIRST step the project manager should take?',
    options: [
      'Submit an immediate baseline budget increase to the sponsor without looking at alternative suppliers.',
      'Evaluate the impact of the tariff increase, run diagnostic reviews with the procurement team to find panel substitutes or alternative regional vendors, and present the findings to the CCB.',
      'Halt all construction phases indefinitely until trade tariffs are negotiated.',
      'Instruct builders to purchase low-quality, non-certified solar panels to maintain budget parameters.'
    ],
    answerIndex: 1,
    explanation: 'Evaluating external changes (Task 3) means conducting a comprehensive impact review and exploring mitigations (e.g., panel alternatives, regional suppliers) before submitting formal recommendations.',
    methodology: 'Predictive'
  },
  {
    id: 170,
    domain: 'Business Environment',
    task: 'Support organizational change',
    question: 'A large software roll-out will fundamentally change the daily work processes of 500 operations staff, raising risk of high resistance. How should the PM support organizational change?',
    options: [
      'Mandate strict penalties for any operations staff who refuse to use the new software.',
      'Engage operational leaders early, coordinate training schedules, demonstrate the concrete benefits of the software, and use a structured Change Management model (e.g., ADKAR).',
      'Deploy the software on a weekend silently, forcing workers to adapt when they return.',
      'Suggest the organization lay off employees who resist using the new technology.'
    ],
    answerIndex: 1,
    explanation: 'Supporting organizational transitions (Task 4) involves change management—including early engagement, clear benefits presentation, training, and structured coaching matrices.',
    methodology: 'Predictive'
  },
  {
    id: 171,
    domain: 'Business Environment',
    task: 'Plan and manage project compliance',
    question: 'Under a healthcare development, a new health data standard is legislated mid-project. Failure to comply would result in severe legal penalties. What is the PM\'s correct path?',
    options: [
      "Ignore the legislation as it occurred after the project's baseline was signed off.",
      'Log the legislation as an active issue, analyze the impact on current requirements, and submit a formal change request to align development with the compliance legislation.',
      'Delegate compliance liability to the healthcare vendor.',
      'Ask the project sponsor to lobby the government for a waiver.'
    ],
    answerIndex: 1,
    explanation: 'Projects must respond to legal regulatory changes. PMs must log compliance issues, evaluate impacts, and implement required modifications via the formal change management process (Task 1 & 10).',
    methodology: 'Predictive'
  },
  {
    id: 172,
    domain: 'Business Environment',
    task: 'Evaluate and deliver project benefits and value',
    question: 'Who owns the final, long-term responsibility for authorizing and updating the business case and benefits realization plan on an enterprise initiative?',
    options: [
      'The Project Manager',
      'The Project Sponsor or Business Owner',
      'The Dev Team Lead',
      'The Scrum Master'
    ],
    answerIndex: 1,
    explanation: 'The Project Sponsor or Business Owner is responsible for the business case and benefits tracking, as they represent the high-level business interests.',
    methodology: 'Predictive'
  },
  {
    id: 173,
    domain: 'Business Environment',
    task: 'Evaluate and address external business environment changes for impact on scope',
    question: 'An agile project is building an e-commerce platform. A major competitor launches an app with a breakthrough voice-search feature, making the current product backlog obsolete. What is the Product Owner’s best path?',
    options: [
      'Complete the current backlog as planned, ignoring the competitor\'s release.',
      'Re-evaluate the product backlog, prioritize voice-search features, and collaborate with the team to define competitive sprints.',
      'Halt the project and write a new business case for a completely separate app.',
      'Increase developer hours to release the original features faster.'
    ],
    answerIndex: 1,
    explanation: 'Agile backlog refinement is designed to react to market changes. POs must prioritize items to maximize competitive business value (Task 3 & 13).',
    methodology: 'Agile'
  },
  {
    id: 174,
    domain: 'Business Environment',
    task: 'Support organizational change',
    question: 'A company is merging two departments. The PM is leading a project to unify their software stacks. Operational staff are highly defensive and refuse to cooperate. What is the best initial step?',
    options: [
      'Formally escalate the non-cooperation to HR.',
      'Facilitate open feedback workshops to map out concerns, co-design the unified interface, and arrange a mentor champion network.',
      'Bypass users and deploy the software without their feedback.',
      'Delay the unification project indefinitely.'
    ],
    answerIndex: 1,
    explanation: 'Addressing organizational resistance requires empathy, workshops, and user involvement in design to foster ownership and change adoption (Task 4).',
    methodology: 'Hybrid'
  },
  {
    id: 175,
    domain: 'Business Environment',
    task: 'Plan and manage project compliance',
    question: 'A quality audit shows that several safety certificates on a construction project are missing. What should the project manager have implemented to enforce compliance during execution?',
    options: [
      'A formal, automated Compliance Gate and Checklist where phase transitions are blocked until safety signatures are verified.',
      'Informal daily verbal updates to track safety status.',
      'A personal liability waiver signed by sub-contractors.',
      'Leaving compliance checks to the final operational handover phase.'
    ],
    answerIndex: 0,
    explanation: 'Active compliance management involves setting up formal quality gates and verification checklists throughout the lifecycle to prevent safety gaps (Task 1 & 7).',
    methodology: 'Predictive'
  },
  {
    id: 176,
    domain: 'Business Environment',
    task: 'Evaluate and deliver project benefits and value',
    question: 'During project planning, how should the PM capture the specific business value a project is designed to deliver?',
    options: [
      'Document detailed server specifications.',
      'Reference the Business Case and Benefits Realization Plan, and map project milestones directly to expected business outcomes.',
      'Draft a high-priority schedule baseline focused purely on developer velocity.',
      'Create a detailed timesheet template.'
    ],
    answerIndex: 1,
    explanation: 'The Business Case outlines the project\'s financial and strategic value, guiding planning and prioritizations to realize benefits (Task 2 & 9).',
    methodology: 'Predictive'
  },
  {
    id: 177,
    domain: 'Business Environment',
    task: 'Evaluate and address external business environment changes for impact on scope',
    question: 'A global logistics project is impacted by new international trade policies that penalize sea-freight emissions. To adapt, the PM should:',
    options: [
      'Proceed as planned and budget for future environmental fines.',
      'Collaborate with logistics architects to analyze alternative rail or electric options and submit recommedation updates to the Sponsor.',
      'Halt the project and wait for trade policies to change.',
      'Cancel sea-freight routes entirely, regardless of product delivery caps.'
    ],
    answerIndex: 1,
    explanation: 'Adapting to environmental changes involves evaluating impacts and designing eco-compliant logistical alternatives to protect the project timeline and budget.',
    methodology: 'Hybrid'
  },
  {
    id: 178,
    domain: 'Business Environment',
    task: 'Support organizational change',
    question: 'A PM rolls out an agile collaboration tool. Adoption is slow because senior leads prefer traditional Excel-based reporting. What change coaching action should the PM take?',
    options: [
      'Lock access to Excel files to force tool adoption.',
      'Demonstrate how the agile tool auto-generates high-level dashboards in real-time, and run short, supportive coaching sessions for the leads.',
      'Exclude the senior leads from progress reporting.',
      'Revert back to Excel-based reporting completely.'
    ],
    answerIndex: 1,
    explanation: 'Coaching traditional leaders on the value of agile tools (e.g., automated dashboards, real-time data) is more effective than forcing compliance (Task 4 & 13).',
    methodology: 'Agile'
  },
  {
    id: 179,
    domain: 'Business Environment',
    task: 'Plan and manage project compliance',
    question: 'A medical hardware project must align with strict FDA device testing guidelines. What should the PM include within the Project Budget?',
    options: [
      'Contingency reserves for possible compliance fines.',
      'Dedicated budgets and schedule allocations for clinical validation testing, FDA documentation, and audit readiness reviews.',
      'Marketing campaigns to promote compliance efforts.',
      'Bribes for FDA inspectors.'
    ],
    answerIndex: 1,
    explanation: 'Compliance requires dedicated cost and schedule allocations for validation testing and audit prep to ensure institutional readiness (Task 1).',
    methodology: 'Predictive'
  },
  {
    id: 180,
    domain: 'Business Environment',
    task: 'Evaluate and deliver project benefits and value',
    question: 'A project is completed. What is the BEST indicator that the project delivered business value to the organization?',
    options: [
      'The project was delivered exactly on the original schedule date.',
      'The deliverables are being actively used by operational staff and achieve target benefits outlined in the benefits realization plan.',
      'The project manager did not utilize any contingency reserves.',
      'The WBS dictionary contained no unallocated work packages.'
    ],
    answerIndex: 1,
    explanation: 'PMP standards define project success as delivering business value and satisfying target benefits, not just meeting baseline schedules (Task 2).',
    methodology: 'Predictive'
  }
];
