Data Migration Assistant : 

Data Migration Assistant (DMA) enables you to upgrade to a modern data platform by detecting compatibility issues that can impact database functionality on your new version of SQL Server. It recommends performance and reliability improvements for your target environment. It allows you to not only move your schema and data, but also uncontained objects from your source server to your target server.
1. عمل مايجريشن بين داتا بيز او سيرفر و سيرفر تاني بحيث يتم انشاء جداول وكافة الاوبجكت في الداتا بيز " يمكن ان يكون في سيرفر تاني " 

2. عمل مايجريشن ل داتا بيز ل جداول معينة بشكل يدوي من خلال Generate Script 

3. Sql Server Import & Export Wizard 
    -> Copy data from one or more tables and view   : DO
    -> write Query to specify the data to transfer

4. SQL Server Integration Services SSIS 
Tools like SQL Server Integration Services (SSIS) can be used to define and automate data migration tasks.

SQL Server Integration Services (SSIS) is a powerful ETL (Extract, Transform, Load) tool provided by Microsoft as part of the SQL Server suite. It allows you to perform a wide range of data integration and transformation tasks, making it well-suited for data migration scenarios. Here are some of the things you can do with SQL Server Integration Services:

Data Extraction (Source):

Connect to various data sources, including SQL Server, Excel, flat files, and more.
Use SSIS components to extract data from source systems.
Data Transformation:
    
Perform complex data transformations using built-in SSIS transformations or custom scripts.
Cleanse and validate data during the transformation process.
Handle data type conversions, column mapping, and other transformations.
Data Loading (Destination):

Load data into various destinations, such as SQL Server databases, Excel files, flat files, and more.
Utilize bulk load operations for efficient data loading.
Incremental Data Loading:

Implement incremental data loading to update only the changed or new records since the last migration.