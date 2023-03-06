import React from 'react';

interface Props {
  item: {
    title: string;
    text: string;
    note?: string;
  }
}

const MeasureKitchenTextItem: React.FC<Props> = ({ item }) => (
  <>
    <p className="small-title bold">{item.title}</p>
    <p className="text ws-pre-line">{item.text}</p>
    {item.note && <p className="red bold text">{item.note}</p>}
  </>
);

export default MeasureKitchenTextItem;
