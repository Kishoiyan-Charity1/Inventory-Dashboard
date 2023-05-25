import { Card, Typography, Statistic, Space, Table } from 'antd';
import { ShoppingCartOutlined, UserOutlined, ShopOutlined, FieldTimeOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react';
import { getOrders } from '../../API';





import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



function Dashboard(){
    return (
        
        <Space size={12} direction='vertical' marginLeft={44}>
            

        <Typography.Title level={4}>Dashboard</Typography.Title>
        
        <Space >
      
      
            
            

            <Card>
                <Space direction="horizontal">
                    <ShoppingCartOutlined style={
                        {color: "green",
                        backgroundColor: 'rgba(155, 250, 155)', 
                        borderRadius: 5, 
                        fontSize: 21,
                        padding: 6}} />
                    <Statistic title="Oders" value={137}/>
                </Space>
            </Card>
            

            <Card>
                <Space direction="horizontal">
                    <ShopOutlined  style={{
                        color: "green",
                        backgroundColor: 'rgba(155, 250, 155)', 
                        borderRadius: 5, 
                        fontSize: 21,
                        padding: 6

                    }}/>
                    <Statistic title="Inventory" value={137}/>
                </Space>
            </Card>

            <Card>
                <Space direction="horizontal">
                    <UserOutlined  style={{
                        color: "green",
                        backgroundColor: 'rgba(155, 250, 155)', 
                        borderRadius: 5, 
                        fontSize: 21,
                        padding: 6
                    }}/>
                    <Statistic title="Customer" value={137}/>
                </Space>
                
            </Card>

            <Card>
                <Space direction="horizontal">
                    <FieldTimeOutlined  style={{
                        color: "green",
                        backgroundColor: 'rgba(155, 250, 155)', 
                        borderRadius: 5, 
                        fontSize: 21,
                        padding: 6
                    }}/> 
                    <Statistic title="Revenue" value={137}/>
                </Space>
                
            </Card>
           
            

        </Space>
      
        <RecentOders/>
        <DashboardChart/>
        
       

        <Space >
           
            
        
        </Space>
        
    </Space>


    );
    


}
function RecentOders() {
    const [dataSource, setDataSource]= useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getOrders().then((res)=> {
            setDataSource(res.products.splice(0,4));

            setLoading(false)
        });

    
        
    }, []);



    return (
        <>
        
        <Typography.Title  level={5} >Recent Orders </Typography.Title> 
        <Table 
      
          columns={[
            {
                title:"Title",
                dataIndex:"title",
            },

            {
                title:"Quantity",
                dataIndex:"quantity",
            },

            {
                title:"Price",
                dataIndex:"discountedPrice",
            },   
        
     ]}
     loading={loading}
     dataSource={dataSource}
     pagination={false}
     ></Table>
     </>

    );
}

function DashboardChart(){
const options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom' 
              },
              title: {
                display: true,
                text: 'Order Revenue',
              },
            },
          };

          const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


          const data = {
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => Math.random*1000),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Dataset 2',
                data: labels.map(() => Math.random*1000),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          };

        return <Bar options={options} data={data} />;
    }




export default Dashboard;