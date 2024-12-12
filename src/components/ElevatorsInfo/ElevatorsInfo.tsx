import { FC } from "react";

export const ElevatorsInfo: FC = () => (
  <div>
    This app is an a simple example of elevators control unit.<br />
    Simplified controls corresponds only to external, "floors" buttons, not the buttons inside elevators itself.<br />
    Basically it just picks most suitable elevator to minimize their paths.<br />
    You can control to some extent quantity of floors, elevators, and buildings:<br />
    <b>Floors:</b> 3-16 <i>(individually for each building)</i><br />
    <b>Elevators:</b> 1-3 <i>(individually for each building)</i><br />
    <b>Buildings:</b> 1-3 <i>(added by "+" button)</i>
  </div>
);