import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-blue-700 fixed w-full top-0 shadow-md z-10 px-5 text-white">
      <div className="flex justify-evenly items-center">
        <Image
          src="/YnnovaRent_transparent-.png"
          width={160}
          height={16}
          className="h-26"
          alt="YnnovaRent-logo"
        />
        <ul className="flex space-x-5">
          <li>
            <a href="" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Feature
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              File Management
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
