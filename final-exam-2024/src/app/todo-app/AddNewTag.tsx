import { Button, Input } from 'antd';
import { useState } from 'react';

type AddNewTagProps = {
  onAddTag: (tag: string) => void;
  onCancel: () => void;
};

export default function AddNewTag({ onAddTag, onCancel }: AddNewTagProps) {
  const [newtag, setNewTag] = useState<string>('');

  const onClickAddTag = () => {
    onAddTag(newtag.trim().toLowerCase());
    setNewTag('');
    onCancel();
  };
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="primary" onClick={onClickAddTag}>
          Add Tag
        </Button>
      </div>
      <div className="mt-2 text-black flex justify-center items-center">
        Tag name
      </div>
      <Input
        placeholder="Enter a new tag..."
        value={newtag}
        onChange={(e) => setNewTag(e.target.value)}
      ></Input>
    </div>
  );
}
