export default function Output({ value }) {
  return <div className="p-2 h-full">
    <textarea
      id="output" className="w-full h-5/6 focus:outline-none overflow-auto"
      value={value}
      aria-readonly
      readOnly
    />
  </div>
}
