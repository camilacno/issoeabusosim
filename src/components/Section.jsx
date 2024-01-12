export function Section({ title, paragraph }) {
  return (
    <section className=" flex flex-col gap-2">
      <h3 className="text-xl text-[#E57373]">{title}</h3>
      <p className="text-base font-normal">{paragraph}</p>
    </section>
  )
}
