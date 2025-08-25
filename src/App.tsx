import { useState } from "react";

// ✅ Define the props for Card component
type CardProps = {
  title: string;
  value: string;
};

// ✅ Card component
function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-extrabold mt-2">{value}</p>
    </div>
  );
}

// ✅ Main App component
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Sidebar */}
        <div
          className={`hidden md:flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white h-screen transition-all duration-300 shadow-lg ${
            sidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <div className="p-4 flex items-center justify-center text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md mx-2 my-4 shadow-md">
            {sidebarOpen ? "Dashboard" : "📊"}
          </div>
          <nav className="p-4 space-y-2">
            <button className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 w-full text-left font-medium">
              <span className="text-lg">🏠</span> {sidebarOpen && "Home"}
            </button>
            <button className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 w-full text-left font-medium">
              <span className="text-lg">📊</span> {sidebarOpen && "Analytics"}
            </button>
            <button className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 w-full text-left font-medium">
              <span className="text-lg">⚙️</span> {sidebarOpen && "Settings"}
            </button>
          </nav>
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white shadow-md">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-2xl"
            >
              ☰
            </button>
            <h1 className="text-xl font-semibold">My Dashboard</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </header>

          {/* Content */}
          <main className="p-6">
            <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 animate-pulse">
              Welcome 👋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Revenue" value="$10,000" />
              <Card title="Users" value="1,234" />
              <Card title="Orders" value="432" />
            </div>
            {/* Extra Content */}
            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>🛒 New order placed</span><span className="text-gray-500">2m ago</span></li>
                  <li className="flex justify-between"><span>👤 New user registered</span><span className="text-gray-500">10m ago</span></li>
                  <li className="flex justify-between"><span>💰 Payment received</span><span className="text-gray-500">1h ago</span></li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your sales are up by <span className="text-green-500 font-bold">15%</span> compared to last week.
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </section>

            {/* More Sections */}
            <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md lg:col-span-2">
                <h3 className="text-lg font-semibold mb-3">Sales Overview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Monthly sales figures showing performance trends.
                </p>
                <div className="mt-4 h-40 flex items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed rounded-lg">
                  📊 Chart Placeholder
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span>🔔</span> Server reboot scheduled</li>
                  <li className="flex items-center gap-2"><span>✅</span> Backup completed successfully</li>
                  <li className="flex items-center gap-2"><span>⚠️</span> High memory usage detected</li>
                </ul>
              </div>
            </section>

            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Tasks</h3>
                <ul className="space-y-2 text-sm">
                  <li><input type="checkbox" className="mr-2" /> Update dashboard layout</li>
                  <li><input type="checkbox" className="mr-2" /> Review pull requests</li>
                  <li><input type="checkbox" className="mr-2" /> Prepare weekly report</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Team Members</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>👩🏻‍💻 Alice</span><span className="text-green-500">Online</span></li>
                  <li className="flex justify-between"><span>👨🏽‍💻 Bob</span><span className="text-yellow-500">Idle</span></li>
                  <li className="flex justify-between"><span>👩🏼‍💻 Clara</span><span className="text-red-500">Offline</span></li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}