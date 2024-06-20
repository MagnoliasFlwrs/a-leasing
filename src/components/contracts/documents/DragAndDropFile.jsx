import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const previewStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    overflow: 'auto',
};

const DragAndDropFile = ({
                             helpText,
                             disabled,
                             onDrop,
                         }) => {
    const [file, setFile] = useState(null);
    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
        accept: 'image/*',
        disabled,
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFile(acceptedFiles[0]);
            onDrop(acceptedFiles[0]);
        },
    });

    const style = {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: isFocused ? 'blue' : isDragAccept ? 'green' : isDragReject ? 'red' : '#cccccc',
        borderStyle: 'dashed',
        backgroundColor: '#ffffff',
        color: '#cccccc',
        outline: 'none',
        transition: 'border .24s ease-in-out',
    };

    return (
        <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            {file ? (
                <div style={previewStyle}>
                    <img
                        style={{
                            maxHeight: 'calc(100% - 10px)',
                            margin: '5px',
                            maxWidth: 'calc(100% - 10px)',
                            flexShrink: 1,
                        }}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                    />
                </div>
            ) : (
                <p style={{ padding: '20px' }}>{helpText}</p>
            )}
        </div>
    );
};

export default DragAndDropFile;
