/*
  Warnings:

  - You are about to drop the `Colaboradores` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[end_ip]` on the table `Controle_acesso` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mac_adress]` on the table `Controle_acesso` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `end_ip` to the `Controle_acesso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mac_adress` to the `Controle_acesso` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Colaboradores] DROP CONSTRAINT [Colaboradores_nr_agencia_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Controle_acesso] DROP CONSTRAINT [Controle_acesso_usuario_fkey];

-- AlterTable
ALTER TABLE [dbo].[Controle_acesso] ALTER COLUMN [comando] VARCHAR(100) NOT NULL;
ALTER TABLE [dbo].[Controle_acesso] ADD [end_ip] VARCHAR(15) NOT NULL,
[mac_adress] VARCHAR(20) NOT NULL;

-- DropTable
DROP TABLE [dbo].[Colaboradores];

-- CreateIndex
ALTER TABLE [dbo].[Controle_acesso] ADD CONSTRAINT [Controle_acesso_end_ip_key] UNIQUE NONCLUSTERED ([end_ip]);

-- CreateIndex
ALTER TABLE [dbo].[Controle_acesso] ADD CONSTRAINT [Controle_acesso_mac_adress_key] UNIQUE NONCLUSTERED ([mac_adress]);

-- AddForeignKey
ALTER TABLE [dbo].[Controle_acesso] ADD CONSTRAINT [Controle_acesso_mac_adress_fkey] FOREIGN KEY ([mac_adress]) REFERENCES [dbo].[Agencia]([mac_adress]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
