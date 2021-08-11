import React, { useState, useRef } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  Background
} from 'react-flow-renderer';

import * as nodeTypes from './CustomNode';

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = () => `node_${id++}`;
const connectionLineStyle = {
  stroke: '#f00',
  animated: true
};

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 250 },
    targetPosition: 'left',
    sourcePosition: 'right',
  }
];

const CustomNodeFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState();
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance: OnLoadParams) => setReactFlowInstance(_reactFlowInstance);
  const onConnect = (params) => setElements((els) => addEdge(
    {
      ...params,
      animated: true,
      arrowHeadType: 'arrow',
      type: 'smoothstep',
      style: {
        stroke: '#f00',
      }
    },
    els)
  );

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const { type, text } = JSON.parse(event.dataTransfer.getData('application/reactflow'));
      const position = reactFlowInstance.project({
        x: event.clientX - 90,
        y: event.clientY - 50
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: text },
        targetPosition: 'left',
        sourcePosition: 'right',
      };

      setElements((es) => {
        const newElements = es.concat(newNode);
        console.log(newElements);
        return newElements;
      });
    }
  };

  return (
    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        snapToGrid={false}
        onLoad={onLoad}
        onDrop={onDrop}
        onDragOver={onDragOver}
        arrowHeadColor="#f00"
        connectionLineStyle={connectionLineStyle}
        defaultZoom={1}
      >
        <Background
          variant="lines"
          gap={24}
          size={1}
        />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;