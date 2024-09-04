"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

export enum AnimationStage {
  DORMANT = "DORMANT",
  RISING = "RISING",
  EXPLODING = "EXPLODING",
}
type Action = { type: "CYCLE_ANIMATION_STAGE"; delayIsComplete: boolean };
type FireworkAnimationContext = {
  animationStage: AnimationStage;
  dispatch: React.Dispatch<Action>;
};

const FireworkAnimationContext = createContext<FireworkAnimationContext | null>(
  null
);

type Props = {
  children: React.ReactNode;
  delay: number;
};

const reducer = (animationStage: AnimationStage, action: Action) => {
  if (!action.delayIsComplete) {
    return AnimationStage.DORMANT;
  }

  switch (action.type) {
    case "CYCLE_ANIMATION_STAGE": {
      switch (animationStage) {
        case AnimationStage.DORMANT:
          return AnimationStage.RISING;
        case AnimationStage.RISING:
          return AnimationStage.EXPLODING;
        case AnimationStage.EXPLODING:
          return AnimationStage.DORMANT;
        default:
          return AnimationStage.DORMANT;
      }
    }
  }
};

export const FireworkAnimationContextProvider = ({
  children,
  delay,
}: Props) => {
  const [animationStage, dispatch] = useReducer(
    reducer,
    AnimationStage.DORMANT
  );
  const [delayIsComplete, setDelayIsComplete] = useState(false);

  useEffect(() => {
    let delayInterval: NodeJS.Timeout;
    if (!delayIsComplete) {
      delayInterval = setTimeout(() => setDelayIsComplete(true), delay);
      return;
    }

    const intervalTime =
      animationStage === AnimationStage.DORMANT ? 14000 : 3000;

    const interval = setInterval(() => {
      dispatch({ type: "CYCLE_ANIMATION_STAGE", delayIsComplete });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      clearInterval(delayInterval);
    };
  }, [delay, delayIsComplete, animationStage]);

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
