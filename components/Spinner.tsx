const Spinner = ({width}: {width: number}) => {
    return (
        <div 
            className="animate-spin rounded-full border-b-2 border-primary"
            style={{ height: `${width * 0.25}rem`, width: `${width * 0.25}rem` }}
        ></div>
    )
}

export default Spinner