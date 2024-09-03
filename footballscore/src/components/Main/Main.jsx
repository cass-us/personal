import corporate from "./assets/A1.jpg";
import marketing from "./assets/A1.jpg";
import operations from "./assets/A1.jpg";
import product from "./assets/A1.jpg";

const Main = () => {
  return (
    <section className="bg-black h-[600px] opacity-90 p-8 ">
      <div className="text-center mb-10">
        <h1 className="text-white text-xl font-semibold">FS-Direct Organisational Structure</h1>
        <p className="text-gray-400 p-4">
          As of 17 Jul 2024, Futurescore will operate under 32 business functions, separated into four categories;
          Corporate, Marketing, Operations, and Product Development.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="text-center">
          <h2 className="text-white mb-2">Corporate</h2>
          <img src={corporate} alt="Corporate" className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md" />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Marketing</h2>
          <img src={marketing} alt="Marketing" className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md" />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Operations</h2>
          <img src={operations} alt="Operations" className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md" />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Product Dev</h2>
          <img src={product} alt="Product Development" className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Main;
