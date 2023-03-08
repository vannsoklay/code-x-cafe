import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};
export default function Container({ children }: Props) {
  return (
    <div className={`flex justify-center`}>
      <main className="max-auto container flex px-4 justify-between items-center h-full">
        {children}
      </main>
    </div>
  );
}
