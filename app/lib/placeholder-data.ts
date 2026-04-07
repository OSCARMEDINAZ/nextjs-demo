// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
function generateUUID() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const items = [
 {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    sku: 'SKU-001',
    name: 'Acme Anvil',
    category_id: 1,
    description: 'A heavy anvil for smithing',
    attributes: { weight: 10, material: 'iron' },
    stock_quantity: 100,
    min_stock_level: 10,
    unit_cost: 50.00,
    retail_price: 75.00,
    location: 'Warehouse A',
    status: 'available',
    img: '/inventory-items/acme-anvil.png'
  },
  {
    id: 'b1c2d3e4-f567-8901-2345-6789abcdef01',
    sku: 'SKU-002',
    name: 'Acme Hammer',
    category_id: 1,
    description: 'A sturdy hammer for construction',
    attributes: { weight: 5, material: 'steel' },
    stock_quantity: 200,
    min_stock_level: 20,
    unit_cost: 25.00,
    retail_price: 37.50,
    location: 'Warehouse B',
    status: 'available',
    img: '/inventory-items/acme-hammer.png'
  },
  {
    id: 'c2d3e4f5-6789-0123-4567-89abcdef0123',
    sku: 'SKU-003',
    name: 'Acme Saw',
    category_id: 1,
    description: 'A sharp saw for cutting wood',
    attributes: { weight: 3, material: 'steel' },
    stock_quantity: 150,
    min_stock_level: 15,
    unit_cost: 20.00,
    retail_price: 30.00,
    location: 'Warehouse C',
    status: 'available',
    img: '/inventory-items/acme-saw.png'
  },
  {
    id: 'd3e4f5a6-7890-1234-5678-9abcdef01234',
    sku: 'SKU-004',
    name: 'Acme Drill',
    category_id: 1,
    description: 'A powerful drill for construction',
    attributes: { weight: 8, material: 'steel' },
    stock_quantity: 100,
    min_stock_level: 10,
    unit_cost: 40.00,
    retail_price: 60.00,
    location: 'Warehouse D',
    status: 'available',
    img: '/inventory-items/acme-drill.png'
  },  
  {
    id: 'e4f5a6b7-8901-2345-6789-abcdef012345',
    sku: 'SKU-005',
    name: 'Acme Wrench',
    category_id: 1,
    description: 'A reliable wrench for tightening bolts',
    attributes: { weight: 2, material: 'steel' },
    stock_quantity: 300,
    min_stock_level: 30,
    unit_cost: 15.00,
    retail_price: 22.50,
    location: 'Warehouse E',
    status: 'available',
    img: '/inventory-items/acme-wrench.png'
  },
  {
    id: 'f5a6b7c8-9012-3456-7890-abcdef012345',
    sku: 'SKU-006',
    name: 'Acme Screwdriver',
    category_id: 1,
    description: 'A precise screwdriver for electronics',
    attributes: { weight: 1, material: 'steel' },
    stock_quantity: 250,
    min_stock_level: 25,
    unit_cost: 10.00,
    retail_price: 15.00,
    location: 'Warehouse F',
    status: 'available',
    img: '/inventory-items/acme-screwdriver.png'
  },
  {
    id: 'a6b7c8d9-0123-4567-8901-abcdef012340',
    sku: 'SKU-007',
    name: 'Acme Pliers',
    category_id: 1,
    description: 'A sturdy pair of pliers for gripping and cutting',
    attributes: { weight: 4, material: 'steel' },
    stock_quantity: 180,
    min_stock_level: 18,
    unit_cost: 20.00,
    retail_price: 30.00,
    location: 'Warehouse G',
    status: 'available',
    img: '/inventory-items/acme-pliers.png'
  },
  {
    id: 'b7c8d9e0-1234-5678-9012-abcdef012341',
    sku: 'SKU-008',
    name: 'Acme Level',
    category_id: 1,
    description: 'A precise level for construction and carpentry',  
    attributes: { weight: 3, material: 'plastic' },
    stock_quantity: 120,
    min_stock_level: 12,
    unit_cost: 15.00,
    retail_price: 22.50,
    location: 'Warehouse H',
    status: 'available',
    img: '/inventory-items/acme-level.png'
    },
].map((item) => ({ ...item, id: generateUUID() }));

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { items, users, customers, invoices, revenue };
