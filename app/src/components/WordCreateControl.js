import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WordCreateMenu from "./WordCreateMenu";
import { useTransition, animated } from "react-spring";

function WordCreateControl({ currentWordQuery }) {
  const [showMenu, setMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0, transform: "translateX(0%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(0%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => setMenu(!showMenu)}
          className="m-1 pt-1"
        />
        {maskTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setMenu(false)}
              ></animated.div>
            )
        )}
        {menuTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed bg-green-100 top-10 left-0 md:w-60 z-50 shadow-2xl p-3 m-2 rounded-md"
              >
                <WordCreateMenu
                  currentWordQuery={currentWordQuery}
                  closeMenu={() => setMenu(false)}
                  // setUser={setUser}
                ></WordCreateMenu>
              </animated.div>
            )
        )}
      </span>
    </nav>
  );
}

export default WordCreateControl;
