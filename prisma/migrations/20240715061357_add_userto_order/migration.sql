/*
  Warnings:

  - You are about to drop the column `intent_ID` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[intent_id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Order_intent_ID_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "intent_ID",
ADD COLUMN     "intent_id" TEXT,
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_intent_id_key" ON "Order"("intent_id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
