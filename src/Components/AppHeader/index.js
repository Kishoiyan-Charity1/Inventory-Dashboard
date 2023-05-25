import { BellFilled, MailOutlined} from "@ant-design/icons";




import { Badge, Typography } from "antd";

function AppHeader() {
    return <div className="AppHeader">

        <img
        width={40}
         src="hacker.svg" alt=""></img>
         <Typography.Title>Purchase Dashboard</Typography.Title>
         <space>
            <Badge count={2}  style={{marginTop:16, marginRight:12 }} dot>
                <MailOutlined style={{ fontSize: 24, margin:16  }}/>
            </Badge>

            <Badge count={2}>
                <BellFilled style={{ fontSize: 24 }}/>
             </Badge>


        
         </space>

         
    </div>
}

export default AppHeader;