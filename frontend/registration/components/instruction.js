export default function Instruction() {
  return <div>
    <ol className={"list-decimal pl-6"}>
      <li>
        Enter four points for the home and other coordinate frames of references by entering the values in the text
        fields or by selecting a text or csv file with the correct order (x, y, z).
      </li>
      <li>
        After all four fields have been populated, wait for the system to generate the transformation.
      </li>
      <li>
        The generated transformation will be available under the output section.
      </li>
    </ol>
  </div>
}