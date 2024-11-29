import dynamic from 'next/dynamic';

//icons education
const FaHtml5 = dynamic(() => import("react-icons/fa").then(mod => mod.FaHtml5));
const FaCss3Alt = dynamic(() => import("react-icons/fa").then(mod => mod.FaCss3Alt));
const FaSass = dynamic(() => import("react-icons/fa").then(mod => mod.FaSass));
const FaReact = dynamic(() => import("react-icons/fa").then(mod => mod.FaReact));
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => mod.FaGithub));
const FaGitSquare = dynamic(() => import("react-icons/fa").then(mod => mod.FaGitSquare));
const FaFigma = dynamic(() => import("react-icons/fa").then(mod => mod.FaFigma));
const FaNpm = dynamic(() => import("react-icons/fa").then(mod => mod.FaNpm));
const FaNode = dynamic(() => import("react-icons/fa").then(mod => mod.FaNode));
const FaWordpress = dynamic(() => import("react-icons/fa").then(mod => mod.FaWordpress));
const FaElementor = dynamic(() => import("react-icons/fa6").then(mod => mod.FaElementor));

const SiJavascript = dynamic(() => import("react-icons/si").then(mod => mod.SiJavascript));
const SiChakraui = dynamic(() => import("react-icons/si").then(mod => mod.SiChakraui));
const SiPowershell = dynamic(() => import("react-icons/si").then(mod => mod.SiPowershell));
const SiWindows = dynamic(() => import("react-icons/si").then(mod => mod.SiWindows));
const SiPostman = dynamic(() => import("react-icons/si").then(mod => mod.SiPostman));
const SiTailwindcss = dynamic(() => import("react-icons/si").then(mod => mod.SiTailwindcss));
const SiNetlify = dynamic(() => import("react-icons/si").then(mod => mod.SiNetlify));

const VscVscode = dynamic(() => import("react-icons/vsc").then(mod => mod.VscVscode));
const PiDevicesLight = dynamic(() => import("react-icons/pi").then(mod => mod.PiDevicesLight));
const RiNextjsFill = dynamic(() => import("react-icons/ri").then(mod => mod.RiNextjsFill));


export const Icons = {
    html5: FaHtml5,
    css: FaCss3Alt,
    sass: FaSass,
    react: FaReact,
    github: FaGithub,
    git: FaGitSquare,
    figma: FaFigma,
    npm: FaNpm,
    node: FaNode,
    wordpress: FaWordpress,
    elementor: FaElementor,
    javascript: SiJavascript,
    chakra: SiChakraui,
    powershell: SiPowershell,
    windows: SiWindows,
    postman: SiPostman,
    tailwind: SiTailwindcss,
    netlify: SiNetlify,
    vscode: VscVscode,
    rwd: PiDevicesLight,
    next: RiNextjsFill
};
