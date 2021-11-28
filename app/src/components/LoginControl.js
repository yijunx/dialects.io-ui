import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import LoginMenu from "./LoginMenu";
import { useTransition, animated } from "react-spring";

function LoginControl() {
  const [showLoginMenu, setLoginMenu] = useState(false);

  const maskTransitions = useTransition(showLoginMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showLoginMenu, {
    from: { position: "absolute", opacity: 0, transform: "translateX(0%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(0%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        {/* <FontAwesomeIcon
          icon={faSignInAlt}
          onClick={() => setLoginMenu(!showLoginMenu)}
        /> */}
        <button
          className="border text-sm text-gray-500 bg-white p-1 rounded"
          onClick={() => setLoginMenu(!showLoginMenu)}
        >
          登陆
        </button>
        {maskTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="bg-black-alpha-50 fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setLoginMenu(false)}
              ></animated.div>
            )
        )}
        {menuTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed bg-green-100 top-10 right-0 w-60 z-50 shadow p-3 m-2 rounded-md"
              >
                <LoginMenu
                // closeMenu={() => setLoginMenu(false)}
                // setUser={setUser}
                ></LoginMenu>
              </animated.div>
            )
        )}
      </span>
    </nav>
  );
}

export default LoginControl;
