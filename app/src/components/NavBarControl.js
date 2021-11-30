import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import { useTransition, animated } from "react-spring";

function NavBarControl() {
  const [showNavBar, setShowNavBar] = useState(false);

  const maskTransitions = useTransition(showNavBar, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showNavBar, {
    from: { position: "absolute", opacity: 0, transform: "translateX(0%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(0%)" },
  });

  return (
    <nav>
      <span className="text-xl mr-2">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowNavBar(!showNavBar)}
        />
        {maskTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setShowNavBar(false)}
              ></animated.div>
            )
        )}
        {menuTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed bg-green-100 top-10 left-0 md:w-1/2 z-50 shadow-2xl p-3 m-2 rounded-md"
              >
                <NavBar closeMenu={() => setShowNavBar(false)}></NavBar>
              </animated.div>
            )
        )}
      </span>
    </nav>
  );
}

export default NavBarControl;
