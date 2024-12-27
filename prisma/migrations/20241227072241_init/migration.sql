-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'VETERINARIAN', 'FARMER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Breed" AS ENUM ('MEAT', 'MILK');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('WEAK', 'MEDIUM', 'STRONG');

-- CreateEnum
CREATE TYPE "ObesityType" AS ENUM ('HIGH', 'MEDIUM', 'LOW', 'LEAN', 'CACHEXIA');

-- CreateEnum
CREATE TYPE "BodyStructure" AS ENUM ('COARSE', 'SLIM', 'DENSE', 'WEAK');

-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('MOBILE', 'CALM');

-- CreateEnum
CREATE TYPE "InspectionType" AS ENUM ('MORNING', 'EVENING', 'DISEASE', 'GENERAL');

-- CreateEnum
CREATE TYPE "SmellType" AS ENUM ('PUNGENT', 'WEAK', 'HAS', 'NO');

-- CreateEnum
CREATE TYPE "DungForm" AS ENUM ('NORMAL', 'SOLID', 'LIQUID', 'MEDIUM');

-- CreateEnum
CREATE TYPE "UrineClarity" AS ENUM ('CLEAR', 'NOT_CLEAR');

-- CreateEnum
CREATE TYPE "DungClarity" AS ENUM ('CLEAR', 'NOT_CLEAR');

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "id_code" TEXT NOT NULL,
    "arrival_date" TIMESTAMP(3) NOT NULL,
    "farmer_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "breed" "Breed" NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "color_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaccine" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type_id" INTEGER NOT NULL,
    "animalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vaccine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralInspection" (
    "id" SERIAL NOT NULL,
    "animal_id" INTEGER NOT NULL,
    "body_type" "BodyType" NOT NULL,
    "body_structure" "BodyStructure" NOT NULL,
    "obesity" "ObesityType" NOT NULL,
    "customer_type" "CustomerType" NOT NULL,
    "color_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralInspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" SERIAL NOT NULL,
    "animal_id" INTEGER,
    "disease_id" INTEGER,
    "general_inspection_id" INTEGER,
    "temperature" DOUBLE PRECISION,
    "pulse" INTEGER,
    "respiratory_rate" DOUBLE PRECISION,
    "rumination" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "id" SERIAL NOT NULL,
    "animal_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "conclusion" TEXT NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralBloodTest" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "conclusion" TEXT,
    "erythrocyte_count" DOUBLE PRECISION,
    "leukocyte_count" DOUBLE PRECISION,
    "thrombocyte_count" DOUBLE PRECISION,
    "coe" DOUBLE PRECISION,
    "water_percentage" DOUBLE PRECISION,
    "dry_residue_percentage" DOUBLE PRECISION,
    "hemoglobin" DOUBLE PRECISION,
    "glutathione" DOUBLE PRECISION,
    "animal_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralBloodTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodSerumTest" (
    "id" SERIAL NOT NULL,
    "total_protein" DOUBLE PRECISION,
    "total_calcium" DOUBLE PRECISION,
    "organic_phosphorus" DOUBLE PRECISION,
    "albumen" DOUBLE PRECISION,
    "alpha_globulin" DOUBLE PRECISION,
    "beta_globulin" DOUBLE PRECISION,
    "gamma_globulin" DOUBLE PRECISION,
    "creatine" DOUBLE PRECISION,
    "alkaline_reserve" DOUBLE PRECISION,
    "glucose" DOUBLE PRECISION,
    "total_bilirubin" DOUBLE PRECISION,
    "cholesterol" DOUBLE PRECISION,
    "total_lipids" DOUBLE PRECISION,
    "vitamin_a" DOUBLE PRECISION,
    "vitamin_b" DOUBLE PRECISION,
    "lactic_acid" DOUBLE PRECISION,
    "pyruvic_acid" DOUBLE PRECISION,
    "citric_acid" DOUBLE PRECISION,
    "urea" DOUBLE PRECISION,
    "urea_acid" DOUBLE PRECISION,
    "animal_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodSerumTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UrineTest" (
    "id" SERIAL NOT NULL,
    "animal_id" INTEGER,
    "disease_id" INTEGER,
    "color_id" INTEGER NOT NULL,
    "clarity" "UrineClarity" NOT NULL,
    "consistency" INTEGER NOT NULL,
    "smell" "SmellType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UrineTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DungTest" (
    "id" SERIAL NOT NULL,
    "animal_id" INTEGER,
    "disease_id" INTEGER,
    "color_id" INTEGER NOT NULL,
    "clarity" "DungClarity" NOT NULL,
    "smell" "SmellType" NOT NULL,
    "form" "DungForm" NOT NULL,
    "consistency" INTEGER NOT NULL,
    "worms" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DungTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VetStation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VetStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AnimalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hex" TEXT,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UrineColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UrineColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DungColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DungColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaccineType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "VaccineType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseaseType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DiseaseType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "gender" "Gender",
    "birth_date" TIMESTAMP(3),
    "district_id" INTEGER NOT NULL,
    "address" TEXT,
    "role" "UserRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veterinarian" (
    "user_ptr_id" SERIAL NOT NULL,

    CONSTRAINT "Veterinarian_pkey" PRIMARY KEY ("user_ptr_id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "user_ptr_id" SERIAL NOT NULL,
    "veterinarian_id" INTEGER NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("user_ptr_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animal_id_code_key" ON "Animal"("id_code");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarian_user_ptr_id_key" ON "Veterinarian"("user_ptr_id");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_user_ptr_id_key" ON "Farmer"("user_ptr_id");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "Farmer"("user_ptr_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "AnimalType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "VaccineType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInspection" ADD CONSTRAINT "GeneralInspection_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInspection" ADD CONSTRAINT "GeneralInspection_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_general_inspection_id_fkey" FOREIGN KEY ("general_inspection_id") REFERENCES "GeneralInspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disease" ADD CONSTRAINT "Disease_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disease" ADD CONSTRAINT "Disease_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "DiseaseType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralBloodTest" ADD CONSTRAINT "GeneralBloodTest_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodSerumTest" ADD CONSTRAINT "BloodSerumTest_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "UrineColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DungTest" ADD CONSTRAINT "DungTest_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DungTest" ADD CONSTRAINT "DungTest_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DungTest" ADD CONSTRAINT "DungTest_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "DungColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetStation" ADD CONSTRAINT "VetStation_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veterinarian" ADD CONSTRAINT "Veterinarian_user_ptr_id_fkey" FOREIGN KEY ("user_ptr_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_user_ptr_id_fkey" FOREIGN KEY ("user_ptr_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_veterinarian_id_fkey" FOREIGN KEY ("veterinarian_id") REFERENCES "Veterinarian"("user_ptr_id") ON DELETE RESTRICT ON UPDATE CASCADE;
