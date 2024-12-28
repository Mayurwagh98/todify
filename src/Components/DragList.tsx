import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
}

const DragDropList = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  const [draggedItemId, setDraggedItemId] = useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDraggedItemId(id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (droppedOnId: number) => {
    if (draggedItemId === null) return;

    const draggedItemIndex = items.findIndex(item => item.id === draggedItemId);
    const droppedOnItemIndex = items.findIndex(item => item.id === droppedOnId);

    const newItems = [...items];
    const [removed] = newItems.splice(draggedItemIndex, 1);
    newItems.splice(droppedOnItemIndex, 0, removed);

    setItems(newItems);
    setDraggedItemId(null);
  };

  return (
    <div>
      {items.map(item => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item.id)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(item.id)}
          style={{
            padding: '8px',
            margin: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#f9f9f9',
            cursor: 'move'
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DragDropList;
