/* app/context/AppContext.tsx */
'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface SelectedPlan {
  id: string;
  name: string;
  price: number;
}

interface AppState {
  // Subscription data
  enrollment_id: string | null;
  selectedPlan: SelectedPlan | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  address_one: string | null;
  address_two: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  customer_id: string | null;
}

type AppAction =
  | { type: 'SET_ENROLLMENT'; payload: { enrollment_id: string; zip_code: string } }
  | { type: 'SELECT_PLAN'; payload: SelectedPlan }
  | { type: 'SET_USER_INFO'; payload: {
      first_name: string;
      last_name: string;
      email: string;
      address_one?: string;
      address_two?: string;
      city?: string;
      state?: string;
      zip_code?: string;
      customer_id?: string } }
  | { type: 'RESET' };

const initialState: AppState = {
  // Subscription initial state
  enrollment_id: null,
  selectedPlan: null,
  first_name: null,
  last_name: null,
  email: null,
  address_one: null,
  address_two: null,
  city: null,
  state: null,
  zip_code: null,
  customer_id: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_ENROLLMENT':
      return {
        ...state,
        enrollment_id: action.payload.enrollment_id,
        zip_code: action.payload.zip_code,
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
        zip_code: action.payload.zip_code || state.zip_code,
        customer_id: action.payload.customer_id || state.customer_id,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Rehydrate state from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('app_state');
      if (stored) {
        try {
          const parsedState = JSON.parse(stored);

          // Restore enrollment data if exists
          if (parsedState.enrollment_id && parsedState.zip_code) {
            dispatch({
              type: 'SET_ENROLLMENT',
              payload: {
                enrollment_id: parsedState.enrollment_id,
                zip_code: parsedState.zip_code
              }
            });
          }

          // Restore plan data if exists
          if (parsedState.selectedPlan) {
            dispatch({
              type: 'SELECT_PLAN',
              payload: parsedState.selectedPlan
            });
          }

          // Restore user info if exists
          if (parsedState.first_name) {
            dispatch({
              type: 'SET_USER_INFO',
              payload: {
                first_name: parsedState.first_name,
                last_name: parsedState.last_name,
                email: parsedState.email,
                address_one: parsedState.address_one,
                address_two: parsedState.address_two,
                city: parsedState.city,
                state: parsedState.state,
                zip_code: parsedState.zip_code,
                customer_id: parsedState.customer_id
              }
            });
          }
        } catch (error) {
          console.error('Error parsing app state from localStorage', error);
        }
      }
    }
  }, []);

  // Persist state changes to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_state', JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}