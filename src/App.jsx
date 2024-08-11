import { ThemeProvider } from '@/components/theme-provider';
import Home from '@/layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyProvider } from './components/contextApi/MyContext';

function App() {
    return (
        <MyProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="Ayush-Theme">
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </MyProvider>
    );
}

export default App;
