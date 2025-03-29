'use client';
import { Button, Checkbox, Dropdown, Input, Tag } from 'antd';
import { Todo } from './type';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AddNewTag from './AddNewTag';
import AddInfor from './Addinformation';

export default function App() {
  const [data, setData] = useState<Todo[]>([]);
  const [searchtodo, setSearchTodo] = useState<string>('');
  const [searchtag, setSearchtag] = useState<string>('');
  const [showinfo, setShowInfo] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>(['work', 'study', 'school']);
  const [showaddtag, setShowAddTag] = useState<boolean>(false);

  const onCLickAddNewTag = (add: any) => {
    if (add.trim() && !tags.includes(add.trim().toLowerCase())) {
      setTags([...tags, add.trim().toLowerCase()]);
    }
    setShowAddTag(false);
  };

  const onClickDelTag = (del: any) => {
    setTags(tags.filter((item) => item !== del));
  };

  const onCLickAdd = (newItem: Todo) => {
    const currentData = data;
    const newData = [newItem, ...currentData];
    setData(newData);
    setShowInfo(false);
  };
  const onClickDeleteAll = () => {
    setData([]);
  };
  const onCLickDeleteDone = () => {
    const currentDataDelete = data;
    const newDataDelete = currentDataDelete.filter((item) => !item.isDone);
    setData(newDataDelete);
  };
  const onCLickCheckDone = (index: number) => {
    setData((check) =>
      check.map((item, i) =>
        i === index ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const deleteMenu = {
    items: [
      { key: '1', label: 'Delete All', onClick: onClickDeleteAll },
      { key: '2', label: 'Delete Done', onClick: onCLickDeleteDone },
    ],
  };

  return (
    <div className="flex flex-row ml-4">
      <div className="flex items-center justify-center mt-4 gap-6">
        <div className="flex flex-col">
          <div className="items-center justify-center flex text-black">
            Todo
          </div>
          <Button onClick={() => setShowAddTag(true)}>Add New Tag</Button>
          <Input
            className="mt-2 w-60"
            placeholder="Search for tags ...."
            value={searchtag}
            onChange={(e) => setSearchtag(e.target.value)}
          />
          <div className="mt-4 flex gap-2 flex-wrap">
            {tags
              .filter((item) =>
                item.toLowerCase().includes(searchtag.toLowerCase())
              )
              .map((item, index) => (
                <Tag key={index} color="blue">
                  {item}
                  <DeleteOutlined
                    className="ml-2 text-red-300"
                    onClick={() => onClickDelTag(item)}
                  />
                </Tag>
              ))}
          </div>
        </div>
      </div>
      <div className="flex ml-10 items-center justify-center mt-4 gap-6">
        <Input
          placeholder="Search for todo..."
          value={searchtodo}
          onChange={(e) => setSearchTodo(e.target.value)}
        />
        <Dropdown menu={deleteMenu} trigger={['click']}>
          <DeleteOutlined />
        </Dropdown>
        <PlusOutlined onClick={() => setShowInfo(true)} />
      </div>
      <div></div>
      <div className="flex flex-col m-4">
        {data
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchtodo.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchtodo.toLowerCase()) ||
              item.tag.some((tag) =>
                tag.toLowerCase().includes(searchtodo.toLowerCase())
              )
          )
          .map((item, index) => (
            <div className="boder p-2 mt-2 items-center gap-4" key={index}>
              <div>
                <h3>{item.title}</h3>
                <div></div>
                <div>{item.description}</div>
                <div>Tags: {item.tag.join(',')}</div>
                <div>
                  <Checkbox
                    checked={item.isDone}
                    onChange={() => onCLickCheckDone(index)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      {showinfo && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <AddInfor
              onAdd={onCLickAdd}
              onCancel={() => setShowInfo(false)}
              addTags={tags}
            />
          </div>
        </div>
      )}
      {showaddtag && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <AddNewTag
              onAddTag={onCLickAddNewTag}
              onCancel={() => setShowAddTag(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
