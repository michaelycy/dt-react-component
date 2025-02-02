import React, { useState } from 'react';
import { ErrorBoundary } from 'dt-react-component';
import { message } from 'antd';

const ThrowError = () => {
    const [count, setCount] = useState(0);
    if (count % 2) throw new Error('test error');
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 60,
            }}
        >
            <button
                style={{
                    border: 'none',
                    backgroundColor: '#1890ff',
                    cursor: 'pointer',
                    height: 32,
                    borderRadius: 4,
                }}
                onClick={() => setCount((count) => count + 1)}
            >
                触发异常
            </button>
            <h2>hello, dt-react-component</h2>
        </div>
    );
};

export default () => {
    return (
        <ErrorBoundary onError={(err) => message.error('捕获到错误：' + err.message)}>
            <ThrowError />
        </ErrorBoundary>
    );
};
