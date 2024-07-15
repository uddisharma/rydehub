"use client";
import React from "react";
import { RecoilRoot } from "recoil";

const AtomLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <RecoilRoot>{children}</RecoilRoot>
    </div>
  );
};

export default AtomLayout;
