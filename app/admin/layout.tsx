import Nav from "../components/AdminNav";
import "@/styles/admin.css";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex flex-row">
      <Nav />
      {children}
    </main>
  )
}