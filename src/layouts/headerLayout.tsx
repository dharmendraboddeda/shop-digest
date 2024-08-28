import React from "react";
import type { ReactNode, ComponentType } from "react";
import { Header } from "@/components/Header";

const HeaderLayout = <P extends object>(Component: ComponentType<P>) => {
  const wrappedComponent: React.FC<P> = (props) => {
    return (
      <div>
        <Header />
        <div className="pt-20">
          <Component {...props} />
        </div>
      </div>
    );
  };
  return wrappedComponent;
};
export default HeaderLayout;
