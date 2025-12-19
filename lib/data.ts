import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/pthawng",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/l%C3%AA-th%E1%BA%AFng-99b4a8255/", // Keeping existing valid link
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=lephuocthang207@gmail.com",
    icon: Mail,
  },
];

export const DATA = {
  en: {
    hero: {
      role: "Software Engineering",
      about: "A final-year Software Engineering student with a solid foundation in Backend Development and hands-on experience in building scalable E-commerce and Transit systems. Proficient in Nest.JS, Node.js, database optimization, and integrating complex payment services.",
      cta: "Contact Me",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "The technologies I use to build amazing things",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of my recent work",
      list: [
        {
          title: "Ray Paradis (Jewelry E-Commerce)",
          description: "A comprehensive B2C e-commerce platform for high-end jewelry. Features microservices-ready architecture, secure authentication, and complex payment/logistics integrations.",
          tags: ["NestJS", "Next.js 16", "PostgreSQL", "Redis", "Docker"],
          link: "#",
          github: "https://github.com/pthawng/E-Commerce/tree/ecomerce",
        },
        {
          title: "HCM Metro Transit System",
          description: "An urban transit platform supporting route search and ticket booking via REST APIs. Includes a centralized Admin Dashboard and QR code digital ticketing.",
          tags: ["Node.js", "Express", "MongoDB", "OAuth 2.0"],
          link: "#",
          github: "https://github.com/pthawng/Metro",
        },
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's talk.",
      text: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Message",
        btn: "Send Message",
        success: "Message sent!",
        error: "Failed to send message. Please try again."
      },
      info: {
        email: "lephuocthang207@gmail.com",
        phone: "+84 333 126 429",
        address: "Ho Chi Minh City, Vietnam"
      }
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to Top"
    }
  },
  vi: {
    hero: {
      role: "Kỹ sư Phần mềm",
      about: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm với nền tảng vững chắc về Backend Development và kinh nghiệm xây dựng các hệ thống Thương mại điện tử và Vận tải quy mô lớn. Thành thạo Nest.JS, Node.js, tối ưu hóa cơ sở dữ liệu và tích hợp thanh toán.",
      cta: "Liên hệ tôi",
    },
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
    },
    skills: {
      title: "Kỹ năng chuyên môn",
      subtitle: "Các công nghệ tôi sử dụng để xây dựng sản phẩm",
    },
    projects: {
      title: "Dự án tiêu biểu",
      subtitle: "Một số dự án gần đây của tôi",
      list: [
        {
          title: "Ray Paradis (Thương mại điện tử)",
          description: "Nền tảng thương mại điện tử B2C toàn diện cho trang sức cao cấp. Kiến trúc sẵn sàng cho microservices, xác thực bảo mật và tích hợp thanh toán/vận chuyển phức tạp.",
          tags: ["NestJS", "Next.js 16", "PostgreSQL", "Redis", "Docker"],
          link: "#",
          github: "https://github.com/pthawng/E-Commerce",
        },
        {
          title: "Hệ thống Metro HCM",
          description: "Nền tảng vận tải đô thị hỗ trợ tìm kiếm lộ trình và đặt vé qua REST API. Bao gồm Dashboard quản trị tập trung và vé điện tử mã QR.",
          tags: ["Node.js", "Express", "MongoDB", "OAuth 2.0"],
          link: "#",
          github: "https://github.com/pthawng/Metro",
        },
      ]
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Bạn có dự án muốn hợp tác? Hãy trò chuyện nhé.",
      text: "Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác.",
      form: {
        name: "Tên của bạn",
        email: "Email của bạn",
        message: "Tin nhắn",
        btn: "Gửi tin nhắn",
        success: "Đã gửi tin nhắn!",
        error: "Gửi tin nhắn thất bại. Vui lòng thử lại."
      },
      info: {
        email: "lephuocthang207@gmail.com",
        phone: "+84 333 126 429",
        address: "TP. Hồ Chí Minh, Việt Nam"
      }
    },
    footer: {
      rights: "Đã đăng ký bản quyền.",
      backToTop: "Về đầu trang"
    }
  },
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "HTML5", "CSS4/SCSS", "Data Structures"],
  },
  {
    category: "Frontend",
    items: [
      "Next.js 16",
      "React.js",
      "Vite",
      "TailwindCSS",
      "Zustand",
      "React Query",
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "Express",
      "RESTful APIs",
      "Passport.js",
      "OAuth2",
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma v7",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "Design Patterns", "RBAC/ABAC", "OWASP", "Microservices"],
  },
  {
    category: "Certificates",
    items: ["Postman API Expert", "SQL Basics", "Quality Assurance"],
  },
];

// Fallback INFO for components not fully migrated yet if needed
export const INFO = {
  name: "Lê Phước Thắng",
  email: "lephuocthang207@gmail.com"
}
