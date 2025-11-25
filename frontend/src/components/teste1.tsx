export default function Imgeeexee2({
  text,
  subtitle
}: {
  text: string,
  subtitle: string
}) {

   

  return (
    <>
      <div>
        <h1>{text}</h1>
        <p>{subtitle}</p>
        <a href="https://search.brave.com/search?q=wikipedia">Wiki sobre</a>
      </div>
    </>
  )
}
