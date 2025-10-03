type InputProps = {
    className: string,
    placeholder: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ className, placeholder, type, value, onChange} : InputProps) => {
    return (
        <input className={className} placeholder={placeholder} value={value} onChange={onChange} type={type} />
    )
}

export default Input