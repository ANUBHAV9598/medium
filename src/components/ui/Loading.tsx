import { HashLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tl from-transparent via-amber-500/50 to-[#f99c10]/30">
            <HashLoader color="#f99c10" />
        </div>
    )
}

export default Loading
