export default function Output({ value }) {
  return <div className="p-2">
    <textarea
      id="output" className="w-full h-full focus:outline-none"
      value={value}
      aria-readonly
      readOnly
    />
  </div>
}
