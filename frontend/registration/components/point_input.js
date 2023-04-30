const PointRow = (prefix, rowNum) => [
  <div>
    Point {rowNum}
  </div>,
  <div className={"px-2 col-span-2"}>
    <input
      className={"block text-black bg-white w-full border border-sky-500 rounded-md focus:outline-none text-center"}
      type="text"
      id={`${prefix}_point${rowNum}_x`}
      name={`${prefix}_point${rowNum}`}
    />
  </div>,
  <div className={"px-2 col-span-2"}>
    <input
      className={"block text-black bg-white w-full border border-sky-500 rounded-md focus:outline-none text-center"}
      type="text"
      id={`${prefix}_point${rowNum}_y`}
      name={`${prefix}_point${rowNum}`}
    />
  </div>,
  <div className={"px-2 col-span-2"}>
    <input
      className={"block text-black bg-white w-full border border-sky-500 rounded-md focus:outline-none text-center"}
      type="text"
      id={`${prefix}_point${rowNum}_z`}
      name={`${prefix}_point${rowNum}`}
    />
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