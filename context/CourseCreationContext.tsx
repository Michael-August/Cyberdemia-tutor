'use client';

import { createContext, ReactNode, useContext, useReducer } from 'react';

type CreationStepState = {
  currentStep: number;
  steps: { id: number; name: string; completed: boolean }[];
};

const initialState: CreationStepState = {
  currentStep: 0,
  steps: [
    { id: 0, name: 'Course Overview', completed: false },
    { id: 1, name: 'Course Curriculum', completed: false },
    { id: 2, name: 'Resources', completed: false },
    { id: 3, name: 'Certification', completed: false },
    { id: 4, name: 'Pricing', completed: false },
    { id: 5, name: 'Finish', completed: false },
  ],
};

const NEXT_STEP = 'NEXT_STEP';
const PREVIOUS_STEP = 'PREVIOUS_STEP';
const SET_STEP = 'SET_STEP';
const COMPLETE_STEP = 'COMPLETE_STEP';

const StepContext = createContext<
  { state: CreationStepState; dispatch: React.Dispatch<any> } | undefined
>(undefined);

// Define the reducer
const stepReducer = (
  state: CreationStepState,
  action: { type: any; payload: number },
) => {
  switch (action.type) {
    case NEXT_STEP:
      if (state.currentStep < state.steps.length - 1) {
        return {
          ...state,
          steps: state.steps.map((step) =>
            step.id === state.currentStep ? { ...step, completed: true } : step,
          ),
          currentStep: state.currentStep + 1,
        };
      }
      return state;
    case PREVIOUS_STEP:
      if (state.currentStep > 0) {
        return {
          ...state,
          currentStep: state.currentStep - 1,
        };
      }
      return state;
    case SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case COMPLETE_STEP:
      return {
        ...state,
        steps: state.steps.map((step) =>
          step.id === action.payload ? { ...step, completed: true } : step,
        ),
      };
    default:
      return state;
  }
};

// Create the provider component
export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  const value = { state, dispatch };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

// Custom hook to use the StepContext
export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};
