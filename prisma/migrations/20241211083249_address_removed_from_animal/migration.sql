/*
  Warnings:

  - You are about to drop the column `address` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "address",
DROP COLUMN "age",
ADD COLUMN     "birthDate" INTEGER NOT NULL;
