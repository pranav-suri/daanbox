import { CardProps } from "@/components/Cards";
import React, { createContext, useContext, useState } from "react";

type CardContextType = {
  cardState: CardProps;
  setCardState: React.Dispatch<React.SetStateAction<CardProps>>;
};

// 1. Create the CardContext
export const CardContext = createContext<CardContextType | null>(null);

// 2. Create the CardProvider component
export const CardProvider = ({ children }) => {
  const [cardState, setCardState] = useState<CardProps>({
    imageUri: "",
    title: "",
    location: "",
    description: "",
  });

  return (
    <CardContext.Provider value={{ cardState, setCardState }}>{children}</CardContext.Provider>
  );
};

// 3. Custom hook for easier usage of the CardContext
export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
