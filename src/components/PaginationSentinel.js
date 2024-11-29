
function PaginationSentinel(props) {
    const sentinelRef = props.sentinelRef;

    return (<div className="w-1" ref={sentinelRef}></div>)


}

export default PaginationSentinel;