"use client";

function ModalMenu({ closeModal, menuItem }) {
  const menuLink = "text-white text-lg font-bold ";
  const menuLi = "my-3";

  return (
    // Fondo
    <div
      onClick={closeModal}
      className="fixed z-20 inset-0 overflow-y-auto  "
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen text-center sm:p-0">
        
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity "
          aria-hidden="true"
        ></div>
        
        {/* Caja menu */}
        <div className=" backdrop-blur-xl backdrop-saturate-150 bg-black/70  rounded-lg  min-w-full  pt-5 pb-60 overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <ul className={"flex flex-col text-center"}>
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
  );
}

export { ModalMenu };
