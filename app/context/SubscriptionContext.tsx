'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';

interface SelectedPlan {
  name: string;
  price: number;
}

interface SubscriptionState {
  enrollment_id: string | null;
  zip: string | null;
  selectedPlan: SelectedPlan | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  address_one: string | null;
  address_two: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
}

type SubscriptionAction =
  | { type: 'SET_ENROLLMENT'; payload: { enrollment_id: string; zip: string } }
  | { type: 'SELECT_PLAN'; payload: SelectedPlan }
  | { type: 'SET_USER_INFO'; payload: { first_name: string; last_name: string; email: string; address_one?: string; address_two?: string; city?: string; state?: string; zip_code?: string } }
  | { type: 'RESET' };

const initialState: SubscriptionState = {
  enrollment_id: null,
  zip: null,
  selectedPlan: null,
  first_name: null,
  last_name: null,
  email: null,
  address_one: null,
  address_two: null,
  city: null,
  state: null,
  zip_code: null,
};

const SubscriptionContext = createContext<{
  state: SubscriptionState;
  dispatch: React.Dispatch<SubscriptionAction>;
} | null>(null);

function subscriptionReducer(state: SubscriptionState, action: SubscriptionAction): SubscriptionState {
  switch (action.type) {
    case 'SET_ENROLLMENT':
      return {
        ...state,
        enrollment_id: action.payload.enrollment_id,
        zip: action.payload.zip,
      };
    case 'SELECT_PLAN':
      return {
        ...state,
        selectedPlan: action.payload,
      };
    case 'SET_USER_INFO':
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        address_one: action.payload.address_one || state.address_one,
        address_two: action.payload.address_two || state.address_two,
        city: action.payload.city || state.city,
        state: action.payload.state || state.state,
        zip_code: action.payload.zip_code || state.zip_code
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(subscriptionReducer, initialState);

  return (
    <SubscriptionContext.Provider value={{ state, dispatch }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}