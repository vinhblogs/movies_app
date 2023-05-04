import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import "./dropdown.css"
const items = [
  {
    // label: <Button onClick={()=> navigate("/login")}>Đăng nhập</Button>,
    label: <Link to={"/login"}>Đăng nhập</Link>,
    key: '0',
  },
 
];
const Dropdown2 = () => {

    // const navigate = useNavigate()


    return (
        <div  className='login2'>
         <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    {/* <span style={{padding:10, borderRadius:"50%",border:"2px solid #fff",width:"15px",height:"15px", boxSizing:"content-box"}} >

        
    </span> */}
    <UserOutlined style={{margin:0,padding:0,height:"100%"}}/>
  </Dropdown> 
  </div>
    )
}


export default Dropdown2;