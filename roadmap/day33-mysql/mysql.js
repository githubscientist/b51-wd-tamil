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

        - create a database called nycflights13.

        query: create database nycflights13;
    
        - create a table called flights with the following columns:
            - year: int, not null
            - month: int, not null
            - day: int, not null
            - dep_time: int, not null
            - sched_dep_time: int, not null
            - dep_delay: int, not null
            - arr_time: int, not null
            - sched_arr_time: int, not null
            - arr_delay: int, not null
            - carrier: varchar(255), not null
            - flight: int, not null
            - tailnum: varchar(255), not null
        
        query: create table flights (year int not null, month int not null, day int not null, dep_time int not null, sched_dep_time int not null, dep_delay int not null, arr_time int not null, sched_arr_time int not null, arr_delay int not null, carrier varchar(255) not null, flight int not null, tailnum varchar(255) not null);
        
        - insert the following records into the table:
            1. 2013, 1, 1, 517, 515, 2, 830, 819, 11, "UA", 1545, "N14228"
            2. 2013, 1, 1, 533, 529, 4, 850, 830, 20, "UA", 1714, "N24211"
            3. 2013, 1, 1, 542, 540, 2, 923, 850, 33, "AA", 1141, "N619AA"
            4. 2013, 1, 1, 544, 545, -1, 1004, 1022, -18, "B6", 725, "N804JB"
            5. 2013, 1, 1, 554, 600, -6, 812, 837, -25, "DL", 461, "N668DN"
            6. 2013, 1, 1, 554, 558, -4, 740, 728, 12, "UA", 1696, "N39463"

            query: insert into flights values 
            (2013, 1, 1, 517, 515, 2, 830, 819, 11, "UA", 1545, "N14228"),
            (2013, 1, 1, 533, 529, 4, 850, 830, 20, "UA", 1714, "N24211"),
            (2013, 1, 1, 542, 540, 2, 923, 850, 33, "AA", 1141, "N619AA"),
            (2013, 1, 1, 544, 545, -1, 1004, 1022, -18, "B6", 725, "N804JB"),
            (2013, 1, 1, 554, 600, -6, 812, 837, -25, "DL", 461, "N668DN"),
            (2013, 1, 1, 554, 558, -4, 740, 728, 12, "UA", 1696, "N39463");

            Syntax:

            insert into <table_name> values (<value1>, <value2>, ...);

        
        b. UPDATE: To update an existing record
        c. DELETE: To delete an existing record

    3. DQL: Data Query Language
        a. SELECT: To fetch data from the database

        - view all the records of the table

        query: select * from flights;

        - view all the records of all the columns of the table

        query: select * from flights;

        - view all the records of the selected columns of the table

        query: select <column_name1>, <column_name2>, ... from flights;

        example: select flight, sched_dep_time, sched_arr_time, dep_delay from flights;

        - from payments table of classicmodels database, select the payments made after "2005-01-01".

        query: select * from payments where paymentDate >= "2005-01-01";

        - from payments table, select the payments made with amount greater than 50000.

        query: select * from payments where amount > 50000;

        - from payments table, select the payments made after "2005-01-01" with amount greater than 50000.

        query: select * from payments where paymentDate >= "2005-01-01" and amount > 50000;

        - from customer table, list all the countryies.

        query: select country from customers;

        - from customers table, list the unique country names.

        query: select distinct(country) from customers;

        - from payments table, select the minimum payment made.

        query: select min(amount) from payments;

        - select all the columns from payments table where the amount is minimum.
    
        query: select * from payments where amount = (select min(amount) from payments);

              select * from payments where amount = 615.45;

        - from payments table, select the maximum payment made.

        query: select max(amount) from payments;

        - select all the columns from payments table where the amount is maximum.

        query: select * from payments where amount = (select max(amount) from payments);

                select * from payments where amount = 120166.58;
        
        - select the totalAmount from payments table grouped by customerNumber.

        query: select customerNumber, sum(amount) as totalAmount from payments group by customerNumber;

        - select the totalAmount from payments table grouped by year

        query: select year(paymentDate) as year, sum(amount) as totalAmount from payments group by year;

        - select the totalAmount from payments table grouped by customerNumber.

        query: select customerNumber, sum(amount) as totalAmount from payments group by customerNumber;

        - from the above query, arrange the results in descending order of totalAmount.

        query: select customerNumber, sum(amount) as totalAmount from payments group by customerNumber order by totalAmount desc;

        - from the above query, select the top 3 customers with highest totalAmount.

        query: select customerNumber, sum(amount) as totalAmount from payments group by customerNumber order by totalAmount desc limit 3;

        - from the same result, select the second top 3 customers with highest totalAmount.

        query: select customerNumber, sum(amount) as totalAmount from payments group by customerNumber order by totalAmount desc limit 3 offset 3;


        
    4. TCL: Transaction Control Language
        a. COMMIT: To save the changes
        b. ROLLBACK: To undo the changes
        c. SAVEPOINT: To save temporarily
        d. SET TRANSACTION: To specify the characteristics of the transaction
*/

