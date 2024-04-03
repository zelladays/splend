import { ReactComponent as AddPot } from "./AddPot.svg";
import { ReactComponent as Cog } from "./Cog.svg";
import { ReactComponent as Profile } from "./Profile.svg";
import { ReactComponent as Dashboard } from "./Dashboard.svg";
import { ReactComponent as History } from "./History.svg";
import { ReactComponent as Groups } from "./Groups.svg";
import { ReactComponent as Pot } from "./Pot.svg";
import { ReactComponent as Collection } from "./Collection.svg";
import { ReactComponent as Cross } from "./Cross.svg";
import { ReactComponent as Money } from "./Money.svg";

export const Icons = {
  "add-pot": AddPot,
  cog: Cog,
  profile: Profile,
  cross: Cross,
  dashboard: Dashboard,
  history: History,
  groups: Groups,
  pot: Pot,
  collection: Collection,
  money: Money,
};

export const SvgIcon = ({
  icon,
  iconColor,
  size,
}: {
  icon: keyof typeof Icons;
  iconColor?: string;
  size?: number;
}) => {
  const Icon = Icons[icon];

  const sizing = size ? { width: size, height: size } : {};

  return <Icon color={iconColor} {...sizing} />;
};
