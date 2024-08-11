import { CardWithForm } from '../pages/NewCard';
import Header from '../components/Header';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import SideNav from '@/components/sideNav';
function Home() {
    const width = window.innerWidth;
    return (
        <>
            <ResizablePanelGroup direction="horizontal" className={`rounded-lg border max-w-${width}}`}>
                <ResizablePanel maxSize={30} className="min-w-[150px] hidden sm:block">
                    <SideNav />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div className="min-h-[60px] max-h-[60px]">
                        <Header />
                    </div>
                    <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
                        <main className="p-6">
                            <CardWithForm />
                        </main>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    );
}

export default Home;
