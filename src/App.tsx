import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
            <div className="flex gap-8">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
                         alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo}
                         className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all animate-[spin_20s_linear_infinite]"
                         alt="React logo"/>
                </a>
            </div>
            <h1 className="text-5xl font-bold">Vite + React</h1>
            <div className="p-8">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                    count is {count}
                </button>
                <p className="mt-4">
                    Edit src/App.tsx and save to test HMR
                </p>
            </div>
            <p className="text-gray-500">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
