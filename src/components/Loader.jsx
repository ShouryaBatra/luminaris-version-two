import React from "react";
import { Spinner } from "@/components/ui/spinner";

const Loader = ({ loadingText = "Loading..." }) => {
  return (
    <div className="flex items-center gap-3">
      <Spinner>{loadingText}</Spinner>
    </div>
  );
};

export default Loader;
