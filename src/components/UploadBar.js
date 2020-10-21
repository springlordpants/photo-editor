import React from 'react'
import PublishIcon from '@material-ui/icons/Publish';

export default function UploadBar() {
    return (
        <div>
            <div className="upload-bar">
              <p>Upload your image here:</p>
              <button className="upload-button">
                <PublishIcon />
              </button>
            </div>
        </div>
    )
}
