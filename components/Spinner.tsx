const Spinner = ({width}: {width: number}) => {
    return (
        <div className={`animate-spin rounded-full border-b-2 border-primary h-${width} w-${width}`}></div>
    )
}

export default Spinner