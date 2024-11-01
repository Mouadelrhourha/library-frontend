import {Breadcrumb, Button, Divider, Space, Table} from 'antd';
import {useEffect, useState} from 'react';
import {fetchAllCategories} from '../../api/category.api';
import {DeleteOutlined} from '@ant-design/icons';

export const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories()
      .then(categories => setCategories(categories))
      .catch(error => console.log(error));
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
      width: '30%'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      width: '50%'
    },
    {
      title: 'Edit',
      key: 'edit',
      render: () => (
        <Space size="middle">

          <a>Edit</a>

        </Space>
      ),
    },

    {
      title: 'Delete',
      key: 'delete',
      render: () => (
        <Button color={'danger'} shape="circle" variant="outlined" size={'small'} icon={<DeleteOutlined />}>
        </Button>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb items={[
        {
          title: 'Home',
        },
        {
          title: 'Categories',
        }
      ]}/>

      <Divider />

      <div>
        <Table columns={columns} dataSource={categories} />
      </div>
    </>
  );
};
