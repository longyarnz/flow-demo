import React, { DragEvent } from 'react';

const onDragStart = (event, metadata) => {
  event.dataTransfer.setData('application/reactflow', JSON.stringify(metadata));
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the left.</div>
      <div className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, { type: 'input', text: 'Input' })} draggable>
        Input Node
      </div>
      <div className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, { type: 'CustomProcessNode', text: 'Process' })} draggable>
        Process Node
      </div>
      <div className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, { type: 'CustomEventNode', text: 'DOM' })} draggable>
        Event Node
      </div>
      <div className="react-flow__node-output" onDragStart={(event: DragEvent) => onDragStart(event, { type: 'output', text: 'Output' })} draggable>
        Output Node
      </div>
    </aside>
  );
};

export default Sidebar;