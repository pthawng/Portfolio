import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:contact@example.com",
    icon: Mail,
  },
];

export const DATA = {
  en: {
    hero: {
      role: "Full Stack Developer",
      about: "I'm a Full Stack Developer with a passion for building high-performance, visually impressive web applications. With expertise in Next.js, TypeScript, and modern backend technologies, I create seamless digital experiences.",
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
          title: "Modern E-commerce",
          description: "A complete e-commerce platform built with Next.js, Stripe, and Prisma. Features include real-time inventory, secure checkout, and an admin dashboard.",
          tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
          link: "#",
          github: "#",
        },
        {
          title: "Project Alpha",
          description: "A collaborative task management tool featuring real-time updates, team workspaces, and intuitive drag-and-drop interfaces.",
          tags: ["React", "Socket.io", "Node.js", "Redis"],
          link: "#",
          github: "#",
        },
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's talk.",
      text: "I'm currently open for new opportunities...",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Message",
        btn: "Send Message",
        success: "Message sent!"
      },
      info: {
        email: "contact@rayparadis.dev",
        phone: "+84 123 456 789",
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
      role: "Lập trình viên Full Stack",
      about: "Tôi là một Lập trình viên Full Stack với niềm đam mê xây dựng các ứng dụng web hiệu năng cao và ấn tượng. Với chuyên môn về Next.js, TypeScript và các công nghệ backend hiện đại, tôi tạo ra các trải nghiệm kỹ thuật số liền mạch.",
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
          title: "Modern E-commerce",
          description: "Một nền tảng thương mại điện tử hoàn chỉnh được xây dựng với Next.js, Stripe và Prisma. Bao gồm quản lý kho thời gian thực, thanh toán an toàn và bảng điều khiển quản trị.",
          tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
          link: "#",
          github: "#",
        },
        {
          title: "Project Alpha",
          description: "Công cụ quản lý tác vụ cộng tác với cập nhật thời gian thực, không gian làm việc nhóm và giao diện kéo thả trực quan.",
          tags: ["React", "Socket.io", "Node.js", "Redis"],
          link: "#",
          github: "#",
        },
      ]
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Bạn có dự án muốn hợp tác? Hãy trò chuyện nhé.",
      text: "Tôi hiện đang tìm kiếm cơ hội mới...",
      form: {
        name: "Tên của bạn",
        email: "Email của bạn",
        message: "Tin nhắn",
        btn: "Gửi tin nhắn",
        success: "Đã gửi tin nhắn!"
      },
      info: {
        email: "contact@rayparadis.dev",
        phone: "+84 123 456 789",
        address: "Ti Ho Chi Minh, Viet Nam"
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
    items: ["TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "Next.js 16",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "RESTful API",
    ],
  },
  {
    category: "Concepts",
    items: ["OOP", "MVC", "System Design", "JWT", "OAuth2"],
  },
];

// Fallback INFO for components not fully migrated yet if needed
export const INFO = {
  name: "Lê Phước Thắng",
  email: "contact@example.com"
}
