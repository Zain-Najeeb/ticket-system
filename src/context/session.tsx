import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HandleApiCall from '../handleApiCall';

interface Session {
    email: string;
    username: string;
}

interface SessionContextType {
    session: Session | null;
    setSession: (session: Session) => void;
    clearSession: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSessionState] = useState<Session | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const setSession = useCallback((session: Session) => {
        setSessionState(session);
        localStorage.setItem('user', JSON.stringify(session));
    }, []);

    const clearSession = useCallback(() => {
        setSessionState(null);
        localStorage.removeItem('user');
    }, []);

    useEffect(() => {
        const checkSession = async () => {
            const data = await HandleApiCall({ route: 'auth/check-session', method: 'GET' });
            if (data && data.body && !data.body.isAuthenticated) {
                clearSession();
                if (location.pathname !== '/login' && location.pathname !== '/signup') {
                    navigate('/login');
                } 
            } else if (data && data.body && data.body.isAuthenticated) {
                setSession({ email: data.body.email, username: data.body.username });
                if (location.pathname === '/login' || location.pathname === '/signup') {
                    navigate('/home')
                }
            }
        };

        checkSession();
    }, [clearSession, navigate, setSession, location]);

    return (
        <SessionContext.Provider value={{ session, setSession, clearSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};
