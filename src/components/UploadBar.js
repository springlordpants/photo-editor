import React from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import EjectIcon from '@material-ui/icons/Eject';

export default function UploadBar() {
    return (
        <div>
            <div className="upload-bar">
              <p>Upload your image here:</p>
              <button className="upload-button">
                <PublishIcon />
              </button>
              <button className="upload-button">
                <EjectIcon />
              </button>
            </div>
        </div>
    )
}
