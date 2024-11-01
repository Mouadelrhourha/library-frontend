import { Divider , Breadcrumb} from 'antd';
function BorrowPage() {

  return (
    <div>
      <h5> Borrows Page  </h5>

      <Breadcrumb items={[
        {
          title: 'Home',
        },
        {
          title: 'Borrows',
        }
      ]}/>

      <Divider />
    </div>
  );
}

export default BorrowPage;
