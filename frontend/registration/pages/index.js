import { useState } from "react";

import Image from "next/image";

import PointInputBlock from "@/components/point_input";
import Info from "@/components/info";

import { getPageActions } from "@/actions/actions";

import INSTRUCTIONS from "@/constants/instructions.constants";
import REPORT_INSTRUCTIONS from "@/constants/report_issues.constants";
import {
  INITIAL_STATE,
  INPUT_ACTIONS,
  HOME_POINTS_ID_PREFIX,
  HOME_POINTS_TITLE,
  OTHER_POINTS_ID_PREFIX,
  OTHER_POINTS_TITLE,
} from "@/constants/constants";

import logo from '@/public/logo.gif'
import Output from "@/components/output";

export default function Home() {
  const [pageState, setPageState] = useState({ ...INITIAL_STATE });
  const onAction = getPageActions(pageState, setPageState);

  return (
    <main className={"min-h-screen min-w-screen dark:bg-slate-800 text-slate-50 px-6"}>

      <div className={"text-5xl pl-6 pt-6"}>
        <div className={"flex flex-initial w-full"}>
          <div className={"mr-4"}>
            <Image src={logo} alt={"Logo"} height={52} width={52}/>
          </div>
          <div> Transformation Tool (for Registration) </div>
        </div>
      </div>
      <hr className="h-px mx-2 my-6 bg-gray-100 border-0 rounded dark:bg-gray-100"/>

      {/*input and the output sections*/}
      <div className={"flex flex-row w-full"}>
        {/*input section*/}
        <div className={"bg-sky-200 rounded-lg w-full mx-3 p-3 text-sky-800"}>
          <div className={"text-3xl"}>
            Input
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-sky-800"/>
          <PointInputBlock
            key={HOME_POINTS_ID_PREFIX}
            id_prefix={HOME_POINTS_ID_PREFIX}
            title={HOME_POINTS_TITLE}
            onAction={onAction}
            pageState={pageState}>
          </PointInputBlock>
          <PointInputBlock
            key={OTHER_POINTS_ID_PREFIX}
            id_prefix={OTHER_POINTS_ID_PREFIX}
            title={OTHER_POINTS_TITLE}
            onAction={onAction}
            pageState={pageState}>
          </PointInputBlock>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-sky-800"/>
          {/*submit and clear buttons*/}
          <div className={"flex flex-row items-center justify-around"}>
            <button
              id="submit-btn"
              onClick={ onAction[INPUT_ACTIONS.SUBMIT] }
              className="mt-2 py-2 px-4
              rounded-full border-0 bg-sky-50 hover:bg-sky-100
              text-sky-700 w-32"
            >
              Submit
            </button>
            <button
              id="submit-btn"
              onClick={ onAction[INPUT_ACTIONS.CLEAR] }
              className="mt-2 py-2 px-4
              rounded-full border-0 bg-sky-50 hover:bg-sky-100
              text-sky-700 w-32"
            >
              Clear
            </button>
          </div>
        </div>
        {/*output section*/}
        <div className={"bg-blue-200 rounded-lg w-full mx-3 p-3 text-blue-800"}>
          <div className={"text-3xl"}>
            Output
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-blue-800"/>
          <Output></Output>
        </div>
      </div>

      {/*instructions section*/}
      <div className={"flex flex-row w-full"}>
        <div className={"bg-indigo-200 rounded-lg w-full mx-3 mt-4 p-3 text-indigo-800"}>
          <div className={"text-3xl"}>
            Instructions
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-indigo-800"/>
          <Info info={INSTRUCTIONS} className={"list-decimal"}></Info>
        </div>
      </div>

      {/*report issues section*/}
      <div className={"flex flex-row w-full"}>
        <div className={"bg-fuchsia-200 rounded-lg w-full mx-3 my-4 p-3 text-fuchsia-800"}>
          <div className={"text-3xl"}>
            Report Issues
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-fuchsia-800"/>
          <Info info={REPORT_INSTRUCTIONS} className={"list-disc"}></Info>
        </div>
      </div>

    </main>
  )
}
