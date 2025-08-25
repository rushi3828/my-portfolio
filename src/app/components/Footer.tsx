import { FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "" }}
      className="bg-red-100 text-black py-4"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Phone */}
        <div>
          <h4 className="font-bold text-lg mb-2">Phone</h4>
          <p className="text-gray-800">+91 838-102-1295</p>
        </div>

        {/* Email */}
        <div>
          <h4 className="font-bold text-lg mb-2">Email</h4>
          <p className="text-gray-800">Rushisp156@gmail.com</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-lg mb-2">Follow Me</h4>
          <div className="flex space-x-4">
            <a
              href="www.linkedin.com/in/rushikesh-sanap-384a7025a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-400 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left space-y-0">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600 hover:underline cursor-pointer">
              Rushikesh Sanap
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-1">
            Built with <span className="font-medium">React</span>,{" "}
            <span className="font-medium">TailwindCSS</span>, and{" "}
            <FaHeart className="text-pink-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
