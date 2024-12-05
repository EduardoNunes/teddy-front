export default function SideBar() {
  return (
    <div className="h-full w-[260px] rounded-tr-[16px]">
      <div className="flex items-center justify-center h-32 w-full bg-colorbgopacity rounded-tr-[16px]">
        <img
          src="/public/images/logo.svg"
          alt="Logo"
          className="w-[100px] h-[48.98px]"
        />
      </div>
      <div className="flex flex-col h-[calc(100%-200px)] pt-12 pl-6 gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/public/images/home.svg"
            alt="Logo"
            className="w-[19.95px] h-[16.67px]"
          />
          <span className="font-geologica font-medium text-size16 text-textSideBar">
            Home
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/public/images/client.svg"
            alt="Logo"
            className="w-[19.95px] h-[16.67px]"
          />
          <span className="font-geologica font-medium text-size16 text-textSideBar">
            Clientes
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/public/images/product.svg"
            alt="Logo"
            className="w-[19.95px] h-[16.67px]"
          />
          <span className="font-geologica font-medium text-size16 text-textSideBar">
            Produtos
          </span>
        </div>
      </div>
      <div
        className="h-[72px] bg-fullwhite"
        style={{ boxShadow: "-2px -5px 10px rgba(0, 0, 0, .1)" }}
      />
    </div>
  );
}
