import { ItemsSidebar } from "./ItemsSidebar";

export const Sidebar = () => {
  return (
    <>
      {/* Logo y titulo */}
      <div className="text-center p-8">
        <h1 className="uppercase font-bold tracking-[4px]">SIGEN</h1>
      </div>

      {/* Items del sidebar */}
      <div className="flex flex-col justify-between h-[600px]">
        <ItemsSidebar />
      </div>
    </>
  );
};
