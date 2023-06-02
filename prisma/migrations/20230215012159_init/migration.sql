BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Agencia] (
    [id_ag] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Agencia_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Agencia_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [nome_banco] VARCHAR(20) NOT NULL,
    [numero_ag] VARCHAR(15) NOT NULL,
    [nome_ag] VARCHAR(100) NOT NULL,
    [end_ip] VARCHAR(15) NOT NULL,
    [porta] VARCHAR(10) NOT NULL,
    [masc_rede] VARCHAR(15) NOT NULL,
    [end_dns] VARCHAR(15) NOT NULL,
    [gateway] VARCHAR(15) NOT NULL,
    [ipfixo_dhcp] VARCHAR(10) NOT NULL,
    [mac_adress] VARCHAR(20) NOT NULL,
    CONSTRAINT [Agencia_pkey] PRIMARY KEY CLUSTERED ([id_ag]),
    CONSTRAINT [Agencia_numero_ag_key] UNIQUE NONCLUSTERED ([numero_ag]),
    CONSTRAINT [Agencia_end_ip_key] UNIQUE NONCLUSTERED ([end_ip]),
    CONSTRAINT [Agencia_mac_adress_key] UNIQUE NONCLUSTERED ([mac_adress])
);

-- CreateTable
CREATE TABLE [dbo].[Colaboradores] (
    [id_colab] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Colaboradores_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Colaboradores_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [nr_agencia] VARCHAR(15) NOT NULL,
    [nome] VARCHAR(100) NOT NULL,
    [nr_matricula] VARCHAR(10) NOT NULL,
    [senha] VARCHAR(255) NOT NULL,
    CONSTRAINT [Colaboradores_pkey] PRIMARY KEY CLUSTERED ([id_colab]),
    CONSTRAINT [Colaboradores_nr_matricula_key] UNIQUE NONCLUSTERED ([nr_matricula])
);

-- CreateTable
CREATE TABLE [dbo].[Descricao_comando] (
    [id_comando] INT NOT NULL IDENTITY(1,1),
    [cod_comando] VARCHAR(10) NOT NULL,
    [desc_comando] VARCHAR(50) NOT NULL,
    CONSTRAINT [Descricao_comando_pkey] PRIMARY KEY CLUSTERED ([id_comando]),
    CONSTRAINT [Descricao_comando_cod_comando_key] UNIQUE NONCLUSTERED ([cod_comando])
);

-- CreateTable
CREATE TABLE [dbo].[Controle_acesso] (
    [id_evt] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Controle_acesso_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Controle_acesso_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [data_evt] VARCHAR(10) NOT NULL,
    [hora_evt] VARCHAR(10) NOT NULL,
    [usuario] VARCHAR(10) NOT NULL,
    [cod_comando] VARCHAR(10) NOT NULL,
    [comando] VARCHAR(10) NOT NULL,
    [valor] VARCHAR(20) NOT NULL,
    [ip_logado] VARCHAR(15) NOT NULL,
    [porta] VARCHAR(10) NOT NULL,
    [mac_adress] VARCHAR(20) NOT NULL,
    [resposta] VARCHAR(10) NOT NULL,
    CONSTRAINT [Controle_acesso_pkey] PRIMARY KEY CLUSTERED ([id_evt])
);

-- AddForeignKey
ALTER TABLE [dbo].[Colaboradores] ADD CONSTRAINT [Colaboradores_nr_agencia_fkey] FOREIGN KEY ([nr_agencia]) REFERENCES [dbo].[Agencia]([numero_ag]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Controle_acesso] ADD CONSTRAINT [Controle_acesso_mac_adress_fkey] FOREIGN KEY ([mac_adress]) REFERENCES [dbo].[Agencia]([mac_adress]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Controle_acesso] ADD CONSTRAINT [Controle_acesso_cod_comando_fkey] FOREIGN KEY ([cod_comando]) REFERENCES [dbo].[Descricao_comando]([cod_comando]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Controle_acesso] ADD CONSTRAINT [Controle_acesso_usuario_fkey] FOREIGN KEY ([usuario]) REFERENCES [dbo].[Colaboradores]([nr_matricula]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
