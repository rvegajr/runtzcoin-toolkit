import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.runtzswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://runtzswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.runtzswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.runtzswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://runtzswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.runtzswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.runtzswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.runtzswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/runtzswap",
      },
      {
        label: "Documentation",
        href: "https://docs.runtzswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@runtzswap-1/s/runtzswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.runtzswap.finance/help/faq#is-runtzswap-safe-has-runtzswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.runtzswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/runtzswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/runtzswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/RuntzSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/RuntzSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/RuntzSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/runtzswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/runtzswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/runtzswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/RuntzSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/RuntzswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/runtzswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/runtzswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/RuntzSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/RuntzSwapWhales",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/runtzswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/runtzswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/runtzswap/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/runtzswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
