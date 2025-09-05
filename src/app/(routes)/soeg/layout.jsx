import NavigationBar from "@/components/ui/navigation-bar";

export default function SoegLayout({ children }) {
  return (
    <>
      {children}
      <NavigationBar/>
    </>
  );
}
