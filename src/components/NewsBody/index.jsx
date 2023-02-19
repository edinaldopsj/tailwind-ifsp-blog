import Title from "../Title";

export default function NewsBody(props) {
    const {
        title,
        description
    } = props;

    return (
        <div className="my-4 flex justify-center">
            <div className="block shadow-lg bg-white text-justify w-full px-8 py-6">
                <article>
                    <Title title={title}/>
                    <section>
                        {description}
                    </section>
                    <div className="flex justify-center py-3">
                        <a className="text-blue-400 no-underline" href="">Voltar página</a>
                    </div>
                </article>
            </div>
        </div>
    )
}