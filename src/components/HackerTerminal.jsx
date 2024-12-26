import React from 'react';

const HackerTerminal = ({ logs, status }) => {
    const getStatusColor = () => {
        switch (status) {
            case 'success':
                return 'text-green-500';
            case 'failure':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="mt-8 w-full max-w-3xl bg-gray-900 p-4 rounded-lg shadow-lg overflow-hidden">
            <div className={`font-bold mb-2 ${getStatusColor()}`}>Status: {status.toUpperCase()}</div>
            <div className="h-40 overflow-y-auto text-sm bg-black p-2 rounded">
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default HackerTerminal;
