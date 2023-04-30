const Input = ({id, name}) => (
  <input
    className={"block text-black bg-white w-full border border-sky-500 rounded-md focus:outline-none text-center w-32"}
    type="text"
    id={id}
    name={name}
  />
)

const PointRow = (prefix, rowNum) => [
  <div>
    Point {rowNum}
  </div>,
  <div className={"px-2 col-span-2 m-auto"}>
    <Input id={`${prefix}_point${rowNum}_x`} rowNum={`${prefix}_point${rowNum}`}></Input>
  </div>,
  <div className={"px-2 col-span-2 m-auto"}>
    <Input id={`${prefix}_point${rowNum}_y`} rowNum={`${prefix}_point${rowNum}`}></Input>
  </div>,
  <div className={"px-2 col-span-2 m-auto"}>
    <Input id={`${prefix}_point${rowNum}_z`} rowNum={`${prefix}_point${rowNum}`}></Input>
  </div>
]

export default function PointInput({ title }) {
  return <div className={"w-full"}>
    <div className={"text-xl pt-2"}>
      {title} Coordinate Points
    </div>
    <div className={"grid gap-4 grid-cols-7 grid-rows-5 my-4 text-center"}>
      <div>Point #</div>
      <div className={"col-span-2"}>X</div>
      <div className={"col-span-2"}>Y</div>
      <div className={"col-span-2"}>Z</div>

      {...PointRow(title.toLowerCase(), 1)}
      {...PointRow(title.toLowerCase(), 2)}
      {...PointRow(title.toLowerCase(), 3)}
      {...PointRow(title.toLowerCase(), 4)}
    </div>
    <div className={"py-2"}> Upload File</div>
  </div>
}