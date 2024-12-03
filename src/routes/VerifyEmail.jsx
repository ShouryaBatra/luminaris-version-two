import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <div className="flex-col">
      <h2 className="flex justify-center">
        Check email for verification link!
      </h2>
      <Link className="flex justify-center" to="/login">
        <Button>Log in</Button>
      </Link>
    </div>
  );
}

export default VerifyEmail;
