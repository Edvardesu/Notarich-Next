import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Read the JSON file
  const menuItemsPath = path.join(__dirname, "menuItems.json");
  const menuItemsData = fs.readFileSync(menuItemsPath, "utf-8");
  const { menuItems } = JSON.parse(menuItemsData);

  // Iterate over each menu item and insert into the database
  for (const item of menuItems) {
    await prisma.product.create({
      data: {
        title: item.name,
        desc: item.description,
        price: parseFloat(item.price.replace("K", "000")), // Convert "24K" to "24000"
        img: item.image,
        category: {
          connectOrCreate: {
            // where: { title: item.category },
            where: { title: item.category },
            create: {
              title: item.category,
              desc: `${item.category} description`, // You can customize the description
              color: "#ffffff", // Set a default color or customize it
              img: "", // Optionally set a default image
              slug: item.category.toLowerCase().replace(/\s+/g, "-"),
            },
          },
        },
        options: [], // Add default options if any
        isFeatured: false, // Customize if you want featured items
      },
    });
  }

  console.log("Seeding completed.");
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
