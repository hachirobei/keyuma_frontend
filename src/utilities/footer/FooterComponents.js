import React from 'react'

export default function FooterComponents() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-blue border-t text-gray-200 shadow dark:bg-gray-800 dark:border-gray-600 flex items-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">
                <a href="https://hafizoddin.netlify.app/" className="hover:underline">© {year} Hafizoddin™</a>. All Rights Reserved.
            </span>
        </footer>
    )
}
