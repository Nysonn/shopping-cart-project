export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-700 text-white text-center py-6">
      <p>&copy; {currentYear} Fresh Harvest. All rights reserved.</p>
    </footer>
  );
}