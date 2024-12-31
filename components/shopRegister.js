import userImage from "@/public/user-image.jpg";
import ShopRegisterForm from "./shopRegForm";

async function ShopRegister() {
  return (
    <section className="grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0">
      <div
        style={{
          backgroundImage: `url(${userImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-144px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
      ></div>
      <div className="flex items-center justify-center">
        <ShopRegisterForm />
      </div>
    </section>
  );
}

export default ShopRegister;
