import { HeaderContainer } from "./styles";

import pomodoroLogo from '../../assets/pomodoro-technique_12238205.png'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={pomodoroLogo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/History" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}