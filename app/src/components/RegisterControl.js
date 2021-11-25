import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import RegisterMenu from "./RegisterMenu";
import { useTransition, animated } from "react-spring";

function RegisterControl() {
  const [showRegisterMenu, setRegisterMenu] = useState(false);

  const maskTransitions = useTransition(showRegisterMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showRegisterMenu, {
    from: { position: "absolute", opacity: 0, transform: "translateX(0%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(0%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        <button
          className="border text-sm text-gray-500 bg-white p-1 rounded mr-2"
          onClick={() => setRegisterMenu(!showRegisterMenu)}
        >
          注册
        </button>
        {maskTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="bg-black-alpha-50 fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setRegisterMenu(false)}
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
                <RegisterMenu
                  closeMenu={() => setRegisterMenu(false)}
                ></RegisterMenu>
              </animated.div>
            )
        )}
      </span>
    </nav>
  );
}

export default RegisterControl;
