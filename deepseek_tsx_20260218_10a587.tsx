export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
      <nav className="space-y-2">
        <a href="/" className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Home</a>
        <a href="/ai" className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">AI Module</a>
      </nav>
    </aside>
  );
}