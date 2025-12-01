import {
  // FiUser,
  FiGift,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
  FiLock,
} from "react-icons/fi";

import { MdOutlineStoreMallDirectory, MdAlternateEmail } from "react-icons/md";

import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import {
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const pages = [
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
    icon: HiOutlineDocumentText,
  },
];

const menu = [
  {
    title: "Inicio",
    to: "/",
  },
  {
    title: "Actividades",
    to: "/posts",
  },
  {
    title: "Serviços",
    to: "/services/",
  },
  {
    title: "Locais Turísticos",
    to: "/tours",
  },
  {
    title: "Sobre nós",
    to: "#",
    children: [
      {
        title: "História",
        to: "/extras/historia-da-camarza",
      },
      {
        title: "Composição",
        to: "/staffs",
      },
      {
        title: "Assembleia",
        to: "/assemblys",
      },
      {
        title: "Legislações",
        to: "/orgs/laws",
      },
      {
        title: "Relatórios Financeiros",
        to: "/orgs/report",
      },
      {
        title: "Orçamentos",
        to: "/orgs/budgets",
      },
    ],
  },
  {
    title: "Contactos",
    to: "#",
    children: [
      {
        title: "Contacte nos",
        to: "/#contact",
      },
      {
        title: "Contactos de Emergência",
        to: "/#emergency",
      },
      {
        title: "Postos de Abastecimentos",
        to: "/#station",
      },
    ],
  },
];

