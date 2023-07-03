"use client";

import "./Modal.css";

function Modal({ closeModal }) {
    const menuLink = ' hover:text-white text-white text-sm md:text-base font-bold  px-3 py-4'

    return (
        <div
            onClick={closeModal}
            className="fixed z-10 inset-0 overflow-y-auto"
            id="error-modal"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>
            
                <div className=" bg-gray-500 opacity-80  rounded-lg  min-w-full px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3  sm:mt-0 sm:ml-4 sm:text-left">
                                {/* Menú */}
                                <ul
                                    className={"flex flex-col text-center"}
                                >
                                    <li>
                                        <a
                                            href="/blog"
                                            className={menuLink}

                                        >
                                            Blog
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/experiencia"
                                            className={menuLink}
                                        >
                                            Experiencia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/chatPage"
                                            className={menuLink}
                                        > Chat </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Modal };

