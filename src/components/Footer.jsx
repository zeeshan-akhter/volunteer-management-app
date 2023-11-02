import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";
export default function Footer() {
  return (
    <>
      <div>
        <NavLink to="https://github.com/zeeshan-akhter/volunteer-management-app" target="_blank">
          <GitHubIcon />
        </NavLink>
        <NavLink to="https://replit.com/@zeeshanakhter/volunteermanagementapi" target="_blank">
          <StorageIcon />
        </NavLink>
      </div>
    </>
  );
}
