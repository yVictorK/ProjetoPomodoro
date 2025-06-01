import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { History } from './Pages/History';
import { DefaultLayout } from './Layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/History" element={<History />} />
            </Route>
        </Routes>
    );
}