interface Props {
  title: string;
  text?: string;
}

const Intro = ({title, text}: Props) => {
  return (
    <section className="mt-12 mb-12 md:mb-12">
      <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-8">
        {title}
      </h2>
      <h4 className="text-4xl md:text-4xl tracking-tighter leading-tight mb-8 ">
        {text}
      </h4>
    </section>
  )
}

export default Intro
