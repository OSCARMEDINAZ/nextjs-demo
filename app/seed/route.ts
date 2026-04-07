import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { invoices, customers, revenue, users, items } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

/* new table for items -- category_id Pensado para relacionar con una tabla 'categories' */
async function seedInventoryItems() {
  //await sql`DELETE EXTENSION IF EXISTS "uuid-ossp";`; // Ensure the extension is dropped before creating it again
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  //await sql`DROP TABLE IF EXISTS inventory_items;`; // Drop the table if it exists to ensure a clean slate
  await sql`
    CREATE TABLE IF NOT EXISTS inventory_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    category_id INT, 
    description TEXT,
    attributes JSONB, 
    stock_quantity INT NOT NULL DEFAULT 0,
    min_stock_level INT NOT NULL DEFAULT 0,
    unit_cost NUMERIC(10, 2),
    retail_price NUMERIC(10, 2),
    location VARCHAR(100),
    status VARCHAR(50) DEFAULT 'available',
    img VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
  `;

  await sql`DELETE FROM inventory_items;`; // Clear existing data before seeding
  const insertedInventoryItems = await Promise.all(
    items.map(async (item) => {
      return sql`
        INSERT INTO inventory_items (id, sku, name, category_id, description, attributes, stock_quantity, min_stock_level, unit_cost, retail_price, location, status, img)
        VALUES (${item.id}, ${item.sku}, ${item.name}, ${item.category_id}, ${item.description}, ${JSON.stringify(item.attributes)}, ${item.stock_quantity}, ${item.min_stock_level}, ${item.unit_cost}, ${item.retail_price}, ${item.location}, ${item.status}, ${item.img})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  ).catch((error) => {
    console.error('Error seeding inventory items:', error);
    throw new Error('Failed to seed inventory items.');
  });

  return insertedInventoryItems;
}
  

/*async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}
  */

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedInventoryItems(),
      //seedUsers(),
      //seedCustomers(),
      //seedInvoices(),
      //seedRevenue(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
