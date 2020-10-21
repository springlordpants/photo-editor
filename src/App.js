import React, {useState} from 'react';
import './App.css';
import Slider from './components/Slider';
import SidebarItem from './components/SidebarItem';
import PublishIcon from '@material-ui/icons/Publish';
import ImageIcon from '@material-ui/icons/Image';


const defaultOptions = [
  {
    name: 'Exposure',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%'
  },
  {
    name: 'Hue',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px'
  },

]

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(defaultOptions)
  const selectedOption = options[selectedOptionIndex]
  
  const imageUploader = React.useRef(null);
  const uploadedImage = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  };

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return {...option, value: target.value}
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return {filter: filters.join(' ')}
  }

  return (
    <div className="container">
      <div className="main-image"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
        <div style={getImageStyle()}>
          <img
            ref={uploadedImage}
            style={{maxWidth:'100%', maxHeight:'76vh'}}
            alt="" />
        </div>
      </div>
      <div className="sidebar">
        {options.map((option, index) => {
          return(
            <SidebarItem 
            key={index}
            name={option.name}
            active={index === selectedOptionIndex}
            handleClick={() => setSelectedOptionIndex(index)}
            />
          )
        })}
      </div>
      <div>
        <div className="upload">
          <div className="temp-image">
            <ImageIcon style={{ fontSize: 100 }} />
          </div>
          <p>Upload your image here:</p>
          <button className="upload-button" onClick={() => imageUploader.current.click()}>
                <PublishIcon />
          </button>
        </div>
      </div>
      {/* <div className="restart">
        <p>Screenshot when finished</p>
        <p>Restart for new image</p>
      </div> */}
      <Slider 
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
      </div>
  );
}

export default App;
