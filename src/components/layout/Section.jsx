export default function Section(props) {
  return (
    <section className={`flex flex-col items-center my-16 px-4 max-w-7xl w-full ${props.classes}`}>
      { props.children }
    </section>
  )
}
