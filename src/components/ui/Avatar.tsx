import avatar from '../../assets/avatar.png';
import { cn } from '../../lib/utils';

const Avatar = () => {
    return (
        <div className="flex items-center gap-2">
            <img 
                alt="avatar" 
                src={avatar} 
                className={cn(
                    "w-10 h-10 object-cover rounded-full hover:scale-110 cursor-pointer",
                    "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-in-out"
                )}
            />
        </div>
    )
}

export default Avatar