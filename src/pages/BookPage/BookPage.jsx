
import { Divider , Breadcrumb} from 'antd';
function BookPage() {

  return (
    <div>
      <h5> Books Page  </h5>

      <Breadcrumb items={[
        {
          title: 'Home',
        },
        {
          title: 'Books',
        }
      ]}/>

      <Divider />
    </div>
  );
}

export default BookPage;
