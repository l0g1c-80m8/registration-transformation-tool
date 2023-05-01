import { PAGE_ACTIONS } from "@/constants/constants";
import { INPUT_ACTIONS } from "@/actions/actions";


const PointInput = ({id, name}) => (
  <input
    key={id}
    className={"block text-black bg-white w-full border border-sky-500 rounded-md focus:outline-none text-center w-32"}
    type="text"
    id={id}
    name={name}
  />
)

const PointRow = (prefix, rowNum) => [
  <div key={`point_num_${rowNum}`}>
    Point {rowNum}
  </div>,
  <div className={"px-2 col-span-2 m-auto"} key={`point_${rowNum}_x_input`}>
    <PointInput id={`${prefix}_point${rowNum}_x`} rowNum={`${prefix}_point${rowNum}`}></PointInput>
  </div>,
  <div className={"px-2 col-span-2 m-auto"} key={`point_${rowNum}_y_input`}>
    <PointInput id={`${prefix}_point${rowNum}_y`} rowNum={`${prefix}_point${rowNum}`}></PointInput>
  </div>,
  <div className={"px-2 col-span-2 m-auto"} key={`point_${rowNum}_z_input`}>
    <PointInput id={`${prefix}_point${rowNum}_z`} rowNum={`${prefix}_point${rowNum}`}></PointInput>
  </div>
]

export default function PointInputBlock({ title }) {
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
    <div className={"py-2 w-full text-center"}>
      <input
        type="file"
        className=" text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 m-auto
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-sky-50 file:text-sky-700
        hover:file:bg-sky-100 text-center-last"
        onClick={() => PAGE_ACTIONS[INPUT_ACTIONS.FILE_SELECT](title)}
      />
    </div>
  </div>
}