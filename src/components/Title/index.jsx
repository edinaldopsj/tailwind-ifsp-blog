export default function Title(props) {
    const {
        title
    } = props;
    return (
        <h1 className="leading-loose text-4xl py-3 text-center">
            {title}
        </h1>
    )
}