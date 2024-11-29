// // DashboardLayout.tsx
// import React from 'react';
// import Navbar from '../components/ui/navigation-menu'; // Adjust the path as necessary
// import Sidebar from '../components/ui/navigation-menu'; // Use navigation-menu for Sidebar
// import Container from '../components/ui/card'; // Using Card as a container
// import Grid from '../components/ui/card'; // Using Card for grid layout
// import Card from '../components/ui/card'; // Card component
// import Table from '../components/ui/table'; // Table component
// import Dropdown from '../components/ui/dropdown-menu'; // Dropdown Menu
// import Modal from '../components/ui/dialog'; // Use Dialog for Modal
// import List from '../components/ui/item-list'; // Use Item List for List
// import Avatar from '../components/ui/avatar'; // Avatar component
// import Chart from '../components/ui/chart'; // Chart component
// import Form from '../components/ui/form'; // Form component
// import Switch from '../components/ui/switch'; // Switch component
// import Alert from '../components/ui/alert'; // Alert component
// import Badge from '../components/ui/badge'; // Badge component
// import Pagination from '../components/ui/pagination'; // Pagination component

// const DashboardLayout: React.FC = () => {
//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <Sidebar className="w-64 bg-gray-800 text-white">
//                 <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//                 <nav>
//                     <ul>
//                         <li>
//                             <a href="#dashboard" className="flex items-center py-2 px-4 hover:bg-gray-700">
//                                 <i className="shadcn-icon shadcn-dashboard mr-2"></i> Dashboard
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#orders" className="flex items-center py-2 px-4 hover:bg-gray-700">
//                                 <i className="shadcn-icon shadcn-orders mr-2"></i> Orders
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#products" className="flex items-center py-2 px-4 hover:bg-gray-700">
//                                 <i className="shadcn-icon shadcn-products mr-2"></i> Products
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#customers" className="flex items-center py-2 px-4 hover:bg-gray-700">
//                                 <i className="shadcn-icon shadcn-customers mr-2"></i> Customers
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#analytics" className="flex items-center py-2 px-4 hover:bg-gray-700">
//                                 <i className="shadcn-icon shadcn-analytics mr-2"></i> Analytics
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#settings" className="flex items-center py-2 px-4 hover:bg-gray-700">
//                                 <i className="shadcn-icon shadcn-settings mr-2"></i> Settings
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//             </Sidebar>

//             {/* Main Content */}
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 {/* Navbar */}
//                 <Navbar className="bg-white shadow-md p-4">
//                     <div className="flex items-center justify-between">
//                         <div className="text-2xl font-bold">Logo</div>
//                         <div className="flex items-center space-x-4">
//                             <input type="text" placeholder="Search" className="border p-2 rounded" />
//                             <button className="shadcn-button">Notifications</button>
//                             <button className="shadcn-button">Settings</button>
//                             <button className="shadcn-button">Logout</button>
//                         </div>
//                     </div>
//                 </Navbar>

//                 {/* Content Area */}
//                 <Container className="flex-1 overflow-auto p-4">
//                     <Grid className="gap-4">
//                         {/* Overview Section */}
//                         <Card className="p-4">
//                             <h3 className="text-xl font-bold">Overview</h3>
//                             {/* Add overview components here */}
//                         </Card>

//                         {/* Orders Section */}
//                         <Card className="p-4">
//                             <h3 className="text-xl font-bold">Orders</h3>
//                             <Table>
//                                 {/* Add order table here */}
//                             </Table>
//                         </Card>

//                         {/* Products Section */}
//                         <Card className="p-4">
//                             <h3 className="text-xl font-bold">Products</h3>
//                             <Grid className="gap-4">
//                                 {/* Add product grid here */}
//                             </Grid>
//                         </Card>

//                         {/* Customers Section */}
//                         <Card className="p-4">
//                             <h3 className="text-xl font-bold">Customers</h3>
//                             <List>
//                                 {/* Add customer list here */}
//                             </List>
//                         </Card>

//                         {/* Analytics Section */}
//                         <Card className="p-4">
//                             <h3 className="text-xl font-bold">Analytics</h3>
//                             <Chart>
//                                 {/* Add chart here */}
//                             </Chart>
//                         </Card>

//                         {/* Settings Section */}
//                         <Card className="p-4">
//                             <h3 className="text-xl font-bold">Settings</h3>
//                             <Form>
//                                 {/* Add settings form here */}
//                             </Form>
//                         </Card>
//                     </Grid>
//                 </Container>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;