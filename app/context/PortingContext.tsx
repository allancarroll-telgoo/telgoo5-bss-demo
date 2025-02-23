import React, { createContext, useContext, useState, useEffect } from 'react';

export type PortDetails = {
  phoneNumber: string;
  carrier: string;
  accountNumber: string;
  accountPassword: string;
  pin: string;
};

export type PortingContextType = {
  portIn: boolean;
  portDetails?: PortDetails;
  setPortIn: (value: boolean) => void;
  setPortDetails: (details?: PortDetails) => void;
};

const PortingContext = createContext<PortingContextType | undefined>(undefined);

export const PortingProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [portIn, setPortIn] = useState<boolean>(false);
  const [portDetails, setPortDetails] = useState<PortDetails | undefined>(undefined);

  // Rehydrate state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPortIn = localStorage.getItem('port_in');
      const storedPortDetails = localStorage.getItem('port_details');

      if (storedPortIn) {
        setPortIn(storedPortIn === 'true');
      }

      if (storedPortDetails) {
        try {
          setPortDetails(JSON.parse(storedPortDetails));
        } catch (error) {
          console.error('Error parsing port details from localStorage', error);
        }
      }
    }
  }, []);

  // Persist state changes to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('port_in', portIn.toString());
      if (portDetails) {
        localStorage.setItem('port_details', JSON.stringify(portDetails));
      } else {
        localStorage.removeItem('port_details');
      }
    }
  }, [portIn, portDetails]);

  return (
    <PortingContext.Provider value={{ portIn, portDetails, setPortIn, setPortDetails }}>
      {children}
    </PortingContext.Provider>
  );
};

export const usePortingContext = () => {
  const context = useContext(PortingContext);
  if (!context) {
    throw new Error('usePortingContext must be used within a PortingProvider');
  }
  return context;
};