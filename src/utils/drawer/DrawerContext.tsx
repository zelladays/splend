import React, { createContext } from "react";
import { useFormContext } from "react-hook-form";

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
  const { reset } = useFormContext();

  const closeDrawer = React.useCallback(() => {
    setOpenDrawer(null);
    reset();
  }, [reset]);

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
