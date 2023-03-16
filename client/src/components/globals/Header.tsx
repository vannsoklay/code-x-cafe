import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../languages/lang";
import React from "react";

const isActive = ({ isActive }: any) => `link ${isActive ? "active" : ""}`;
const Header = () => {
  const { i18n, t } = useTranslation();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <header className="bg-gray-50 h-20 flex justify-center">
      <nav className="max-auto container flex px-4 justify-between items-center h-full">
        <ul className="flex items-center space-x-4">
          <li className="font-semibold text-coffee-2 text-xl">
            <Link to="/">Code x Cafe</Link>
          </li>
        </ul>
        <ul>
          <div>
            <input
              type="text"
              className="lg:w-96 lg:h-12 outline-none pl-3 rounded-sm bg-coffee-2/[.0] text-coffee-2 placeholder-coffee-2 border border-coffee-2"
              placeholder="Search....."
            />
          </div>
        </ul>
        <ul className="flex space-x-5 items-center">
          <li>
            <select
              className="py-2 bg-transparent text-coffee-2 cursor-pointer"
              defaultValue={i18n.language}
              onChange={onChange}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </li>
          <li>
            <Link to="/about-me">
              <div className="h-12 w-12 cursor-pointer rounded-full bg-coffee-2 relative">
                <label className="flex justify-center items-center h-full">
                  <img
                    src={"assets/soklay.jpg"}
                    alt="soklay.png"
                    className="h-full w-full object-cover rounded-full cursor-pointer"
                  />
                </label>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
