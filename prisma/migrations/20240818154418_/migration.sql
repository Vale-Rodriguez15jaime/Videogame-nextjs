/*
  Warnings:

  - Added the required column `name` to the `Monster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Monster" ADD COLUMN     "name" TEXT NOT NULL;
