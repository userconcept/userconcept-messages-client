import {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    PropsWithChildren
} from 'react';
import Cookies from 'js-cookie';

import { TOKEN } from '../data/constants.data.ts';

type TypeContext = {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<TypeContext>({
    isAuth: false,
    setIsAuth: () => {}
});

function AuthProvider({ children }: PropsWithChildren<unknown>) {
    const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN));

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
