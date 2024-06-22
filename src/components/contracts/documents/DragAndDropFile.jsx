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
                             onDrop,
                         }) => {
    const [file, setFile] = useState(null);
    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFile(acceptedFiles[0]);
            onDrop(acceptedFiles[0]);
        },
    });

    const style = {
        height: '342px',
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
        cursor:'pointer'
    };

    return (
        <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            {file ? (
                <div style={previewStyle}>
                    <img
                        style={{
                            height: 'calc(100% - 10px)',
                            margin: '5px',
                            width: 'calc(100% - 10px)',
                            flexShrink: 1,
                            objectFit:'cover'
                        }}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                    />
                </div>
            ) : (
                <div style={{ padding: '20px',
                    width:'100%',
                    height:'100%',
                    display: 'flex' ,
                    alignItems:'center' ,
                    justifyContent:'center'
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L12 22" stroke="#959595" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M15 10.5H13.5V13.5H15V10.5ZM22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5V13.5ZM15 13.5L22 13.5V10.5L15 10.5V13.5Z" fill="#959595" fillOpacity="0.4"/>
                        <path d="M9 10.5H10.5V13.5H9V10.5ZM2 13.5C1.17157 13.5 0.5 12.8284 0.5 12C0.5 11.1716 1.17157 10.5 2 10.5V13.5ZM9 13.5H2V10.5H9V13.5Z" fill="#959595" fillOpacity="0.4"/>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default DragAndDropFile;
