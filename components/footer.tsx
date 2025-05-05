export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-8 text-center dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">© {currentYear} Josue Villalona. Crafted with Flow.</p>
    </footer>
  )
}
