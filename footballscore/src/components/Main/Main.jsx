
import corporate from "./assets/A1.jpg";
import marketing from "./assets/A1.jpg";
import operations from "./assets/A1.jpg";
import product from "./assets/A1.jpg";
import uj from "./assets/uj-logo-1.jpg";
import uk from "./assets/ukzn-logo.png";
import wits from "./assets/wits-logo-1.png";

const Main = () => {
  return (
    <section className="bg-black h-full opacity-90 p-2">
      <div className="text-center mb-10">
        <h1 className="text-white text-xl font-semibold">
          FS-Direct Organisational Structure
        </h1>
        <p className="text-gray-400 p-4">
          As of 17 Jul 2024, Futurescore will operate under 32 business
          functions, separated into four categories; Corporate, Marketing,
          Operations, and Product Development.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="text-center">
          <h2 className="text-white mb-2">Corporate</h2>
          <img
            src={corporate}
            alt="Corporate"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Marketing</h2>
          <img
            src={marketing}
            alt="Marketing"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Operations</h2>
          <img
            src={operations}
            alt="Operations"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Product Dev</h2>
          <img
            src={product}
            alt="Product Development"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
      </div>
      <section className="mt-2">
        <div className="items-center text-center justify-center">
          <h2 className="text-white font-semibold text-center">
            Search by University
          </h2>
          <div className="flex gap-2 p-2">
            <div className="animate-fade-out-in-sequence delay-[0s]">
              
              
              <img src={uj} className="w-32" alt="UJ Logo" />
            </div>
            <div className="animate-fade-out-in-sequence delay-[4s]">
            
            
              <img src={uk} className="w-32" alt="UKZN Logo" />
            </div>
            <div className="animate-fade-out-in-sequence delay-[8s]">
            
            
              <img src={wits} className="w-32" alt="WITS Logo" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Main;
