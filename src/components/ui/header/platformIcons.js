import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiThreads, SiOpensearch } from "react-icons/si"; // <-- Social Icons has a Threads icon
import { Search } from "lucide-react";


export const PLATFORM_DETAILS = {
  linkedin: { icon: FaLinkedinIn, color: "#0A66C2", name: "LinkedIn" },
  instagram: { icon: FaInstagram, color: "#E4405F", name: "Instagram" },
  facebook: { icon: FaFacebookF, color: "#1877F2", name: "Facebook" },
  threads: { icon: SiThreads, color: "#000000", name: "Threads" },
  tiktok: { icon: FaTiktok, color: "#010101", name: "TikTok" },
  twitter: { icon: FaTwitter, color: "#1DA1F2", name: "Twitter (X)" },
  youtube: { icon: FaYoutube, color: "#FF0000", name: "YouTube" },
  competitor: { icon: SiOpensearch, color: "#6366F1", name: "Competitor" },
};

