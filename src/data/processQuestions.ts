import { Question } from '../types';

export const processQuestions: Question[] = [
  {
    id: 77,
    domain: 'Process',
    task: 'Manage project risks',
    question: 'A project manager identifies a risk that a key supplier might experience supply chain delays. To address this, the project manager signs a backup agreement with an alternative vendor who can deliver materials within 48 hours for an additional cost. Which risk response strategy was utilized?',
    options: [
      'Mitigate',
      'Avoid',
      'Transfer',
      'Accept'
    ],
    answerIndex: 0,
    explanation: 'Risk mitigation (Task 3) involves taking proactive, early actions to reduce the probability or impact of a risk. Signing a backup vendor to speed up response time reduces the impact of the delay.',
    methodology: 'Predictive'
  },
  {
    id: 78,
    domain: 'Process',
    task: 'Plan and manage budget and resources',
    question: 'During a project performance review, the cost analyst reports an Earned Value (EV) of $120,000, a Planned Value (PV) of $150,000, and an Actual Cost (AC) of $100,000. What is the current Cost Performance Index (CPI) and Schedule Performance Index (SPI)?',
    options: [
      'CPI = 0.80, SPI = 1.20',
      'CPI = 1.20, SPI = 0.80',
      'CPI = 1.25, SPI = 0.75',
      'CPI = 1.20, SPI = 1.50'
    ],
    answerIndex: 1,
    explanation: 'CPI = EV / AC = $120,000 / $100,000 = 1.20. SPI = EV / PV = $120,000 / $150,000 = 0.80. A CPI above 1 means the project is under budget, and an SPI below 1 means it is behind schedule.',
    methodology: 'Predictive'
  },
  {
    id: 79,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'A corporate project involves highly uncertain, rapidly changing user interfaces, but has a rigid, predictive, and complex backend database architecture that takes months to test. What is the BEST methodology recommendation?',
    options: [
      'Strict predictive waterfall approach for the entire project to prevent system mismatches.',
      'A hybrid methodology, using agile sprints for the front-end design and a predictive predictive model for the backend database integration.',
      'A completely agile Scrum approach requiring the database team to deploy to production every five days.',
      'Abandon the project until the backend constraints are fully removed.'
    ],
    answerIndex: 1,
    explanation: 'Hybrid methodologies (Task 13) are ideal when different project components require different levels of certainty. Agile manages the fast, iterative front-end, while predictive manages the stable database infrastructure.',
    methodology: 'Hybrid'
  },
  {
    id: 80,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'In a traditional engineering project, a client requests a modification to the structural load bearing capacity. What is the FIRST step the project manager should take?',
    options: [
      'Bypass the Change Control Board (CCB) and instruct the subcontractor to implement the modification immediately.',
      'Analyze the impact of the change on project scope, cost, schedule, quality, and risks before submitting a formal change request to the CCB.',
      'Submit an immediate contract invoice to the client for the expected change cost.',
      'Refuse the request flatly, citing scope rigidity in predictive projects.'
    ],
    answerIndex: 1,
    explanation: 'Task 10 dictates that the project manager must first analyze the impact of any proposed change across all dimensions (scope, cost, schedule, risk, quality) before submitting it to the Change Control Board.',
    methodology: 'Predictive'
  },
  {
    id: 81,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'A project manager is calculating the critical path on a network diagram. Activity A raises 4 days, Activity B follows A and has 6 days, Activity C runs in parallel with B and is 8 days, Activity D follows both B and C and is 2 days. What is the critical path duration?',
    options: [
      '12 days',
      '14 days',
      '10 days',
      '16 days'
    ],
    answerIndex: 1,
    explanation: 'The paths are Start -> A -> B -> D -> End (4 + 6 + 2 = 12 days) and Start -> A -> C -> D -> End (4 + 8 + 2 = 14 days). The critical path is the longest path, which is 14 days.',
    methodology: 'Predictive'
  },
  {
    id: 82,
    domain: 'Process',
    task: 'Manage project artifacts',
    question: 'An agile development team struggles with accessing updated software design assets. Version conflicts frequently cause rework. What project management artifact should the Scrum Master prioritize organizing?',
    options: [
      'A highly detailed work breakdown structure (WBS).',
      'A centralized cloud repository with distinct configuration management, version controls, and artifact indices.',
      'A detailed project charter signed by the senior executive sponsor.',
      'A comprehensive communications plan sent weekly via CSV format.'
    ],
    answerIndex: 1,
    explanation: 'Task 12 focus is managing project artifacts. Using a centralized workspace with clear version and configuration control prevents access conflicts and reduces team rework.',
    methodology: 'Agile'
  },
  {
    id: 83,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'A manufacturing component undergoes assembly line inspections. The quality analyst reports that 15% of components fail initial testing due to alignment issues. What quality management technique should the PM implement FIRST?',
    options: [
      'Perform a Root Cause Analysis (RCA) using Ishikawa (fishbone) diagrams to identify systemic source failures.',
      'Add more quality inspectors at the end of the line to catch more defective parts.',
      'Halt the entire assembly line indefinitely until a new machinery vendor is sourced.',
      'Lower the quality standards so fewer components fail the baseline review.'
    ],
    answerIndex: 0,
    explanation: 'PMP standards prioritize prevention and root cause analysis (Task 7) over simple inspection. Identifying the underlying cause of failures prevent future occurrences.',
    methodology: 'Predictive'
  },
  {
    id: 84,
    domain: 'Process',
    task: 'Plan and manage scope',
    question: 'During a predictive software delivery, a developer implements an advanced notification feature that was not specified in the scope document but is highly valuable. How should the project manager handle this situation?',
    options: [
      'Acknowledge the effort and update the scope baseline retroactively.',
      'Identify the addition as Gold Plating, evaluate project compliance impacts, and instruct the team to strictly adhere to the defined scope.',
      'Ask the client for an extra fee for this additional unrequested feature.',
      'Delegate the decision-making to the project testing engineer.'
    ],
    answerIndex: 1,
    explanation: 'Gold plating (adding unrequested elements) violates scope control rules. The project manager must ensure team compliance with baselines and prevent unauthorized additions (Task 8).',
    methodology: 'Predictive'
  },
  {
    id: 85,
    domain: 'Process',
    task: 'Engage stakeholders',
    question: 'An active stakeholder complains that they are bombarded with daily engineering logs that are irrelevant to their business management requirements. What communication strategy should be adjusted?',
    options: [
      'Remove the stakeholder from all project emails to reduce communications overhead.',
      'Review the stakeholder engagement assessment matrix and communications plan, tailoring update structures based on their specific interest and power parameters.',
      'Advise the stakeholder to flag engineering logs as spam in their mailbox.',
      'Change the project architecture so logs are sent only once a quarter.'
    ],
    answerIndex: 1,
    explanation: 'Task 2 and 4 involve managing communications and stakeholder engagement. Tailoring information frequency and depth based on stakeholder interest maps prevents communication fatigue.',
    methodology: 'Predictive'
  },
  {
    id: 86,
    domain: 'Process',
    task: 'Plan and manage procurement',
    question: 'A project manager is outsourcing a specialized laboratory testing component. The requirements are high-level and expected to evolve based on discovery. Which contract type is MOST appropriate for this outsourcing contract?',
    options: [
      'Firm-Fixed-Price (FFP)',
      'Cost-Plus-Fixed-Fee (CPFF) or Time & Material (T&M)',
      'Fixed-Price-Incentive-Fee (FPIF)',
      'Economic Price Adjustment Contract'
    ],
    answerIndex: 1,
    explanation: 'For specialized, exploratory work where scope is uncertain, Cost-Reimbursable (like CPFF) or Time & Materials (T&M) are appropriate to prevent suppliers from padding fixed prices due to high uncertainty (Task 11).',
    methodology: 'Predictive'
  },
  {
    id: 87,
    domain: 'Process',
    task: 'Plan and manage project/phase closure or transitions',
    question: 'A predictive project phase is complete. The client has signed off on all scope deliverables. What is the NEXT critical step for the project manager?',
    options: [
      'Immediately disperse the project team to new projects to save cost.',
      'Release the final budget reports, archive lessons learned, and obtain formal project or phase closure protocols.',
      'Start the next phase immediately, bypassing final retrospectives to accelerate timeline.',
      'Delete the project sandboxes to prevent server storage fees.'
    ],
    answerIndex: 1,
    explanation: 'Task 17 concerns phase closure. Archiving lessons learned, updating asset repositories, and getting formal closure signoff are required during transitions to support knowledge transfer.',
    methodology: 'Predictive'
  },
  {
    id: 88,
    domain: 'Process',
    task: 'Manage project issues',
    question: 'During a hybrid upgrade execution, a hardware part burns out, delaying testing. How should the project manager handle this event?',
    options: [
      'Log the burnout in the risk register and wait for a risk response meeting.',
      'Log the event in the Issue Log, assess its immediate schedule impact, allocate contingency resources, and implement a replacement path.',
      'Submit an immediate baseline extension request to the sponsor before identifying replacements.',
      'Direct the developers to rewrite the software so the burnt component is ignored.'
    ],
    answerIndex: 1,
    explanation: 'A risk that has occurred becomes an "Issue" (Task 15). Issues are logged in the Issue Log and actively managed, contrasting with future uncertain risks documented in the risk register.',
    methodology: 'Hybrid'
  },
  {
    id: 89,
    domain: 'Process',
    task: 'Establish project governance structure',
    question: 'Who is primarily responsible for establishing high-level corporate tolerances, project approvals thresholds, and authorizing the project charter?',
    options: [
      'The Project Manager',
      'The Project Sponsor',
      'The PMO Auditor',
      'The Scrum Team Lead'
    ],
    answerIndex: 1,
    explanation: 'Project governance (Task 14) and executive sponsorship dictate that the sponsor authorizes the project charter, establishes financial limits, and controls enterprise funding allocations.',
    methodology: 'Predictive'
  },
  {
    id: 90,
    domain: 'Process',
    task: 'Execute project with the urgency required to deliver business value',
    question: 'An agile project team identifies that releasing a sub-set of features early in the cycle will help the client capture a sudden 15% market holiday window. How should the Scrum Master guide the team?',
    options: [
      'Advise against early releases as they complicate standard predictive release plans.',
      'Collaborate with the Product Owner to define a Minimum Viable Product (MVP) and run an expedited sprint cycle to capture the holiday value.',
      'Require other departments to handle the market window using alternative operational workarounds.',
      'Increase sprint durations to 60 days to package more value.'
    ],
    answerIndex: 1,
    explanation: 'Task 1 emphasizes delivering business value with urgency. Structuring and delivering an MVP to capture immediate market windows is a key agile benefit.',
    methodology: 'Agile'
  },
  {
    id: 91,
    domain: 'Process',
    task: 'Ensure knowledge transfer for project continuity',
    question: 'A key infrastructure engineer is retiring from the project next month. What action should the project manager prioritize to ensure knowledge transfer?',
    options: [
      'Require them to write a 1,000-page system document in their final week.',
      'Establish a formal shadow and pair-programming schedule with a junior engineer, and hold interactive validation walkthroughs.',
      'Ignore the retirement, assuming system diagnostics will shield the project.',
      'Suggest the organization retain them indefinitely as an unpaid consultant.'
    ],
    answerIndex: 1,
    explanation: 'Knowledge transfer (Task 16) is best handled iteratively through active shadowing, pairing, and peer demonstrations rather than last-minute formal reading guides.',
    methodology: 'Predictive'
  },
  {
    id: 92,
    domain: 'Process',
    task: 'Plan and manage scope',
    question: 'In an agile project, how is the scope baseline managed and modified?',
    options: [
      'Scope is locked via the Project Charter and any changes require CCB approval.',
      'Scope is managed dynamically through backlog prioritization, refinement, and user story sizing, with the Product Owner approving priority updates.',
      'Scope can be adjusted by any developer during the sprint cycle without approval.',
      'Agile projects have no scope documentation or bounds.'
    ],
    answerIndex: 1,
    explanation: 'In agile, scope is dynamic (Task 8 & 13) and managed through backlog refinement. The Product Owner prioritizes stories based on business value, without requiring multi-week CCB procedures.',
    methodology: 'Agile'
  },
  {
    id: 93,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'The change control board (CCB) has approved a scope extension. What is the project manager\'s immediate NEXT duty?',
    options: [
      'Immediately start development of the new features yourself.',
      'Update all affected baselines (scope, cost, work parameters) and communicate the modifications to the team and key stakeholders.',
      'Submit an immediate billing invoice to the client for the expected change fee.',
      'Arrange a celebratory party with the development team.'
    ],
    answerIndex: 1,
    explanation: 'Once a change is officially approved (Task 10), the PM must update baselines and document registers, and communicate the changes to set new performance baselines.',
    methodology: 'Predictive'
  },
  {
    id: 94,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'A project manager is deciding whether to execute a project using Agile or Waterfall. The project has highly proven, regulatory engineering requirements that must not have any defects but has rigid budget controls. What is the BEST recommendation?',
    options: [
      'Agile Scrum to allow developers to experiment with compliance regulations.',
      'Predictive Waterfall to leverage proven templates, detailed sequential planning, and strict quality control gates.',
      'A completely informal approach skipping paperwork to meet tight timelines.',
      'Hybrid approach where regulations are drafted dynamically on social boards.'
    ],
    answerIndex: 1,
    explanation: 'For highly stable, strictly regulated projects where changes are costly and requirements are static, predictive methodologies provide the necessary control gates (Task 13).',
    methodology: 'Predictive'
  },
  {
    id: 95,
    domain: 'Process',
    task: 'Integrate project planning activities',
    question: 'A project manager is running a hybrid project. How should they integrate predictive schedule baselines with iterative sprint releases?',
    options: [
      'Discard predictive schedule targets and let the team release features whenever they are ready.',
      'Map agile sprint milestones (release dates, demo markers) as major milestone points within the Master Project Schedule.',
      'Force the agile developers to document detailed Waterfall Gantt charts for each hour of sprint cycles.',
      'Create two completely disjoint project plans managed by different coordinators.'
    ],
    answerIndex: 1,
    explanation: 'Integrating plans (Task 9) involves aligning agile sprint deliveries and high-level release gates into the master schedule as milestone anchors, maintaining alignment.',
    methodology: 'Hybrid'
  },
  {
    id: 96,
    domain: 'Process',
    task: 'Manage communications',
    question: 'A project manager receives feedback that regional stakeholders feel left out of key decision-making. What communication tool should the project manager audit?',
    options: [
      'The cost baseline spreadsheets.',
      'The Communications Management Plan and Stakeholder Register.',
      'The technical requirements handbook.',
      'The individual developer timesheets.'
    ],
    answerIndex: 1,
    explanation: 'Managing communication (Task 2) requires targeting issues at their policy sources. Auditing the Communications Management Plan ensures stakeholder needs are met.',
    methodology: 'Predictive'
  },
  {
    id: 97,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'An agile development team wants to implement lightweight, visual flow control to monitor user stories from prep to deploy. What visual layout should they utilize?',
    options: [
      'A detailed Pareto chart showing defect distributions.',
      'A Kanban Board tracking customized workflow columns.',
      'A high-level project network baseline.',
      'A detailed cost-variance curve.'
    ],
    answerIndex: 1,
    explanation: 'Kanban boards visual layout tracks progress, manages Work in Progress (WIP) limits, and optimizes flow in agile development.',
    methodology: 'Agile'
  },
  {
    id: 98,
    domain: 'Process',
    task: 'Plan and manage procurement',
    question: 'A project manager must acquire standard off-the-shelf laptops for a team expansion. The requirements are fully detailed. Which contract type is BEST to minimize buyer cost risk?',
    options: [
      'Cost-Plus-Award-Fee (CPAF)',
      'Firm-Fixed-Price (FFP)',
      'Time and Materials (T&M)',
      'Cost-Plus-Fixed-Fee (CPFF)'
    ],
    answerIndex: 1,
    explanation: 'For commodity goods with fully detailed, standard specs, Firm-Fixed-Price (FFP) contracts minimize cost risk to the buyer (Task 11).',
    methodology: 'Predictive'
  },
  {
    id: 99,
    domain: 'Process',
    task: 'Manage project issues',
    question: 'At a critical testing stage, a security vulnerability is identified. It has no pre-approved response strategy. What should the project manager do FIRST?',
    options: [
      'Halt the project and wait for an intensive PMO audit.',
      'Log the risk as an active issue in the Issue Log, assess its impact, and run diagnostic sessions with technical staff to draft a resolution path.',
      'Document the vulnerability in the communication register and ignore it.',
      'Immediately blame the QA team lead during a steering committee meeting.'
    ],
    answerIndex: 1,
    explanation: 'An identified blocker without pre-planned steps is an issue (Task 15). Logging and facilitating a technical remediation path is the proper response.',
    methodology: 'Predictive'
  },
  {
    id: 100,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'A quality audit reveals that several software developers are skipping peer reviews, which violates the quality plan. What is the project manager\'s best response?',
    options: [
      'Fremont some developers to emphasize that quality policies are static.',
      'Convene the developers to explain the impact of missed peer reviews on defect rates, and automate peer feedback checkpoints within the repository pipeline.',
      'Cancel the quality audit as it interferes with development timelines.',
      'Lower the peer review criteria to speed up deliverables.'
    ],
    answerIndex: 1,
    explanation: 'Addressing quality compliance involves education and automation (Task 7), helping developers understand the "why" and facilitating compliance.',
    methodology: 'Hybrid'
  },
  // To reach the exact 90 Process questions (from 77 to 166), let's keep generating.
  // We will structure them with extreme care, high-density, real PMP-questions scenario format.
  {
    id: 101,
    domain: 'Process',
    task: 'Manage project risks',
    question: 'A PM is planning a project in a hurricane-prone area. The historical data shows a 10% chance of a storm causing a 20-day delay. Which tool is best to analyze the cumulative risk impacts?',
    options: [
      'Tornado diagrams',
      'Monte Carlo simulation',
      'Ishikawa diagrams',
      'Pareto analysis'
    ],
    answerIndex: 1,
    explanation: 'Monte Carlo simulation (Task 3) runs thousands of trial scenarios to provide probability distributions of schedule and cost outcomes.',
    methodology: 'Predictive'
  },
  {
    id: 102,
    domain: 'Process',
    task: 'Plan and manage budget and resources',
    question: 'A project has a budget at completion (BAC) of $500,000. Under a performance audit, the Cost Performance Index (CPI) is 0.80. What is the Estimate at Completion (EAC)?',
    options: [
      '$400,000',
      '$625,000',
      '$500,000',
      '$425,000'
    ],
    answerIndex: 1,
    explanation: 'EAC = BAC / CPI = $500,000 / 0.80 = $625,000. This indicates the project is over-budget.',
    methodology: 'Predictive'
  },
  {
    id: 103,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'An agile team experienced frequent blocker drops, citing a lack of detailed visual checklists. The Scrum Master suggests implementing a shared criteria list that user stories must meet before being pulled into development. What is this list called?',
    options: [
      'Definition of Done (DoD)',
      'Definition of Ready (DoR)',
      'Acceptance Criteria',
      'Sprint Backlog Baseline'
    ],
    answerIndex: 1,
    explanation: 'The Definition of Ready (DoR) defines criteria a story must meet (e.g., clear description, dependencies mapped) before developers pull it into a sprint.',
    methodology: 'Agile'
  },
  {
    id: 104,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'A team has a sprint duration of 2 weeks. During planning, they realize a critical middleware task will take 3 weeks to complete. What should the Scrum Master advocate?',
    options: [
      'Extend the current sprint duration to 3 weeks to allow completion.',
      'Deconstruct the middleware task into independent user stories that deliver incremental value within the 2-week timebox, or run a technical spike.',
      'Instruct developers to work overtime to squeeze 3 weeks of work into 2.',
      'Skip testing phases to speed up integration.'
    ],
    answerIndex: 1,
    explanation: 'Agile sprint timeboxes are fixed. Slicing complex tasks into smaller stories or using a technical Spike respects the sprint structure while maintaining value delivery (Task 6 & 13).',
    methodology: 'Agile'
  },
  {
    id: 105,
    domain: 'Process',
    task: 'Manage project artifacts',
    question: 'A hybrid project manager is storing engineering drawings, agile backlog maps, and contract milestones. What is the critical management policy that ensures everyone uses updated files?',
    options: [
      'Scope Management Policy',
      'Configuration Management Plan',
      'Quality Release Plan',
      'Stakeholder Assessment Matrix'
    ],
    answerIndex: 1,
    explanation: 'Configuration management (Task 12) tracks and manages updates to key deliverables and documents, ensuring alignment on the latest versions.',
    methodology: 'Hybrid'
  },
  {
    id: 106,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'A project manager is asked by a functional director to add an unbudgeted feature "as a personal favor." What is the PM\'s correct response?',
    options: [
      'Add the feature to maintain good organizational relationships.',
      'Remind the director that all changes must flow through the formal change control process, starting with an impact analysis submitted to the CCB.',
      'Accept the change but charge the cost center of the director\'s department.',
      'Ignore the request completely and delete their emails.'
    ],
    answerIndex: 1,
    explanation: 'All project changes must rely on the formal change management process (Task 10) to protect baselines from scope creep.',
    methodology: 'Predictive'
  },
  {
    id: 107,
    domain: 'Process',
    task: 'Execute project with the urgency required to deliver business value',
    question: 'A software project is delayed. To catch up, the PM suggests integrating a pre-built commercial registration module rather than coding a custom solution from scratch, reducing schedule time by 30 days. This is an example of what prioritization?',
    options: [
      'Scope Gold Plating',
      'Time-to-market and Business Value delivery optimization',
      'Informal compliance bypass',
      'Procurement risk transferring'
    ],
    answerIndex: 1,
    explanation: 'Opting for pre-built code to save schedule days is an example of prioritizing delivery speed and business value (Task 1).',
    methodology: 'Hybrid'
  },
  {
    id: 108,
    domain: 'Process',
    task: 'Engage stakeholders',
    question: 'An executive stakeholder suddenly becomes highly disruptive, expressing anger about project expenditures. How should the project manager handle this stakeholder situation?',
    options: [
      'Restrict their access to project cost reports.',
      'Check the stakeholder engagement matrix, prioritize a private meeting to walk them through earned value data, and realign their engagement style.',
      'Report their behaviors to the CEO to have them removed from the steering panel.',
      'Apologize and stop all project spending until they are calm.'
    ],
    answerIndex: 1,
    explanation: 'Managing stakeholder engagement (Task 4) involves private outreach and walking them through data to address concerns and realign expectations.',
    methodology: 'Predictive'
  },
  {
    id: 109,
    domain: 'Process',
    task: 'Manage communications',
    question: 'An agile project is transitioning to a hybrid delivery model. Regional managers are complaining that they receive too many text-heavy messages. What communication change should the Scrum Master advocate?',
    options: [
      'Reduce communication frequency to once a quarter.',
      'Shift communications from text-heavy statuses to visual dashboard reports with high-level milestone indicators.',
      'Require regional managers to attend daily developer standup calls.',
      'Delegate all communication duties to developers.'
    ],
    answerIndex: 1,
    explanation: 'Shifting to highly scannable visual dashboards (Task 2) tailors communications to stakeholders\' needs and prevents informational fatigue.',
    methodology: 'Hybrid'
  },
  {
    id: 110,
    domain: 'Process',
    task: 'Establish project governance structure',
    question: 'The PMO auditor notes that a hybrid project has no documented authorization thresholds for system configuration changes. What should the PM do?',
    options: [
      'Explain that agile components have zero governance controls.',
      'Work with key stakeholders to co-create a clear project governance framework outlining decision authorities for changes and deployments.',
      'Delegate all change authorizations to the senior developer lead.',
      'Continue without governance controls, relying on informal developer updates.'
    ],
    answerIndex: 1,
    explanation: 'Governance frameworks (Task 14) are required in both adaptive and predictive models to define clear decision rights, compliance checks, and approval thresholds.',
    methodology: 'Hybrid'
  },
  {
    id: 111,
    domain: 'Process',
    task: 'Plan and manage project/phase closure or transitions',
    question: 'A project manager is closing a predictive project. A supplier contract is still active, with a minor final invoice outstanding. What is the PM\'s responsibility?',
    options: [
      'Close the project and leave the supplier invoice to the accounting operational team.',
      'Verify that all seller deliverables have been accepted, complete seller performance assessments, and formally close the contract before closing the project.',
      'Suggest the vendor write off the final invoice to speed up project closure.',
      'Force the vendor to sign a waiver ignoring the final invoice.'
    ],
    answerIndex: 1,
    explanation: 'Project closure (Task 17 & 11) requires and formal administrative and contract termination. All supplier contracts must be completed and closed before formal project wrap-up.',
    methodology: 'Predictive'
  },
  {
    id: 112,
    domain: 'Process',
    task: 'Manage project issues',
    question: 'A critical regulatory inspection is scheduled in 2 weeks. The project database server is down. This server block is currently categorized as which of the following?',
    options: [
      'Active project risk',
      'Immediate project issue',
      'Minor schedule variance',
      'Escalated risk trigger'
    ],
    answerIndex: 1,
    explanation: 'Because the server is currently down, it is an active, realized problem—which qualifies as an issue (Task 15) in the Issue Log.',
    methodology: 'Predictive'
  },
  {
    id: 113,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'A developer estimates that a highly uncertain api task has an optimistic duration of 3 days, a pessimistic duration of 15 days, and a most likely duration of 6 days. What is the beta (PERT) estimate?',
    options: [
      '8.0 days',
      '7.0 days',
      '6.0 days',
      '9.0 days'
    ],
    answerIndex: 1,
    explanation: 'Beta PERT = (Optimistic + 4*Most Likely + Pessimistic) / 6 = (3 + 24 + 15) / 6 = 42 / 6 = 7.0 days.',
    methodology: 'Predictive'
  },
  {
    id: 114,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'An organization establishes that all projects must align with ISO 9001 standards. How does the PM ensure this in planning?',
    options: [
      'Include ISO compliance audits within the quality management plan, mapping quality metrics to the standard requirements.',
      'Hire an external quality inspector to manage the final verification stages.',
      'Include a safety warning in the project charter document.',
      'Suggest developers do their own ISO testing asynchronous to project streams.'
    ],
    answerIndex: 0,
    explanation: 'Ensuring quality compliance (Task 7) means translating standards into specific, measurable criteria and audits within the Quality Management Plan.',
    methodology: 'Predictive'
  },
  {
    id: 115,
    domain: 'Process',
    task: 'Plan and manage scope',
    question: 'Which of the following defines the "Scope Baseline" inside a predictive project?',
    options: [
      'The raw Project Charter document and cost logs.',
      'The Project Scope Statement, WBS, and WBS Dictionary.',
      'The Agile backlog and Sprint priority lists.',
      'The stakeholder communications plan.'
    ],
    answerIndex: 1,
    explanation: 'The predictive scope baseline (Task 8) consists of three components: the Project Scope Statement, the Work Breakdown Structure (WBS), and the WBS Dictionary.',
    methodology: 'Predictive'
  },
  {
    id: 116,
    domain: 'Process',
    task: 'Plan and manage procurement',
    question: 'A contractor is working under a Cost-Plus-Incentive-Fee (CPIF) contract. If the final costs are lower than target costs, what happens to the cost savings?',
    options: [
      'The savins are kept entirely by the contractor.',
      'The savings are shared between the buyer and contractor based on a pre-defined share ratio.',
      'The savings are returned completely to the buyer.',
      'The savings are logged as contingency reserve for the steering panel.'
    ],
    answerIndex: 1,
    explanation: 'CPIF contracts include a shared-savings clause, dividing cost deviations between buyer and seller based on a pre-defined ratio (e.g., 80/20) to incentivize cost control (Task 11).',
    methodology: 'Predictive'
  },
  {
    id: 117,
    domain: 'Process',
    task: 'Ensure knowledge transfer for project continuity',
    question: 'During a hybrid project, lessons learned are captured only during final closing. What should the PM alter to ensure knowledge transfer occurs continuously?',
    options: [
      'Wait for the PMO to enforce intermediate lessons-learned documentation.',
      'Implement sprint retrospectives or mid-phase lessons learned reviews to capture and apply insights iteratively.',
      'Cancel post-project lessons-learned sessions completely.',
      'Require developers to write individual lessons-learned articles weekly.'
    ],
    answerIndex: 1,
    explanation: 'Iterative review cycles (like sprint retrospectives) ensure lessons learned (Task 16) are applied immediately to subsequent phases, maximizing project quality.',
    methodology: 'Hybrid'
  },
  {
    id: 118,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'The engineering team is forced to change a component due to a newly discovered safety clearance restriction. This represents which source of change request?',
    options: [
      'An optional client improvement request.',
      'A non-negotiable regulatory compliance corrective change.',
      'A normal scope gold-plating adjustment.',
      'A typical scheduling crashing adjustment.'
    ],
    answerIndex: 1,
    explanation: 'This modification is driven by safety regulations, qualifying it as a compliance corrective action (Task 10 & Domain 3 Task 1) that must be logged and implemented via formal paths.',
    methodology: 'Predictive'
  },
  {
    id: 119,
    domain: 'Process',
    task: 'Integrate project planning activities',
    question: 'A project manager is compiling the final Project Management Plan. Which document acts as the master integration framework for all child plans?',
    options: [
      'The Project Charter',
      'The integrated Project Management Plan',
      'The Scope Baseline document',
      'The PMO governance schedule'
    ],
    answerIndex: 1,
    explanation: 'The Master Project Management Plan (Task 9) integrates all subsidiary plans (scope, schedule, risk, communication) into a cohesive framework.',
    methodology: 'Predictive'
  },
  {
    id: 120,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'An agile development team chooses XP (Extreme Programming) practices to boost design safety. Which practice should they introduce?',
    options: [
      'Weekly written reports sent to the PMO.',
      'Pair-programming, test-driven development (TDD), and continuous integration.',
      'A formal Change Control Board meeting.',
      'Detailed sequential resource allocations.'
    ],
    answerIndex: 1,
    explanation: 'Core XP practices include pair-programming, Test-Driven Development (TDD), and continuous integration (CI) to improve quality and speed (Task 13).',
    methodology: 'Agile'
  },
  {
    id: 121,
    domain: 'Process',
    task: 'Manage communications',
    question: 'A project manager wants to share high-confidential security compliance reports with executive directors. Which communication method is BEST?',
    options: [
      'Emailing reports directly as unsecured email attachments.',
      'Storing files in a secure, encrypted cloud space with restricted multi-factor authentication access, notifying directors via encrypted notifications.',
      'Publishing compliance results on public company boards.',
      'Distributing printed copies to junior staff to deliver by hand.'
    ],
    answerIndex: 1,
    explanation: 'Managing confidential communications (Task 2) requires high security and restricted access to protect sensitive institutional assets.',
    methodology: 'Predictive'
  },
  {
    id: 122,
    domain: 'Process',
    task: 'Plan and manage scope',
    question: 'During a sprint review, the customer rejects a user story, claiming it lacks critical verification options. What is the team’s next step?',
    options: [
      'Modify the story during the current sprint review and deploy it immediately.',
      'Accept the feedback, move the story back to the product backlog for prioritization, and refine the definitions of done/acceptance criteria.',
      'Document a formal change request to the CCB.',
      'Instruct developers to ignore the validation feedback.'
    ],
    answerIndex: 1,
    explanation: 'Unaccepted sprint deliverables return to the product backlog (Task 8 & 13) for refinement, prioritization, and planning in upcoming iterations.',
    methodology: 'Agile'
  },
  {
    id: 123,
    domain: 'Process',
    task: 'Plan and manage budget and resources',
    question: 'A construction project is in a highly unstable environment where steel costs fluctuate weekly. What estimation method is most resilient?',
    options: [
      'Analogous estimating based on older project files.',
      'Bottom-up estimating using locked static distributor prices.',
      'Parametric estimating combined with dynamic contingency reserves and index-linked contracts.',
      'Expert judgment ignoring cost averages.'
    ],
    answerIndex: 2,
    explanation: 'Fluctuating material costs are managed by combining parametric estimates with index-linked contracts and contingency reserves (Task 5).',
    methodology: 'Predictive'
  },
  {
    id: 124,
    domain: 'Process',
    task: 'Establish project governance structure',
    question: 'A Scrum Master is asked to define key gates where the organization will audit agile velocities. Where should these audit points align?',
    options: [
      'During daily standup sessions to check individual hourly output.',
      'At release and retrospective intervals, aligning metrics with business value reviews instead of micro-management gates.',
      'In the PMO weekly timesheet portal.',
      'At the start of sprint ideation campaigns.'
    ],
    answerIndex: 1,
    explanation: 'Agile governance (Task 14) focuses metrics reviews at sprint reviews and release boundaries, avoiding micro-management during active execution.',
    methodology: 'Agile'
  },
  {
    id: 125,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'To shorten a predictive project timeline, the PM schedules the design phase to overlap with initial site excavations, which introduces risk of rework. This schedule technique is called:',
    options: [
      'Crashing',
      'Fast-tracking',
      'Resource Leveling',
      'Schedule Smoothing'
    ],
    answerIndex: 1,
    explanation: 'Fast-tracking involves running phases in parallel that would normally run sequentially, which can lead to quality rework risks.',
    methodology: 'Predictive'
  },
  {
    id: 126,
    domain: 'Process',
    task: 'Manage project issues',
    question: 'A subcontractor fails to deliver a module on time, risking the next integration. The PM evaluates alternative solutions. This analysis represents which step in issues management?',
    options: [
      'Drafting the project charter bounds.',
      'Assessing impact, identifying option paths, and enacting resolution processes.',
      'Updating communication matrix rules.',
      'Submitting a change command to delete the module.'
    ],
    answerIndex: 1,
    explanation: 'Issues management (Task 15) involves logging, impact evaluation, exploring alternative paths, and implementing resolution steps.',
    methodology: 'Predictive'
  },
  {
    id: 127,
    domain: 'Process',
    task: 'Plan and manage procurement',
    question: 'A supplier delivers parts that violate quality specifications. What document contains the formal dispute resolution policies?',
    options: [
      'Quality Management Plan',
      'The Supplier Contract or Procurement Agreement',
      'Risk Response Handbook',
      'The Project WBS Dictionary'
    ],
    answerIndex: 1,
    explanation: 'Dispute policies, settlement terms, and legal remedies are documented in the formal contract with the supplier (Task 11).',
    methodology: 'Predictive'
  },
  {
    id: 128,
    domain: 'Process',
    task: 'Engage stakeholders',
    question: 'Which of the following is the PRIMARY input to tailor stakeholder engagement approaches mid-project?',
    options: [
      'The cost-performance charts.',
      'The Stakeholder Register and Engagement Assessment Matrix.',
      'The technical requirements spreadsheet.',
      'The project delivery baseline.'
    ],
    answerIndex: 1,
    explanation: 'The Stakeholder Register and Engagement Assessment Matrix (Task 4) track stakeholder power, interest, and alignment levels, helping target communication.',
    methodology: 'Predictive'
  },
  {
    id: 129,
    domain: 'Process',
    task: 'Integrate project planning activities',
    question: 'A project manager is launching a massive green-energy project. Which component should they establish first to coordinate multi-disciplinary project work?',
    options: [
      'The detailed scope statement.',
      'An Integrated Project Kickoff Session to align scope, timeline, risks, and communication protocols.',
      'The finalized vendor contract details.',
      'Individual team timesheets.'
    ],
    answerIndex: 1,
    explanation: 'An integrated kick-off session (Task 9) aligns cross-functional groups on goals, risks, and processes to start the project effectively.',
    methodology: 'Predictive'
  },
  {
    id: 130,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'An agile team uses Story Points for estimating task size. What is the main benefit of Story Points over estimating in hours?',
    options: [
      'Story points represent precise dollar metrics for senior administrators.',
      'They represent relative complexity and risk, avoiding debate over individual working speeds.',
      'They speed up CCB change request approvals.',
      'They dictate fixed overtime policies for developers.'
    ],
    answerIndex: 1,
    explanation: 'Story Points represent relative size, effort, and risk, helping the team plan without arguing over individual working speeds.',
    methodology: 'Agile'
  },
  {
    id: 131,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'The change control board (CCB) rejects a change command. What is the PM\'s duty?',
    options: [
      'Implement the change secretly anyway to satisfy the client.',
      'Record the rejection in the change log, update the register, and communicate the decision and justifications to the requesting stakeholder.',
      'Re-apply for the change daily to wear down the board\'s resistance.',
      'Threaten to close the project early unless the change is approved.'
    ],
    answerIndex: 1,
    explanation: 'Rejections must be logged and communicated with detailed justifications to the requesting stakeholder (Task 10).',
    methodology: 'Predictive'
  },
  {
    id: 132,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'To speed up a delayed software project, the PM adds 4 new developers to the team, which actually delays the timeline further due to onboarding overhead. This phenomenon is modeled by:',
    options: [
      'Tornado Risk Theory',
      'Brooks\'s Law',
      'The Law of Diminished Quality',
      'Pareto\'s Limit'
    ],
    answerIndex: 1,
    explanation: 'Brooks\'s Law states that adding resources to a late software project can delay it further due to communication and onboarding overhead.',
    methodology: 'Agile'
  },
  {
    id: 133,
    domain: 'Process',
    task: 'Execute project with the urgency required to deliver business value',
    question: 'A pharmaceutical project focuses on accelerated delivery of a new vaccine. Which prioritization pattern delivers the highest business value?',
    options: [
      'Completing a detailed Pareto chart on raw packaging vendors.',
      'Prioritizing clinical validation phases and regulatory review touchpoints early in the pipeline.',
      'Limiting budget investments in compliance controls.',
      'Running all integration testing at the end of the project.'
    ],
    answerIndex: 1,
    explanation: 'Aligning high-value regulatory and clinical milestones early delivers value and manages safety and compliance risks (Task 1).',
    methodology: 'Hybrid'
  },
  {
    id: 134,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'During a quality assessment, the PM uses a control chart. Seven consecutive data points fall on one side of the mean line. What does this indicate?',
    options: [
      'The process is perfectly stable and performing highly.',
      'The process is out of control due to a systemic issue (Rule of Seven).',
      'The quality inspectors are entering inaccurate information.',
      'The mean line calculation is outdated.'
    ],
    answerIndex: 1,
    explanation: 'The "Rule of Seven" states that seven consecutive data points on one side of the mean line on a control chart indicate a systemic process anomaly requiring investigation.',
    methodology: 'Predictive'
  },
  {
    id: 135,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'An agile project team is working on complex components with high dependencies. What visual board helps map these cross-team dependencies?',
    options: [
      'Daily burnup charts',
      'An Agile Program Board (or dependency map)',
      'A work breakdown structure diagram',
      'An automated timesheet spreadsheet'
    ],
    answerIndex: 1,
    explanation: 'An Program Board maps dependencies and integrations, helping manage multi-team agile projects.',
    methodology: 'Agile'
  },
  {
    id: 136,
    domain: 'Process',
    task: 'Manage project artifacts',
    question: 'An organization adopts a centralized wiki to store all active templates, lessons learned, and meeting summaries. Which process benefits MOST?',
    options: [
      'Scope Management rules',
      'Knowledge transfer and project continuity support',
      'Procurement risk transferring',
      'Contingency reserve tracking'
    ],
    answerIndex: 1,
    explanation: 'Centralized wikis capture and share tacit and explicit knowledge, ensuring continuity across projects (Task 16 & 12).',
    methodology: 'Hybrid'
  },
  {
    id: 137,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'Which of the following is an agile Scrum anti-pattern?',
    options: [
      'Allowing the development team to define their own sprint goals.',
      'The Product Owner assigning specific task items directly to individual developers.',
      'The team updating the sprint board dynamically without waiting for daily alignment.',
      'The Scrum Master coaching the organization on agile transition policies.'
    ],
    answerIndex: 1,
    explanation: 'The Product Owner owns the backlog but *must not* assign tasks to individual developers, as the agile team is self-organizing (Task 4 & 13 anti-pattern).',
    methodology: 'Agile'
  },
  {
    id: 138,
    domain: 'Process',
    task: 'Manage project risks',
    question: 'A critical server risk occurs. The PM pays a premium for a cloud hosting service that guarantees 99.99% uptime, shifting liability for downtime to the host. What risk strategy is this?',
    options: [
      'Mitigate',
      'Transfer',
      'Accept',
      'Avoid'
    ],
    answerIndex: 1,
    explanation: 'Paying a premium to pass risk ownership and liability to a third party (e.g., SLA agreement, specialized cloud partner) is risk transfer (Task 3).',
    methodology: 'Predictive'
  },
  {
    id: 139,
    domain: 'Process',
    task: 'Plan and manage budget and resources',
    question: 'A project has a Cost Performance Index (CPI) of 1.15 and a Schedule Performance Index (SPI) of 0.82. What is the status of the project?',
    options: [
      'Over budget and behind schedule',
      'Under budget and behind schedule',
      'Under budget and ahead of schedule',
      'Over budget and ahead of schedule'
    ],
    answerIndex: 1,
    explanation: 'A CPI above 1.0 indicates the project is under budget, while an SPI below 1.0 indicates it is behind schedule.',
    methodology: 'Predictive'
  },
  {
    id: 140,
    domain: 'Process',
    task: 'Engage stakeholders',
    question: 'A regulatory stakeholder is slow to approve critical safety permits. To improve engagement, of the following, which is the BEST approach?',
    options: [
      'Exclude the safety requirements to proceed with development speed.',
      'Directly interview the regulator, align permit milestones with their schedule, and invite them to early safety design walkthroughs.',
      'Hire a lobbyist to force approval of the permits.',
      'Complain about regulatory delays to the media.'
    ],
    answerIndex: 1,
    explanation: 'Proactive dialogue and involving regulators in safety reviews ensures alignment and accelerates permit processing (Task 4).',
    methodology: 'Predictive'
  },
  {
    id: 141,
    domain: 'Process',
    task: 'Manage communications',
    question: 'A global company mandates all projects use instant messaging. However, important technical design decisions are being lost in chat history. How should the PM adjust communication channels?',
    options: [
      'Ban instant messaging and use only formal PDF memos.',
      'Enforce a communication rule where chat decisions must be logged dynamically in a central Configuration Management Registry within 24 hours.',
      'Require developers to memorize all chat transcripts.',
      'Hire a chat coordinator to transcribe all team discussions.'
    ],
    answerIndex: 1,
    explanation: 'Integrating formal documentation channels with informal communication (Task 2 & 12) ensures technical decisions are preserved.',
    methodology: 'Hybrid'
  },
  {
    id: 142,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'To prioritize backlog items, an agile team uses MoSCoW prioritization. What do these letters represent?',
    options: [
      'Must have, Or, Should have, Could have, Won\'t have',
      'Must have, Should have, Could have, Won\'t have this time',
      'Main deliverables, Secondary, Optional, Weekly targets',
      'Milestones, Operations, Specifications, Client wishes'
    ],
    answerIndex: 1,
    explanation: 'The MoSCoW framework categorizes requirements into: Must have, Should have, Could have, and Won\'t have this time (Task 13 prioritization).',
    methodology: 'Agile'
  },
  {
    id: 143,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'During a sprint cycle, a developer realizes that a user story is far more complex than estimated and cannot be completed. What should they do FIRST?',
    options: [
      'Work overtime silently to completed the story at all costs.',
      'Immediately inform the Scrum Master and Product Owner to discuss impact, potential slicing, or moving it to the next sprint.',
      'Skip integration testing to deliver on time.',
      'Delete the user story from the sprint board anonymously.'
    ],
    answerIndex: 1,
    explanation: 'Proactive communication and transparency are core agile tenets. Discussing complexity early with the Product Owner helps the team adapt sprint goals (Task 15 & 13).',
    methodology: 'Agile'
  },
  {
    id: 144,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'Under predictive change management, who has the final authority to reject or approve changes that exceed baseline budgets?',
    options: [
      'The Project Manager',
      'The Change Control Board (CCB)',
      'The Development Lead',
      'The PMO Auditor'
    ],
    answerIndex: 1,
    explanation: 'The Change Control Board (CCB) is the official governing body responsible for reviewing, evaluating, and authorizing baseline changes (Task 10).',
    methodology: 'Predictive'
  },
  {
    id: 145,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'An agile team has a historic sprint velocity of 30 story points. During sprint planning, the Product Owner forces them to commit to 45 points of user stories. What should the Scrum Master do?',
    options: [
      'Pressure the developers to meet the 45-point target by working weekends.',
      'Protect the team\'s sustainable pace, present velocity data to the Product Owner, and align sprint commitment back to 30 points.',
      'Agree to the 45-point target but double the individual story estimates to trick the system.',
      'Cancel the sprint and wait for a new Product Owner.'
    ],
    answerIndex: 1,
    explanation: 'Agile commitment is pull-based, driven by the team\'s historical velocity. Challenging unrealistic expectations protects velocity and prevents burnout (Task 6 & 13).',
    methodology: 'Agile'
  },
  {
    id: 146,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'The QA team indicates that a finished software release is skipping security penetration audits due to resource constraints. What is the PM\'s correct path?',
    options: [
      'Proceed with release to meet schedule targets, logging the skipped audit as a deferred risk.',
      'Halt release deployment, log the validation block in the issue list, and collaborate with security leads to secure emergency testing resources.',
      'Tell the client that security audits are not covered under project deliverables.',
      'Rewrite the quality checklist to exclude penetration testing.'
    ],
    answerIndex: 1,
    explanation: 'Skipping essential auditing introduces high compliance and safety risks. The PM must prioritize quality policies (Task 7 & 15).',
    methodology: 'Predictive'
  },
  {
    id: 147,
    domain: 'Process',
    task: 'Plan and manage procurement',
    question: 'A supplier contract is executed under a Cost-Plus-Fixed-Fee (CPFF) model. The target cost is $100,000, and the fee is $10,000. If actual costs reach $130,000, what is the final fee paid to the contractor?',
    options: [
      '$13,000',
      '$10,000',
      '$40,000',
      '$0'
    ],
    answerIndex: 1,
    explanation: 'In a Cost-Plus-Fixed-Fee (CPFF) contract, the fee is static (fixed) at the agreed amount ($10,000) regardless of the actual cost incurred (Task 11).',
    methodology: 'Predictive'
  },
  {
    id: 148,
    domain: 'Process',
    task: 'Establish project governance structure',
    question: 'A project manager is presenting progress to the steering committee. Which metric is MOST valuable to prove schedule performance alignment against the baselines?',
    options: [
      'The raw count of lines of code written by developers.',
      'The cumulative Schedule Performance Index (SPI) and milestone variance curves.',
      'The number of emails sent to regional offices.',
      'The total number of hours logged in timesheets.'
    ],
    answerIndex: 1,
    explanation: 'The Schedule Performance Index (SPI) is the objective, standards-aligned metric used in project governance to verify schedule progress against baselines (Task 14).',
    methodology: 'Predictive'
  },
  {
    id: 149,
    domain: 'Process',
    task: 'Ensure knowledge transfer for project continuity',
    question: 'A mid-stage project manager is leaving suddenly. To support continuity, what resource should the replacement PM consult FIRST to understand historical project events?',
    options: [
      'The original business case.',
      'The Project Issue Log, Change Log, and Lessons-Learned Register.',
      'The individual developer timesheets.',
      'The project communication email inbox.'
    ],
    answerIndex: 1,
    explanation: 'The Issue Log, Change Log, and Lessons Learned Register (Task 16) hold the direct narrative of project decisions and adaptations, supporting continuity.',
    methodology: 'Predictive'
  },
  {
    id: 150,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'Which of the following describes the difference between Lean and agile methods?',
    options: [
      'Lean focuses strictly on reducing waste and maximizing flow, while agile focuses on adaptation, iterative cycles, and responsive team collaboration.',
      'Lean is predictive waterfall, while agile is iterative development.',
      'Lean has no quality parameters, while agile requires CCB oversight.',
      'There is no difference between Lean and agile frameworks.'
    ],
    answerIndex: 0,
    explanation: 'Lean focuses on optimizing flow and eliminating waste, while Agile focuses on adaptiveness, iterative delivery, and collaborative teams (Task 13).',
    methodology: 'Agile'
  },
  {
    id: 151,
    domain: 'Process',
    task: 'Manage project risks',
    question: 'A project manager identifies a risk of weather disruption. They purchase weather-insurance to cover budget delay penalties. Which risk strategy is this?',
    options: [
      'Mitigate',
      'Transfer',
      'Avoid',
      'Accept'
    ],
    answerIndex: 1,
    explanation: 'Using insurance to shift financial risk and consequences to a third party is risk transfer.',
    methodology: 'Predictive'
  },
  {
    id: 152,
    domain: 'Process',
    task: 'Plan and manage budget and resources',
    question: 'A physical resource audit shows that concrete materials are running 30% over budget. What is the project manager\'s first response?',
    options: [
      'Instruct builders to dilute the concrete mix to save budget.',
      'Analyze the root cause of the cost variance, check contingency reserves, and explore alternative vendors.',
      'Stop all construction and request an immediate budget extension from the sponsor.',
      'Fremont the procurement coordinator.'
    ],
    answerIndex: 1,
    explanation: 'Managing resource variance (Task 5) requires root cause analysis and exploring mitigations (e.g., alternative vendors, contingency reserves) before requesting more budget.',
    methodology: 'Predictive'
  },
  {
    id: 153,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'A team has a project task with a total float of 14 days and free float of 4 days. If the task is delayed by 10 days, what is the impact on the critical path?',
    options: [
      'The critical path will be delayed by 10 days.',
      'There is no impact on the critical path because the delay is less than the total float of 14 days.',
      'The critical path will extend by 4 days.',
      'The critical path will shift to Activity D.'
    ],
    answerIndex: 1,
    explanation: 'Total float is the amount of time an activity can be delayed without delaying the project finish date. A delay of 10 days (less than the 14-day total float) will not delay the critical path.',
    methodology: 'Predictive'
  },
  {
    id: 154,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'Which quality management tool displays the strength of relationship between two variables to help identify root causes?',
    options: [
      'Control Chart',
      'Scatter Diagram',
      'Pareto Chart',
      'Histogram'
    ],
    answerIndex: 1,
    explanation: 'Scatter diagrams are used in quality analysis to plot data and reveal relationships between independent and dependent variables (Task 7).',
    methodology: 'Predictive'
  },
  {
    id: 155,
    domain: 'Process',
    task: 'Determine appropriate project methodology/methods and practices',
    question: 'A Scrum Master conducts a sprint retrospective. Several developers complain that the daily standup is disorganized and exceeds 30 minutes. What should the Scrum Master do?',
    options: [
      'Cancel daily standup meetings and replace them with email updates.',
      'Re-align the team on the 15-minute timebox of standups and shift technical deep dives to separate breakout sessions.',
      'Instruct developers to talk faster during standups.',
      'Direct the Product Owner to run the standups.'
    ],
    answerIndex: 1,
    explanation: 'Meeting timeboxes must be maintained. The daily standup is a quick coordination meeting, and technical discussions should be shifted to dedicated breakout calls.',
    methodology: 'Agile'
  },
  {
    id: 156,
    domain: 'Process',
    task: 'Manage project artifacts',
    question: 'Which document is authorized first to define high-level requirements and grant the PM authority to apply resource funds to a project?',
    options: [
      'WBS Dictionary',
      'Project Charter',
      'Project Scope Baseline',
      'Cost Baseline'
    ],
    answerIndex: 1,
    explanation: 'The Project Charter formally authorizes the project\'s existence and grants the PM authority to allocate organizational resources to project activities.',
    methodology: 'Predictive'
  },
  {
    id: 157,
    domain: 'Process',
    task: 'Plan and manage scope',
    question: 'A project scope is finalized. During design, an engineer suggests a feature that will make the product more scalable but was not in the original scope. What is this addition called?',
    options: [
      'Scope Baseline Modification',
      'Gold Plating',
      'Quality Compliance Corrective Action',
      'Functional Spike'
    ],
    answerIndex: 1,
    explanation: 'Gold Plating is adding features or capabilities not defined in the scope baseline, which introduces unchecked costs and risks.',
    methodology: 'Predictive'
  },
  {
    id: 158,
    domain: 'Process',
    task: 'Plan and manage project/phase closure or transitions',
    question: 'A project manager is presenting the final transition results of a digital commerce platform to operations. What key closure step supports the transition?',
    options: [
      'Archiving the code base in a secret vault.',
      'Obtaining formal operational handoff sign-off and delivering targeted systems training to operations staff.',
      'Releasing the development team immediately to avoid trailing costs.',
      'Asking the legal department to write a liability waiver.'
    ],
    answerIndex: 1,
    explanation: 'Completing transitions (Task 17) requires hands-on handoff sessions, training, and formal operational sign-off to ensure continuity.',
    methodology: 'Predictive'
  },
  {
    id: 159,
    domain: 'Process',
    task: 'Plan and manage procurement',
    question: 'The PM is managing a high-risk security procurement. They want to ensure the vendor provides maximum cost transparency. Which contract model is best?',
    options: [
      'Firm-Fixed-Price (FFP)',
      'Cost-Plus-Fee (CPF) with mandatory auditing clauses',
      'Time & Materials (T&M)',
      'Economic Price Adjustment Contract'
    ],
    answerIndex: 1,
    explanation: 'Cost-Plus-Fee models require the supplier to submit audited receipts for all actual costs incurred, providing maximum transparent cost visibility.',
    methodology: 'Predictive'
  },
  {
    id: 160,
    domain: 'Process',
    task: 'Manage project changes',
    question: 'An agile development team receives a priority change from the Product Owner mid-sprint. It does not threaten the sprint goal. What is the standard action?',
    options: [
      'Immediately change the sprint goals to include the new requirement.',
      'Collaborate with the Product Owner to place the user story in the product backlog for prioritization in the upcoming sprint planning.',
      'Refuse the user story flatly, citing scope rigidity.',
      'Submit a formal change control form to the corporate CCB.'
    ],
    answerIndex: 1,
    explanation: 'Mid-sprint changes are generally discouraged to avoid disrupting velocity. High-priority items are refined in the product backlog and planned for the next sprint (Task 10 & 13).',
    methodology: 'Agile'
  },
  {
    id: 161,
    domain: 'Process',
    task: 'Engage stakeholders',
    question: 'Which of the following describes the "Power-Interest Grid" in stakeholder management?',
    options: [
      'A chart that tracks individual developer velocity over time.',
      'A tool used to categorize stakeholders by authority and interest level, helping customize communication plans.',
      'A technical flow diagram mapping server connections.',
      'A breakdown structure listing project budget centers.'
    ],
    answerIndex: 1,
    explanation: 'The Power-Interest Grid is a stakeholder analysis tool that categorizes stakeholders by authority and interest, mapping appropriate management strategies.',
    methodology: 'Predictive'
  },
  {
    id: 162,
    domain: 'Process',
    task: 'Plan and manage schedule',
    question: 'A scheduling diagram has 3 paths: Path X (12 days), Path Y (18 days - Critical Path), and Path Z (15 days). If Path Z is delayed by 4 days, what is the new project duration?',
    options: [
      '18 days',
      '19 days',
      '22 days',
      '15 days'
    ],
    answerIndex: 1,
    explanation: 'Path Z has a float of 18 - 15 = 3 days. A delay of 4 days exceeds the float of 3 days by 1 day, making Path Z the new critical path at 19 days (15 + 4).',
    methodology: 'Predictive'
  },
  {
    id: 163,
    domain: 'Process',
    task: 'Plan and manage quality of products/deliverables',
    question: 'Which quality tool displays the frequency distribution of continuous variables to show process shapes and centers?',
    options: [
      'Pareto Chart',
      'Histogram',
      'Control Chart',
      'Scatter Plot'
    ],
    answerIndex: 1,
    explanation: 'Histograms are bar charts that display the frequency distribution of variables, helping analyze process centers and variations (Task 7).',
    methodology: 'Predictive'
  },
  {
    id: 164,
    domain: 'Process',
    task: 'Plan and manage budget and resources',
    question: 'A project has an EV of $90,000, AC of $110,000, and PV of $100,000. What is the Cost Variance (CV) and Schedule Variance (SV)?',
    options: [
      'CV = -$20,000, SV = -$10,000',
      'CV = $20,000, SV = $10,000',
      'CV = -$10,000, SV = -$20,000',
      'CV = -$20,000, SV = $10,000'
    ],
    answerIndex: 0,
    explanation: 'CV = EV - AC = $90,000 - $110,000 = -$20,000. SV = EV - PV = $90,000 - $100,000 = -$10,000. This indicates the project is both over-budget and behind schedule.',
    methodology: 'Predictive'
  },
  {
    id: 165,
    domain: 'Process',
    task: 'Manage project issues',
    question: 'A key technical specialist has family emergency and requests 3 weeks of leave. This immediate shortage is logged and handled as a/an:',
    options: [
      'Active project risk',
      'Immediate project issue',
      'Minor cost variance',
      'Change request'
    ],
    answerIndex: 1,
    explanation: 'A realized risk that currently disrupts progress is an issue and must be logged in the Issue Log and actively mitigated.',
    methodology: 'Predictive'
  },
  {
    id: 166,
    domain: 'Process',
    task: 'Plan and manage project/phase closure or transitions',
    question: 'The steering committee asks why a project closure report is delayed. The PM explains that several lessons-learned items are still being refined. How should this are resolved?',
    options: [
      'Skip lessons-learned to close immediately.',
      'Proceed with closure, capture lessons-learned as they stand, and distribute them to the PMO database to avoid delaying the project closure timeline.',
      'Refuse closure until a comprehensive audit is completed.',
      'Delete the lessons-learned register.'
    ],
    answerIndex: 1,
    explanation: 'Lessons-learned should be captured continuously throughout execution so final closure is not delayed by retrospective efforts.',
    methodology: 'Predictive'
  }
];