/*
    Joins:
        - Joins are used to combine the data from two or more tables.
        - There are different types of joins:
            - Inner Join

            example: 

            - from classicmodels database, payments table: do the following;

            select customerNumber, sum(amount) as totalAmount from payments group by customerNumber order by totalAmount desc limit 10;

            - now create a table from the above query

            create table top10 as select customerNumber, sum(amount) as totalAmount from payments group by customerNumber order by totalAmount desc limit 10;

            - join the top10 table with customers table to get the customer details.

            select t.customerNumber, c.customerName, c.phone, c.country, t.totalAmount from top10 t inner join customers c on t.customerNumber = c.customerNumber;

            - select and show the customer details whose customerNumber is 146;

            select * from customers where customerNumber = 146;

            - delete the customer with customerNumber 146 from customers table.

            delete from customers where customerNumber = 146;

            - now join the top10 table with customers table to get the customer details.

            select t.customerNumber, c.customerName, c.phone, c.country, t.totalAmount from top10 t inner join customers c on t.customerNumber = c.customerNumber;

            - Left Join

            select t.customerNumber, c.customerName, c.phone, c.country, t.totalAmount from top10 t left join customers c on t.customerNumber = c.customerNumber;

            - Right Join

            select t.customerNumber, c.customerName, c.phone, c.country, t.totalAmount from top10 t right join customers c on t.customerNumber = c.customerNumber;
    
    Example Exercise to practice Joins:

    1. Create a database called "mydb" and create a table called "students" with the following columns:
        - id: int, primary key, auto_increment
        - name: varchar(255), not null
        - age: int, not null
        - email: varchar(255), not null, unique
        - phone: varchar(255), not null, unique
        - address: varchar(255), not null

    2. create a table called "courses" with the following columns:

        - id: int, primary key, auto_increment
        - name: varchar(255), not null
        - duration: int, not null
        - fees: int, not null

    3. insert the following records into the table "students":
        1, "John", 25, "john@abc.com", "1234567890", "123, abc street, xyz city, 12345"
        2, "Smith", 26, "smith@abc.com", "1234567891", "124, abc street, xyz city, 12345"
        3, "Mary", 27, "mary@abc.com", "1234567892", "125, abc street, xyz city, 12345"
        4, "Tom", 28, "tom@abc.com", "1234567893", "126, abc street, xyz city, 12345"
        5, "Jerry", 29, "jerry@abc.com", "1234567894", "127, abc street, xyz city, 12345"
        6, "Peter", 30, "peter@abc.com", "1234567895", "128, abc street, xyz city, 12345"

    4. insert the following records into the table "courses":

        1, "Java", 3, 3000
        2, "Python", 3, 3000
        3, "JavaScript", 3, 3000
        4, "React", 3, 3000
        5, "Angular", 3, 3000
        6, "Node", 3, 3000

    5. Create a table called "student_courses" with the following columns:

        - id: int, primary key, auto_increment
        - student_id: int, foreign key references students(id)
        - course_id: int, foreign key references courses(id)

    6. insert the following records into the table "student_courses":

        1, 1, 1
        2, 1, 2
        3, 1, 3
        4, 2, 1
        5, 2, 2

    7. Write a query to select all the students who have enrolled for the course "Java".

        select s.* from students s inner join student_courses sc on s.id = sc.student_id inner join courses c on sc.course_id = c.id where c.name = "Java";
*/

/*
    Database Model Design for an Online Bookstore.

    - the bookstore sells books and each book can belong to multiple genres.
    - customers can place orders and each order can contain multiple books
    - each customer can have multiple addresses
    - an address can be associated with multiple customers
    - each book has multiple authors
    - an author can write multiple books

    List of tables:

    1. books
    2. genres
    3. books_genres
    4. customers
    5. addresses
    6. customers_addresses
    7. authors
    8. books_authors
    9. orders
    10. orders_books
    11. customers_orders


    list of tables and columns:

    1. books
        - id: int, primary key, auto_increment
        - title: varchar(255), not null
        - description: text
        - price: int, not null
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    2. genres
        - id: int, primary key, auto_increment
        - name: varchar(255), not null
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    3. books_genres
        - id: int, primary key, auto_increment
        - book_id: int, foreign key references books(id)
        - genre_id: int, foreign key references genres(id)
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    4. customers
        - id: int, primary key, auto_increment
        - first_name: varchar(255), not null
        - last_name: varchar(255), not null
        - email: varchar(255), not null, unique
        - phone: varchar(255), not null, unique
        - password: varchar(255), not null
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    5. addresses
        - id: int, primary key, auto_increment
        - address: text, not null
        - city: varchar(255), not null
        - state: varchar(255), not null
        - country: varchar(255), not null
        - pincode: varchar(255), not null
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    6. customers_addresses
        - id: int, primary key, auto_increment
        - customer_id: int, foreign key references customers(id)
        - address_id: int, foreign key references addresses(id)
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    7. authors
        - id: int, primary key, auto_increment
        - first_name: varchar(255), not null
        - last_name: varchar(255), not null
        - email: varchar(255), not null, unique
        - phone: varchar(255), not null, unique
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    8. books_authors
        - id: int, primary key, auto_increment
        - book_id: int, foreign key references books(id)
        - author_id: int, foreign key references authors(id)
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    9. orders
        - id: int, primary key, auto_increment
        - customer_id: int, foreign key references customers(id)
        - created_at: datetime, not null
        - updated_at: datetime, not null

    10. orders_books
        - id: int, primary key, auto_increment
        - order_id: int, foreign key references orders(id)
        - book_id: int, foreign key references books(id)
        - quantity: int, not null
        - price: int, not null
        - created_at: datetime, not null
        - updated_at: datetime, not null
    
    11. customers_orders
        - id: int, primary key, auto_increment
        - customer_id: int, foreign key references customers(id)
        - order_id: int, foreign key references orders(id)
        - created_at: datetime, not null
        - updated_at: datetime, not null

*/

/*
    Foreign key while creating a table:

    example: create table <table_name> (<column_name> <data_type> <constraint>, <column_name> <data_type> <constraint>, ..., foreign key (<column_name>) references <table_name>(<column_name>));

    after creating a table:

    example: alter table <table_name> add foreign key (<column_name>) references <table_name>(<column_name>);
*/