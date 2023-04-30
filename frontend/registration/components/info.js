import _map from 'lodash/map'

export default function Info({info}) {
  return <div>
    <ol className={"list-decimal pl-6"}>
      {..._map(
        info,
        info_item => <li>
          {info_item}
        </li>
      )}
    </ol>
  </div>
}