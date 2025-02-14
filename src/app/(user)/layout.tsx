import Sidebar from '@/components/common/wrapper/Sidebar';
import TopBar from '@/components/common/wrapper/Topbar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <div className='main-content flex flex-col'>
        <TopBar />
        {children}
      </div>
    </div>
  );
}
