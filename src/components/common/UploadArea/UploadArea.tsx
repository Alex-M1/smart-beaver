import { locales } from '@/constants/locales';
import React, { DragEvent, ChangeEvent, useState } from 'react';
import { StAploadArea } from './styled';

interface Props {
  onGetFile: (file: FileList) => void;
  fileNames?: string[];
  isError?: boolean;
}

const UploadArea: React.FC<Props> = ({ onGetFile, fileNames, isError }) => {
  const [droped, setDroped] = useState('');

  const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDroped('droped');
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDroped('');
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDroped('');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onGetFile(e.dataTransfer.files);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onGetFile(e.target.files);
    }
  };

  return (
    <StAploadArea>
      <label
        htmlFor="upload_file"
        onDrop={handleDrop}
        onDragOver={handleDragEnter}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={droped}
      >
        <input id="upload_file" type="file" hidden onChange={handleChange} />
        {droped
          ? null
          : (
            <div className="upload__file-names">
              {fileNames?.map((name) => <p key={name}>{name}</p>)}
            </div>
          )}
      </label>
      {isError && <p className="error">{locales.file_upload_max_files}</p>}
    </StAploadArea>
  );
};

export default UploadArea;
