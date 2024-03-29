import { ReactComponent as AddPot } from "./AddPot.svg";
import { ReactComponent as Cog } from "./Cog.svg";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Dashboard } from "./Dashboard.svg";
import { ReactComponent as History } from "./History.svg";
import { ReactComponent as Groups } from "./Groups.svg";
import { ReactComponent as Pot } from "./Pot.svg";
import { ReactComponent as Collection } from "./Collection.svg";

export const Icons = {
  "add-pot": AddPot,
  cog: Cog,
  profile: Profile,
  dashboard: Dashboard,
  history: History,
  groups: Groups,
  pot: Pot,
  collection: Collection,
};

export const SvgIcon = ({
  icon,
  color,
}: {
  icon: keyof typeof Icons;
  color?: string;
}) => {
  const Icon = Icons[icon];

  return <Icon color={color} />;
};
