import { motion } from 'motion/react';
import { BookOpen, CheckCircle, ListTodo, Award, HelpCircle, GraduationCap } from 'lucide-react';

interface TaskReference {
  id: string;
  title: string;
  focus: string;
  pmpTip: string;
}

interface DomainOutline {
  name: string;
  weight: string;
  description: string;
  tasks: TaskReference[];
}

export default function KnowledgeBase() {
  const ecoData: DomainOutline[] = [
    {
      name: 'Domain I: People',
      weight: '42% of Exam (76 Questions)',
      description: 'Focuses on the skills and leadership styles associated with managing team dynamics, handling conflicts, mentoring, and leading cross-functional teams.',
      tasks: [
        {
          id: 'T1',
          title: 'Manage conflict',
          focus: 'Locate the root cause privately first. Prioritize collaborating / problem-solving (win-win) techniques over avoiding or forcing.',
          pmpTip: 'On the PMP, the project manager should never postpone personal disagreements. Avoid escalating to sponsors.'
        },
        {
          id: 'T2',
          title: 'Lead a team',
          focus: 'Act as a servant leader. Focus on removing blockers, supporting autonomy, and inspiring collaboration.',
          pmpTip: 'Servant leadership is highly favored on the exam. Shield the team from disruptions.'
        },
        {
          id: 'T3',
          title: 'Support team performance',
          focus: 'Continuous performance reviews, tracking sprint velocities, and addressing skill deficits constructively.',
          pmpTip: 'Provide immediate performance feedback and explore systemic causes behind delays.'
        },
        {
          id: 'T4',
          title: 'Empower team members and stakeholders',
          focus: 'De-centralize decision-making using boundary tolerances. Foster professional accountability and ownership.',
          pmpTip: 'Empowered agile teams estimate their own tasks and self-organize sprints.'
        },
        {
          id: 'T5',
          title: 'Ensure team members are adequately trained',
          focus: 'Determine training requirements, integrate cost and schedules early, and assess post-training outcomes.',
          pmpTip: 'Training is a proactive investment. Include it inside resource plans to prevent safety/quality gaps.'
        },
        {
          id: 'T6',
          title: 'Build a team',
          focus: 'Coordinate alignment and team values using Tuckman\'s Stages of Group Development (Forming, Storming, Norming, Performing).',
          pmpTip: 'Co-create a Team Charter to define ground rules and build mutual trust early.'
        },
        {
          id: 'T7',
          title: 'Address and remove obstacles for the team',
          focus: 'Actively identify, log, and resolve bottlenecks, technical roadblocks, or middleware delays.',
          pmpTip: 'Scrum Masters remove impediments immediately. Connect directly with other department heads.'
        },
        {
          id: 'T8',
          title: 'Negotiate project agreements',
          focus: 'Identify target requirements and apply win-win compromises to negotiate for team members and supplies.',
          pmpTip: 'Support sustainable, collaborative supplier relationships. Seek mutual benefits.'
        },
        {
          id: 'T9',
          title: 'Collaborate with stakeholders',
          focus: 'Actively align stakeholder expectations. Adjust messaging structures to match their specific interest levels.',
          pmpTip: 'Treat stakeholders as partners. Meet separately to resolve specialized concerns.'
        },
        {
          id: 'T10',
          title: 'Build shared understanding',
          focus: 'Facilitate interactive sessions and workshops. Resolve conflicting expectations using visual designs.',
          pmpTip: 'Always align on objective success criteria early during project kick-off.'
        },
        {
          id: 'T11',
          title: 'Engage and support virtual teams',
          focus: 'Integrate shared Kanban boards, collaborative platforms, time-friendly syncs, and virtual events.',
          pmpTip: 'Distribute time-zone burdens evenly across remote branches (e.g., rotate meeting slots).'
        },
        {
          id: 'T12',
          title: 'Define team ground rules',
          focus: 'Facilitate the cooperative creation of a social contract / team working agreement.',
          pmpTip: 'Ground rules must be peer-enforced. Avoid enforcing top-down rules without team consensus.'
        },
        {
          id: 'T13',
          title: 'Mentor relevant stakeholders',
          focus: 'Coach junior managers or traditional clients transitioning into agile frameworks (Product Owners, Sponsors).',
          pmpTip: 'Help Product Owners slice user stories and prioritize based on business value metrics.'
        },
        {
          id: 'T14',
          title: 'Apply emotional intelligence (EQ)',
          focus: 'Utilize self-awareness, empathy, and active listening to guide teams through stress and burnout.',
          pmpTip: 'Empathy-driven actions build psychological safety. Address individual distress privately.'
        }
      ]
    },
    {
      name: 'Domain II: Process',
      weight: '50% of Exam (90 Questions)',
      description: 'Focuses on the technical, procedural, and administrative aspects of executing and closing projects under predictive, adaptive, and hybrid frameworks.',
      tasks: [
        {
          id: 'T1',
          title: 'Execute with urgency to deliver value',
          focus: 'Deliver Minimum Viable Products (MVPs) early in iterations to validate features and capture market windows.',
          pmpTip: 'Fast-track valuable features over pure sequential steps if business outcomes dictate speed.'
        },
        {
          id: 'T2',
          title: 'Manage communications',
          focus: 'Tailor frequency, channel, and granularity based on the Communications Management Plan.',
          pmpTip: 'Favour visual real-time progress dash-boards to minimize unnecessary long email reporting.'
        },
        {
          id: 'T3',
          title: 'Manage project risks',
          focus: 'Log and analyze risks in a Risk Register. Formulate Mitigation, Transfer, Avoidance, or Acceptance responses.',
          pmpTip: 'Assess threat probability and impact score. Monte Carlo tracks cumulative risk impact.'
        },
        {
          id: 'T4',
          title: 'Engage stakeholders',
          focus: 'Analyze power-interest indicators. Adjust engagement level dynamically using expectations mapping.',
          pmpTip: 'Engage opposable stakeholders early to convert resistance to collaborative alignment.'
        },
        {
          id: 'T5',
          title: 'Plan and manage budget and resources',
          focus: 'EVM metrics (CPI, SPI, CV, SV, EAC, TCPI). Control costs using baselines and contingency reserves.',
          pmpTip: 'EVM calculations are critical! CPI > 1 = under budget, SPI > 1 = ahead of schedule.'
        },
        {
          id: 'T6',
          title: 'Plan and manage schedule',
          focus: 'Critical path method, float calculation, schedule compression (fast-tracking vs. crashing).',
          pmpTip: 'FAST-TRACKING adds risk of rework. CRASHING adds cost risk due to resource addition.'
        },
        {
          id: 'T7',
          title: 'Plan and manage quality',
          focus: 'Use Scatter, Control, and Pareto charts. Prioritize prevention over simple post-production inspections.',
          pmpTip: 'The Rule of Seven: 7 consecutive points on one side of the mean line indicates a process out of control.'
        },
        {
          id: 'T8',
          title: 'Plan and manage scope',
          focus: 'Strict control of work packages via Scope Statement, WBS, and WBS Dictionary. Prevent Gold Plating.',
          pmpTip: 'Gold Plating is adding unrequested deliverables. Adhere strictly to scope boundaries.'
        },
        {
          id: 'T9',
          title: 'Integrate planning activities',
          focus: 'Establish the master Project Management Plan incorporating all subsidiary operational plans.',
          pmpTip: 'A project kick-off session must integrate cross-functional streams under a common baseline.'
        },
        {
          id: 'T10',
          title: 'Manage project changes',
          focus: 'Always analyze scope and cost impact first. Submit formal recommendations to the Change Control Board.',
          pmpTip: 'If a client requests a change, analyze impact FIRST, then submit for CCB authorization.'
        },
        {
          id: 'T11',
          title: 'Plan and manage procurement',
          focus: 'Contract selection (FFP, T&M, Cost-Reimbursable). Manage seller contracts and evaluate deliveries.',
          pmpTip: 'Firm-Fixed-Price (FFP) minimizes budget risk to the buyer for commodity specifications.'
        },
        {
          id: 'T12',
          title: 'Manage project artifacts',
          focus: 'Ensure key files, models, and guides are structured under Configuration Management systems.',
          pmpTip: 'Configuration Management registers guarantee access control to the latest approved files.'
        },
        {
          id: 'T13',
          title: 'Determine appropriate methodology',
          focus: 'Choose Agile (uncertain, dynamic items), Predictive (regulated, stable targets), or Hybrid models.',
          pmpTip: 'The exam features agile/hybrid questions heavily. Match iteration bounds to business speeds.'
        },
        {
          id: 'T14',
          title: 'Establish project governance structure',
          focus: 'Define approval thresholds, escalation channels, and steering structures matching corporate governance.',
          pmpTip: 'Governance structures secure alignment, ensuring clear PM authorities during execution.'
        },
        {
          id: 'T15',
          title: 'Manage project issues',
          focus: 'Realized risks are recorded in the Issue Log. Implement workarounds and resolve impediments.',
          pmpTip: 'A risk is a future threat (Risk Register); an issue is a realized problem (Issue Log).'
        },
        {
          id: 'T16',
          title: 'Ensure knowledge transfer',
          focus: 'Integrate collaborative shadowing, sprint retros, and centralized lessons-learned wikis.',
          pmpTip: 'Do not postpone lessons learned to final wrap-up. Capture them continuously.'
        },
        {
          id: 'T17',
          title: 'Manage project closure or transitions',
          focus: 'Deliver transition training, gather formal operational signoff, assess vendor deliverables, close accounts.',
          pmpTip: 'Archive organizational assets and release resources only after formal client signoff is secured.'
        }
      ]
    },
    {
      name: 'Domain III: Business Environment',
      weight: '8% of Exam (14 Questions)',
      description: 'Focuses on strategic regulatory alignment, benefits tracking, identifying external corporate modifications, and driving organization change support.',
      tasks: [
        {
          id: 'T1',
          title: 'Plan and manage compliance',
          focus: 'Map PCI-DSS, GDPR, HIPAA, or safety codes to backlog priorities or milestone quality gates.',
          pmpTip: 'Incorporate compliance costs and audits directly inside budgets to isolate safety liabilities.'
        },
        {
          id: 'T2',
          title: 'Evaluate and deliver benefits and value',
          focus: 'Maintain alignment with the Business Case and Benefits Realization Plan.',
          pmpTip: 'Project success is measured by realized business benefits, not just baseline deliveries.'
        },
        {
          id: 'T3',
          title: 'Evaluate and address external changes',
          focus: 'Analyze competitor apps, trade policies, or materials fluctuations. Adjust backlog priorities.',
          pmpTip: 'Product Owners revise backlogs in response to competitor releases to maximize market share.'
        },
        {
          id: 'T4',
          title: 'Support organizational change',
          focus: 'Co-design procedures, communicate target benefits, and utilize ADKAR coaching models.',
          pmpTip: 'Involve senior operational leads in early visual workshops to reduce user resistance.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8" id="eco-navigator-view">
      <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 font-sans">
            PMI PMP Exam Content Outline (ECO)
          </h1>
        </div>
        <p className="text-slate-500 max-w-3xl leading-relaxed">
          The current PMP Exam represents a balanced test of modern project management methodologies. It maps directly onto three critical domains. Below is the official PMI ECO task structure, curated with essential <strong>PMP-certified reasoning, key focus items, and exam-day advice</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {ecoData.map((domain, dIdx) => (
          <motion.div
            key={domain.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: dIdx * 0.1 }}
            className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm"
            id={`domain-card-${dIdx}`}
          >
            <div className="bg-gradient-to-r from-slate-950 to-slate-855 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                  Official Outline Core
                </span>
                <h2 className="text-xl font-semibold mt-1 font-sans">{domain.name}</h2>
              </div>
              <div className="bg-blue-500/10 border border-blue-450/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap">
                {domain.weight}
              </div>
            </div>

            <div className="p-6 bg-slate-50/40 border-b border-slate-100">
              <p className="text-sm text-slate-500 leading-relaxed italic font-normal">
                {domain.description}
              </p>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {domain.tasks.map((task, tIdx) => (
                <div
                  key={task.id}
                  className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between"
                  id={`task-ref-${task.id}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                      <span className="bg-slate-50 border border-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold">
                        Task {tIdx + 1}
                      </span>
                      <span className="text-blue-600 flex items-center gap-1 text-xs font-mono">
                        <CheckCircle className="h-3 w-3" /> ECO Standard
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 font-sans mb-2">
                      {task.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4">
                      <span className="font-semibold text-slate-850">Operational Focus:</span> {task.focus}
                    </p>
                  </div>
                  <div className="bg-blue-50/70 border border-blue-105 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-blue-700 mt-0.5 shrink-0" />
                      <p className="text-[11px] text-blue-900 leading-relaxed font-sans">
                        <span className="font-bold uppercase tracking-wider text-[9px] text-blue-950">Exam Decider Choice:</span> {task.pmpTip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
