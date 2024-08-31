import { Routes, Route } from 'react-router-dom';

// import { useAuth } from './hooks/useAuth.ts';

import Layout from './components/Layout/Layout.tsx';
import Home from './components/Home/Home.tsx';
import Users from './components/Users/Users.tsx';
import Contact from './components/Contact/Contact.tsx';
import Profile from './components/Profile/Profile.tsx';
import Login from './components/Login/Login.tsx';
import SignUp from './components/SignUp/SignUp.tsx';
import NotFound from './components/NotFound/NotFound.tsx';

function App() {
    // const { isAuth } = useAuth();

    // console.log('App isAuth:', isAuth);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="*" element={<NotFound text="Not found" />} />
            </Route>
        </Routes>
    );
}

export default App;
