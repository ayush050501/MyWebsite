import { CardWithForm } from '../App/NewCard';
import Header from '../components/Header';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
function Home() {
    const width = window.innerWidth;
    return (
        <>
            <ResizablePanelGroup direction="horizontal" className={`rounded-lg border max-w-${width}}`}>
                <ResizablePanel maxSize={15}>
                    <div className="flex h-screen items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel maxSize={8} minSize={8}>
                            <Header/>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel className="p-6">
                            <CardWithForm/>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    );
}

export default Home;
