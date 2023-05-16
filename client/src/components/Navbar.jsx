import { Link } from "react-router-dom"

function Navbar() {
    return (
    <div className="bg-zinc-700 flex justify-between px-10 p-2">
        <Link to="/" className="px-10 text-white font-bold">React MySQL</Link>
        <ul className="flex gap-5">
            <li>
                <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
                <Link to="/new"className="text-white">Create task</Link>
            </li>
        </ul>
    </div>
    )
}

export default Navbar