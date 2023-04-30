import _map from 'lodash/map'

export default function Info({info, className}) {
  return <div>
    <ol className={`${className} pl-6`}>
      {..._map(
        info,
        info_item => <li>
          {info_item}
        </li>
      )}
    </ol>
  </div>
}