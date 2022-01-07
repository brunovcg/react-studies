import React from 'react'

const Count = ({text, count}) => {
    console.log(`Rendering Count => ${text}`);

    return(
          <div >
              <div>{text} - {count}</div>
        </div>
    )
}

export default React.memo(Count)