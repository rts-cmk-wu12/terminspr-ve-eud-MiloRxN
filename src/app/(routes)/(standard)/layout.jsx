import Header from "@/components/ui/header";

export default function StandardLayout({ children }) {
  return (
    <>
      <Header />
      <main className="px-8">
        {children}
      </main>
    </>
  );
}