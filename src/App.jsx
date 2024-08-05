import { ThemeProvider } from '@/components/theme-provider';
import Home from '@/layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="Ayush-Theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
