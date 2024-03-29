import React, { createContext } from "react";

type Drawers = "createPot";

type DrawerContextProps = {
  openDrawer: Drawers | null;
  setOpenDrawer: (drawer: Drawers) => void;
  closeDrawer: () => void;
};

export const DrawerContext = createContext<DrawerContextProps | null>(null);

export const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [openDrawer, setOpenDrawer] = React.useState<Drawers | null>(null);

  const closeDrawer = () => setOpenDrawer(null);

  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const value = React.useContext(DrawerContext);

  if (!value) {
    throw new Error(
      "Missing DrawerContextProvider: Please wrap in this provider."
    );
  }

  return value;
};
