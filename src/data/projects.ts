export interface Project {
  id: string;
  slug: string;
  title: string;
  client?: string;
  shortDescription: string;
  introduction: string;
  purpose: string;
  features: string[];
  techStack: string[];
  conclusion: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "knowledge-management-system",
    title: "Knowledge Management System",
    client: "BPK RI",
    shortDescription: "AI-powered knowledge management platform with RAG capabilities for efficient document retrieval and knowledge sharing.",
    introduction: "BPK RI needed a centralized system to manage and retrieve institutional knowledge efficiently. The challenge was to make vast amounts of documents searchable and accessible while maintaining security and compliance standards.",
    purpose: "To streamline knowledge discovery and sharing across the organization, reducing time spent searching for information and enabling data-driven decision making through AI-powered retrieval.",
    features: [
      "AI-powered document search with semantic understanding",
      "RAG (Retrieval Augmented Generation) for intelligent answers",
      "Role-based access control and document permissions",
      "Real-time collaboration and document versioning",
      "Advanced analytics and usage reporting"
    ],
    techStack: ["Golang", "React", "RAG", "PostgreSQL", "Docker"],
    conclusion: "Successfully deployed a scalable knowledge management solution that reduced document search time by 70% and improved cross-departmental knowledge sharing.",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    slug: "sisappra",
    title: "SISAPPRA",
    client: "DKI Jakarta",
    shortDescription: "Comprehensive personnel and apparatus management system for Jakarta's government administration.",
    introduction: "DKI Jakarta required a modern system to manage their government personnel, track performance, and streamline administrative processes across multiple departments.",
    purpose: "To digitize and centralize personnel management, enabling better workforce planning, performance tracking, and administrative efficiency for the Jakarta government.",
    features: [
      "Personnel data management and tracking",
      "Performance evaluation and reporting",
      "Attendance and leave management",
      "Document generation and workflow automation",
      "Integration with existing government systems"
    ],
    techStack: ["React", "Golang", "PostgreSQL", "Redis", "Docker"],
    conclusion: "Delivered a robust personnel management system serving thousands of government employees with improved data accuracy and administrative efficiency.",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    slug: "helpdesk-ticketing",
    title: "Helpdesk Ticketing System",
    shortDescription: "Modern helpdesk solution integrated with Odoo ERP for streamlined IT support and issue tracking.",
    introduction: "Organizations needed a unified helpdesk solution that could integrate seamlessly with their existing Odoo ERP system while providing modern ticketing capabilities.",
    purpose: "To provide a seamless IT support experience, reducing ticket resolution time and improving communication between support teams and end-users.",
    features: [
      "Ticket creation and assignment automation",
      "Priority-based queue management",
      "SLA tracking and escalation workflows",
      "Odoo ERP integration for unified data",
      "Customer satisfaction surveys and reporting"
    ],
    techStack: ["Next.js", "TypeScript", "Odoo", "PostgreSQL", "Tailwind CSS"],
    conclusion: "Implemented a helpdesk system that reduced average ticket resolution time by 45% and improved customer satisfaction scores significantly.",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    slug: "rmi-case-reporting",
    title: "Pelaporan Kasus RMI",
    shortDescription: "Case reporting and management system for streamlined incident documentation and tracking.",
    introduction: "The organization required a structured system for reporting, tracking, and managing cases with proper documentation and workflow management.",
    purpose: "To provide a transparent and efficient case management system that ensures proper documentation, tracking, and resolution of reported incidents.",
    features: [
      "Case submission and categorization",
      "Workflow management and approval chains",
      "Document attachment and evidence management",
      "Status tracking and notifications",
      "Reporting and analytics dashboard"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Express"],
    conclusion: "Delivered a comprehensive case reporting system that improved case handling efficiency and provided better visibility into case status and resolution.",
    image: "/placeholder.svg"
  },
  {
    id: "5",
    slug: "pemira-pnc",
    title: "Sistem Pemilihan Raya (Pemira PNC)",
    shortDescription: "Digital voting and election management system for transparent and secure campus elections.",
    introduction: "PNC needed a secure and transparent digital voting system for their campus elections that could handle voter registration, voting, and result tabulation.",
    purpose: "To modernize the campus election process, ensuring transparency, security, and accessibility while reducing manual counting errors and administrative overhead.",
    features: [
      "Secure voter registration and verification",
      "Real-time voting with encryption",
      "Automated vote counting and results",
      "Candidate profile management",
      "Audit trail and transparency reports"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    conclusion: "Successfully conducted campus elections with 100% vote accuracy and significantly improved voter participation through the accessible digital platform.",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    slug: "loan-management-system",
    title: "Loan Management System",
    shortDescription: "Comprehensive loan processing and management platform for financial institutions.",
    introduction: "Financial institutions needed a streamlined system to manage loan applications, approvals, disbursements, and repayment tracking with proper risk assessment.",
    purpose: "To automate and optimize the loan lifecycle management process, reducing processing time and improving risk management through data-driven decisions.",
    features: [
      "Loan application and document verification",
      "Credit scoring and risk assessment",
      "Approval workflow automation",
      "Repayment scheduling and tracking",
      "Delinquency management and reporting"
    ],
    techStack: ["React", "Golang", "PostgreSQL", "Redis"],
    conclusion: "Implemented a loan management system that reduced loan processing time by 60% and improved portfolio risk visibility for better decision making.",
    image: "/placeholder.svg"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};