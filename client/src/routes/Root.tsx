import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/globals/Header";

export default function Root() {
  return (
    <Fragment>
      <div className="relative">
        <div className="fixed w-full bg-white">
          <Header />
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}
