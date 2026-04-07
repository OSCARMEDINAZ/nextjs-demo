import { table } from 'console';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
 	const data = await sql`
     SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
   `;

 	return data;
}

async function listTables() {
 	const data = await sql`
     SELECT table_name
     FROM information_schema.tables
     WHERE table_schema = 'public';
   `;

 	return data;
}

async function getTableInventory_items() {
 	const data = await sql`
     SELECT *
     FROM inventory_items;
   `;

 	return data;
}

export async function GET() {
  //return Response.json({
  //  message:
  //    'Uncomment this file and remove this line. You can delete this file when you are finished.',
  //});
   try {
    const data = {tables: await listTables(), inventory_items: await getTableInventory_items() };
   	return Response.json(data); 
   	//return Response.json(await getTableInventory_items()); 
   	//return Response.json(await listInvoices());
   } catch (error) {
   	return Response.json({ error }, { status: 500 });
   }
}
