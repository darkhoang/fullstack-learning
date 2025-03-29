import { Button, Checkbox, Input } from 'antd';
import { Todo } from './type';
import { useState } from 'react';
type AddinformationProps = {
  onAdd: (data: Todo) => void;
  onCancel: () => void;
  addTags: string[];
};
export default function AddInfor({
  onAdd,
  onCancel,
  addTags,
}: AddinformationProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [searchtag, setSearchtag] = useState<string>('');
  const [tag, setTag] = useState<string[]>([]);
  const chooseTags = addTags.filter((item) =>
    item.toLowerCase().includes(searchtag.toLowerCase())
  );
  const onCLickAdd = () => {
    if (!title.trim() || !description.trim()) return;
    const neItem: Todo = {
      title,
      description,
      tag,
      isDone: false,
      timenow: new Date().toISOString(),
    };
    onAdd(neItem);
    setTitle('');
    setDescription('');
    setTag([]);
    setSearchtag('');
    onCancel();
  };
  return (
    <div>
      <div className="flex justify-between">
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onCLickAdd}>Add</Button>
      </div>
      <div>Title</div>
      <div>
        <Input
          className="w-60"
          placeholder="add a title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>Description</div>
      <div>
        <Input
          placeholder="add a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-between mt-2">
        <div>Tag</div>
        <div>
          <Input
            placeholder="Search your tag"
            value={searchtag}
            onChange={(e) => setSearchtag(e.target.value)}
          />
        </div>
        <div className="flex flex-row mt-2">
          <div className="flex flex-row">
            <Checkbox.Group
              value={tag}
              onChange={(checkvalue) => setTag(checkvalue as string[])}
            >
              {chooseTags.map((item) => (
                <Checkbox key={item} value={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
