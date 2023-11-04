/*
    Context: 
        - So far we have used or seen applications that use variables and references to store the data.
        - these data will not persist after the application is closed or restarted.
        - These data does not persist as it is stored in the RAM memory. (RAM - Random Access Memory, Volatile memory)
        - To persist the data, we need to store it in a non-volatile memory. (Hard disk, SSD, etc)
        - In that case, either we can store the data in a file or in a database.
    
    Database:
        - There are two types of databases: SQL and NoSQL
            - SQL: Structured Query Language (SQL databases are called Relational Databases or Structured Databases)
            - NoSQL: Not only SQL (NoSQL databases are called Non-Relational Databases or Unstructured Databases)
    
        - Definition: A database is a collection of information that is organized so that it can be easily accessed, managed and updated.
        - SQL databases: They are collection of tables. The tables are in the form of rows and columns. 
        - SQL : Structured Query Language - is used to manage the data in the database.
    
    MySQL Engines:
        - mysql: It is the default storage engine. It is a transaction-safe engine with row-level locking.
        - InnoDB: It is a transaction-safe engine with support for foreign keys and row-level locking.
        - MariaDB: It is a fork of MySQL with added features, performance improvements and bug fixes.

    char vs varchar:
        - char is fixed length and varchar is variable length.
        - char uses static memory allocation and varchar uses dynamic memory allocation.

    SQL: Structured Query Language

    1. DDL: Data Definition Language
        a. CREATE: To create a database or table

            - create a database
                query: create database <database_name>;
            - select a database
                query: use <database_name>;
            - view the current database
                query: select database();
            - view the list of tables in the current database
                query: show tables;
            - create a table
                query: create table <table_name> (<column_name> <data_type> <constraint>, <column_name> <data_type> <constraint>, ...);
            - view the structure of the table
                query: describe <table_name>; or desc <table_name>;
            
            Exercise: 
                Create a database called "mydb" and create a table called "students" with the following columns:
                    - id: int, primary key, auto_increment
                    - name: varchar(255), not null
                    - age: int, not null
                    - email: varchar(255), not null, unique
                    - phone: varchar(255), not null, unique
                    - address: varchar(255), not null

        b. ALTER: To alter the structure of the table
            example: alter table <table_name> modify <column_name> <data_type> <constraint>;

        c. DROP: To delete a database or table

            to delete a table:
                query: drop table <table_name>;


        d. TRUNCATE: To delete all the records in the table

                query: truncate table <table_name>;

        e. RENAME: To rename a table
                    
                query: rename table <old_table_name> to <new_table_name>;

    2. DML: Data Manipulation Language
        a. INSERT: To insert a new record
        b. UPDATE: To update an existing record
        c. DELETE: To delete an existing record

    3. DQL: Data Query Language
        a. SELECT: To fetch data from the database
        
    4. TCL: Transaction Control Language
        a. COMMIT: To save the changes
        b. ROLLBACK: To undo the changes
        c. SAVEPOINT: To save temporarily
        d. SET TRANSACTION: To specify the characteristics of the transaction
*/