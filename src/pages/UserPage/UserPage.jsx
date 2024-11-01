
import { Divider , Breadcrumb} from "antd";
function UserPage() {

    return ( 
        <div>
            <h5> User Page  </h5> 


        
        <Breadcrumb items={[
            {
                title: 'Home',
            },
            {
                title: 'User',
            }
        ]}/>

        <Divider />
        </div>
     );
}

export default UserPage;