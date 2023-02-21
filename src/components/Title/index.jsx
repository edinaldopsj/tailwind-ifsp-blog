export default function Title(props) {
  const { title } = props;
  return (
    <header>
      <h1 className="leading-loose text-4xl py-3 text-center">{title}</h1>
    </header>
  );
}
