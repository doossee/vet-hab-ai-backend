/*
  Warnings:

  - A unique constraint covering the columns `[general_inspection_id]` on the table `Inspection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inspection_general_inspection_id_key" ON "Inspection"("general_inspection_id");
