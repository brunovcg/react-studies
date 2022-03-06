
type PersonProps = {
    name: {
        first: string,
        last: string,
    };
}

const SimpleObject = ({name}: PersonProps) => {
    return <div>{name.first} {name.last}</div>
}

export default SimpleObject