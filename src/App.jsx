import { ThemeProvider } from '@/components/theme-provider';
import Home from './layout/Home';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="Ayush-Theme">
            <Home />
        </ThemeProvider>
    );
}

export default App;
