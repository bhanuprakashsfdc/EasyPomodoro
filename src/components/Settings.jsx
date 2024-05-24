import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBackgroundColor, setAvailableColors } from '../redux/reducers/settingsReducer';
import { SketchPicker } from 'react-color';
import { toast } from 'react-toastify';

function Settings() {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.settings.backgroundColor);
  const availableColors = useSelector((state) => state.settings.availableColors);
  const [currentColor, setCurrentColor] = useState(backgroundColor);
  const [customColors, setCustomColors] = useState([]);

  useEffect(() => {
    console.log('availableColors:', availableColors);
    if (availableColors) {
      setCustomColors(availableColors);
    } else {
      console.error('availableColors is undefined or null');
    }
  }, [availableColors]);

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
  };

  const handleApplyColor = () => {
    dispatch(setBackgroundColor(currentColor));
    toast.success('Background color updated!');
  };

  const handleCustomColorChange = (index, color) => {
    const newColors = [...customColors];
    newColors[index] = color.hex;
    setCustomColors(newColors);
    dispatch(setAvailableColors(newColors));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Select Background Color</h2>
        <div className="flex space-x-4 mb-4">
          {customColors?.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => setCurrentColor(color)}
              />
              <SketchPicker
                color={color}
                onChangeComplete={(newColor) => handleCustomColorChange(index, newColor)}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleApplyColor}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Apply Color
        </button>
      </div>
    </div>
  );
}

export default Settings;
