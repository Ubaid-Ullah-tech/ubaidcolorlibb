import { Typography } from "@material-tailwind/react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
  return (
    <footer className="relative w-full bg-blue-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-2xl font-semibold mb-5 opacity-80">Support</h1>
            <p className="mb-2 text-blue-400 underline">
              <a href="/about" className="hover:text-blue-200 transition-colors duration-200">About</a>
            </p>
            <p className="mb-2 text-blue-400 underline">
              <a href="/contact" className="hover:text-blue-200 transition-colors duration-200">Contact</a>
            </p>
            <p className="text-blue-400 underline">
              <a href="https://github.com/Ubaid-Ullah-tech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">Github</a>
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-semibold opacity-80 mb-5">My Projects Links</h1>
            <div className="text-blue-400 underline">
              <p className="mb-2">
                <a href="https://ubaid-blogs.vercel.app/" target="_blank" className="hover:text-blue-200 transition-colors duration-200">Ubaid Blogs Website</a>
              </p>
              <p className="mb-2">
                <a href="https://ubaid-book-store-jqp6.vercel.app" target="_blank" className="hover:text-blue-200 transition-colors duration-200">Ubaid BookStore Website</a>
              </p>
              <p className="mb-2">
                <a href="https://ubaid-text-utils.vercel.app" target="_blank" className="hover:text-blue-200 transition-colors duration-200">Ubaid TextUtils Website</a>
              </p>
              <p>
                <a href="https://ubaid-todo-app.vercel.app" target="_blank" className="hover:text-blue-200 transition-colors duration-200">Ubaid TodoApp Website</a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <hr className="border-blue-700" />
          <h1 className="text-3xl font-semibold opacity-80">Contact Info</h1>
          <p className="text-xl font-medium">Address:</p>
          <p className="text-lg text-gray-300">District Buner, Village & Post Office Totalai</p>
          <p className="text-xl font-medium">Phone:</p>
          <p className="text-lg text-gray-300">(+92) 3493673578</p>
          <p className="text-xl font-medium">Email:</p>
          <p className="text-lg text-gray-300">ubaidullah.uoh@gmail.com</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between pb-16 pt-10">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0 text-gray-400"
          >
            &copy; {currentYear} <a href="/" className="hover:underline text-blue-300">Hepta Colorlibs</a>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
              <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
