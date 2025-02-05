/*
  Warnings:

  - You are about to drop the column `breed` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `breed_id` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "breed",
ADD COLUMN     "breed_id" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Breed";

-- CreateTable
CREATE TABLE "Breed" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "Breed_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Breed"("id") ON DELETE SET NULL ON UPDATE CASCADE;
