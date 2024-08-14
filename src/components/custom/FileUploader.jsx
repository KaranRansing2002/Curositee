import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({prodV,setProdV}) => {
  console.log(prodV);
    
  const [preview, setPreview] = useState(prodV.image ?  URL.createObjectURL(prodV.image) : null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Accept only image files
    onDrop: (acceptedFiles) => {
      // Create a preview URL for the first accepted file
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
        setProdV(p=>({...p,image:file}))
      }
    },
  });

  useEffect(() => {
    // Revoke the data uri to avoid memory leaks

    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  useEffect(()=>{
    setPreview(prodV.image ?  URL.createObjectURL(prodV.image) : null);
  },[prodV])

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="flex flex-col p-2 ">
      <div
        {...getRootProps({
          className:
            'border border-slate-400 rounded hover:cursor-pointer p-2 flex-1 pt-4 grid place-items-center min-h-72',
        })}
      >
        <input {...getInputProps()} />
        {!preview && <p>Drag &apos;n&apos; drop some files here, or click to select files</p>}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 max-h-96"
          />
        )}
      </div>
      <div className="m-2">
        <h4>Files</h4>
        <ul>{files}</ul>
      </div>
    </section>
  );
};

export default FileUploader;
