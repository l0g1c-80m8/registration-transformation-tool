import { INPUT_ACTIONS } from "@/constants/constants";


const PointInput = ({ id, name, onAction, pageState }) => (
  <input
    key={id}
    className={"block text-black bg-white w-full border border-sky-500 rounded-md focus:outline-none text-center w-32"}
    type="text"
    id={id}
    name={name}
    value={pageState[id]}
    onChange={onAction[INPUT_ACTIONS.POINT_INPUT](id)}
  />
)

const PointRow = (prefix, rowNum, onAction, pageState) => [
  <div key={`point_num_${rowNum}`}>
    Point {rowNum}
  </div>,
  <div className={"px-2 col-span-2 m-auto"} key={`point_${rowNum}_x_input`}>
    <PointInput
      id={`${prefix}_point${rowNum}_x`}
      rowNum={`${prefix}_point${rowNum}`}
      onAction={onAction}
      pageState={pageState}>
    </PointInput>
  </div>,
  <div className={"px-2 col-span-2 m-auto"} key={`point_${rowNum}_y_input`}>
    <PointInput
      id={`${prefix}_point${rowNum}_y`}
      rowNum={`${prefix}_point${rowNum}`}
      onAction={onAction}
      pageState={pageState}>
    </PointInput>
  </div>,
  <div className={"px-2 col-span-2 m-auto"} key={`point_${rowNum}_z_input`}>
    <PointInput
      id={`${prefix}_point${rowNum}_z`}
      rowNum={`${prefix}_point${rowNum}`}
      onAction={onAction}
      pageState={pageState}>
    </PointInput>
  </div>
]

export default function PointInputBlock({ title, onAction, pageState }) {
  return <div className={"w-full"}>
    <div className={"text-xl pt-2"}>
      {title} Coordinate Points
    </div>
    <div className={"grid gap-4 grid-cols-7 grid-rows-5 my-4 text-center"}>
      <div>Point #</div>
      <div className={"col-span-2"}>X</div>
      <div className={"col-span-2"}>Y</div>
      <div className={"col-span-2"}>Z</div>

      {...PointRow(title.toLowerCase(), 1, onAction, pageState)}
      {...PointRow(title.toLowerCase(), 2, onAction, pageState)}
      {...PointRow(title.toLowerCase(), 3, onAction, pageState)}
      {...PointRow(title.toLowerCase(), 4, onAction, pageState)}
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
        onClick={() => onAction[INPUT_ACTIONS.FILE_SELECT](title)}
      />
    </div>
  </div>
}