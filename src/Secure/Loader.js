import React from 'react'
import { ColorRing } from 'react-loader-spinner'

function Loader() {
    return (
        <div className="spinner-section">
            <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#00425A', '#00425A', '#00425A', '#00425A', '#00425A']}
            />
        </div>
    )
}

export default Loader