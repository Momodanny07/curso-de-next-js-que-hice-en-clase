import {useRouter} from 'next/navigation'

function Navbar() {
    const router = useRouter()
 return (
 <header>
    <div>
        <button 
        onClick={() => router.push("") }
        >
            Add Task
        </button>
    </div>
 </header>
    )
}

export default Navbar
