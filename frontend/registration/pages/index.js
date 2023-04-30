import PointInputBlock from "@/components/point_input";
import Info from "@/components/info";

import INSTRUCTIONS from "@/constants/instructions.constants";
import REPORT_INSTRUCTIONS from "@/constants/report_issues.constants";

export default function Home() {
  return (
    <main className={"min-h-screen min-w-screen dark:bg-slate-800 text-zinc-50 px-6"}>

      <div className={"text-5xl pl-6 pt-6"}>
        Registration Tool
      </div>
      <hr className="h-px mx-2 my-6 bg-gray-100 border-0 rounded dark:bg-gray-100"/>

      {/*input and the output sections*/}
      <div className={"flex flex-row w-full"}>
        <div className={"bg-sky-200 rounded-lg w-full mx-3 p-3 text-sky-800"}>
          <div className={"text-3xl"}>
            Input
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-sky-800"/>
          <PointInputBlock title={"Home"}></PointInputBlock>
          <PointInputBlock title={"Other"}></PointInputBlock>
        </div>
        <div className={"bg-blue-200 rounded-lg w-full mx-3 p-3 text-blue-800"}>
          <div className={"text-3xl"}>
            Output
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-blue-800"/>
        </div>
      </div>

      {/*instructions section*/}
      <div className={"flex flex-row w-full"}>
        <div className={"bg-indigo-200 rounded-lg w-full mx-3 my-4 p-3 text-indigo-800"}>
          <div className={"text-3xl"}>
            Instructions
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-indigo-800"/>
          <Info info={INSTRUCTIONS}></Info>
        </div>
      </div>

      {/*report issues section*/}
      <div className={"flex flex-row w-full"}>
        <div className={"bg-fuchsia-200 rounded-lg w-full mx-3 my-4 p-3 text-fuchsia-800"}>
          <div className={"text-3xl"}>
            Report Issues
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-fuchsia-800"/>
          <Info info={REPORT_INSTRUCTIONS}></Info>
        </div>
      </div>

    </main>
  )
}
