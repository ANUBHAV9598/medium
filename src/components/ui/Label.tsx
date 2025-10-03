type LabelProps = {
    className: string;
    title: string;
}

const Label = ({ className, title} : LabelProps) => {
    return (
        <div className={className}>{title}</div>
    )
}

export default Label