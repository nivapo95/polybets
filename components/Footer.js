import Link from 'next/link';

export default function Footer() {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Learn', href: '/learn' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ];

  return (
    <footer className="bg-[#1a2332] border-t border-[#2d3a4d] mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-3 md:mb-0">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500">
            © {new Date().getFullYear()} Polymarket Clone
          </div>
        </div>
      </div>
    </footer>
  );
}

