
// IconComponent.js
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconLibraries = {
  ...FaIcons,
  ...SiIcons
};

const IconComponent = ({ iconName, size = 24, color = "#667eea", ...rest }) => {
  const Icon = iconLibraries[iconName] || FaIcons.FaLink;
  return <Icon size={size} color={color} {...rest} />;
};

export default IconComponent;
