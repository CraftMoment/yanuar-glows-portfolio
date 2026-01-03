export interface ProjectContent {
  title: string;
  client?: string;
  shortDescription: string;
  introduction: string;
  purpose: string;
  features: string[];
  conclusion: string;
}

export interface Project {
  id: string;
  slug: string;
  techStack: string[];
  image: string;
  liveDemo?: string;
  content: {
    id: ProjectContent;
    en: ProjectContent;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "knowledge-management-system",
    techStack: ["React", "Golang", "PostgreSQL", "Docker"],
    image: "/placeholder.svg",
    content: {
      id: {
        title: "Knowledge Management System (KMS)",
        client: "Badan Pemeriksa Keuangan RI (BPK RI)",
        shortDescription: "Sistem terpusat untuk mengelola, menyimpan, dan menelusuri pengetahuan institusi di lingkungan BPK RI.",
        introduction: "Saya terlibat dalam pengembangan Knowledge Management System (KMS) sebagai sistem terpusat untuk mengelola, menyimpan, dan menelusuri pengetahuan institusi di lingkungan BPK RI. Sistem ini dirancang untuk menangani dokumen dalam jumlah besar dengan tetap menjaga keamanan, hak akses, dan kepatuhan terhadap standar organisasi.",
        purpose: "Sebagai Fullstack Developer, saya berkontribusi dalam pengembangan layanan backend untuk pengelolaan dokumen dan pencarian, pembuatan antarmuka pengguna yang responsif, implementasi mekanisme pencarian dokumen berbasis konteks, penerapan pengaturan hak akses dan peran pengguna, serta mendukung proses deployment dan skalabilitas sistem.",
        features: [
          "Pencarian dokumen terpusat dan terstruktur",
          "Manajemen dokumen dan versioning",
          "Pengaturan hak akses berbasis peran (role-based access)",
          "Kolaborasi pengguna dalam pengelolaan dokumen",
          "Laporan penggunaan dan aktivitas sistem"
        ],
        conclusion: "Sistem berhasil diimplementasikan dan membantu mengurangi waktu pencarian dokumen hingga 70%, serta meningkatkan efektivitas berbagi pengetahuan antar unit kerja."
      },
      en: {
        title: "Knowledge Management System (KMS)",
        client: "The Audit Board of The Republic of Indonesia (BPK RI)",
        shortDescription: "A centralized system for managing, storing, and retrieving institutional knowledge within BPK RI.",
        introduction: "I was involved in developing the Knowledge Management System (KMS) as a centralized system for managing, storing, and retrieving institutional knowledge within BPK RI. The system is designed to handle large volumes of documents while maintaining security, access rights, and compliance with organizational standards.",
        purpose: "As a Fullstack Developer, I contributed to developing backend services for document management and search, creating a responsive and user-friendly interface, implementing context-based document search mechanisms, applying role-based access control settings, and supporting deployment and system scalability processes.",
        features: [
          "Centralized and structured document search",
          "Document management and versioning",
          "Role-based access control settings",
          "User collaboration in document management",
          "Usage and system activity reports"
        ],
        conclusion: "The system was successfully implemented and helped reduce document search time by up to 70%, as well as improving the effectiveness of knowledge sharing across work units."
      }
    }
  },
  {
    id: "2",
    slug: "sisappra",
    techStack: ["Next.js", "React Native", "Golang (Gin)", "PostgreSQL", "MinIO", "Redis", "Docker"],
    image: "/placeholder.svg",
    content: {
      id: {
        title: "SISAPPRA",
        client: "Satpol PP DKI Jakarta",
        shortDescription: "Sistem Informasi Super APP untuk operasional, administratif, dan alur kerja lapangan Satpol PP Jakarta.",
        introduction: "SISAPPRA (Sistem Informasi Satuan Polisi Pamong Praja) dirancang sebagai Super APP misi kritis — platform satu atap yang mengonsolidasikan alur kerja operasional, administratif, dan lapangan Satpol PP Jakarta. Fase 1 (2025) menghadirkan modul web dasar untuk keuangan dan inventaris serta aplikasi mobile pelaporan untuk petugas lapangan.",
        purpose: "Menyediakan platform tunggal dan skalabel yang menyederhanakan penganggaran, manajemen aset, pelaporan insiden, dan pengawasan lapangan — mempercepat pengambilan keputusan, mengurangi hambatan, dan meningkatkan pelayanan publik.",
        features: [
          "Arsitektur Super APP — titik masuk terpadu untuk semua domain bisnis dengan microservice modular",
          "Dashboard keuangan (Next.js) untuk penganggaran, alur persetujuan, dan laporan siap audit",
          "Inventaris & logistik: pengadaan, penugasan, pemeliharaan preventif, dan pelacakan siklus hidup",
          "Aplikasi mobile (React Native) untuk pelaporan lapangan cepat, capture offline-first, bukti media, dan persetujuan supervisor",
          "RBAC + JWT (dengan hook siap-SSO) untuk akses berbasis peran yang aman",
          "API Gateway (Golang) dan microservice untuk scaling independen dan isolasi kesalahan",
          "MinIO untuk penyimpanan file/media yang aman dan kompatibel S3",
          "Mesin workflow untuk persetujuan dan proses bisnis yang dapat dikonfigurasi",
          "Notifikasi real-time, log audit terstruktur, dan laporan operasional yang dapat diekspor (CSV/PDF)",
          "API siap integrasi untuk e-budgeting, GIS, dan layanan pihak ketiga"
        ],
        conclusion: "Fase 1 SISAPPRA meletakkan fondasi yang kokoh dan dapat diperluas untuk Super APP yang secara progresif akan mengambil alih lanskap proses bisnis lengkap Satpol PP DKI Jakarta."
      },
      en: {
        title: "SISAPPRA",
        client: "Satpol PP DKI Jakarta",
        shortDescription: "Super APP Information System for Jakarta Satpol PP's operational, administrative, and field workflows.",
        introduction: "SISAPPRA (Sistem Informasi Satuan Polisi Pamong Praja) is designed as a mission-critical Super APP — a one-stop platform that consolidates Satpol PP Jakarta's operational, administrative, and field workflows. Phase 1 (2025) delivers foundational web modules for finance and inventory plus a mobile reporting app for field officers.",
        purpose: "To provide a single, scalable platform that streamlines budgeting, asset management, incident reporting, and field supervision — accelerating decision-making, reducing friction, and improving public service delivery.",
        features: [
          "Super APP architecture — unified entrypoint for all business domains with modular microservices",
          "Finance dashboard (Next.js) for budgeting, approval flows, and audit-ready reports",
          "Inventory & logistics: procurement, assignment, preventive maintenance, and lifecycle tracking",
          "Mobile app (React Native) for fast field reporting, offline-first capture, media evidence, and supervisor approvals",
          "RBAC + JWT (with SSO-ready hooks) for secure, role-based access",
          "API Gateway (Golang) and microservices for independent scaling and fault isolation",
          "MinIO for S3-compatible secure file/media storage with policy controls",
          "Workflow engine for configurable approvals and business processes",
          "Real-time notifications, structured audit logs, and exportable operational reports (CSV/PDF)",
          "Integration-ready APIs for e-budgeting, GIS, and third-party services"
        ],
        conclusion: "Phase 1 of SISAPPRA lays a hardened, extensible foundation for a Super APP that will progressively take on the full business process landscape of Satpol PP DKI Jakarta."
      }
    }
  },
  {
    id: "3",
    slug: "rmi-nik-checker",
    techStack: ["Laravel", "React", "MySQL", "OCR Engine", "WhatsApp API"],
    image: "/placeholder.svg",
    liveDemo: "https://example.com",
    content: {
      id: {
        title: "RMI NIK Checker",
        client: "Rental Motor Indonesia",
        shortDescription: "Sistem verifikasi NIK terpusat dan pelacakan kasus untuk bisnis rental motor di Indonesia.",
        introduction: "RMI NIK Checker adalah sistem verifikasi NIK terpusat dan pelacakan kasus yang dibangun untuk Rental Motor Indonesia. Platform ini menghubungkan operator rental di seluruh wilayah, memungkinkan pemeriksaan instan, pelaporan terstruktur, dan tindakan lanjutan terkoordinasi untuk mengurangi risiko keuangan dan mempercepat resolusi.",
        purpose: "Memberikan bisnis rental cara yang cepat dan andal untuk memverifikasi identitas pelanggan, mencatat NIK bermasalah secara terpusat, dan melacak resolusi kasus di seluruh jaringan RMI nasional.",
        features: [
          "Registri NIK terpusat — database terpadu NIK bermasalah yang dilaporkan dapat diakses oleh Pusat, Korwil, dan Anggota",
          "OCR KTP dan scan kamera langsung untuk capture NIK yang cepat dan minim error",
          "Akses berbasis peran (Pusat, Regional, Anggota) dengan alur pelaporan terstruktur",
          "Modul pelacakan kasus dengan pembaruan status, upload bukti (foto/video), dan riwayat timeline",
          "Dashboard Monitoring Kasus Nasional untuk insight agregat dan deteksi hotspot",
          "Notifikasi instan dan berbagi kontak (link WhatsApp) untuk koordinasi cepat antar rental",
          "Akun demo & integrasi QR quick-scan untuk trial dan onboarding",
          "Dibangun dengan backend Laravel untuk keandalan dan integrasi mudah di komunitas RMI"
        ],
        conclusion: "RMI NIK Checker mengubah verifikasi manual yang terfragmentasi menjadi proses cepat yang dibagikan komunitas — mengurangi kerugian, meningkatkan kepercayaan antar rental, dan memungkinkan resolusi kasus terkoordinasi secara nasional."
      },
      en: {
        title: "RMI NIK Checker",
        client: "Rental Motor Indonesia",
        shortDescription: "Centralized NIK verification and case-tracking system for motorcycle rental businesses in Indonesia.",
        introduction: "RMI NIK Checker is a centralized NIK verification and case-tracking system built for Rental Motor Indonesia. The platform connects rental operators across regions, enabling instant checks, structured reporting, and coordinated follow-up actions to reduce financial risk and speed resolution.",
        purpose: "To give rental businesses a fast, reliable way to verify customer identity, record problematic NIKs centrally, and track case resolution across the national RMI network.",
        features: [
          "Centralized NIK registry — unified database of reported problematic NIKs accessible by Pusat, Korwil, and Anggota",
          "OCR KTP and live camera scan for fast, low-error NIK capture",
          "Role-based access (Central, Regional, Member) with structured reporting workflows",
          "Case tracking module with status updates, evidence upload (photos/videos), and timeline history",
          "National Case Monitoring dashboard for aggregated insights and hotspot detection",
          "Instant notifications and contact sharing (WhatsApp link) for rapid coordination between rentals",
          "Demo account & quick-scan QR integration for trial and onboarding",
          "Built with Laravel backend for reliability and easy integration across the RMI community"
        ],
        conclusion: "RMI NIK Checker transforms fragmented, manual verification into a fast, community-shared process — reducing losses, improving trust between rentals, and enabling coordinated case resolution nationwide."
      }
    }
  },
  {
    id: "4",
    slug: "helpdesk-ticketing",
    techStack: ["Next.js", "TypeScript", "Odoo", "PostgreSQL", "Tailwind CSS"],
    image: "/placeholder.svg",
    content: {
      id: {
        title: "Helpdesk Ticketing System",
        shortDescription: "Solusi helpdesk modern terintegrasi dengan ERP Odoo untuk dukungan IT dan pelacakan masalah yang efisien.",
        introduction: "Organisasi membutuhkan solusi helpdesk terpadu yang dapat terintegrasi dengan sistem ERP Odoo yang ada sambil menyediakan kemampuan ticketing modern.",
        purpose: "Menyediakan pengalaman dukungan IT yang mulus, mengurangi waktu resolusi tiket dan meningkatkan komunikasi antara tim support dan pengguna akhir.",
        features: [
          "Pembuatan dan penugasan tiket otomatis",
          "Manajemen antrian berbasis prioritas",
          "Pelacakan SLA dan alur eskalasi",
          "Integrasi ERP Odoo untuk data terpadu",
          "Survei kepuasan pelanggan dan pelaporan"
        ],
        conclusion: "Mengimplementasikan sistem helpdesk yang mengurangi waktu resolusi tiket rata-rata sebesar 45% dan meningkatkan skor kepuasan pelanggan secara signifikan."
      },
      en: {
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
        conclusion: "Implemented a helpdesk system that reduced average ticket resolution time by 45% and improved customer satisfaction scores significantly."
      }
    }
  },
  {
    id: "5",
    slug: "pemira-pnc",
    techStack: ["React", "Node.js", "MongoDB", "Express", "WebSocket"],
    image: "/placeholder.svg",
    content: {
      id: {
        title: "Sistem Pemilihan Raya (Pemira PNC)",
        shortDescription: "Sistem voting digital dan manajemen pemilu untuk pemilihan kampus yang transparan dan aman.",
        introduction: "PNC membutuhkan sistem voting digital yang aman dan transparan untuk pemilihan kampus mereka yang dapat menangani registrasi pemilih, voting, dan tabulasi hasil.",
        purpose: "Memodernisasi proses pemilihan kampus, memastikan transparansi, keamanan, dan aksesibilitas sambil mengurangi kesalahan penghitungan manual dan overhead administratif.",
        features: [
          "Registrasi dan verifikasi pemilih yang aman",
          "Voting real-time dengan enkripsi",
          "Penghitungan suara dan hasil otomatis",
          "Manajemen profil kandidat",
          "Audit trail dan laporan transparansi"
        ],
        conclusion: "Berhasil menyelenggarakan pemilihan kampus dengan akurasi suara 100% dan partisipasi pemilih yang meningkat signifikan melalui platform digital yang mudah diakses."
      },
      en: {
        title: "Pemira PNC (Campus Election System)",
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
        conclusion: "Successfully conducted campus elections with 100% vote accuracy and significantly improved voter participation through the accessible digital platform."
      }
    }
  },
  {
    id: "6",
    slug: "loan-management-system",
    techStack: ["React", "Golang", "PostgreSQL", "Redis", "Docker"],
    image: "/placeholder.svg",
    content: {
      id: {
        title: "Loan Management System",
        shortDescription: "Platform pemrosesan dan manajemen pinjaman komprehensif untuk institusi keuangan.",
        introduction: "Institusi keuangan membutuhkan sistem yang efisien untuk mengelola aplikasi pinjaman, persetujuan, pencairan, dan pelacakan pembayaran dengan penilaian risiko yang tepat.",
        purpose: "Mengotomatisasi dan mengoptimalkan proses manajemen siklus hidup pinjaman, mengurangi waktu pemrosesan dan meningkatkan manajemen risiko melalui keputusan berbasis data.",
        features: [
          "Aplikasi pinjaman dan verifikasi dokumen",
          "Credit scoring dan penilaian risiko",
          "Otomatisasi alur persetujuan",
          "Penjadwalan dan pelacakan pembayaran",
          "Manajemen tunggakan dan pelaporan"
        ],
        conclusion: "Mengimplementasikan sistem manajemen pinjaman yang mengurangi waktu pemrosesan pinjaman sebesar 60% dan meningkatkan visibilitas risiko portofolio untuk pengambilan keputusan yang lebih baik."
      },
      en: {
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
        conclusion: "Implemented a loan management system that reduced loan processing time by 60% and improved portfolio risk visibility for better decision making."
      }
    }
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};