import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header({
  isAuthenticated,
  handleLogOut,
  withBtn = false,
}) {
  return (
    <div className="flex flex-row-reverse w-full justify-between items-center">
      <h1 className="absolute  left-1/2 transform -translate-x-1/2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
        Luminaris
      </h1>
      {withBtn && (
        <>
          {isAuthenticated ? (
            <Button onClick={handleLogOut}>Log out</Button>
          ) : (
            <Link to="/login">
              <Button>Log in</Button>
            </Link>
          )}
        </>
      )}
    </div>
  );
}
