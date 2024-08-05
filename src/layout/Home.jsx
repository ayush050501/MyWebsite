import { Button } from '@/components/ui/button';
import ToggleMode from '../components/mode-toggle';
import ThemeSwitcher from '../components/themes';
import { CardWithForm } from '../App/NewCard';
function Home() {
    
    return (
        <>
            <div className="text-3xl font-bold italic underline">
                Hello world!
                <Button>sdadsa</Button>
                <ToggleMode/>
                <ThemeSwitcher/>
                <CardWithForm/>
            </div>
        </>
    );
}

export default Home;