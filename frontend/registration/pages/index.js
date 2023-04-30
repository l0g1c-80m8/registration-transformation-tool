export default function Home() {
  return (
    <main className={"min-h-screen min-w-screen dark:bg-slate-800 text-zinc-50"}>
      <div className={"text-4xl pl-6 pt-6"}>
        Registration Tool
      </div>
      <hr className="h-px mx-2 my-6 bg-gray-100 border-0 rounded dark:bg-gray-100"/>
      <div className={"flex flex-row w-full"}>
        <div className={"bg-sky-200 rounded-lg w-full mx-3 p-3 text-sky-800"}>
          <div className={"text-2xl"}>
            Input
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-sky-800"/>

        </div>
        <div className={"bg-sky-200 rounded-lg w-full mx-3 p-3 text-sky-800"}>
          <div className={"text-2xl"}>
            Output
          </div>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-sky-800"/>
        </div>
      </div>
      <div>
        Section with usage instructions and contribution/error reporting instructions
      </div>
    </main>
  )
}
