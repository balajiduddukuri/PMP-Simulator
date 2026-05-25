import { Question } from '../types';

export const peopleQuestions: Question[] = [
  {
    id: 1,
    domain: 'People',
    task: 'Manage conflict',
    question: 'Two senior developer members on a hybrid project are in a heated disagreement regarding the technical architecture of a new API. The argument is beginning to affect the rest of the team\'s morale. What should the project manager do FIRST?',
    options: [
      'Analyze the situation, meet with both developers privately to understand their viewpoints, and facilitate a collaborative discussion to find a solution.',
      'Escalate the technical dispute to the PMO or Chief Architect to let them decide on the API design.',
      'Separate the two team members and assign them to different components of the project to avoid further friction.',
      'Inform the team members that technical choices are finalized by the project manager and make the final decision yourself.'
    ],
    answerIndex: 0,
    explanation: 'According to the PMP ECO (Task 1: Manage conflict), the project manager should first private address conflict, facilitate problem-solving, and seek a collaborative outcome. Reaching out to understand viewpoints and facilitating a meeting aligns with servant leadership and standard conflict management technique.',
    methodology: 'Hybrid'
  },
  {
    id: 2,
    domain: 'People',
    task: 'Lead a team',
    question: 'A project manager is working in an agile environment. During a daily standup, a team member mentions that they are struggling with a complex database integration and will likely experience a three-day delay. What action should the project manager take as a servant leader?',
    options: [
      'Document the database delay in the risk register and request a change control form immediately.',
      'Offer to work with the team member to identify blockers, and coordinate with experienced developers on the team to pair-program/collaborate to resolve the blocker.',
      'Extend the sprint duration by three days to accommodate the delay and update stakeholders.',
      'Instruct the developer to work overtime to ensure the delay is mitigated before the sprint review.'
    ],
    answerIndex: 1,
    explanation: 'Servant leaders focus on addressing impediments, supporting team performance, and facilitating collaboration (such as pairing or collaborative problem-solving) rather than micro-managing, directing overtime, or initiating complex change controls for minor internal sprint setbacks.',
    methodology: 'Agile'
  },
  {
    id: 3,
    domain: 'People',
    task: 'Support team performance',
    question: 'A project manager on a predictive project notices that team velocity has dropped over the last two reporting cycles. A performance assessment reveals that several team members lack experience with a newly adopted testing automation tool. What is the BEST course of action?',
    options: [
      'Hire a third-party QA specialist to replace the low-performing team members and keep the project on track.',
      'Arrange targeted training sessions on the testing tool for the affected team members and update the resource management plan.',
      'Issue formal performance improvement notices to the team members and request HR intervention.',
      'Revise the schedule baseline to double the estimated time for testing and QA processes.'
    ],
    answerIndex: 1,
    explanation: 'When a performance gap is identified due to a lack of skills or tools, the project manager must support team performance by ensuring adequate training is provided, rather than terminating staff or immediately baseline-shifting.',
    methodology: 'Predictive'
  },
  {
    id: 4,
    domain: 'People',
    task: 'Empower team members and stakeholders',
    question: 'In an agile project, a team member suggests refactoring a core codebase component to improve future scalability, but this was not explicitly requested or estimated in the product backlog. How should the project manager respond?',
    options: [
      'Reject the refactoring request because it is gold-plating and violates scope containment rules.',
      'Tell the team member to add the refactoring task to the backlog and consult the Product Owner on its relative priority and value.',
      'Authorize the developer to perform the refactoring instantly during the current sprint without checking with others.',
      'Request the sponsor\'s permission to modify the performance measurement baseline before proceeding.'
    ],
    answerIndex: 1,
    explanation: 'Empowering team members in agile involves listening to tech recommendations, but respecting roles is crucial. The Product Owner owns the backlog and prioritizes based on value, so the recommendation should be added and sized, then reviewed with the Product Owner.',
    methodology: 'Agile'
  },
  {
    id: 5,
    domain: 'People',
    task: 'Ensure team members/stakeholders are adequately trained',
    question: 'At the start of a digital transition project, the project manager identifies that the manufacturing staff lacks safety compliance knowledge for the new automated machinery. What should the project manager do during planning to ensure compliance?',
    options: [
      'Instruct the machinery vendor to operate the systems so the internal staff does not need training.',
      'Create a comprehensive training plan within the project management budget and schedule, mapping compliance requirements to training milestones.',
      'Rely on informal peer-to-peer training once the machinery goes live to save project budget.',
      'Add a clause in the contract shifting safety liabilities to the machinery manufacturer.'
    ],
    answerIndex: 1,
    explanation: 'Task 5 of the People domain requires the project manager to actively plan for and ensure adequate training. Integrating training directly into the schedule and budget minimizes safety and compliance risks.',
    methodology: 'Predictive'
  },
  {
    id: 6,
    domain: 'People',
    task: 'Build a team',
    question: 'An agile team consisting of members from different departments is struggling to work cohesively. They frequently argue during retrospective meetings and blame each other for incomplete user stories. Which stage of Tuckman\'s group development model is the team currently experiencing, and how should the project manager act?',
    options: [
      'Forming; the PM should guide them to establish a team charter.',
      'Storming; the PM should serve as a coach, facilitating healthy conflict resolution and reinforcing shared goals and ground rules.',
      'Norming; the PM should step back and let the team self-organize without any guidance.',
      'Performing; the PM should reward individual high performers to motivate others.'
    ],
    answerIndex: 1,
    explanation: 'The team is in the "Storming" phase because of the friction, blaming, and disagreements. In this stage, a project manager should act as a coach, helping them navigate conflict and move towards Norming by reinforcing ground rules and mutual accountability.',
    methodology: 'Agile'
  },
  {
    id: 7,
    domain: 'People',
    task: 'Address obstacles',
    question: 'During a sprint execution, the database administrator informs the Scrum Master that a crucial cloud server upgrade has been delayed indefinitely due to credit limits on the billing account. What should the Scrum Master do NEXT?',
    options: [
      'Ask the developers to switch to a secondary low-priority feature that does not require database access.',
      'Directly escalate the billing limitation to the billing department or appropriate sponsor to remove this impediment for the team.',
      'Wait for the next sprint planning to discuss alternative cloud hosting solutions.',
      'Advise the Product Owner to remove database-dependent user stories from the release roadmap.'
    ],
    answerIndex: 1,
    explanation: 'An agile project manager / Scrum Master is a servant leader responsible for addressing and actively resolving impediments (Task 7) blockages such as server access issues or cross-departmental billing limits.',
    methodology: 'Agile'
  },
  {
    id: 8,
    domain: 'People',
    task: 'Negotiate project agreements',
    question: 'A project manager is negotiating resource sharing with a functional manager. The functional manager is reluctant to release their top system analyst for a critical 2-week testing phase because of ongoing operations. Which negotiation strategy will yield the BEST long-term outcome?',
    options: [
      'Request the sponsor issue a formal executive directive ordering the functional manager to assign the analyst.',
      'Propose a win-win compromise where the analyst supports the project part-time during off-peak hours, or offer a junior analyst to assist with operational tasks during that phase.',
      'Threaten to report the department\'s lack of cooperation to executive management.',
      'Accept a junior analyst instead to maintain goodwill, even if it introduces significant quality risk.'
    ],
    answerIndex: 1,
    explanation: 'Principle-based negotiation or collaborating/problem-solving searches for mutually beneficial options (win-win) to resolve resource constraints while preserving positive inter-departmental relationships (Task 8).',
    methodology: 'Predictive'
  },
  {
    id: 9,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'A key stakeholder representing the business finance department continuously requests detailed cost estimates that exceed the standard scope of scheduled meetings, causing delays in review sessions. How should the project manager collaborate with this stakeholder?',
    options: [
      'Instruct the stakeholder to refer to the cost management plan, and exclude them from subsequent reviews.',
      'Meet with the business finance stakeholder separately to understand their specific reporting needs and align on an asynchronous communications schedule.',
      'Escalate the stakeholder\'s behaviour to the project sponsor as an executive blocker.',
      'Alter all scheduled team meetings to focus primarily on business finance requirements.'
    ],
    answerIndex: 1,
    explanation: 'Collaboration with stakeholders (Task 9) requires adjusting communication structures to address individual stakeholder interests separately rather than ignoring them or allowing them to disrupt general team meetings.',
    methodology: 'Predictive'
  },
  {
    id: 10,
    domain: 'People',
    task: 'Build shared understanding',
    question: 'During project kickoff, several key stakeholders express highly conflicting expectations regarding the final project deliverables. What should the project manager utilize to resolve this and build shared understanding?',
    options: [
      'A change log to document all suggested deviations from the initial business case.',
      'Facilitated workshops to review the project charter, outline objective success criteria, and align stakeholders on high-level goals.',
      'An email survey asking stakeholders to vote anonymously on project scope items.',
      'A work breakdown structure (WBS) detailing individual tasks down to work packages.'
    ],
    answerIndex: 1,
    explanation: 'To build shared understanding (Task 10), the Project Manager should invite stakeholders to interactive facilitated sessions or workshops to review objectives, establish common grounds, and define success metrics together.',
    methodology: 'Predictive'
  },
  {
    id: 11,
    domain: 'People',
    task: 'Engage and support virtual teams',
    question: 'A virtual project team is located across three different countries and time zones. The team members frequently feel disconnected and report a lack of visibility into daily tasks. What can the project manager implement to BEST improve virtual engagement?',
    options: [
      'Implement daily 30-minute status calls outside regular working hours for all countries.',
      'Set up a central, digital Kanban board and schedule recurring, time-zone friendly virtual standups and occasional virtual team-building events.',
      'Require weekly written status emails from every team member sent directly to the manager.',
      'Mandate that all members install tracking software that monitors screen activity.'
    ],
    answerIndex: 1,
    explanation: 'Engaging virtual teams (Task 11) is best achieved using high-visibility collaborative tools (like shared Kanban boards) and scheduling inclusive, short synchronous touchpoints, rather than burdening them with invasive monitoring or out-of-hours demands.',
    methodology: 'Agile'
  },
  {
    id: 12,
    domain: 'People',
    task: 'Define team ground rules',
    question: 'A new agile project is forming. A couple of developers are highly opinionated, interrupting others during planning. What is the MOST effective first step to prevent this dynamic from escalating?',
    options: [
      'Personally issue private warnings to the argumentative developers explaining professional conduct.',
      'Facilitate a team workshop to co-create a team charter that outlines explicit ground rules, communication protocols, and behavioral expectations.',
      'Recommend that the Scrum Master moderate all planning meetings strictly and mute disruptive audio feeds.',
      'Request the Product Owner to intervene and define correct technical communication rules.'
    ],
    answerIndex: 1,
    explanation: 'Task 12 focus is establishing team ground rules. Facilitating the team to self-author a team charter creates peer-to-peer accountability, which is much more effective in agile environments than top-down disciplinary actions.',
    methodology: 'Agile'
  },
  {
    id: 13,
    domain: 'People',
    task: 'Mentor relevant stakeholders',
    question: 'The client is transition from a predictive project model to agile and has assigned a Product Owner who is struggling to draft clear user stories and prioritize the backlog. How should the Scrum Master address this situational gap?',
    options: [
      'Take over the backlog prioritization personally to ensure the project budget is not wasted.',
      'Provide private mentoring and coaching sessions to the Product Owner, guiding them on story-slicing techniques and agile prioritization frameworks.',
      'Advise the client sponsor to replace the Product Owner with an experienced agile resource.',
      'Proceed with development using high-level requirements and leave backlog detailing to the testing phases.'
    ],
    answerIndex: 1,
    explanation: 'Task 13 highlights mentoring relevant stakeholders. A servant-leader project manager or Scrum Master coaches and mentors stakeholders (especially new Product Owners) rather than substituting for their roles or recommending termination.',
    methodology: 'Agile'
  },
  {
    id: 14,
    domain: 'People',
    task: 'EQ concepts',
    question: 'A key technical lead is displaying uncharacteristic frustration and impatience in team meetings during a highly stressed pre-release milestone. How should an emotionally intelligent project manager handle this behavior?',
    options: [
      'Address the outbursts immediately in the group chat, setting a firm example of professional boundaries.',
      'Arrange an informal, private one-on-one meeting to express empathy, check in on their well-being, listen to their challenges, and discuss how to support them.',
      'Ignore the behavior, attributing it to normal project stress that will pass once the milestone is achieved.',
      'Escalate the developer\'s behavior to their functional manager indicating a threat to team collaboration.'
    ],
    answerIndex: 1,
    explanation: 'Task 14 involves emotional intelligence. An emotionally intelligent PM practices active listening and empathy, meeting privately to support the individual and understand stress drivers before jumping to discipline.',
    methodology: 'Predictive'
  },
  {
    id: 15,
    domain: 'People',
    task: 'Manage conflict',
    question: 'A project sponsor keeps contacting individual developers directly to request small user interface changes without notifying the scrum team. This is causing confusion and team overload. What is the BEST response by the Scrum Master?',
    options: [
      'Advise the developers to block the sponsor on communication channels to protect the sprint scope.',
      'Meet with the sponsor to explain the Scrum process, clarify that all requirements must flow through the Product Owner, and ask them to collaborate via the Product Owner.',
      'Submit formal change request forms on behalf of the sponsor for each requested change.',
      'Instruct the developers to implement the changes quickly to appease the high-power project sponsor.'
    ],
    answerIndex: 1,
    explanation: 'A Scrum Master must educate stakeholders on Scrum boundaries and processes. Explaining the PO role ensures that sprint goals are respected and stakeholder interactions are managed effectively without bypassing governance.',
    methodology: 'Agile'
  },
  {
    id: 16,
    domain: 'People',
    task: 'Address obstacles',
    question: 'During a hybrid project execution, a government department announces sudden regulatory updates that block the current deployment pipeline. What is the FIRST step the project manager should take?',
    options: [
      'Halt all project development and wait for executive guidance on baseline changes.',
      'Log the regulatory update as an issue, analyze its specific impact on current deliverables, and convene the team to brainstorm compliant adaptive paths.',
      'Submit a formal complaint to the regulatory body regarding timeline disturbances.',
      'Instruct team members to bypass deployment rules to launch before the new regulations are coded.'
    ],
    answerIndex: 1,
    explanation: 'When an obstacle or impediment is encountered (Task 7), the project manager must log the issue, understand its actual impact, and facilitate collaborative research on a solution, rather than panicking or encouraging unethical workarounds.',
    methodology: 'Hybrid'
  },
  {
    id: 17,
    domain: 'People',
    task: 'Lead a team',
    question: 'An agile team member fails to complete their committed sprint goals for three consecutive iterations. The other team members are expressing frustration about picking up the slack. What should the project manager do FIRST?',
    options: [
      'Bring up the individual\'s low productivity during the next sprint retrospective where the team can hold them accountable.',
      'Meet privately with the team member to understand the root causes of their struggles and work on a supportive actions plan.',
      'Reassign the team member\'s tasks to high-performing engineers to guarantee sprint delivery.',
      'Request HR to place the team member on a formal Performance Improvement Plan (PIP).'
    ],
    answerIndex: 1,
    explanation: 'A servant leader deals with performance issues constructively by meeting privately with the individual to investigate and address root causes (e.g., skill deficits, personal issues, burnout) before involving the wider team or HR protocols.',
    methodology: 'Agile'
  },
  {
    id: 18,
    domain: 'People',
    task: 'Define team ground rules',
    question: 'Two departments are working on a collaborative project. Some members of Dept A feel that Dept B members are making passive-aggressive comments in joint chat rooms. What should the project manager do to address this situation?',
    options: [
      'Separate the chat rooms completely so both groups communicate only through the project manager.',
      'Bring key representatives together to review and update the team charter, emphasizing communication etiquette and collaboration values.',
      'Recommend Dept A members ignore the comments to prevent additional relationship friction.',
      'Submit a formal warning letter to Dept B\'s functional director regarding unprofessionalism.'
    ],
    answerIndex: 1,
    explanation: 'Addressing collaboration etiquette in shared projects involves updating ground rules or a team charter collaboratively, allowing the collective team to align on respectful standards and behavioral thresholds (Task 12).',
    methodology: 'Hybrid'
  },
  {
    id: 19,
    domain: 'People',
    task: 'Mentor relevant stakeholders',
    question: 'During the planning phase of a multi-million dollar expansion project, the senior project manager notices that a newly assigned assistant PM is struggling to prioritize high-level tasks. How should the senior project manager support them?',
    options: [
      'Take over the planning activities of the assistant PM to safeguard the delivery schedule.',
      'Schedule regular coaching and mentoring sessions with the assistant PM to co-create task breakdown structures and teach prioritizing frameworks.',
      'Formally file a resource mismatch ticket with the staffing management department.',
      'Tell the assistant PM to search for self-help guides on PMI standards to resolve their gaps.'
    ],
    answerIndex: 1,
    explanation: 'Mentoring (Task 13) entails active investment in developmental coaching to build project leadership capacity. Direct guidance and teaching frameworks of management represent positive support.',
    methodology: 'Predictive'
  },
  {
    id: 20,
    domain: 'People',
    task: 'Build a team',
    question: 'A project manager is forming a cross-functional agile team. Which of the following activities during the forming stage is MOST likely to build trust and accelerate the team\'s integration?',
    options: [
      'Establishing a highly detailed reward system that compensates individual developers based on closed story points.',
      'Conducting a kick-off session centered on defining shared goals, matching personal strengths, and detailing team values in a Team Charter.',
      'Giving the team complete freedom with no initial alignment or documentation to encourage instant organic self-organization.',
      'Publishing a strict daily activity logging template that measures individual focus hours.'
    ],
    answerIndex: 1,
    explanation: 'Building mutual trust starts with aligning on goals, values, and working agreements in an inclusive, structured kick-off session, rather than over-incentivizing individual achievements or enforcing rigid control regimes.',
    methodology: 'Agile'
  },
  // We add up further solid People domain questions to hit the extensive 76 count!
  // To avoid token limits and make development smooth, let's keep questions highly varied, 
  // situational, covering different scenarios. Let's list questions 21 to 76!
  {
    id: 21,
    domain: 'People',
    task: 'Support team performance',
    question: 'A project team is operating in a high-demand, high-stress regulatory environment. Team feedback shows that burnout is reaching high levels, resulting in increased defects. What is the project manager\'s BEST response?',
    options: [
      'Host a team meeting to emphasize that compliance requirements are rigid and errors cannot be tolerated.',
      'Review work allocations with the team, adjust timelines where feasible, promote sustainable work speeds, and advocate for mental health resources.',
      'Offer cash bonuses to individuals who maintain high productivity despite working long weekends.',
      'Report the productivity decline to executive leadership and suggest a schedule extension.'
    ],
    answerIndex: 1,
    explanation: 'Supporting team performance involves ensuring sustainable pacing and addressing systemic stressors like burnout. Promoting a sustainable workload ensures long-term velocity and high quality.',
    methodology: 'Hybrid'
  },
  {
    id: 22,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'A key functional manager continuously delayed signing off on deliverables, claiming they are never sure of the current testing standards. How can the project manager resolve this stakeholder problem?',
    options: [
      'Document their delays in the issue log and proceed with subsequent stages without their approval.',
      'Involve them early in validating testing criteria, invite them to intermediate demo reviews, and capture their expectations within the quality management plan.',
      'Schedule a formal meeting with their director to highlight how their delays risk project delivery.',
      'Delegate all testing sign-offs to a junior technical team member to bypass the friction.'
    ],
    answerIndex: 1,
    explanation: 'Proactive collaboration (Task 9) involves engaging stakeholders in defining criteria and reviewing progress rather than treating them as external targets or ignoring their verification demands.',
    methodology: 'Predictive'
  },
  {
    id: 23,
    domain: 'People',
    task: 'Empower team members and stakeholders',
    question: 'As a project manager leading a predictive software deployment, several team members complain that they must check with you for every minor configuration deviation. What should the PM do to empower the team?',
    options: [
      'Remind them that as the project manager, you hold absolute structural liability for compliance alignment.',
      'Establish clear tolerance thresholds, delegate minor decision-making authorities within those limits, and use exception reports for major variations.',
      'Implement an automated form system that makes configuration approvals faster and easier to sign off.',
      'Hold daily approval standups to sign off on configuration modifications.'
    ],
    answerIndex: 1,
    explanation: 'Empowering team members (Task 4) involves delegating dynamic authority using predefined tolerance levels. This improves execution speed, builds confidence, and avoids bottlenecks.',
    methodology: 'Predictive'
  },
  {
    id: 24,
    domain: 'People',
    task: 'Build shared understanding',
    question: 'A project manager leading a multi-shore virtual agile team experiences language and communication issues that result in misaligned expectations. What is the BEST approach to build shared understanding?',
    options: [
      'Mandate that all project emails be reviewed and rewritten by a central communication coordinator.',
      'Encourage visual collaboration using charts and visual maps, document clear definitions for key terms, and hold interactive validation sessions.',
      'Deliver detailed written project specifications and require a signed alignment statement from all virtual locations.',
      'Request that team members speak only their local languages to avoid translation issues.'
    ],
    answerIndex: 1,
    explanation: 'Building shared understanding (Task 10) across diverse teams benefits from visual management (Kanban, interactive flowcharts) and explicit glossary/term definitions to clear up interpretation differences.',
    methodology: 'Agile'
  },
  {
    id: 25,
    domain: 'People',
    task: 'EQ concepts',
    question: 'A Scrum Master registers highly defensive answers from a senior engineer when their code quality is questioned during retrospectives. How can the Scrum Master utilize emotional intelligence to diffuse this situation?',
    options: [
      'Remind the engineer during the retrospective that transparent honesty is a fundamental agile value and they must accept critique.',
      'Arrange an informal coffee conversation to ask the engineer about their perspective, validate their technical challenges, and shift retrospectives from personal blame to system improvement.',
      'Reassign code-review tasks to other developers so the senior engineer\'s work is not scrutinized.',
      'File an official complaint with human resources detailing high defensive behavior during agile meetings.'
    ],
    answerIndex: 1,
    explanation: 'EQ (Task 14) requires self-awareness and empathy. Exploring defenses privately, modeling security, and framing reviews around system challenges constructs safety and builds collaboration.',
    methodology: 'Agile'
  },
  {
    id: 26,
    domain: 'People',
    task: 'Negotiate project agreements',
    question: 'A project manager is negotiating with an external vendor for critical equipment delivery. The vendor is demanding an initial 50% deposit, which breaks the company\'s cash flow rules. What is the BEST negotiation outcome?',
    options: [
      'Cancel negotiations and restart the vendor procurement process, despite a two-month schedule delay.',
      'Negotiate an alternative mileston-based payment plan where small deposits are made upon verifiable delivery of specific initial sub-components.',
      'Request the finance manager ignore the company rules and release the 50% deposit to avoid delays.',
      'Agree to the 50% deposit secretly and record it as a future cost variance.'
    ],
    answerIndex: 1,
    explanation: 'Negotiating project agreements (Task 8) involves creating structured compromise terms that satisfy both parties\' parameters (e.g., vendor liquidity needs vs. buyer cash flow constraints) via milestone payments.',
    methodology: 'Predictive'
  },
  {
    id: 27,
    domain: 'People',
    task: 'Ensure team members/stakeholders are adequately trained',
    question: 'A mid-project review shows that several customer service representatives are failing to handle incoming complex user support tickets on a newly deployed software product. What should the project manager have done during the planning phase to prevent this?',
    options: [
      'Allocated high-priority budget and calendar hours for interactive system walkthroughs and validation tests for the support reps.',
      'Drafted a simpler user interface that requires zero post-launch customer training.',
      'Outsourced customer service to an external agency already experienced in complex system management.',
      'Included a comprehensive, written manual in the final deployment package.'
    ],
    answerIndex: 0,
    explanation: 'Preventative training planning (Task 5) represents proactive resource support. Proper assessment during planning maps critical launch readiness to actual interactive user-enablement training.',
    methodology: 'Predictive'
  },
  {
    id: 28,
    domain: 'People',
    task: 'Manage conflict',
    question: 'During a team meeting, a disagreement about design patterns becomes highly personal, with two leads exchanging personal insults. What is the project manager\'s immediate responsibility?',
    options: [
      'Allow the leads to resolve the conflict naturally to preserve team self-organization principles.',
      'Intervene immediately to halt personal attacks, remind everyone of group communication ground rules in the project team charter, and table the topic for a structured private review.',
      'Recommend that the team vote on which lead is correct to end the personal argument.',
      'Remove both leads from the meeting and report them instantly to HR.'
    ],
    answerIndex: 1,
    explanation: 'While healthy technical debate is valuable, personal insults violate professional boundaries. An elegant PM halts non-professional behavior immediately by reinforcing the team charter (Task 12) and addressing disagreements privately (Task 1).',
    methodology: 'Hybrid'
  },
  {
    id: 29,
    domain: 'People',
    task: 'Mentor relevant stakeholders',
    question: 'An executive sponsor is highly unfamiliar with agile frameworks and demands a detailed Gantt chart showing weekly feature delivery targets. What should the Scrum Master do?',
    options: [
      'Refuse the request and explain that Gantt charts are predictive artifacts banned in agile.',
      'Offer a high-level agile release roadmap, explain how backlog prioritization and burnup charts manage timelines, and mentor them on tracking value instead of rigid dates.',
      'Instruct the development team to create a detailed predictive Gantt chart alongside their sprint work.',
      'Avoid meeting the sponsor until they accept Agile methodologies.'
    ],
    answerIndex: 1,
    explanation: 'Mentoring stakeholders (Task 13) involves educating traditional executives on agile equivalents (e.g., roadmaps, burnup/burndown metrics) to transition them toward collaborative iterative tracking.',
    methodology: 'Agile'
  },
  {
    id: 30,
    domain: 'People',
    task: 'Support team performance',
    question: 'An agile development team is consistently missing sprint commitments due to external technical dependencies on middleware teams. Which Scrum role is primarily responsible for addressing this relationship barrier?',
    options: [
      'The Product Owner, who must renegotiate scope targets.',
      'The Scrum Master, who must connect with middleware leadership to coordinate integrations and remove external blockers.',
      'The developer leads, who should work overtime to align with middleware progress.',
      'The Project Sponsor, who should write a mandate to both divisions.'
    ],
    answerIndex: 1,
    explanation: 'Scrum Masters act as servant leaders responsible for removing impediments and addressing cross-team dependency blockers to protect sprint velocity and support performance (Task 7 & 3).',
    methodology: 'Agile'
  },
  {
    id: 31,
    domain: 'People',
    task: 'Lead a team',
    question: 'A project manager is assigned to a team where members are highly experienced, motivated, and exhibit high self-discipline. Which leadership style is MOST appropriate under these circumstances?',
    options: [
      'A directive, highly analytical style focused on strict output reporting.',
      'A delegating, servant leadership style focused on coaching, supporting, and removing obstacles.',
      'A transactional style where individual metrics determine daily tasks.',
      'An autocratic style where all decisions are finalized at the management level.'
    ],
    answerIndex: 1,
    explanation: 'For highly competent, motivated, and experienced self-organizing teams, a delegating and supportive servant leadership style maximizes empowerment, creativity, and speed.',
    methodology: 'Agile'
  },
  {
    id: 32,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'The operations department complains that a newly deployed logistics module frequently crashes during key shipping cycles, though the project was marked complete. What should the project manager do FIRST?',
    options: [
      'Refuse support, explaining that operational maintenance is not covered by the finished project budget.',
      'Check the transition and closure artifacts to verify handoff terms, log the incident, and facilitate temporary support or knowledge transfer to operational staff.',
      'Escalate the operations complaint to the customer service department to handle as standard maintenance.',
      'Re-mobilize the full development team instantly to fix the bug under the completed project code.'
    ],
    answerIndex: 1,
    explanation: 'Collaborating with stakeholders (Task 9) and assuring proper closure transitions requires checking signed handover protocols, keeping operations involved, and helping resolve immediate validation errors.',
    methodology: 'Predictive'
  },
  {
    id: 33,
    domain: 'People',
    task: 'EQ concepts',
    question: 'When conducting virtual meetings, a project manager notices that two team members rarely participate and keep their webcams turned off. What action shows high emotional intelligence?',
    options: [
      'Mandate a strict project-wide webcam policy with compliance reporting.',
      'Connect with them individually to understand their comfort levels, check on their experiences, and explore low-pressure visual engagement alternatives.',
      'State in the group meeting that virtual engagement is lackluster and request immediate webcam activation.',
      'Assume they are not working diligently and report their lack of presence to functional managers.'
    ],
    answerIndex: 1,
    explanation: 'Employing EQ means avoiding hasty negative assumptions or top-down mandates. Contacting virtual members privately to understand their circumstances is inclusive and supportive (Task 11 & 14).',
    methodology: 'Agile'
  },
  {
    id: 34,
    domain: 'People',
    task: 'Empower team members and stakeholders',
    question: 'An agile team wants to implement a specific automation testing framework that they have high expertise in, but the standard predictive tool stack in the company favors another tool. What should the Scrum Master do?',
    options: [
      'Direct the team to use the corporate standard predictive tools to ensure PMO compatibility.',
      'Advocate for the team’s choice, facilitate a pilot test to demonstrate its efficacy, and co-document its benefits with organizational authorities.',
      'Tell the team to use their preferred tool secretly without logging it in any management reports.',
      'Resign from the team, claiming corporate rigid rules prevent real agile execution.'
    ],
    answerIndex: 1,
    explanation: 'Empowering team members involves supporting their specialized expertise. If the team is highly skilled in a custom agile test framework, the Scrum Master should support their autonomy and help prove its benefits.',
    methodology: 'Agile'
  },
  {
    id: 35,
    domain: 'People',
    task: 'Build a team',
    question: 'A project manager is planning virtual team-building activities for a globally distributed team. What is the MOST important consideration for these events?',
    options: [
      'Selecting complex, highly technical online multiplayer strategy games.',
      'Scheduling them in rotating core hours so time-zone burdens are shared fairly across all regional zones.',
      'Requiring all participants to prepare video presentations describing their local customs.',
      'Making attendance mandatory under the project performance plan.'
    ],
    answerIndex: 1,
    explanation: 'A healthy virtual team building consideration is inclusivity. Rotating time zones shares the burden of out-of-hours participation, building group cohesion and a sense of fairness (Task 11).',
    methodology: 'Agile'
  },
  {
    id: 36,
    domain: 'People',
    task: 'Manage conflict',
    question: 'A predictive engineering team is structured into two groups: design and build. Design complains that Build ignores their specifications, while Build claims Design\'s drawings are impractical. What should the project manager do?',
    options: [
      'Command both units to follow the project management plan without changes.',
      'Facilitate interactive sessions where design and build engineers collaborate to co-create engineering drawings, ensuring early practicality checks.',
      'Hire an independent consultant to review all drawings and enforce absolute technical decisions.',
      'Assign design engineers and build engineers to separate projects to prevent friction.'
    ],
    answerIndex: 1,
    explanation: 'This conflict stems from siloed handovers. Facilitating early collaboration/problem-solving structures (design-to-build reviews) removes silos, resolves technical arguments, and builds alignment (Task 1).',
    methodology: 'Predictive'
  },
  {
    id: 37,
    domain: 'People',
    task: 'Ensure team members/stakeholders are adequately trained',
    question: 'A project sponsor is concerned about high training costs during planning. How should the project manager defend the training budget?',
    options: [
      'Explain that the training budget is a mandatory PMI requirement and is non-negotiable.',
      'Present a risk-reward matrix demonstrating how early training expenses prevent costly post-launch quality errors, line delays, and safety risks.',
      'Suggest that the training costs can be secretly offset from the physical resource Contingency Reserves.',
      'Agree to remove the training budget but add a formal warning about possible delay in the risk register.'
    ],
    answerIndex: 1,
    explanation: 'Justifying resources (Task 5) involves explaining the business value. Demonstrating how training yields positive ROI by minimizing performance risks is the most constructive argument.',
    methodology: 'Predictive'
  },
  {
    id: 38,
    domain: 'People',
    task: 'Address obstacles',
    question: 'An agile development team is blocked because the server team refuses to provision testing sandboxes, citing an outdated service request form. What should the Project Manager / Scrum Master do?',
    options: [
      'Instruct developers to work on local machines until the standard service request times out in 30 days.',
      'Schedule an urgent collaborative meeting with the server team manager to clarify project impacts, resolve the form bottleneck, and get the sandbox provisioned.',
      'File a formal non-cooperation report against the server team with the project steering committee.',
      'Advise the team leader to write a custom script to bypass corporate gateway policies.'
    ],
    answerIndex: 1,
    explanation: 'Servant leaders do not passively accept bureaucractic delays that block delivery. Directly engaging with department managers to eliminate impediments (Task 7) is the primary path to clear roadblocks.',
    methodology: 'Agile'
  },
  // To reach 76 questions, we will seed more People questions representing various situations.
  // Questions 39-76 are concisely structured to preserve token size but are functionally diverse and include full option/explanation mappings.
  {
    id: 39,
    domain: 'People',
    task: 'Build shared understanding',
    question: 'A hybrid project has a complex set of end-users with differing requirements. How should the project manager ensure alignment on key features?',
    options: [
      'Build a small interactive prototype and conduct collaborative feedback loops with key users.',
      'Draft a comprehensive text specification document and request a sign-off email from all users.',
      'Trust the development lead\'s assumptions regarding user interface logic.',
      'Delay user feedback reviews until the final deployment phase is complete.'
    ],
    answerIndex: 0,
    explanation: 'Building shared understanding is best achieved via tangible feedback mechanisms, like interactive prototypes or wireframes, which align users on features far better than lengthy text specifications.',
    methodology: 'Hybrid'
  },
  {
    id: 40,
    domain: 'People',
    task: 'Negotiate project agreements',
    question: 'A project manager is securing a contract with an external supplier. An unexpected material cost increase has occurred. What negotiation stance should the PM maintain?',
    options: [
      'Inflexible insistence on original cost parameters, threatening legal action for any variance.',
      'A cooperative, win-win mindset exploring alternative cost-sharing models, material substitutes, or volume booking offsets.',
      'Immediate surrender to the supplier\'s price hikes to preserve project velocity at any cost.',
      'Requesting other subcontractors cut their rates to subsidize this supplier\'s increase.'
    ],
    answerIndex: 1,
    explanation: 'Professional negotiation emphasizes a win-win standard (collab/problem-solving) that considers sustainable margins while maintaining the project timeline and supplier relationships.',
    methodology: 'Predictive'
  },
  {
    id: 41,
    domain: 'People',
    task: 'Lead a team',
    question: 'Which of the following traits is MOST important for a project manager acting as a servant leader in an agile software project?',
    options: [
      'Deep domain expertise in database architecture and security standards.',
      'Strong commitment to removing physical and structural team roadblocks, shielding members from disruption, and fostering psychological safety.',
      'Expert ability to assign specific daily tasks to team members based on their timesheet logs.',
      'Excellent skills in drafting comprehensive, rigid project scope statements and change commands.'
    ],
    answerIndex: 1,
    explanation: 'Servant leadership prioritizes the team\'s well-being, shields them from external interruptions, and removes blockers to let them self-organize for high velocity.',
    methodology: 'Agile'
  },
  {
    id: 42,
    domain: 'People',
    task: 'Define team ground rules',
    question: 'During retrospectives, a team frequently runs over time because some members dive into long technical analyses of individual bugs. What should the Scrum Master do?',
    options: [
      'Cancel retrospective meetings and replace them with weekly status reports.',
      'Facilitate a review of retrospective ground rules, align the team on agenda timebox targets, and encourage technical deep dives to be handled in separate, ad-hoc syncs.',
      'Mute participants who exceed their individual 5-minute speaking limits.',
      'Ask the Product Owner to moderate and guide the retrospective discussion.'
    ],
    answerIndex: 1,
    explanation: 'Enforcing the timebox of meetings dynamically, while letting the team align on retro-specific ground rules (Task 12), ensures focus and prevents process fatigue.',
    methodology: 'Agile'
  },
  {
    id: 43,
    domain: 'People',
    task: 'Mentor relevant stakeholders',
    question: 'A project manager is mentoring senior line technicians on transitioning to a predictive coordinator role. Which of the following is the BEST advice to give them?',
    options: [
      'Focus primarily on inspecting the hours worked by junior technicians to prevent time-theft.',
      'Shift your mindset from personal hands-on expert execution to systemic planning, stakeholder management, and facilitating team outcomes.',
      'Always refer to the project sponsor for any minor decision to completely shield yourself from risk.',
      'Enforce complete compliance with standard operational procedures by blocking all new technical proposals.'
    ],
    answerIndex: 1,
    explanation: 'Transitioning to project coordination requires moving from a hands-on technical focus to managing systemic issues, planning, communication, and stakeholder engagement (Task 13).',
    methodology: 'Predictive'
  },
  {
    id: 44,
    domain: 'People',
    task: 'Support team performance',
    question: 'A project manager reviews timesheets and notices that two developers are logging intensive overtime, yet the overall velocity is flat. What should the project manager investigate FIRST?',
    options: [
      'The accuracy of the developers\' timesheets for possible billing inflation.',
      'The developmental environment for technical blocks, high-friction tools, or poor story descriptions that cause inefficiencies.',
      'The opportunity to hire more juniors to replace these two developer roles.',
      'The necessity to mandate weekend shifts to finally improve total velocity.'
    ],
    answerIndex: 1,
    explanation: 'Before assuming bad faith, a servant manager investigates systemic blocks (Task 3 & 7), such as environments or poor specifications, which cause developers to spend excessive time with low yield.',
    methodology: 'Agile'
  },
  {
    id: 45,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'A major stakeholder frequently sends emails expressing frustration that their specific system questions are not being answered in general team reviews. What should the project manager do?',
    options: [
      'Ignore the emails as general stakeholder noise that does not impact current delivery.',
      'Assess their individual interests, establish a transparent communication log, and schedule a recurring short meeting specifically to address their detailed concerns.',
      'Formally file a stakeholder complaint with the PMO regarding timeline interference.',
      'Change all team alignment meetings to focus strictly on this individual\'s list of concerns.'
    ],
    answerIndex: 1,
    explanation: 'Addressing structured stakeholder concerns involves active, focused communication (Task 9) that keeps them informed and clear without derailing standard internal team mechanics.',
    methodology: 'Predictive'
  },
  {
    id: 46,
    domain: 'People',
    task: 'EQ concepts',
    question: 'A team member is behaving passively and withdrawing from group decisions. How can an emotionally intelligent Scrum Master re-engage this individual?',
    options: [
      'Directly call on them in team-wide sessions to state their opinion on sensitive topics.',
      'Engage them in private, safe discussions to ask about their comfort levels and provide channels like visual cards or asynchronous reviews to capture their ideas.',
      'Report their passive behavior to the sponsor as an obstacle to team self-organization.',
      'Exclude them from subsequent collaborative design sessions to maintain velocity.'
    ],
    answerIndex: 1,
    explanation: 'EQ involves understanding individual behavioral differences. Providing low-pressure, supportive mechanisms for quieter or introverted team members creates psychological safety.',
    methodology: 'Agile'
  },
  {
    id: 47,
    domain: 'People',
    task: 'Empower team members and stakeholders',
    question: 'An agile development team decides to shift their daily standup time from 9:00 AM to 1:00 PM to fit their flow state. How should the Scrum Master respond?',
    options: [
      'Block the shift, explaining that standard agile frameworks require standups to happen first thing in the morning.',
      'Support the team’s autonomous choice, check if it fits Product Owner alignment, and facilitate its implementation while monitoring its impact on sprint collaboration.',
      'Report the team to the functional lead for violating professional office routine protocols.',
      'Mandate that the standup be scheduled twice a day at both 9:00 AM and 1:00 PM.'
    ],
    answerIndex: 1,
    explanation: 'Empowering teams (Task 4) involves respecting their self-organizing capabilities, such as deciding their meeting times to optimize flow, provided it doesn\'t disrupt cross-functional alignment.',
    methodology: 'Agile'
  },
  {
    id: 48,
    domain: 'People',
    task: 'Lead a team',
    question: 'During a Scrum team\'s retrospective, members suggest that they would produce higher quality if they worked in pairs on highly complex tasks. How should the Project Manager / Scrum Master handle this?',
    options: [
      'Deny the suggestion, explaining that buddying up on tasks cuts resource utilization metrics in half.',
      'Encourage the team to run a pilot pair-programming experiment in the upcoming sprint and track its impact on quality and velocity.',
      'Draft a formal policy detailing when pairing is permitted, requiring manager sign-off for each session.',
      'Advise the team to work overtime in pairs without logging the extra hours in the PMO system.'
    ],
    answerIndex: 1,
    explanation: 'A servant leader encourages team experimentation and continuous improvement (Task 2 & 3). Running a low-risk trial of pair-programming lets the team organically validate if it boosts performance.',
    methodology: 'Agile'
  },
  {
    id: 49,
    domain: 'People',
    task: 'Manage conflict',
    question: 'A commercial real-estate development project is facing structural delays because the civil contractor and architectural firm are blaming each other for structural misalignments. What is the PM\'s BEST course of action?',
    options: [
      'Terminate contracts with both suppliers and file claims for damages to cover budget losses.',
      'Convene a joint on-site evaluation with key technical leads from both firms to collaboratively isolate the misalignment and design a correction path.',
      'Inform the sponsor that a final structural design choice is selected by the PM, ignoring contractor objections.',
      'Shift all design and build tasks to the PMO and micro-manage both firms separately.'
    ],
    answerIndex: 1,
    explanation: 'Collaborative problem-solving (Task 1) involving direct face-to-face analysis of the physical misalignment is the only method that establishes factual alignment and maintains timeline integrity.',
    methodology: 'Predictive'
  },
  {
    id: 50,
    domain: 'People',
    task: 'Build a team',
    question: 'A project manager is forming a team for a high-risk security compliance system. Which of the following is the MOST critical first document to establish the team\'s code of conduct and values?',
    options: [
      'The comprehensive Project Charter indicating sponsor funding commitments.',
      'The Project Team Charter (or working agreement) developed collaboratively by all team members.',
      'The Quality Management Plan detailing automated checking testing tools.',
      'The individual key performance indicators (KPIs) mapped by human resources.'
    ],
    answerIndex: 1,
    explanation: 'The Project Team Charter (or working agreement) is established during forming to define team values, ground rules, and behavioral boundaries, building a foundation of mutual trust and respect (Task 12 & 6).',
    methodology: 'Predictive'
  },
  {
    id: 51,
    domain: 'People',
    task: 'Ensure team members/stakeholders are adequately trained',
    question: 'An agile team wants to transition from monolithic code architecture to cloud-native serverless systems. They lack experience in cloud-native deployment. What should the Scrum Master do?',
    options: [
      'Instruct team members to watch free video guides in their personal spare time to close knowledge gaps.',
      'Facilitate cloud-native spike iterations, allocate budget for official cloud certification training, and incorporate hands-on cloud-native spikes in the product backlog.',
      'Suggest the Product Owner cancel serverless requirements and use historical monolithic frameworks.',
      'Hire offshore contractors to do the deployment, keeping the internal team shielded from training.'
    ],
    answerIndex: 1,
    explanation: 'Ensuring adequate training (Task 5) in agile projects can be accomplished through Spike stories, training budget allocations, and formal peer learning sessions during regular sprint hours.',
    methodology: 'Agile'
  },
  {
    id: 52,
    domain: 'People',
    task: 'Address obstacles',
    question: 'A product developer informs the project manager that they are experiencing server throttling issues that delay their build cycles by 1 hour daily. What should the project manager do FIRST?',
    options: [
      'Log the server throttling issue, analyze its impact on cost and velocity, and interface with the IT operations lead to upgrade server bandwidth.',
      'Suggest the developer work early during off-peak hours to avoid server limits.',
      'Recommend that the developer ignore the throttling and report the cumulative delay as an unresolvable milestone exception.',
      'Instruct the developer to rewrite their code to minimize server calls, regardless of product performance.'
    ],
    answerIndex: 0,
    explanation: 'Task 7 requires rapid assessment and resolution of team bottlenecks. Interfacing directly with IT operations to upgrade resources removes the daily impediment and restores delivery momentum.',
    methodology: 'Predictive'
  },
  {
    id: 53,
    domain: 'People',
    task: 'Negotiate project agreements',
    question: 'During internal negotiations, a logistics director refuses to release heavy vehicles for a project, saying scheduling them disrupts operational schedules. How should the project manager approach this negotiation?',
    options: [
      'File an executive project order signed by the CEO demanding vehicle release.',
      'Collaborate to create a detailed vehicle-usage schedule that utilizes off-peak hours, or leverage external rentals for high-demand windows.',
      'Accept the logistics refusal and shift project transport requirements to manual options.',
      'Accuse the logistics director of sabotage during executive project reviews.'
    ],
    answerIndex: 1,
    explanation: 'Constructive negotiation (Task 8) analyzes constraints and designs collaborative schedules or alternative backup sources (e.g., rentals) to meet project targets without jeopardizing operations.',
    methodology: 'Predictive'
  },
  {
    id: 54,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'A community advocacy group raises strong environmental concerns about a project\'s construction site. What should the project manager do to collaborate with this stakeholder group effectively?',
    options: [
      'Ignore the community complaints unless they obtain a court-ordered construction block.',
      'Hold a public, facilitated community alignment meeting to share environmental impact assessments, listen to concerns, and jointly design mitigations.',
      'Provide private compensation payments to key community leaders to secure quiet alignment.',
      'Request the corporate marketing department handle local complaints as a branding exercise.'
    ],
    answerIndex: 1,
    explanation: 'Stakeholder collaboration (Task 9) involves directly engaging community groups, hearing their concerns, showing transparency, and incorporating constructive feedback into the risk response planning.',
    methodology: 'Predictive'
  },
  {
    id: 55,
    domain: 'People',
    task: 'Build shared understanding',
    question: 'A project manager is presenting an complex project proposal to a diverse board of directors. Some are highly technical, while others are purely financial. What is the BEST communication approach to build shared understanding?',
    options: [
      'Deliver a highly detailed, 200-page purely technical system document.',
      'Present a high-level visual business model linking financial outcomes to key technical milestones, using standard business terms and keeping technical details in an appendix.',
      'Focus the presentation solely on financial returns to satisfy the majority stakeholder.',
      'Request directors send their personal assistants to handle the alignment.'
    ],
    answerIndex: 1,
    explanation: 'Building shared understanding (Task 10) with multi-disciplined executives benefits from linking technical steps directly to clear business value, using high-level visual roadmaps.',
    methodology: 'Predictive'
  },
  {
    id: 56,
    domain: 'People',
    task: 'Engage and support virtual teams',
    question: 'A global virtual team has team members located in USA, Poland, and India. The team members in India complain that team meetings are always scheduled during their late evenings. What is the BEST approach to handle this timezone issue?',
    options: [
      'Require Indian team members to accept late-hour calls as a normal condition of global projects.',
      'Implement rotating meeting schedules where the timezone burden is shared fairly, and record synchronous reviews for asynchronous viewing.',
      'Cancel all synchronous virtual meetings and communicate solely via email updates.',
      'Re-host all meetings during Poland core hours, ignoring the impacts on US members.'
    ],
    answerIndex: 1,
    explanation: 'In virtual teams (Task 11), sharing the timezone burden via rotating meeting blocks built with consensus demonstrates servant leadership, equity, and empathy.',
    methodology: 'Agile'
  },
  {
    id: 57,
    domain: 'People',
    task: 'Define team ground rules',
    question: 'A newly integrated team member often drops tasks mid-sprint without updating the Kanban board, leaving team mates unaware of progress. What should the Scrum Master do first?',
    options: [
      'Bring the team together to review the team working agreements and definition of done, confirming how and when updates should occur.',
      'Issue a formal written warning to the new team member for performance negligence.',
      'Personally take over updating the board for the new team member during standups.',
      'Reassign all complex tasks from this team member to other reliable engineers.'
    ],
    answerIndex: 0,
    explanation: 'Revisiting the team charter or working agreements (Task 12) is the primary first action to establish shared behavioral standards, ensuring everyone understands and respects expectations.',
    methodology: 'Agile'
  },
  {
    id: 58,
    domain: 'People',
    task: 'Mentor relevant stakeholders',
    question: 'An organization is adopting hybrid project methodologies. The predictive project management leads are resisting, claiming the transition threatens project rigor. What is the project manager\'s best mentoring stance?',
    options: [
      'Instruct them to follow hybrid templates or face termination from projects.',
      'Conduct regular mentoring workshops displaying how hybrid models combine predictive governance with agile execution speed, providing practical case studies.',
      'Ignore their resistance and continue managing the hybrid project without their collaboration.',
      'Abandon the transition and return to completely traditional predictive frameworks.'
    ],
    answerIndex: 1,
    explanation: 'Mentoring (Task 13) involves addressing organizational change through empathy and education, showing traditional stakeholders how hybrid frameworks maintain governance while boosting agility.',
    methodology: 'Hybrid'
  },
  {
    id: 59,
    domain: 'People',
    task: 'EQ concepts',
    question: 'A project manager realizes that they are reacting defensively during steering reviews when executives question cost variances. What action demonstrates the highest emotional intelligence self-regulation?',
    options: [
      'Refuse to present financial reports in person, shifting reports to text-only email formats.',
      'Acknowledge personal emotional triggers, prepare objective and transparent variance justifications in advance, and remain calm, focusing reviews on collaborative remediation paths.',
      'Argue that steering committees lack understanding of complex execution mechanics.',
      'Hire a cost controller to handle all questions so you can avoid direct scrutiny.'
    ],
    answerIndex: 1,
    explanation: 'High EQ self-regulation (Task 14) involves recognizing personal triggers, preparing objectively, and focusing discussions on collaborative problem-solving rather than defense reactions.',
    methodology: 'Predictive'
  },
  {
    id: 60,
    domain: 'People',
    task: 'Manage conflict',
    question: 'A project manager is leading a predictive software integration when the front-end and back-end leads argue about data schemas. This is beginning to delay database planning. What is the BEST technique to resolve this?',
    options: [
      'Tell them to work out their arguments independently or you will make an arbitrary technical decision.',
      'Host a dedicated collaborative workshop to map out schema alternatives, assess cost/time impacts for each option, and co-design a schema mapping.',
      'Decide on a schema design yourself immediately to save schedule days and enforce it.',
      'Separate the front-end and back-end integration work into two distinct projects.'
    ],
    answerIndex: 1,
    explanation: 'Technical disagreements are best resolved through facilitated collaborative workshops (Task 1), ensuring all viewpoints are factored in and an optimized, high-quality solution is selected.',
    methodology: 'Predictive'
  },
  {
    id: 61,
    domain: 'People',
    task: 'Address obstacles',
    question: 'A team member on a remote construction project reports that their internet connection is too slow to sync daily video reports. This delays validation cycles. What should the project manager do?',
    options: [
      'Instruct the teammate to travel 20 miles to a nearby town daily to find faster networks.',
      'Provide alternative satellite communication terminals or lighter, compressed text-log formats to bridge the latency block.',
      'Remove the video verification requirement and rely on informal text self-reports.',
      'Issue a reprimand to the client for having a site in a low-coverage region.'
    ],
    answerIndex: 1,
    explanation: 'Addressing impediments (Task 7) means matching obstacles with practical technical solutions (satellite connections or compressed file formats) to retain quality controls without burdening staff.',
    methodology: 'Predictive'
  },
  {
    id: 62,
    domain: 'People',
    task: 'Lead a team',
    question: 'A new Scrum Master is mentoring a traditional group. The developers complain they feel monitored during daily standups because the Scrum Master takes detailed notes on individual status lines. How should the Scrum Master adjust?',
    options: [
      'Remind them that as a manager you must evaluate individual daily output.',
      'Shift the focus of standups from status reporting to the team collaboratively checking sprint board progress and discussing daily integration blockers.',
      'Cancel standups and require developers submit written daily time-logs.',
      'Ask the Product Owner to run the standups to remove management presence.'
    ],
    answerIndex: 1,
    explanation: 'Standups in Agile are meant for team coordination, not management status tracking. A servant Scrum Master ensures the session belongs to developers and focuses on blockers (Task 2 & 7).',
    methodology: 'Agile'
  },
  {
    id: 63,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'A company\'s legal department refuses to sign off on a supplier contract, causing high risk of resource delays. What should the project manager do?',
    options: [
      'Bypass the legal review and hire the supplier under a personal services agreement.',
      'Convene an urgent meeting with the legal team and supplier to isolate the specific clauses causing friction and co-draft agreeable terms.',
      'File a complaint with executive management regarding legal team bureaucracy.',
      'Proceed with project development without using any supplier resources.'
    ],
    answerIndex: 1,
    explanation: 'Collaborating with critical stakeholders like Legal (Task 9) involves direct, structured problem-solving to rewrite high-friction agreement terms, avoiding scope or timeline delays.',
    methodology: 'Predictive'
  },
  {
    id: 64,
    domain: 'People',
    task: 'Support team performance',
    question: 'A project manager notices that remote developers are frequently completing the wrong version of tasks. What is the BEST way to support team performance?',
    options: [
      'Require developers to submit hourly screenshots of their workspaces.',
      'Establish a single, central source of truth for task descriptions and requirements, and conduct regular validation walk-throughs before work starts.',
      'Decrease developer salaries for defect counts.',
      'Delegate all task assignment to an on-site supervisor.'
    ],
    answerIndex: 1,
    explanation: 'Supporting performance (Task 3) involves building reliable, high-integrity information hubs (e.g. centralized JIRA/backlog) to eliminate version mismatches and workflow confusion.',
    methodology: 'Agile'
  },
  {
    id: 65,
    domain: 'People',
    task: 'Negotiate project agreements',
    question: 'An agile development team is facing conflict because they believe the marketing team is adding unestimated promo tasks directly to their sprint board. How should the Scrum Master handle this?',
    options: [
      'Allow the marketing team to add tasks as they are high-priority business items.',
      'Bring representatives from marketing and the team together to review the agile change control process, clarifying that all scope must flow through the Product Owner.',
      'Tell developers to ignore the promotional tasks to force marketing to follow rules.',
      'Approve the promotional tasks to maintain cross-team goodwill.'
    ],
    answerIndex: 1,
    explanation: 'Managing scope and cross-team boundaries (Task 8 & 12) involves educating other divisions on agile frameworks, establishing PO alignment, and protecting the sprint boundaries.',
    methodology: 'Agile'
  },
  {
    id: 66,
    domain: 'People',
    task: 'Build shared understanding',
    question: 'At the start of a hybrid project, user interface designers and back-end engineers have completely separate views of the project requirements. What should the project manager have done to prevent this?',
    options: [
      'Provided separate, written system handoff specifications to both divisions.',
      'Convened a joint, visual prototyping workshop during planning to collaboratively outline data flows and interface interactions.',
      'Approved the back-end specifications first and forced the designers to align later.',
      'Instructed both divisions to proceed independently and integrate during deployment.'
    ],
    answerIndex: 1,
    explanation: 'Proactive alignment (Task 10) benefits from joint, high-impact visual design workshops where cross-functional team members co-architect requirements, avoiding post-planning reworks.',
    methodology: 'Hybrid'
  },
  {
    id: 67,
    domain: 'People',
    task: 'Empower team members and stakeholders',
    question: 'A senior developer on a predictive project wants to use a new open-source database framework that is not officially vetted but could cut data integration work by 40%. What is the PM\'s best empowerment response?',
    options: [
      'Block the change, citing corporate rules strictly prohibiting unvetted open-source databases.',
      'Empower the developer to run a 3-day sandboxed impact assessment on security, licensing, and stability to present the results to the technical review board.',
      'Authorize the open-source integration directly to save 40% schedule days.',
      'Tell the developer to use the open-source library secretly without documenting it.'
    ],
    answerIndex: 1,
    explanation: 'True empowerment (Task 4) doesn\'t mean unchecked liberty. Providing structured pathways (sandboxed investigation and governance review) enables innovation while managing compliance risks.',
    methodology: 'Predictive'
  },
  {
    id: 68,
    domain: 'People',
    task: 'Define team ground rules',
    question: 'During a hybrid project, several virtual team members are arriving late to standup calls. This is delaying on-site staff. What should the project manager do?',
    options: [
      'Impose fine deductions on timesheets for late-coming virtual team members.',
      'Facilitate a virtual team session to review current standup timing, establish late-arrival agreements, and document penalties in the team charter.',
      'Cancel virtual team meetings and hold meetings with on-site staff only.',
      'Schedule standups twice daily to accommodate latecomers.'
    ],
    answerIndex: 1,
    explanation: 'Maintaining team ground rules (Task 12) involves peer-defined accountability. Revisiting the team charter helps align the team on shared commitments and late-arrival boundaries.',
    methodology: 'Hybrid'
  },
  {
    id: 69,
    domain: 'People',
    task: 'Mentor relevant stakeholders',
    question: 'A new junior project coordinator is overwhelmed by managing multiple change requests on a large Predictive infrastructure project. How should the senior project manager guide them?',
    options: [
      'Take over the change log personally and tell the coordinator to focus on simple logistics.',
      'Mentor the coordinator on using the Change Management Plan, explaining how to evaluate, document, and present revisions to the CCB step-by-step.',
      'Advise the junior to ignore minor changes to reduce their workload.',
      'Instruct the junior to approve all changes directly to avoid bureaucratic backlog.'
    ],
    answerIndex: 1,
    explanation: 'Guiding junior professionals (Task 13) is best done through progressive education on governance processes, walking them through the Change Management Flow step-by-step.',
    methodology: 'Predictive'
  },
  {
    id: 70,
    domain: 'People',
    task: 'EQ concepts',
    question: 'During a high-stakes deployment review, a product owner is audibly sighing and rolling their eyes when developers show minor testing bugs. What is the Scrum Master\'s best EQ response?',
    options: [
      'Roll your eyes back at the Product Owner to show them how unprofessional their behavior looks.',
      'Wait for a break, meet with the Product Owner privately to discuss how their reactions affect team psychological safety, and advocate for supportive technical conversations.',
      'Ignore the Product Owner\'s reactions to avoid escalating stakeholders conflict.',
      'Ask the team to ignore the Product Owner and focus purely on code reviews.'
    ],
    answerIndex: 1,
    explanation: 'EQ coaching (Task 14) involves private, empathetic, yet direct conversations with stakeholders whose defensive behaviors undermine team collaboration and trust.',
    methodology: 'Agile'
  },
  {
    id: 71,
    domain: 'People',
    task: 'Ensure team members/stakeholders are adequately trained',
    question: 'A project manager identifies that a key customer stakeholder does not know how to perform User Acceptance Testing (UAT) on a complex medical software. What is the best step?',
    options: [
      'Run the UAT yourself and sign off on behalf of the customer to save time.',
      'Develop a quick UAT checklist, schedule interactive dry-run alignment calls, and assign a QA lead to guide the customer step-by-step during testing.',
      'Send the customer a general 300-page QA handbook to read before the UAT phase begins.',
      'Escalate this client training gap to the project steering sponsor as a legal risk.'
    ],
    answerIndex: 1,
    explanation: 'An elegant PM supports stakeholders through active enablement (Task 5), providing structured guidelines, dry-runs, and dedicated support contacts to facilitate UAT.',
    methodology: 'Predictive'
  },
  {
    id: 72,
    domain: 'People',
    task: 'Build a team',
    question: 'An agile development team has a highly experienced designer who refuses to work on standard database tasks, claiming it is below their skill level. This creates a backlog bottleneck. What is the Scrum Master\'s best response?',
    options: [
      'Allow the designer to focus purely on high-end layouts, and assign junior QA team members to handle the database backlog.',
      'Facilitate a team meeting to discuss how cross-functional skills share the burden of the sprint backlog, and encourage pairing on the database work to build skills.',
      'File an official complaint with HR regarding the designer\'s insubordination.',
      'Tell the client that database delivery will be indefinitely outstanding due to developer gaps.'
    ],
    answerIndex: 1,
    explanation: 'Aggressively protecting specialist divisions is anti-agile. Encouraging T-shaped skill development and cross-functional peer support (Task 3 & 6) builds high-integrity teams.',
    methodology: 'Agile'
  },
  {
    id: 73,
    domain: 'People',
    task: 'Address obstacles',
    question: 'An enterprise predictive project manager detects that the finance director has blocked procurement approvals because the current PO system lacks specific cost-center codes. What is the FIRST step the PM should take?',
    options: [
      'Ask the project developers to skip procurement requirements and purchase resources with credit cards.',
      'Inquire with the finance lead regarding correct cost codes, update procurement documentation instantly, and resubmit.',
      'Submit a formal grievance report to the finance directory\'s supervisor.',
      'Wait for the quarterly PMO audit to report the bottleneck.'
    ],
    answerIndex: 1,
    explanation: 'Resolving obstacles quickly (Task 7) means adjusting compliance details. Sourcing correct parameters immediately ensures procurement resumes with minimal delay.',
    methodology: 'Predictive'
  },
  {
    id: 74,
    domain: 'People',
    task: 'Collaborate with stakeholders',
    question: 'A project manager reviews a predictive project and notices a critical stakeholder has been left out of early communication schedules. What is the BEST immediate corrective action?',
    options: [
      'Wait for the project steering committee review to introduce the stakeholder.',
      'Add the stakeholder to the communications management plan, schedule an online briefing to review project scope, and capture their expectations.',
      'Instruct the project coordinator to send them generic weekly emails to keep them quiet.',
      'Avoid involving them to prevent scope creep at this intermediate stage of development.'
    ],
    answerIndex: 1,
    explanation: 'Re-aligning missing stakeholders (Task 9 & 4) requires active outreach. Sharing project scopes and adding them to communication matrices keeps them involved.',
    methodology: 'Predictive'
  },
  {
    id: 75,
    domain: 'People',
    task: 'EQ concepts',
    question: 'An agile team member fails to complete a key system task, causing the team to fail their sprint commitment. The team leader is furious and wants to address this in the standup. What is the correct approach representing EQ?',
    options: [
      'Expostulate the team member during the next standup to enforce accountability.',
      'Remain calm and speak with the team member privately to explore root causes, while keeping standup focus on resolving the remaining sprint blockers.',
      'Exclude the teammate from the upcoming sprint retrospect to avoid conflict.',
      'Directly report the teammate to HR for performance negligence.'
    ],
    answerIndex: 1,
    explanation: 'Applying EQ (Task 14) requires keeping group sessions collaborative. Resolving setbacks privately protects psychological safety while focusing team standups on blocking points.',
    methodology: 'Agile'
  },
  {
    id: 76,
    domain: 'People',
    task: 'Lead a team',
    question: 'Under Scrum, who holds the ultimate liability for estimating work efforts during sprint planning sessions?',
    options: [
      'The Scrum Master, who understands velocity.',
      'The development team members, who actually execute the work items.',
      'The Product Owner, who sets value priority.',
      'The Project Sponsor, who allocates budget.'
    ],
    answerIndex: 1,
    explanation: 'In agile methodologies, estimation belongs to the developers who will carry out the tasks (Task 2 & 4), ensuring accurate commitments and building team self-organization.',
    methodology: 'Agile'
  }
];
