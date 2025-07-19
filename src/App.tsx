import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">

        {/* Sidebar */}
        <div className={`hidden md:flex flex-col bg-gray-800 text-white h-screen transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"}`}>
          <div className="p-4 text-xl font-bold">{sidebarOpen ? "Dashboard" : ""}</div>
          <nav className="p-4 space-y-2">
            <button className="hover:bg-gray-700 p-2 rounded w-full text-left">{sidebarOpen ? "🏠 Home" : "🏠"}</button>
            <button className="hover:bg-gray-700 p-2 rounded w-full text-left">{sidebarOpen ? "📊 Analytics" : "📊"}</button>
            <button className="hover:bg-gray-700 p-2 rounded w-full text-left">{sidebarOpen ? "⚙️ Settings" : "⚙️"}</button>
          </nav>
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">☰</button>
            <h1 className="text-xl font-semibold">My Dashboard</h1>
            <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </header>

          {/* Content */}
          <main className="p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome 👋</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Revenue" value="$10,000" />
              <Card title="Users" value="1,234" />
              <Card title="Orders" value="432" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Simple Card Component
function Card({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}
