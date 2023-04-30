import _map from 'lodash/map'

import ReactHtmlParser from 'react-html-parser'

export default function Info({info, className}) {
  return <div>
    <ol className={`${className} pl-6`}>
      {..._map(
        info,
        info_item => <li>
          {ReactHtmlParser(info_item)}
        </li>
      )}
    </ol>
  </div>
}