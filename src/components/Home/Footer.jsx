/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-blueGray-800 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-300">
                Stay Connected
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-400">
                Follow us on social media for updates and news.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button
                  className="bg-blueGray-700 text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaTwitter />
                </button>
                <button
                  className="bg-blueGray-700 text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebookF />
                </button>
                <button
                  className="bg-blueGray-700 text-pink-400 shadow-lg font-normal h-10 w-10 items-center flex justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <SiInstagram />
                </button>
                <button
                  className="bg-blueGray-700 text-blueGray-800 shadow-lg font-normal h-10 w-10  flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <SlSocialLinkedin />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-400 text-sm font-semibold mb-2">
                    Quick Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-400 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-400 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-400 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-400 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-400 text-sm font-semibold mb-2">
                    Legal
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-400 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-400 hover:text-blueGray-200 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-400 font-semibold py-1">
                © <span id="get-current-year">2024</span> SharpeDeFi by{" "}
                <a
                  href="#"
                  className="text-blueGray-400 hover:text-gray-400"
                  target="_blank"
                >
                  Loki {" "}
                </a>
                with ❤️
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
