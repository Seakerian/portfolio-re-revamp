import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import pfp from "../../public/images/pfp.jpg";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section id="contact" className="m-20 scroll-m-20">
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl mb-6">
          <ChatBubbleIcon fontSize="large" /> Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src={pfp}
              alt="profile picture"
              height={200}
              width={200}
              className="rounded-full shadow-lg border border-violet-500"
            />
          </div>
          <div className="space-y-4 text-lg rounded-lg ">
            <p className="flex items-center gap-2">
              <EmailIcon fontSize="medium" /> marvindom1998@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <LocalPhoneIcon fontSize="medium" /> +57 3003528632
            </p>
            <Link
              className="flex items-center gap-2"
              href="https://www.linkedin.com/in/marvin-dominguez-camacho-39ba95203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="medium" /> LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
