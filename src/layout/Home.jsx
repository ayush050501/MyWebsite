import { CardWithForm } from '../pages/NewCard';
import Header from '../components/Header';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
function Home() {
    const width = window.innerWidth;
    return (
        <>
            <ResizablePanelGroup direction="horizontal" className={`rounded-lg border max-w-${width}}`}>
                <ResizablePanel maxSize={15} className="min-w-[60px]">
                    <div className="flex h-screen items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div className="min-h-[60px] max-h-[60px]">
                        <Header />
                    </div>
                    <main className='p-6 max-h-[clac(100vh-60px)] overflow-y-auto' >
                        <CardWithForm />
                    </main>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    );
}

export default Home;
