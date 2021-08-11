import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

const targetHandleStyle = { background: '#555' };

export const CustomEventNode = memo(({ data, isConnectable }) => {
  return (
    <div className="custom_node_container">
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />

      <Handle
        type="target"
        position="bottom"
        id="a"
        style={targetHandleStyle}
        isConnectable={isConnectable}
      />
    </div>
  );
});

export const CustomProcessNode = memo(({ isConnectable }) => {
  return (
    <div className="custom_node_container">
      <div>Video Edit Process</div>
      <Handle
        type="target"
        position="left"
        style={targetHandleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="top"
        id="a"
        style={targetHandleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={targetHandleStyle}
        isConnectable={isConnectable}
      />
    </div>
  );
});