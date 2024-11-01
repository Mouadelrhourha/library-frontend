import { Divider , Breadcrumb} from "antd";
function BorrowsPage() {

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

export default BorrowsPage;