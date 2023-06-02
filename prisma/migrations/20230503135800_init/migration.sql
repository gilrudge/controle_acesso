/*
  Warnings:

  - You are about to drop the column `cod_comando` on the `Controle_acesso` table. All the data in the column will be lost.
  - You are about to drop the column `ip_logado` on the `Controle_acesso` table. All the data in the column will be lost.
  - You are about to drop the column `mac_adress` on the `Controle_acesso` table. All the data in the column will be lost.
  - You are about to drop the column `porta` on the `Controle_acesso` table. All the data in the column will be lost.
  - You are about to drop the column `resposta` on the `Controle_acesso` table. All the data in the column will be lost.
  - You are about to drop the `Descricao_comando` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Controle_acesso] DROP CONSTRAINT [Controle_acesso_cod_comando_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Controle_acesso] DROP CONSTRAINT [Controle_acesso_mac_adress_fkey];

-- AlterTable
ALTER TABLE [dbo].[Controle_acesso] DROP COLUMN [cod_comando],
[ip_logado],
[mac_adress],
[porta],
[resposta];

-- DropTable
DROP TABLE [dbo].[Descricao_comando];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
