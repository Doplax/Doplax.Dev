"use client";

function ModalMenu({ closeModal, menuItem }) {
  const menuLink = "text-white text-lg font-bold ";
  const menuLi = "my-3";

  return (
    <div
      onClick={closeModal}
      className="fixed z-20 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 text-center  sm:p-0">
        {/* Fondo */}
        <div
          className="fixed inset-0 bg-black opacity-20 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className=" bg-black  backdrop-blur-md  rounded-lg  min-w-full  pt-5 pb-60 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="mt-3 px-10">
            <ul className={"flex flex-col text-left"}>

              {menuItem.map((element, index) => (
                <li className={menuLi} key={index}>
                  <a href={element.route} className={menuLink}>
                    {element.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalMenu };
