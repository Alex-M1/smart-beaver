import React from 'react';
import UploadArea from '@/components/common/UploadArea';
import { locales } from '@/constants/locales';
import { useAppStore } from '@/state/reducer';
import { addFiles, getFileNames, getFiles } from '@/state/selectors';
import { StUploadFileBlock } from './styled';

const UploadFileBlock: React.FC = () => {
  const [isError, setIsError] = React.useState(false);
  const files = useAppStore(getFiles);
  const fileNames = useAppStore(getFileNames);
  const setFiles = useAppStore(addFiles);

  const handleGetFiles = (filesList: FileList) => {
    if (filesList.length <= 2 && (files.length + filesList.length) <= 2) {
      setIsError(false);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < filesList.length; i++) {
        setFiles(filesList[i]);
      }
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };
  return (
    <StUploadFileBlock>
      <p className="text-25-18 bold">{locales.file_drawing_upload_title}</p>
      <div className="upload__content">
        <div>
          <p className="bold upload__text">{locales.file_upload_text}</p>
          <p className="bold">{locales.file_upload_max_files}</p>
          <p className="bold">{locales.file_upload_max_size}</p>
          <p className="bold upload__text">{locales.file_upload_support}</p>
        </div>
        <UploadArea onGetFile={handleGetFiles} fileNames={fileNames} isError={isError} />
      </div>
    </StUploadFileBlock>
  );
};
export default UploadFileBlock;
