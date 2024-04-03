import React, { createContext } from "react";
import { useFormContext } from "react-hook-form";

type DrawerVariant = "createPot";

type DrawerContextProps = {
  openDrawer: DrawerVariant | null;
  setOpenDrawer: (drawer: DrawerVariant) => void;
  closeDrawer: () => void;
};

export const DrawerContext = createContext<DrawerContextProps | null>(null);

export const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [openDrawer, setOpenDrawer] = React.useState<DrawerVariant | null>(
    null
  );
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
