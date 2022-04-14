
import About from "views/About.js";
import Demographics from "views/Demographics.js";
import Tumor from "views/Tumor.js";
import Team from "views/Team.js";
import Geography from "views/Map.js";

var routes = [
  {
    path: "/about",
    name: "About",
    icon: "nc-icon nc-bulb-63",
    component: About,
    layout: "/admin",
  },
  {
    path: "/by-tumor-info",
    name: "Tumor and Stage",
    icon: "nc-icon nc-chart-bar-32",
    component: Tumor,
    layout: "/admin",
  },
  {
    path: "/by-demographics",
    name: "Demographics",
    icon: "nc-icon nc-badge",
    component: Demographics,
    layout: "/admin",
  },
  {
    path: "/by-geography",
    name: "Geography",
    icon: "nc-icon nc-world-2",
    component: Geography,
    layout: "/admin",
  },
  {
    path: "/team",
    name: "Team",
    icon: "nc-icon nc-single-02",
    component: Team,
    layout: "/admin",
  },
  
];
export default routes;
