/*
  Warnings:

  - You are about to drop the column `payment_intent_id` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[paymentIntentID]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Order_payment_intent_id_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "payment_intent_id",
ADD COLUMN     "paymentIntentID" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Order_paymentIntentID_key" ON "Order"("paymentIntentID");
