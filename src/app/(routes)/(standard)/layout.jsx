import Header from "@/components/ui/header";
import NavigationBar from "@/components/ui/navigation-bar";

export default function StandardLayout({ children }) {
  return (
    <>
      <Header />
      <main className="px-8 pb-30">
        {children}
      </main>
      <NavigationBar/>
    </>
  );
}