const services = {
  a: [
    {
      title: "Biblioteca",
      href: "#",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  b: [
    {
      title: "Atestado",
      href: "#",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};

const months = {
  0: "Jan",
  1: "Fev",
  2: "Mar",
  3: "Abr",
  4: "Mai",
  5: "Jun",
  6: "Jul",
  7: "Ago",
  8: "Set",
  9: "Out",
  10: "Nov",
  11: "Dez",
};
const listEmergencyContacts = [
  {
    title: "Bombeiros ",
    contact: "222 21 62 ",
    image: "/assets/images/policia.png",
  },
  {
    title: "C. de Saúde Mé-Zóchi",
    contact: "227 15 55",
    image: "/assets/images/saude.png",
  },
  {
    title: "C. de Saúde Nacional",
    contact: "222 42 12",
    image: "/assets/images/saude.png",
  },
  {
    title: "Secretarias Trindade",
    contact: "227 15 43",
    image: "/assets/images/saude.png",
  },
  {
    title: "Secretaria Madalena",
    contact: "227 10 40",
    image: "/assets/images/saude.png",
  },
  {
    title: "Secretarias Bombom",
    contact: "905 74 05",
    image: "/assets/images/saude.png",
  },
  {
    title: "Polícia",
    contact: "981 25 02",
    image: "/assets/images/saude.png",
  },
  {
    title: "Violência Doméstica",
    contact: "150",
    image: "/assets/images/saude.png",
  },
  {
    title: "Intervenção Rápida",
    contact: "115 111",
    image: "/assets/images/saude.png",
  },
  {
    title: "Ordem Pública",
    contact: "222 22 22",
    image: "/assets/images/saude.png",
  },
  {
    title: "Rádio Nacional",
    contact: "222 12 96/222 13 26",
    image: "/assets/images/bombeiros.png",
  },

  {
    title: "TVS",
    contact: "222 10 41/222 14 93",
    image: "/assets/images/saude.png",
  },
  // Bombeiros Ambulância C. de Saúde Secretarias Madalena bombom Trindade
  // polícia bombas de combústível
];

const budgets = [
  {
    year: 2025,
    budgets: [
      {
        title: "Estrada de cruzeiro",
        file: "/assets/orgs/laws/autarquias.pdf",
      },
      {
        title: "Centro Recreativo de Milagrosa",
        file: "/assets/orgs/laws/autarquias.pdf",
      },
    ],
  },
];

const reports = [
  {
    year: 2025,
    reports: [
      {
        title: "Relatorio da conta anual",
        file: "/assets/orgs/laws/autarquias.pdf",
      },
      {
        title: "Campanha mom betu",
        file: "/assets/orgs/laws/autarquias.pdf",
      },
    ],
  },
];
const laws = [
  {
    title: "Lei de Autarquias Locais",
    file: "/assets/orgs/laws/autarquias.pdf",
  },
  {
    title: "Lei de tal tal tal",
    file: "/assets/orgs/laws/autarquias.pdf",
  },
];

const posts = [
  {
    title: "Bombom",
    contact: "227 10 73",
  },
  {
    title: "Trindade",
    contact: "227 10 72",
  },
  {
    title: "Madalena",
    contact: "227 10 70",
  },
  {
    title: "Cruzeiro",
    contact: "227 10 50",
  },
  {
    title: "Piedade",
    contact: "227 10 40",
  },
];
const documentPrices = [
  {
    title: "Atestados",
    titles: [
      {
        titles: [
          {
            title: "Atestado de Emprego",
            price: 140,
          },
          {
            title: "Atestado de Residência",
            price: 140,
          },
        ],
        requiriments: "Bilhete de Identidade, Atestado Médico",
      },
      {
        titles: [
          {
            title: "Atestado de Emprego 2",
            price: 140,
          },
          {
            title: "Atestado de Residência 3",
            price: 140,
          },
        ],
        requiriments: "Bilhete de Identidade, Atestado Médico 2",
      },
    ],
  },
  {
    title: "Autorizações",
    titles: [
      {
        titles: [
          {
            title: "Atestado de Emprego",
            price: 140,
          },
          {
            title: "Atestado de Residência",
            price: 140,
          },
        ],
        requiriments: "Bilhete de Identidade, Atestado Médico",
      },
    ],
  },
  {
    title: "Licenças",
    titles: [
      {
        titles: [
          {
            title: "Atestado de Emprego",
            price: 140,
          },
          {
            title: "Atestado de Residência",
            price: 140,
          },
        ],
        requiriments: "Bilhete de Identidade, Atestado Médico",
      },
    ],
  },
];

const userSidebar = [
  {
    title: "Dashboard",
    href: "/user/dashboard",
    icon: IoGridOutline,
  },
  {
    title: "My Orders",
    href: "/user/my-orders",
    icon: IoListOutline,
  },
  {
    title: "Update Profile",
    href: "/user/update-profile",
    icon: IoSettingsOutline,
  },
  {
    title: "Change Email",
    href: "/user/update-email",
    icon: MdAlternateEmail,
  },
  {
    title: "Change Password",
    href: "/user/change-password",
    icon: FiLock,
  },
  {
    title: "My Own Store",
    href: "/shop/dashboard",
    icon: MdOutlineStoreMallDirectory,
  },
];

const sliderData = [
  {
    id: 1,
    title: "The Best Quality Products Guaranteed!",
    info: "Dramatically facilitate effective total linkage for go forward processes...",
    url: "/search?Category=biscuits--cakes",
    image: "/slider/slider-1.jpg",
  },
  {
    id: 2,
    title: "Best Different Type of Grocery Store",
    info: "Quickly aggregate empowered networks after emerging products...",
    url: "/search?Category=fish--meat",
    image: "/slider/slider-2.jpg",
  },
  {
    id: 3,
    title: "Quality Freshness Guaranteed!",
    info: "Intrinsicly fashion performance based products rather than accurate benefits...",
    url: "/search?category=fresh-vegetable",
    image: "/slider/slider-3.jpg",
  },
];

const ctaCardData = [
  {
    id: 1,
    title: "Taste of",
    subTitle: "Fresh & Natural",
    image: "/cta/cta-bg-1.jpg",
    url: "/search?category=fresh-vegetable",
  },
  {
    id: 2,
    title: "Taste of",
    subTitle: "Fish & Meat",
    image: "/cta/cta-bg-2.jpg",
    url: "/search?Category=fish--meat",
  },
  {
    id: 3,
    title: "Taste of",
    subTitle: "Bread & Bakery",
    image: "/cta/cta-bg-3.jpg",
    url: "/search?Category=biscuits--cakes",
  },
];

const featurePromo = [
  {
    id: 1,
    title: "Free Shipping",
    info: "From £100.00",
    icon: FiTruck,
  },
  {
    id: 2,
    title: "Support 24/7",
    info: "At Anytime",
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: "Secure Payment",
    info: "Totally Safe",
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: "Latest Offer",
    info: "Upto 20% Off",
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: "Email Us",
    info: "Interactively grow empowered for process-centric total linkage.",
    icon: FiMail,
    contact: "m.intouch@ilocalstore.com",
    className: "bg-emerald-100",
  },
  {
    id: 2,
    title: "Call Us",
    info: "Distinctively disseminate focused solutions clicks-and-mortar ministate.",
    icon: FiPhoneCall,
    contact: "07506597518",
    className: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Location",
    info: "38 Wychinwood Road, Luton, LU2 1RE",
    icon: FiMapPin,
    contact: "+44 7506 597 518",
    className: "bg-indigo-100",
  },
];
const location = {
  title: "Location",
  address: "38 Wychinwood Road, Luton, LU2 1RE",
  icon: FiMapPin,
  email: "m.intouch@malanza.co.uk",
  contact: "+44 7506 597 518",
  className: "bg-indigo-100",
};
export {
  months,
  pages,
  userSidebar,
  sliderData,
  ctaCardData,
  featurePromo,
  contactData,
  location,
  listEmergencyContacts,
  documentPrices,
  budgets,
  reports,
  laws,
  posts,
  menu,
  services,
};
