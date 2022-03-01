/*  ./components/MobileNav.jsx     */
import Link from "next/link";
import { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Image from "next/image";

export const MobileNav = ({ title, items, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  MobileNav.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }
  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div id="dropdown">
        <div className="mobilenav mobile dd-wrapper">
          <div
            className="menuBar"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
          >
            <Image src="nav.svg" alt="Mobile Navbar" width="50%" height="50%" />
          </div>
          {open && (
            <transition name="slide-fade">
              <ul className="dd-list">
                {items.map((item) => (
                  <li className="switch" key={item.id}>
                    <Link href={"/" + item.directory}>
                      <a>{item.value}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </transition>
          )}
        </div>
      </div>
    </>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => MobileNav.handleClickOutside,
};

export default onClickOutside(MobileNav, clickOutsideConfig);
