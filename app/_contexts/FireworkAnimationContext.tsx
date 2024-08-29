"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

export enum AnimationStage {
  DORMANT = "DORMANT",
  RISING = "RISING",
  EXPLODING = "EXPLODING",
  FADING = "FADING",
}
type Action = { type: "CYCLE_ANIMATION_STAGE" };
type FireworkAnimationContext = {
  animationStage: AnimationStage;
  dispatch: React.Dispatch<Action>;
};

const FireworkAnimationContext = createContext<FireworkAnimationContext | null>(
  null
);

type Props = {
  children: React.ReactNode;
};

const reducer = (animationStage: AnimationStage, action: Action) => {
  switch (action.type) {
    case "CYCLE_ANIMATION_STAGE": {
      switch (animationStage) {
        case AnimationStage.DORMANT:
          return AnimationStage.RISING;
        case AnimationStage.RISING:
          return AnimationStage.EXPLODING;
        case AnimationStage.EXPLODING:
          return AnimationStage.FADING;
        case AnimationStage.FADING:
          return AnimationStage.DORMANT;
        default:
          return AnimationStage.DORMANT;
      }
    }
  }
};

export const FireworkAnimationContextProvider = ({ children }: Props) => {
  const [animationStage, dispatch] = useReducer(
    reducer,
    AnimationStage.DORMANT
  );

  useEffect(() => {
    const interval = setInterval(
      () => dispatch({ type: "CYCLE_ANIMATION_STAGE" }),
      3000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <FireworkAnimationContext.Provider value={{ animationStage, dispatch }}>
      {children}
    </FireworkAnimationContext.Provider>
  );
};

export const useFireworkAnimationContext = () => {
  const context = useContext(FireworkAnimationContext);
  if (!context) {
    throw new Error(
      "FireworkAnimationContext must be used within a FireworkAnimationContextProvider"
    );
  }
  return context;
};
