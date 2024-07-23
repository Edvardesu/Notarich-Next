/*
  Warnings:

  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "statusBooking" SET DEFAULT 'waiting';

-- AlterTable
ALTER TABLE "Kursi" ALTER COLUMN "statusKursi" SET DEFAULT 'available';

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "statusOrder" TEXT NOT NULL DEFAULT 'waiting';

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "statusProd" TEXT NOT NULL DEFAULT 'available';
