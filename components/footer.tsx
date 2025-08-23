export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Paulo Cardim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
