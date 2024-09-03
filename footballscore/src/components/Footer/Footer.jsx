const Footer = () => {
    return (
      <footer className="grid grid-cols-3 gap-4 bg-black opacity-90 p-6">
        <section>
          <h2 className="text-red-600 underline font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li className="text-white"><a href="/" className="hover:underline">X</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Facebook</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Whatsapp</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Linkedin</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Instagram</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Facebook</a></li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-red-600 underline font-semibold mb-4">Contacts</h2>
          <ul className="space-y-2">
            <li className="text-white"><a href="/" className="hover:underline">X</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Facebook</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Whatsapp</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Linkedin</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Instagram</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Facebook</a></li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-red-600 underline font-semibold mb-4">Career</h2>
          <ul className="space-y-2">
            <li className="text-white"><a href="/" className="hover:underline">Job Opportunities</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Internships</a></li>
            <li className="text-white"><a href="/" className="hover:underline">Volunteer</a></li>
          </ul>
        </section>
  
        <hr className="col-span-3 my-4 border-gray-600" />
      </footer>
    );
  }
  
  export default Footer;
  