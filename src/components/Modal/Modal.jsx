"use client";

import "./Modal.css";

function Modal({ closeModal }) {
    const menuLink = 'text-white text-lg font-bold '
    const menuLi = 'my-3'
    
    return (
        <div
            onClick={closeModal}
            className="fixed z-10 inset-0 overflow-y-auto"
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
                                {/* Menú */}
                                <ul
                                    className={"flex flex-col text-left"}
                                >
                                    <li className={menuLi}>
                                        <a
                                            href="/blog"
                                            className={menuLink}

                                        >
                                            Blog
                                        </a>
                                    </li>

                                    <li className={menuLi}>
                                        <a
                                            href="/experiencia"
                                            className={menuLink}
                                        >
                                            Experiencia
                                        </a>
                                    </li>
                                    <li className={menuLi}>
                                        <a href="/chatPage"
                                            className={menuLink}
                                        > Chat </a>
                                    </li>
                                </ul>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export { Modal };

